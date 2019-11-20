////////////////////////////데이터/////////////////////////////////////
var grid_data = [{test: '1'}, {test: '2'}];


////////////////////////////시작 함수//////////////////////////////////
$(document).ready(function () {
    jqGrid_main();
    jqgridPagerIcons();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    modal_start1();
});


////////////////////////////클릭 함수//////////////////////////////////
function add_btn() {
    $('#addDialog').dialog('open');
}


////////////////////////////호출 함수//////////////////////////////////
function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: "local",
        colNames: ['그룹코드', '그룹명', '비고', '등록자', '수정일'],
        colModel: [
            {name: 'code', index: 'code', width: 60},
            {name: 'name', index: 'name', width: 60},
            {name: 'remark', index: 'remark', width: 60},
            {name: 'manager', index: 'manager', width: 60},
            {name: 'modified_date', index: 'modified_date', width: 60},
        ],
        caption: "자재그룹관리 | MES",
        autowidth: true,
        height: 580,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        multiselect: true,
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}

