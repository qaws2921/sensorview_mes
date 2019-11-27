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
    datepickerInput();
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

function datepickerInput() {
    datepicker_makes("#datepicker",-1);
    datepicker_makes("#datepicker2",0);

}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: "local",
        colNames: ['입고일자', '입고번호', '공정명', '품목그룹','품번', '품명', '규격', '단위', '입고수량', '등록자', '입고일시'],
        colModel: [
            {name: 'in_date', index: 'in_date', width: 60},
            {name: 'in_no', index: 'in_num', width: 60},
            {name: 'line_name', index: 'line_name', width: 60},
            {name: 'p_group', index: 'p_group', width: 60},
            {name: 'p_num', index: 'p_num', width: 60},
            {name: 'p_name', index: 'p_name', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'in_count', index: 'in_count', width: 60},
            {name: 'manager', index: 'manager', width: 60},
            {name: 'create_date', index: 'create_date', width: 60},
        ],
        caption: "재입고현황 | MES",
        autowidth: true,
        height: 150,
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
        colNames: ['입고번호', '품목그룹', '품번', '품명', '규격', '단위', '수량','바코드'],
        colModel: [
            {name: 'in_no', index: 'in_no', width: 60},
            {name: 'p_group', index: 'p_group', width: 60},
            {name: 'p_num', index: 'p_num', width: 60},
            {name: 'p_name', index: 'p_name', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'count', index: 'count', width: 60},
            {name: 'barcode', index: 'barcode', width: 60},
        ],
        caption: "재입고현황 | MES",
        autowidth: true,
        height: 200,
        rowNum: 100,
        viewrecords: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
    })
}

