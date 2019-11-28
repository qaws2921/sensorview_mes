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
    selectBox();
    datepickerInput();
    jqGrid_main();
    jqgridPagerIcons();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize('#mes_grid2', $('#mes_grid2').closest('[class*="col-"]'));
});

////////////////////////////클릭 함수//////////////////////////////////
function get_btn(page) {
    main_data.send_data = value_return2(".condition_main");
    main_data.send_data_post = main_data.send_data;
    console.log(main_data.send_data);
    $("#mes_grid").setGridParam({
        url: '/scmInLineListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/scmInLineListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function under_get(rowid) {

    $("#mes_grid2").setGridParam({
        url: '/scmInLineSubListGet',
        datatype: "json",
        page: 1,
        postData: {keyword: rowid}
    }).trigger("reloadGrid");
}

////////////////////////////호출 함수//////////////////////////////////

function selectBox() {
    select_makes("#line_select", "/getLine", "line_code", "line_name");
}

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);

}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['입고일자', '입고번호', '공정명', '품목그룹', '품번', '품명', '규격', '단위', '입고수량', '등록자', '입고일시'],
        colModel: [
            {name: 'work_date', index: 'work_date', sortable: false, width: 60},
            {name: 'in_no', index: 'in_no',key:true, sortable: false, width: 60},
            {name: 'line_name', index: 'line_name', sortable: false, width: 60},
            {name: 'part_grp_name', index: 'part_grp_name', sortable: false, width: 60},
            {name: 'part_code', index: 'part_code', sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 60},
            {name: 'qty', index: 'qty', sortable: false, width: 60},
            {name: 'user_name', index: 'user_name', sortable: false, width: 60},
            {name: 'update_date', index: 'update_date', sortable: false, width: 60},
        ],
        caption: "재입고현황 | MES",
        autowidth: true,
        height: 180,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        onCellSelect: function (rowid, icol, cellcontent, e) {
            under_get(rowid);
        },
    });

    $('#mes_grid2').jqGrid({
        mtype: 'POST',
        datatype: "local",
        caption: "재입고현황 | MES",
        colNames: ['입고번호', '품목그룹', '품번', '품명', '규격', '단위', '수량', '바코드'],
        colModel: [
            {name: 'in_no', index: 'in_no', sortable: false, width: 60},
            {name: 'p_group', index: 'p_group', sortable: false, width: 60},
            {name: 'p_num', index: 'p_num', sortable: false, width: 60},
            {name: 'p_name', index: 'p_name', sortable: false, width: 60},
            {name: 'standard', index: 'standard', sortable: false, width: 60},
            {name: 'unit', index: 'unit', sortable: false, width: 60},
            {name: 'count', index: 'count', sortable: false, width: 60},
            {name: 'barcode', index: 'barcode', sortable: false, width: 60},
        ],
        autowidth: true,
        viewrecords: true,
        height: 200,
        rowNum: 100,
        pager: '#mes_grid2_pager',

    });
}

