/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data=[{a:'20191210',b:'TEST201912111010',c:'업체1',d:'관리자',e:'20191210130229'}];
var grid2_data=[{a:'TEST201912111010',b:'그룹1',c:'part1',d:'제품1',e:'Ø0.91mm',f:'EA',g:'샘플검사',h:'20'}];

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
    modal_start2();

    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////

////////////////////////////호출 함수/////////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function jqGrid_main() {
    $("#mes_grid").jqGrid({
        data:grid_data,
        // mtype: 'POST',
        datatype: "local",
        multiselect: true,
        caption: "출하검사진행 | MES",
        colNames: ['입고일자', '전표번호', '업체', '처리자', '검사일시'],
        colModel: [
            {name: 'a', index: 'a', width: 60, sortable: false, formatter: formmatterDate2},
            {name: 'b', index: 'b', key: true, width: 60, sortable: false},
            {name: 'c', index: 'c', width: 60, sortable: false},
            {name: 'd', index: 'd', width: 60, sortable: false},
            {name: 'e', index: 'e', width: 60, sortable: false, formatter: formmatterDate},
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
            update_btn();
        }

    });

    $('#mes_grid2').jqGrid({
        data:grid2_data,
        // mtype: 'POST',
        datatype: "local",
        caption: "출하검사진행 | MES",
        colNames: ['전표번호', '품목그룹', '품번', '품명', '규격', '단위', '검사구분', '입고수량'],
        colModel: [
            {name: 'a', index: 'a', width: 60, sortable: false},
            {name: 'b', index: 'b', width: 60, sortable: false},
            {name: 'c', index: 'c', width: 60, sortable: false},
            {name: 'd', index: 'd', width: 60, sortable: false},
            {name: 'e', index: 'e', width: 60, sortable: false},
            {name: 'f', index: 'f', width: 60, sortable: false},
            {name: 'g', index: 'g', width: 60, sortable: false},
            {name: 'h', index: 'h', width: 60, sortable: false},
        ],
        autowidth: true,
        viewrecords: true,
        height: 200,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid2_pager',
    });
}