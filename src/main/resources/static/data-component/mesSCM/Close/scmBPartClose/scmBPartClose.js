/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var grid_data = [];


////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqgridPagerIcons();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));

    suppModal_start();

    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////
function supp_btn(what) {
    main_data.supp_check = what;

    $( "#SuppSearchGrid" ).jqGrid('clearGridData');
    $( "#supp-search-dialog" ).dialog('open');
    jqGridResize2("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
}



////////////////////////////호출 함수//////////////////////////////////

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: "local",
        colNames: ['입고일자', '업체', '전표번호', '구분', '품목그룹', '품번', '품명', '입고수량'],
        colModel: [
            {name: 'scmIn_date', index: 'scmIn_date', width: 60},
            {name: 'supp', index: 'supp', width: 60},
            {name: 'in_no', index: 'in_no', width: 60},
            {name: 'category', index: 'category', width: 60},
            {name: 'p_group', index: 'p_group', width: 60},
            {name: 'p_num', index: 'p_num', width: 60},
            {name: 'p_name', index: 'p_name', width: 60},
            {name: 'in_num', index: 'in_num', width: 60},
        ],
        caption: "마감진행 | MES",
        autowidth: true,
        height: 550,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}

