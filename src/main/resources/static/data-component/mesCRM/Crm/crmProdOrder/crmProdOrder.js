/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},

};

////////////////////////////시작 함수/////////////////////////////////
$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    datepickerInput();
    jqgridPagerIcons();
});
////////////////////////////클릭 함수////////////////////////////////
function get_btn(page) {
    modal_reset(".main_value",[]);
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data.end_date = main_data.send_data.end_date.replace(/\-/g, '');
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: "/crmProdOrderGet",
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");

}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/crmProdOrderGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function update_btn(rowid) {
    ccn_ajax('/crmProdOrderOneGet', {ord_no: rowid}).then(function (data) {
        modal_edits(".main_value",[],data);
    });
}

////////////////////////////호출 함수////////////////////////////////

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);

}


function jqGrid_main() {
    $('#mes_grid').jqGrid({
        mtype: 'POST',
        datatype: 'local',
        caption: '구매생산지시 | MES',
        colNames: ['접수일', '수주번호', '수주처', 'End User', '진행상태', '진행여부', '납기일', '지시상태', 'Part No','규격','수량','단위','수축튜브','비고'],
        colModel: [
            {name: 'work_date', index: 'work_date', sortable: false, width: 60 ,formatter: formmatterDate2},
            {name: 'ord_no', index: 'ord_no', key:true, sortable: false, width: 60},
            {name: 'supp_name', index: 'supp_name', sortable: false, width: 60},
            {name: 'end_supp_name', index: 'end_supp_name', sortable: false, width: 60},
            {name: 'status1_name', index: 'status1_name', sortable: false, width: 60},
            {name: 'status2_name', index: 'status2_name', sortable: false, width: 60},
            {name: 'end_date', index: 'end_date', sortable: false, width: 60,formatter:formatterDate3},
            {name: 'status3_name', index: 'status3_name', sortable: false, width: 60},
            {name: 'part_no', index: 'part_no', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
            {name: 'qty', index: 'qty', sortable: false, width: 60},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 60},
            {name: 'tube_name', index: 'tube_name', sortable: false, width: 60},
            {name: 'remark', index: 'remark', sortable: false, width: 60},
        ],
        multiselect: true,
        autowidth: true,
        viewrecords: true,
        height: 500,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid_pager',
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onCellSelect: function (rowid, icol, cellcontent, e) {
            update_btn(rowid)
        }
    });

}