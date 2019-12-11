/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data=[];

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
};

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    selectBox();
    datepickerInput();

    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////


////////////////////////////호출 함수/////////////////////////////////////
function selectBox() {
    $('#result_select').select2();
}

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data:grid_data,
        datatype: "local",
        colNames: ['출고일자', '전표번호', '업체', '품목그룹', '품번', '품명', '규격', '단위', '출고수량','불량수량', '검사결과','불량유형','불량내용','완료여부','부적합보고서','개선조치','검사자','검사일시','MRB','MRB일시'],
        colModel: [
            {name: '', index: '', sortable: false, width: 60, formatter: formmatterDate2},
            {name: '', index: '', sortable: false, width: 80},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60, formatter: formmatterDate},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 90, formatter: formmatterDate},
        ],
        caption: "출하검사MRB관리 | MES",
        autowidth: true,
        multiselect: true,
        height: $(window).height() - 450,
        pager: '#mes_grid_pager',
        rowList: [100, 200, 300, 500, 1000],
        rowNum: 100,
        viewrecords: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onCellSelect: function (rowid, icol, cellcontent, e) {

        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
        }
    });
}