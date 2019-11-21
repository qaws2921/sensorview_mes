/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var grid_data = [];


////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid',$('#mes_grid').closest('[class*="col-"]'));
    jqGridResize('#modal2_grid',$('#mes_grid').closest('[class*="col-"]'));

    modal_start1();
    modal_start2();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

function add_btn() {
    $('#addDialog').dialog('open');
}

function upload_btn() {
    $('#uploadDialog').dialog('open');
    jqGridResize2('#modal2_grid',$('#modal2_grid').closest('[class*="col-"]'));
}


////////////////////////////호출 함수//////////////////////////////////

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: "local",
        colNames: ['품목구분', '품목코드', '품목명', '보관로케이션', '업체명', '규격', '단위', 'L/T', '검사기준', '검사구분', '재고최대', '재고최소', '등록자', '수정일'],
        colModel: [
            {name: 'p_category', index: 'p_category', width: 40},
            {name: 'p_code', index: 'p_code', width: 40},
            {name: 'p_name', index: 'p_name', width: 40},
            {name: 'location', index: 'location', width: 40},
            {name: 'c_name', index: 'c_name', width: 40},
            {name: 'standard', index: 'standard', width: 40},
            {name: 'unit', index: 'unit', width: 40},
            {name: 'LT', index: 'LT', width: 40},
            {name: 'i_standard', index: 'i_standard', width: 40},
            {name: 'i_category', index: 'i_standard', width: 40},
            {name: 'stock_max', index: 'stock_max', width: 40},
            {name: 'stock_min', index: 'stock_min', width: 40},
            {name: 'manager', index: 'manager', width: 40},
            {name: 'modified_date', index: 'modified_date', width: 40},
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
    });
}