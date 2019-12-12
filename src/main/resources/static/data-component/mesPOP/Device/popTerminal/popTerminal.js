/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data=[{a:'1',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:'1'}];

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
    modal_start1();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////
function add_btn() {
    main_data.check = 'I';
    $("#addDialog").dialog('open');
}

////////////////////////////호출 함수//////////////////////////////////
// function subBtn(cellvalue, options, rowObject) {
//     return ' <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" title="" onclick="modal2_modal_open()">\n' +
//         '                            <span><i class="fa fa-plus bigger-110 blue"></i>\n' +
//         '                            <span>등록</span>\n' +
//         '                            </span>\n' +
//         '                    </a>';
// }

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data:grid_data,
        datatype: "local",
        // mtype: 'POST',
        colNames: ['단말기코드','단말기명','컴퓨터명','화면X','화면Y','바코드양식','등록자','등록일시','세부항목'],
        colModel: [
            {name: 'a', index: 'a', key: true, sortable: false, width: 60},
            {name: 'b', index: 'b', sortable: false, width: 60},
            {name: 'c', index: 'c', sortable: false, width: 60},
            {name: 'd', index: 'd', sortable: false, width: 60},
            {name: 'e', index: 'e', sortable: false, width: 60},
            {name: 'f', index: 'f', sortable: false, width: 60},
            {name: 'g', index: 'g', sortable: false, width: 60},
            {name: 'h', index: 'h', width: 60, sortable: false, formatter: formmatterDate,},
            {name: 'i', index: 'i', sortable: false,width: 60},
        ],
        caption: "공정마스터관리 | MES",
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
        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}
