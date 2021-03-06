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
    datepickerInput();
    jqGrid_main();
    jqgridPagerIcons();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
});

////////////////////////////클릭 함수//////////////////////////////////
function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data.end_date = main_data.send_data.end_date.replace(/\-/g, '');
    $("#mes_grid").setGridParam({
        url: '/scmHInListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

////////////////////////////호출 함수//////////////////////////////////

function selectBox() {
    select_makes_sub("#line_select", "/sysProdLineAllGet", "line_code", "line_name",{keyword:'1'},'Y');
}

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);

}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['입고일자', '입고번호', '공정', '품번', '품명', '규격', '단위', '입고수량', '등록자', '입고일시'],
        colModel: [
            {name: 'work_date', index: 'work_date', sortable: false, width: 60,formatter: formmatterDate2 },
            {name: 'in_no', index: 'in_no',key:true, sortable: false, width: 60},
            {name: 'line_name', index: 'line_name', sortable: false, width: 60},
            {name: 'part_code', index: 'part_code', sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 60},
            {name: 'qty', index: 'qty', sortable: false, width: 60},
            {name: 'user_name', index: 'user_name', sortable: false, width: 60},
            {name: 'update_date', index: 'update_date', sortable: false, width: 60,formatter: formmatterDate}
        ],
        caption: "반제품입고현황 | MES",
        autowidth: true,
        height: 570,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true
    });


}