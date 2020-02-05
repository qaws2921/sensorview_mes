/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: [],
    auth:{}
};
////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    authcheck();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

////////////////////////////호출 함수//////////////////////////////////
function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "popPlan1"}).then(function (data) {
        main_data.auth = data;
    });
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['등록번호','현황','제품명','계획량','생산량','용도','생산구분','품목군','제품군','등록자','등록일','마감일','Remark','비고'],
        colModel: [
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60}
        ],
        caption: "생산계획등록(1단계) | MES",
        autowidth: true,
        height: 570,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
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

