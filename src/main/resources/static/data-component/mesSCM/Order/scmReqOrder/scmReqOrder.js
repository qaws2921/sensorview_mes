/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    check2: 'Y',
    auth:{}
};

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    datepickerInput();

    modal_start1();
    authcheck();
    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return2(".condition_main");
    main_data.send_data_post = main_data.send_data;
    console.log(main_data.send_data);
    $("#mes_grid").setGridParam({
        url: '/scmReqOrderGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/scmReqOrderGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function add_btn() {
    if (main_data.auth.check_add !="N") {
        modal_reset(".modal_value", []);
        $("#mes_modal1_grid1").jqGrid('clearGridData');
        $("#mes_modal1_grid2").jqGrid('clearGridData');

        $("select[name=part_type] option:eq(0)").prop("selected", true).trigger("change");

        var date = new Date();
        var date2 = new Date();
        date2.setDate(date.getDate()+1);
        $('#datepicker3').datepicker('setDate',date);
        $('#datepicker4').datepicker('setDate',date2);

        main_data.check = 'I';
        main_data.check = 'Y';

        $("#addDialog").dialog('open');
        jqGridResize2("#mes_modal1_grid1", $('#mes_modal1_grid1').closest('[class*="col-"]'));
        jqGridResize2("#mes_modal1_grid2", $('#mes_modal1_grid2').closest('[class*="col-"]'));
    } else {
        alert("추가권한이 없습니다,");
    }
}

function update_btn(jqgrid_data) {
    if (main_data.auth.check_edit !="N") {
        modal_reset(".modal_value", []);
        main_data.check = 'U';
        var send_data = {};
        send_data.keyword = jqgrid_data.part_code;
        // ccn_ajax('/', send_data).then(function (data) {
        //     modal_edits('.modal_value', main_data.readonly, data); // response 값 출력
        //     $("#addDialog").dialog('open');
        // });
    } else {
        alert("수정권한이 없습니다.");
    }
}

function delete_btn() {
    if(main_data.auth.check_del != "N") {
        var ids = $("#mes_grid").getGridParam('selarrrow');
        if (ids.length === 0) {
            alert("삭제하는 데이터를 선택해주세요");
        } else {
            if (confirm("삭제하겠습니까?")) {
                main_data.check = 'D';
                wrapWindowByMask2();
                // ccn_ajax("/", {keyword: ids.join(",")}).then(function (data) {
                //     if (data.result === 'NG') {
                //         alert(data.message);
                //     } else {
                //         get_btn_post($("#mes_grid").getGridParam('page'));
                //     }
                //     closeWindowByMask();
                // }).catch(function (err) {
                //     closeWindowByMask();
                //     console.error(err); // Error 출력
                // });
            }
        }
    } else {
        alert("삭제권한이 없습니다.");
    }
}
////////////////////////////호출 함수/////////////////////////////////////
function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "scmReqOrder"}).then(function (data) {
        main_data.auth = data;
    });
}

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);

}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: 'local',
        mtype: 'POST',
        colNames: ['일자','품번','품명','규격','단위','수량','접수번호', '수주번호', '수주처', 'End User','납기일','등록자','등록일'],
        colModel: [
            {name: 'work_date', index: 'work_date', sortable: false, width: 50, formatter: formmatterDate2},
            {name: 'part_code', index: 'part_code', sortable: false, width: 80},
            {name: 'part_name', index: 'part_name', sortable: false, width: 50},
            {name: 'spec', index: 'spec', sortable: false, width: 50},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 50},
            {name: 'qty', index: 'qty', sortable: false, width: 50},
            {name: 'req_no', index: 'req_no', sortable: false, width: 80},
            {name: 'ord_no', index: 'ord_no', sortable: false, width: 80},
            {name: 'supp_name', index: 'supp_name', sortable: false, width: 50},
            {name: 'end_supp_name', index: 'end_supp_name', sortable: false, width: 50},
            {name: 'end_date', index: 'end_date', sortable: false, width: 50, formatter: formmatterDate2},
            {name: 'user_name', index: 'user_name', sortable: false, width: 50},
            {name: 'update_date', index: 'update_date', sortable: false, width: 80,  formatter: formmatterDate},
        ],
        caption: '구매요청현황 | MES',
        autowidth: true,
        height: 550,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        multiselect: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            update_btn(data);
        }
    });
}