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
    datepickerInput();
    selectBox();
    modal_start1();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

function add_btn() {
    if (main_data.auth.check_add != "N") {
        main_data.check = 'I';
        $("#addDialog").dialog('open');
    } else {
        alert("추가권한이 없습니다,");
    }
}

function select_change1(value) {
    part_type_select_ajax_all('#part_prod_select', "/sysPartGroup2AllGet", "part_grp_code2", "part_grp_name2", {keyword: 'B', keyword2: value});
}
////////////////////////////호출 함수//////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function selectBox() {
    part_type_select_ajax_all("#part_group_select", "/sysPartGroupAllGet", "part_grp_code", "part_grp_name", {keyword: 'B'}).then(function () {
        $('#part_prod_select').empty();
        var option = $("<option></option>").text('전체').val('');
        $('#part_prod_select').append(option);
        $('#part_prod_select').select2();
    });
}

function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "popPlanASSY"}).then(function (data) {
        main_data.auth = data;
    });
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['등록번호','품명','커넥터1','커넥터2','길이','단위','계획량','생산량','계획일','용도','생산구분','품목군','제품군','등록자','작업자','등록일','마감일','Remark','비고'],
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
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60},
            {name: '', index: '',sortable: false, width: 60}
        ],
        caption: "생산요청현황 | MES",
        autowidth: true,
        height: 570,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        multiselect : true,
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

