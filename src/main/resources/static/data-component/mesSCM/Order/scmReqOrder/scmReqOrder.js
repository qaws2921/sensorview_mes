/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
};

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    datepickerInput();

    modal_start1();

    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return2(".condition_main");
    main_data.send_data_post = main_data.send_data;
    console.log(main_data.send_data);
    $("#mes_grid").setGridParam({
        url: '/scmReqOrderGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/scmReqOrderGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function add_btn() {
    modal_reset(".modal_value", []);
    $("select[name=part_type] option:eq(0)").prop("selected", true).trigger("change");

    var date = new Date();
    var date2 = new Date();
    date2.setDate(date.getDate()+1);
    $('#datepicker3').datepicker('setDate',date);
    $('#datepicker4').datepicker('setDate',date2);

    main_data.check = 'I';
    $("#addDialog").dialog('open');
    jqGridResize2("#mes_modal1_grid1", $('#mes_modal1_grid1').closest('[class*="col-"]'));
    jqGridResize2("#mes_modal1_grid2", $('#mes_modal1_grid2').closest('[class*="col-"]'));

}
////////////////////////////호출 함수/////////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);

}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: 'local',
        mtype: 'POST',
        colNames: ['일자','품번','품명','규격','단위','수량','접수번호', '수주번호', '수주처', 'End User','납기일','등록자','등록일'],
        colModel: [
            {name: 'work_date', index: 'work_date', sortable: false, width: 50, formatter: formmatterDate2},
            {name: 'part_code', index: 'part_code', sortable: false, width: 80},
            {name: 'part_name', index: 'part_name', sortable: false, width: 50},
            {name: 'spec', index: 'spec', sortable: false, width: 50},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 50},
            {name: 'qty', index: 'qty', sortable: false, width: 50},
            {name: 'req_no', index: 'req_no', sortable: false, width: 80},
            {name: 'ord_no', index: 'ord_no', sortable: false, width: 80},
            {name: 'supp_name', index: 'supp_name', sortable: false, width: 50},
            {name: 'end_supp_name', index: 'end_supp_name', sortable: false, width: 50},
            {name: 'end_date', index: 'end_date', sortable: false, width: 50, formatter: formmatterDate2},
            {name: 'user_name', index: 'user_name', sortable: false, width: 50},
            {name: 'update_date', index: 'update_date', sortable: false, width: 80,  formatter: formmatterDate},
        ],
        caption: '구매요청현황 | MES',
        autowidth: true,
        height: $(window).height()-450,
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
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
        }
    });
}