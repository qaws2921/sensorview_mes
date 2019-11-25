/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data = [];

////////////////////////////시작 함수/////////////////////////////////
$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));

    jqgridPagerIcons();
});
////////////////////////////클릭 함수////////////////////////////////


////////////////////////////호출 함수////////////////////////////////


function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: 'local',
        multiselect: true,
        caption: '계획관리 | MES',
        colNames: ['제품코드', '1월','2월','3월', '소계', '전체계', '차이', '생산량','생산시기'],
        colModel: [
            {name: 'code', index: 'code', width: 60},
            {name: 'jan', index: 'jan', width: 60},
            {name: 'feb', index: 'feb', width: 60},
            {name: 'mar', index: 'mar', width: 60},
            {name: 'sum', index: 'sum', width: 60},
            {name: 'sumtotal', index: 'sumtotal', width: 60},
            {name: 'dif', index: 'dif', width: 60},
            {name: 'prod_no', index: 'prod_no', width: 60},
            {name: 'prod_date', index: 'prod_date', width: 60},
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
    jQuery("#mes_grid").jqGrid('setGroupHeaders', {
        useColSpanStyle: true,
        groupHeaders:[
            {startColumnName: 'jan', numberOfColumns: 5, titleText: '1분기',align: 'center'},

        ]
    });
}