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
        colNames: ['품목구분', '품목코드', '품목명', '규격', '단위', '공급업체', '적정재고(최소)', '적정재고(최대)', '재고량'],
        colModel: [
            {name: 'p_category', index: 'p_category', width: 60},
            {name: 'p_code', index: 'p_code', width: 60},
            {name: 'p_name', index: 'p_name', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'supply_company', index: 'supply_company', width: 60},
            {name: 'properStock_min', index: 'properStock_min', width: 60},
            {name: 'properStock_max', index: 'properStock_max', width: 60},
            {name: 'stock', index: 'stock', width: 60},
        ],
        caption: "재고현황 | MES",
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

