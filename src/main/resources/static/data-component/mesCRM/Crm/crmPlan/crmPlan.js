/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data = [];

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
};

var colNames_sub = {
    a:['제품코드', '1월', '2월', '3월', '소계', '전체계', '차이', '생산량', '생산시기'],
    b:['제품코드', '4월', '5월', '6월', '소계', '전체계', '차이', '생산량', '생산시기'],
    c:['제품코드', '7월', '8월', '9월', '소계', '전체계', '차이', '생산량', '생산시기'],
    d:['제품코드', '10월', '11월', '12월', '소계', '전체계', '차이', '생산량', '생산시기'],
}

var colNames = ['제품코드', '1월', '2월', '3월', '소계', '전체계', '차이', '생산량', '생산시기']
////////////////////////////시작 함수/////////////////////////////////
$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    jqGrid_header();
    modal_start1();
    jqgridPagerIcons();
   



});
////////////////////////////클릭 함수////////////////////////////////
function add_btn() {
    $("#addDialog").dialog('open');
}

function bungi_change(value) {
    if (value === '1'){
        colNames = colNames_sub.a;
    } else if (value === '2'){
        colNames = colNames_sub.b;
    } else if(value === '3'){
        colNames = colNames_sub.c;
    } else if(value === '4'){
        colNames = colNames_sub.d;
    }

    //$("#mes_grid").jqGrid("setLabel", colNames, '');

    $('#mes_grid').jqGrid('destroyGroupHeader');
    $.jgrid.gridUnload('#mes_grid');
    jqGrid_main();
    jQuery("#mes_grid").jqGrid('setGroupHeaders', {
        useColSpanStyle: true,
        groupHeaders: [
            {startColumnName: 'jan', numberOfColumns: 3, titleText: '<center>'+value+'분기</center>'},

        ]
    });

}

////////////////////////////호출 함수////////////////////////////////
function jqGrid_header() {
    jQuery("#mes_grid").jqGrid('setGroupHeaders', {
        useColSpanStyle: true,
        groupHeaders: [
            {startColumnName: 'jan', numberOfColumns: 3, titleText: '<center>1분기</center>'},

        ]
    });
}

function jqGrid_main() {
    console.log(colNames);
    $('#mes_grid').jqGrid({

        datatype: 'local',
        caption: '계획관리 | MES',
        colNames: colNames,
        colModel: [
            {name: 'code', index: 'code', sortable: false, width: 60},
            {name: 'jan', index: 'jan', sortable: false, width: 60},
            {name: 'feb', index: 'feb', sortable: false, width: 60},
            {name: 'mar', index: 'mar', sortable: false, width: 60},
            {name: 'sum', index: 'sum', sortable: false, width: 60},
            {name: 'sumtotal', index: 'sumtotal', sortable: false, width: 60},
            {name: 'dif', index: 'dif', sortable: false, width: 60},
            {name: 'prod_no', index: 'prod_no', sortable: false, width: 60},
            {name: 'prod_date', index: 'prod_date', sortable: false, width: 60},
        ],
        loadonce: true,
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
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);

        }
    });

    jqgridPagerIcons();

}