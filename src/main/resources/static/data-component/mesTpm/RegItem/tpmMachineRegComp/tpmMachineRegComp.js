/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data=[{a:'20191101',b:'압출',c:'압출1호기',d:'노즐확인',e:'Y',f:'양호',g:'비고',h:'관리자',i:'20191211111111'}];

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: ['']
};


////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    selectBox();
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    datepickerInput();
    modal_start1();
    jqgridPagerIcons();


});


////////////////////////////클릭 함수//////////////////////////////////
function add_btn() {
    main_data.check = 'I';
    $("#addDialog").dialog('open');
    jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));
}

////////////////////////////호출 함수//////////////////////////////////

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function selectBox() {
    select_makes("#line_select", "/getLine", "line_code", "line_name");
    $('#tpm_select').select2();
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        data:grid_data,
        // mtype: 'POST',
        colNames: ['점검예정일', '라인', '설비','점검항목', '점검유무', '점검결과','조치사항','등록자','점검일시'],
        colModel: [
            {name: 'a', index: 'a', key: true, sortable: false, width: 60, formatter:formmatterDate2},
            {name: 'b', index: 'b', sortable: false, width: 60},
            {name: 'c', index: 'c', sortable: false, width: 60},
            {name: 'd', index: 'd', sortable: false, width: 60},
            {name: 'e', index: 'e', sortable: false, width: 60},
            {name: 'f', index: 'f', sortable: false, width: 60},
            {name: 'g', index: 'g', sortable: false, width: 60},
            {name: 'h', index: 'h', sortable: false, width: 60},
            {name: 'i', index: 'i', width: 60, sortable: false, formatter: formmatterDate,},
        ],
        caption: "예방점검관리 | MES",
        autowidth: true,
        height: 550,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지

        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            update_btn(rowid);
        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}
