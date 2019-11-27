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

var grid_data = [];
var grid2_data = [];

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize("#mes_grid2", $('#mes_grid2').closest('[class*="col-"]'));
    datepickerInput();

    modal_start1();
    suppModal_start();

    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////

function add_btn() {
    $("#addDialog").dialog('open');
    jqGridResize2("#mes_add_grid", $('#mes_add_grid').closest('[class*="col-"]'));
    jqGridResize2("#mes_add_grid2", $('#mes_add_grid2').closest('[class*="col-"]'));

}

function supp_btn(what) {
    main_data.supp_check = what;
    $("#supp_modal_keyword").val("supp_name");
    $("#supp_modal_keyword2").val("");

    $("#SuppSearchGrid").jqGrid('clearGridData');
    $("#supp-search-dialog").dialog('open');
    jqGridResize2("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
}

function suppModal_bus(code, name) {
    if (main_data.supp_check === 'A') {
        $("#supp_name_main").val(name);
        $("#supp_code_main").val(code);
    } else if (main_data.supp_check === 'B') {
        $("#supp_name_modal").val(name);
        $("#supp_code_modal").val(code);
    }
    $("#SuppSearchGrid").jqGrid('clearGridData');

}

////////////////////////////호출 함수/////////////////////////////////////

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);

}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: 'local',
        multiselect: true,
        caption: '발주등록 | MES',
        colNames: ['발주일자', '전표번호', '업체', '상태', '등록자', '발주일자'],
        colModel: [
            {name: 'order_date', index: 'order_date', sortable: false, width: 60},
            {name: 'order_no', index: 'order_no', sortable: false, width: 60},
            {name: 'supp_code', index: 'supp_code', sortable: false, width: 60},
            {name: 'status', index: 'status',sortable: false , width: 60},
            {name: 'user_code', index: 'user_code',sortable: false, width: 60},
            {name: 'order_datetime', index: 'order_datetime',sortable: false, width: 60},
        ],
        autowidth: true,
        viewrecords: true,
        height: 200,
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
            under_get(rowid);
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            update_btn(data);

        }
    });

    $('#mes_grid2').jqGrid({
        data: grid2_data,
        datatype: 'local',
        caption: '발주등록 | MES',
        colNames: ['발주일자', '전표번호', '업체', '상태', '등록자', '발주일자'],
        colModel: [
            {name: 'order_date', index: 'order_date', width: 60},
            {name: 'order_no', index: 'order_no', width: 60},
            {name: 'supp_code', index: 'supp_code', width: 60},
            {name: 'status', index: 'status', width: 60},
            {name: 'user_code', index: 'user_code', width: 60},
            {name: 'order_datetime', index: 'order_datetime', width: 60},
        ],
        autowidth: true,
        viewrecords: true,
        height: 200,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid2_pager',

    });
}