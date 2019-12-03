/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var main_data = {
    check: 'I',
    supp_check: 'A',
    send_data: {},
    send_data_post: {},

};

////////////////////////////시작 함수/////////////////////////////////
$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    datepickerInput();
    selectBox();
    suppModal_start();

    jqgridPagerIcons();
});



////////////////////////////클릭 함수////////////////////////////////
function get_btn(page) {
    modal_reset(".main_value", []);
    main_data.send_data = value_return2(".condition_main");
    main_data.send_data_post = main_data.send_data;
    console.log(main_data);
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
    $("#supp_modal_keyword").val("supp_name");
    $("#supp_modal_keyword2").val("");

    $("#SuppSearchGrid").jqGrid('clearGridData');
    $("#supp-search-dialog").dialog('open');
    jqGridResize2("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
}

////////////////////////////호출 함수////////////////////////////////
function selectBox() {
    select_makes("#gubun_select", "/getPartType", "part_type_code", "part_type_name");
    $('#status1_select').select2();
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
            {name: 'end_date', index: 'end_date', sortable: false, width: 60, formatter: formatterDate3},
            {name: 'status3_name', index: 'status3_name', sortable: false, width: 60},
            {name: 'part_no', index: 'part_no', sortable: false, width: 60},
            {name: 'qty', index: 'qty', sortable: false, width: 40},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 60},
            {name: 'tube', index: 'tube', sortable: false, width: 60},
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
