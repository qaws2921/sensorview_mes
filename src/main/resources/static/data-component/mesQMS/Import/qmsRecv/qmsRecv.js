/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data=[];
var grid2_data=[];

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    qcItem_list:[]
};

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    qmsQcItemAllGet();
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize("#mes_grid2", $('#mes_grid2').closest('[class*="col-"]'));
    datepickerInput();

    modal_start1();

    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////
function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data.end_date = main_data.send_data.end_date.replace(/\-/g, '');
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: "/qmsRecvGet",
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
    $('#mes_grid2').jqGrid('clearGridData');
}

function under_get(rowid) {

    $("#mes_grid2").setGridParam({
        url: '/qmsRecvSubGet',
        datatype: "json",
        page: 1,
        postData: {keyword: rowid}
    }).trigger("reloadGrid");
}

function test_btn() {
    $("#datepicker3").val("");
    $("#datepicker3").datepicker('setDate', 'today');
    $("#addDialog").dialog('open');
    jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));
}

////////////////////////////호출 함수/////////////////////////////////////
function qmsQcItemAllGet() {
    ccn_ajax("/qmsQcItemAllGet", {keyword: 1,keyword2:1}).then(function (data) {
        main_data.qcItem_list = data;
    }).catch(function (err) {
        console.error(err); // Error 출력
    });
}


function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function jqGrid_main() {
    $("#mes_grid").jqGrid({
        mtype: 'POST',
        datatype: "local",
        multiselect: true,
        caption: "수입검사진행 | MES",
        colNames: ['입고일자', '전표번호', '업체', '상태', '상태기준', '처리자', '출고일시'],
        colModel: [
            {name: 'work_date', index: 'work_date', width: 60, sortable: false, formatter: formmatterDate2},
            {name: 'in_no', index: 'in_no', key: true, width: 60, sortable: false},
            {name: 'supp_name', index: 'supp_name', width: 60, sortable: false},
            {name: 'status_name', index: 'status_name', width: 60, sortable: false},
            {name: 'status', index: 'status', hidden: true, width: 60, sortable: false},
            {name: 'user_name', index: 'user_name', width: 60, sortable: false},
            {name: 'out_date', index: 'out_date', width: 60, sortable: false},
        ],
        autowidth: true,
        viewrecords: true,
        height: 180,
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
            under_get(rowid);
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창

        }

    });

    $('#mes_grid2').jqGrid({
        mtype: 'POST',
        datatype: "local",
        caption: "수입검사진행 | MES",
        colNames: ['전표번호', '품목그룹', '품번', '품명', '규격', '단위', '검사구분', '입고수량'],
        colModel: [
            {name: 'in_no', index: 'in_no', width: 60, sortable: false},
            {name: 'part_grp_name', index: 'part_grp_name', width: 60, sortable: false},
            {name: 'part_code', index: 'part_code', width: 60, sortable: false},
            {name: 'part_name', index: 'part_name', width: 60, sortable: false},
            {name: 'spec', index: 'spec', width: 60, sortable: false},
            {name: 'unit_name', index: 'unit_name', width: 60, sortable: false},
            {name: 'qc_level_name', index: 'qc_level_name', width: 60, sortable: false},
            {name: 'qty', index: 'qty', width: 60, sortable: false},
        ],
        autowidth: true,
        viewrecords: true,
        height: 200,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid2_pager',

    });

}