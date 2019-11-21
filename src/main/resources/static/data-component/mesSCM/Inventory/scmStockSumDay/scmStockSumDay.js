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
});


////////////////////////////클릭 함수//////////////////////////////////




////////////////////////////호출 함수//////////////////////////////////

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: "local",
        colNames: ['품목그룹', '품목코드', '품목명', '규격', '단위', '전일재고', '금일입고', '금일출고', '재고'],
        colModel: [
            {name: 'p_group', index: 'p_group', width: 60},
            {name: 'p_code', index: 'p_code', width: 60},
            {name: 'p_name', index: 'p_name', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'yesterday_stock', index: 'yesterday_stock', width: 60},
            {name: 'today_scmIn', index: 'today_scmIn', width: 60},
            {name: 'today_scmOut', index: 'today_scmOut', width: 60},
            {name: 'stock', index: 'stock', width: 60},
        ],
        caption: "자재 일원장 | MES",
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
}

