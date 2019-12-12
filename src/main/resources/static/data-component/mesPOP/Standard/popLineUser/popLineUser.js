/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data=[];
var grid_data2=[];

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: ['']
};


////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize('#mes_grid2', $('#mes_grid2').closest('[class*="col-"]'));
    selectBox();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////
function add_btn() {
    main_data.check = 'I';
    $("#addDialog").dialog('open');
    jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));
}

////////////////////////////호출 함수//////////////////////////////////
function selectBox() {
    select_makes("#line_select", "/getLine", "line_code", "line_name");
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        data:grid_data,
        // mtype: 'POST',
        colNames: ['공정', '사용자코드', '사용자명'],
        colModel: [
            {name: '', index: '', key: true, sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
        ],
        caption: "공정별작업자 | MES",
        autowidth: true,
        height: 520,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        multiselect: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});

    $('#mes_grid2').jqGrid({
        datatype: "local",
        data:grid_data2,
        // mtype: 'POST',
        colNames: ['사용자코드', '사용자명'],
        colModel: [
            {name: '', index: '', key: true, sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
        ],
        caption: "공정별작업자 | MES",
        autowidth: true,
        height: 520,
        pager: '#mes_grid2_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        multiselect: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
        }
    }).navGrid('#mes_grid2_pager', {search: false, add: false, edit: false, del: false});
}
