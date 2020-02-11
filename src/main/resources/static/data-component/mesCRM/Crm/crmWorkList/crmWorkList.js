/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var main_data = {
    check: 'I',
    supp_check: 'A',
    send_data: {},
    send_data_post: {},
    auth:{}

};

////////////////////////////시작 함수/////////////////////////////////
$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    datepickerInput();
    selectBox();
    suppModal_start();
    authcheck();
    jqgridPagerIcons();

    $(".table-responsive2").attr("style","margin-top: -20px;");
});



////////////////////////////클릭 함수////////////////////////////////
function get_btn(page) {
    modal_reset(".main_value", []);
    main_data.send_data = value_return2(".condition_main");
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data.keyword2 = main_data.send_data.keyword2.replace(/\-/g, '');
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: "/crmWorkListGet",
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/crmWorkListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function update_btn(rowid) {
    ccn_ajax('/crmWorkListOneGet', {ord_no: rowid}).then(function (data) {
        modal_edits(".main_value", [], data);
    });
}


function supp_btn(what) {
    main_data.supp_check = what;

    $("#SuppSearchGrid").jqGrid('clearGridData');
    $("#supp-search-dialog").dialog('open');
    $('#gubun_select option:eq(0)').prop("selected", true).trigger("change");
    $('#supp_code_search').val('').trigger("change");

    jqGridResize2("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
}

function add_btn() {
    if(main_data.auth.check_edit != "N") {
        var gu5 = String.fromCharCode(5);
        var ids = $("#mes_grid").getGridParam('selarrrow'); // 체크된 그리드 로우
        if (ids.length === 0) {
            alert("취소하는 데이터를 선택해주세요");
        } else {
            if (confirm("취소하겠습니까?")) {
                main_data.check = 'I';
                wrapWindowByMask2();
                ccn_ajax("/crmWorkListAdd", {keyword: ids.join(gu5)}).then(function (data) {
                    if (data.result === 'NG') {
                        alert(data.message);
                    } else {
                        get_btn_post($("#mes_grid").getGridParam('page'));
                    }
                    closeWindowByMask();
                }).catch(function (err) {
                    closeWindowByMask();
                    console.error(err); // Error 출력
                });
            }
        }
    } else {
        alert("수정권한이 없습니다.");
    }
}

////////////////////////////호출 함수////////////////////////////////

function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "sysUser"}).then(function (data) {
        main_data.auth = data;
    });
}

function selectBox() {
    $('#status1_select').select2();
    select_data_makes("#part_type_select", "/sysPartTypeGet", "part_type_code", "part_type_name",{keyword:''});
}

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function suppModal_bus(code, name) {
    if (main_data.supp_check === 'A') {
        $("#supp_name_main").val(name);
        $("#supp_code_main").val(code);
    } else if (main_data.supp_check === 'B') {

        $("#supp_name_modal").val(name);
        $("#supp_code_modal").val(code);
        modal2_data.part_code = '';
        modal2_data.sub_data = [];
        $("#scmInDialogLeftGrid").jqGrid('clearGridData');
        $("#scmInDialogRightGrid").jqGrid('clearGridData');
    }
    $("#SuppSearchGrid").jqGrid('clearGridData');
}

function suppModal_close_bus() {
    if (main_data.supp_check === 'A') {
        $("#supp_name_main").val("");
        $("#supp_code_main").val("");
    }
    $("#SuppSearchGrid").jqGrid('clearGridData');
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        mtype: 'POST',
        datatype: 'local',
        caption: '실적현황 | MES',
        colNames: ['접수일', '수주번호', '수주처', 'End User', '진행상태', '진행여부', '납기일', '지시구분', 'Part No', '수량', '단위', '수축튜브', '비고'],
        colModel: [
            {name: 'work_date', index: 'work_date', sortable: false, width: 60, formatter: formmatterDate2},
            {name: 'ord_no', index: 'ord_no', key: true, sortable: false, width: 80},
            {name: 'supp_name', index: 'supp_name', sortable: false, width: 60},
            {name: 'end_supp_name', index: 'end_supp_name', sortable: false, width: 60},
            {name: 'status1_name', index: 'status1_name', sortable: false, width: 40},
            {name: 'status2_name', index: 'status2_name', sortable: false, width: 40},
            {name: 'end_date', index: 'end_date', sortable: false, width: 60, formatter: formmatterDate2},
            {name: 'status3_name', index: 'status3_name', sortable: false, width: 60},
            {name: 'part_no', index: 'part_no', sortable: false, width: 60},
            {name: 'qty', index: 'qty', sortable: false, width: 40},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 60},
            {name: 'tube_name', index: 'tube_name', sortable: false, width: 60},
            {name: 'remark', index: 'remark', sortable: false, width: 80},
        ],
        multiselect: true,
        autowidth: true,
        viewrecords: true,
        height: 500,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid_pager',
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onCellSelect: function (rowid, icol, cellcontent, e) {
            update_btn(rowid)
        }
    });

}
