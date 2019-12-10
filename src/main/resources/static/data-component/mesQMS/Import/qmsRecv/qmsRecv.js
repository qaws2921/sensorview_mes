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
};

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize("#mes_grid2", $('#mes_grid2').closest('[class*="col-"]'));
    datepickerInput();

    modal_start1();

    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////
function get_btn() {

    $("#addDialog").dialog('open');
    jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));
}

////////////////////////////호출 함수/////////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function jqGrid_main() {
    $("#mes_grid").jqGrid({
        data: grid_data,
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

        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창

        }

    });

    $('#mes_grid2').jqGrid({
        data: grid2_data,
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
        height: 200,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid2_pager',

    });

}