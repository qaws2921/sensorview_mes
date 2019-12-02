/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
};



////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));

    datepickerInput();
    selectBox();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: '/scmStockSumMonthListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/scmStockSumMonthListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function select_change1(value) {
    select_makes_sub("#partGrp_select","/sysBPartGroupSelectGet","part_grp_code","part_grp_name",{keyword:value},"Y");
}


////////////////////////////호출 함수//////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", 0);
}

function selectBox() {
    select_makes2("#gubun_select", "/getPartType", "part_type_code", "part_type_name").then(function (data) {
        select_makes_sub("#partGrp_select","/sysBPartGroupSelectGet","part_grp_code","part_grp_name",{keyword:data},"Y");
    });
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        mtype: 'POST',
        datatype: "local",
        colNames: ['품목그룹', '품목코드', '품목명', '규격', '단위', '전월재고', '금월입고', '금월출고', '재고'],
        colModel: [
            {name: 'part_grp_name', index: 'part_grp_name', width: 60},
            {name: 'part_code', index: 'part_code', width: 60},
            {name: 'part_name', index: 'part_name', width: 60},
            {name: 'spec', index: 'spec', width: 60},
            {name: 'unit_name', index: 'unit_name', width: 60},
            {name: 'prev_qty', index: 'prev_qty', width: 60},
            {name: 'in_qty', index: 'in_qty', width: 60},
            {name: 'out_qty', index: 'out_qty', width: 60},
            {name: 'qty', index: 'qty', width: 60},
        ],
        caption: "자재 월원장 | MES",
        autowidth: true,
        height: 550,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}

