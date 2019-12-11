/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: ['part_grp_code']
};


////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    selectBox();
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));

    modal_start1();
    jqgridPagerIcons();


});


////////////////////////////클릭 함수//////////////////////////////////
function add_btn() {
    main_data.check = 'I';
    $("#addDialog").dialog('open');
}

////////////////////////////호출 함수//////////////////////////////////

function selectBox() {
    select_makes("#line_select", "/getLine", "line_code", "line_name");
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['설비코드', '설비명', '설치장소','비고', '등록자', '등록일'],
        colModel: [
            {name: '', index: '', key: true, sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', width: 60, sortable: false, formatter: formmatterDate,},
        ],
        caption: "설비정보관리 | MES",
        autowidth: true,
        height: 550,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        multiselect: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지

        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}
