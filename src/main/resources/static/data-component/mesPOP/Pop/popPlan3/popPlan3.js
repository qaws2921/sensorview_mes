/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    readonly: [],
    auth:{}
};
////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    authcheck();
    // modal_start1();
    datepickerInput();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////
function add_btn() {
    if (main_data.auth.check_add !="N") {
        main_data.check = 'I'; // 저장인지 체크
        $("#addDialog").dialog('open');
    } else {
        alert("추가권한이 없습니다,");
    }
}
////////////////////////////호출 함수//////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", 0);
}

function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "popPlan3"}).then(function (data) {
        main_data.auth = data;
    });
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        mtype: 'POST',
        datatype: 'local',
        multiselect: true,
        caption: '생산계획(3단계) | MES',
        colNames: ['등록번호', '공정명', '품명', '계획량','생산량','지시일','계획일','품목군','제품군','제품명','제품유형','용도','생산구분','등록자','작업자','등록일','마감일','Remark','비고'],
        colModel: [
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false}
        ],
        autowidth: true,
        viewrecords: true,
        height: 250,
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
            under_get(rowid);
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            if (data.status === '1') {
                main_data.check2 = 'N';
            } else {
                main_data.check2 = 'Y';
            }
            update_btn(rowid);
        }
    });

    $('#mes_grid2').jqGrid({
        mtype: 'POST',
        datatype: 'local',
        caption: '생산계획(3단계) | MES',
        colNames: ['지시번호', '공정명', '품명', '계획량','생산량' ,'용도','생산구분','품목군','제품군','등록자','등록일','마감일','Remark','비고'],
        colModel: [
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false}
        ],
        autowidth: true,
        viewrecords: true,
        height: 200,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid2_pager'

    });
}