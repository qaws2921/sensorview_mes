/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var main_data = {
    send_data: {},
    send_data_post: {},
};
var grid_data = [];
var grid2_data = [];

////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    selectBox();
    jqGrid_main();
    jqgridPagerIcons();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize('#mes_grid2', $('#mes_grid2').closest('[class*="col-"]'));
});

////////////////////////////클릭 함수//////////////////////////////////




////////////////////////////호출 함수//////////////////////////////////

function selectBox(){
    select_makes("#line_select", "/getLine", "line_code","line_name");
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: "local",
        colNames: ['조정일자', '조정번호', '품목그룹', '품번','품명', '규격', '단위', '바코드', '조정전수량', '조정후수량', '증가', '조정사유', '등록자', '조정일시'],
        colModel: [
            {name: 'rev_date', index: 'rev_date', width: 60},
            {name: 'rev_num', index: 'rev_num', width: 60},
            {name: 'p_group', index: 'p_group', width: 60},
            {name: 'p_num', index: 'p_num', width: 60},
            {name: 'p_name', index: 'p_name', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'barcode', index: 'barcode', width: 60},
            {name: 'revBefore', index: 'revBefore', width: 60},
            {name: 'revAfter', index: 'revAfter', width: 60},
            {name: 'increase', index: 'increase', width: 60},
            {name: 'revReason', index: 'revReason', width: 60},
            {name: 'manager', index: 'manager', width: 60},
            {name: 'rev_datetime', index: 'rev_datetime', width: 60},
        ],
        caption: "재입고현황 | MES",
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
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});

    $('#mes_grid2').jqGrid({
        data: grid_data,
        datatype: "local",
        colNames: ['조정일자', '조정번호', '품목그룹', '품번','품명', '규격', '단위', '바코드', '조정전수량', '조정후수량', '증가', '조정사유', '등록자', '조정일시'],
        colModel: [
            {name: 'rev_date', index: 'rev_date', width: 60},
            {name: 'rev_num', index: 'rev_num', width: 60},
            {name: 'p_group', index: 'p_group', width: 60},
            {name: 'p_num', index: 'p_num', width: 60},
            {name: 'p_name', index: 'p_name', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'barcode', index: 'barcode', width: 60},
            {name: 'revBefore', index: 'revBefore', width: 60},
            {name: 'revAfter', index: 'revAfter', width: 60},
            {name: 'increase', index: 'increase', width: 60},
            {name: 'revReason', index: 'revReason', width: 60},
            {name: 'manager', index: 'manager', width: 60},
            {name: 'rev_datetime', index: 'rev_datetime', width: 60},
        ],
        caption: "재고조정현황 | MES",
        autowidth: true,
        height: 550,
        pager: '#mes_grid2_pager',
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
    }).navGrid('#mes_grid2_pager', {search: false, add: false, edit: false, del: false});
}

