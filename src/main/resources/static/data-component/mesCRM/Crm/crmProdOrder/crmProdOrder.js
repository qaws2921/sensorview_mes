/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data = [];

////////////////////////////시작 함수/////////////////////////////////
$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));

    jqgridPagerIcons();
});
////////////////////////////클릭 함수////////////////////////////////


////////////////////////////호출 함수////////////////////////////////


function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: 'local',
        caption: '구매생산지시 | MES',
        colNames: ['접수일', '수주번호', '수주처', 'End User', '진행상태', '진행여부', '납기일', '지시상태', 'Part No','규격','수량','단위','수축튜브','비고'],
        colModel: [
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
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);

        }
    });

}