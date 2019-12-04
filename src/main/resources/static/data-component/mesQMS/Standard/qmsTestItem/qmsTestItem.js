/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly:[],
};

var grid_data=[];

////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid',$('#mes_grid').closest('[class*="col-"]'));

    modal_start1();
    selectBox();

    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////
function add_btn() {
    modal_reset(".modal_value", main_data.readonly);
    modalValuePush("#check_select","#check_code","#check_name");
    modalValuePush("#code_select","#code_code","#code_name");
    main_data.check = 'I';
    $("#addDialog").dialog('open');
}

////////////////////////////호출 함수//////////////////////////////////
function selectBox() {
    $('#check_select').select2();
    $('#code_select').select2();
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data: grid_data,
        datatype: "local",
        colNames: ['검사구분','코드그룹','검사코드','검사명','사용유무','등록자','수정일'],
        colModel: [
            {name: '', index: '', width: 50, sortable:false,},
            {name: '', index: '', width: 50, sortable:false,},
            {name: '', index: '', width: 50, sortable:false,},
            {name: '', index: '', width: 50, sortable:false,},
            {name: '', index: '', width: 50, sortable:false,},
            {name: '', index: '', width: 50, sortable:false,},
            {name: '', index: '', width: 50, sortable:false,},
        ],
        caption: "검사항목관리 | MES",
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
    });
}