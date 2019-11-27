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

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    datepickerInput();

    suppModal_start();

    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////

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
        caption: '발주현황 | MES',
        colNames: ['입고일자', '입고번호', '업체명', '품목그룹', '품번', '품명', '규격', '단위', '상태', '발주수량', '입고수량', '미입고', '등록자', '등록일시'],
        colModel: [
            {name: 'in_date', index: 'in_date', width: 60},
            {name: 'in_num', index: 'in_num', width: 60},
            {name: 'supp_name', index: 'supp_name', width: 60},
            {name: 'p_group', index: 'p_group', width: 60},
            {name: 'p_num', index: 'p_num', width: 60},
            {name: 'p_name', index: 'p_name', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'status', index: 'status', width: 60},
            {name: 'order_no', index: 'order_no', width: 60},
            {name: 'in_no', index: 'in_no', width: 60},
            {name: 'unstock_no', index: 'unstock_no', width: 60},
            {name: 'user_code', index: 'user_code', width: 60},
            {name: 'create_date', index: 'create_date', width: 60},
        ],
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
            under_get(rowid);
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            update_btn(data);

        }
    });
}