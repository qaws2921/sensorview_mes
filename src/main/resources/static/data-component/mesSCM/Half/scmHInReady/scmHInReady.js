/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var main_data = {
    send_data: {}
};

////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    selectBox();
    jqGrid_main();
    jqgridPagerIcons();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
});

////////////////////////////클릭 함수//////////////////////////////////
function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    // $("#mes_grid").setGridParam({
    //     url: '/scmHInListGet',
    //     datatype: "json",
    //     page: page,
    //     postData: main_data.send_data
    // }).trigger("reloadGrid");
}

////////////////////////////호출 함수//////////////////////////////////

function selectBox() {
    select_makes("#line_select", "/getLine", "line_code", "line_name");
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['공정', '품번', '품명', '규격', '단위', '수량','바코드', '공정완료일시'],
        colModel: [
            {name: 'line_name', index: 'line_name', sortable: false, width: 60},
            {name: 'part_code', index: 'part_code', sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 60},
            {name: 'qty', index: 'qty', sortable: false, width: 60},
            {name: 'bcr_no', index: 'bcr_no', sortable: false, width: 60},
            {name: 'update_date', index: 'update_date', sortable: false, width: 60,formatter: formmatterDate}
        ],
        caption: "반제품입고대기현황 | MES",
        autowidth: true,
        height: 550,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true
    });


}