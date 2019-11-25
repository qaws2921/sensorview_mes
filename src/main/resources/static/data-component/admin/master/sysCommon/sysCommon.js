/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var grid_data = [];

////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    jqgridPagerIcons();

    modal_start1()

});


////////////////////////////클릭 함수//////////////////////////////////


////////////////////////////호출 함수//////////////////////////////////
function selectBox() {
	select_makes('#code_select', '')
}


function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: "local",
        mtype: 'POST',
        colNames: ['공통그룹', '코드', '명칭1', '명칭2', '명칭3', '명칭4', '명칭5', '명칭6', '명칭7', '명칭8', '사용유무', '등록자', '등록일'],
        colModel: [
            {name: 'group', index: 'part_grp_code', key: true, width: 60},
            {name: 'code', index: 'part_grp_code', key: true, width: 60},
            {name: 'name1', index: 'part_grp_code', key: true, width: 60},
            {name: 'name2', index: 'part_grp_code', key: true, width: 60},
            {name: 'name3', index: 'part_grp_code', key: true, width: 60},
            {name: 'name4', index: 'part_grp_code', key: true, width: 60},
            {name: 'name5', index: 'part_grp_name', width: 60},
            {name: 'name6', index: 'remark', width: 60},
            {name: 'name7', index: 'remark', width: 60},
            {name: 'name8', index: 'remark', width: 60},
            {name: 'useyn', index: 'remark', width: 60},
            {name: 'register', index: 'user_name', width: 60},
            {name: 'create_date', index: 'update_date', width: 60, formatter: formmatterDate,},
        ],
        caption: "공통코드관리 | MES",
        autowidth: true,
        height: 550,
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
            update_btn(data);

        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}

