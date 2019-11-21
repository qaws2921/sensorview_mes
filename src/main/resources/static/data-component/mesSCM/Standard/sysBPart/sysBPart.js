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
    modal_start1(); fv
});


////////////////////////////클릭 함수//////////////////////////////////

function add_btn() {
    $('#addDialog').dialog('open');
}

function upload_btn() {
    $('#uploadDialog').dialog('open');
    // jqGridResize('#modal2_grid',$('#modal2_grid').closest('[class*="col-"]'));
}


////////////////////////////호출 함수//////////////////////////////////

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: "local",
        colNames: ['품목구분', '품목코드', '품목명', '보관로케이션', '업체명', '규격', '단위', 'L/T', '검사기준', '검사구분', '재고최대', '재고최소', '등록자', '수정일'],
        colModel: [
            {name: 'p_category', index: 'p_category', },
            {name: 'p_code', index: 'p_code', },
            {name: 'p_name', index: 'p_name', },
            {name: 'location', index: 'location', },
            {name: 'c_name', index: 'c_name', },
            {name: 'standard', index: 'standard',},
            {name: 'unit', index: 'unit',},
            {name: 'LT', index: 'LT',},
            {name: 'i_standard', index: 'i_standard',},
            {name: 'i_category', index: 'i_standard',},
            {name: 'stock_max', index: 'stock_max', },
            {name: 'stock_min', index: 'stock_min',},
            {name: 'manager', index: 'manager',},
            {name: 'modified_date', index: 'modified_date',},
        ],
        caption: "자재정보관리 | MES",
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