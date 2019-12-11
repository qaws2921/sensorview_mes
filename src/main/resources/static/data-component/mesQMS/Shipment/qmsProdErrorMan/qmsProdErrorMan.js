/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data=[{a:'20191210',b:'TEST20191211101010',c:'업체1',d:'그룹1',e:'part1',f:'제품1',g:'0.3nm',h:'EA',i:'20',j:'10',k:'불량',l:'조립',m:'미결합',n:'조치중',o:'N',p:'N',q:'관리자',r:'20191211111111'}];

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly:[]
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

////////////////////////////호출 함수/////////////////////////////////////

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        // mtype:"POST",
        data:grid_data,
        datatype: "local",
        colNames: ['입고일자', '전표번호', '업체', '품목그룹', '품번', '품명', '규격', '단위', '출고수량', '불량수량', '검사결과','불량유형','불량내용','조치구분','부적합보고서','개선조치','검사자','검사일시'],
        colModel: [
            {name: 'a', index: 'a', sortable: false, width: 60, formatter: formmatterDate2},
            {name: 'b', index: 'b', sortable: false, width: 80},
            {name: 'c', index: 'c', sortable: false, width: 60},
            {name: 'd', index: 'd', sortable: false, width: 60},
            {name: 'e', index: 'e', sortable: false, width: 60},
            {name: 'f', index: 'f', sortable: false, width: 60},
            {name: 'g', index: 'g', sortable: false, width: 60},
            {name: 'h', index: 'h', sortable: false, width: 60},
            {name: 'i', index: 'i', sortable: false, width: 60},
            {name: 'j', index: 'j', sortable: false, width: 60},
            {name: 'k', index: 'k', sortable: false, width: 60},
            {name: 'l', index: 'l', sortable: false, width: 60},
            {name: 'm', index: 'm', sortable: false, width: 60},
            {name: 'n', index: 'n', sortable: false, width: 60},
            {name: 'o', index: 'o', sortable: false, width: 60},
            {name: 'p', index: 'p', sortable: false, width: 60},
            {name: 'q', index: 'q', sortable: false, width: 60},
            {name: 'r', index: 'r', sortable: false, width: 90, formatter: formmatterDate},
        ],
        caption: "출하검사부적합 | MES",
        autowidth: true,
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
            update_btn(rowid);
        }
    });
}