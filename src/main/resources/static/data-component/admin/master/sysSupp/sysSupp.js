/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////


var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly:[]
}

var grid_data=[];

////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////
function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;
    console.log(main_data.send_data);
    // $("#mes_grid").setGridParam({
    //     url: '/sysCommonGet',
    //     datatype: "json",
    //     page: page,
    //     postData: main_data.send_data
    // }).trigger("reloadGrid");
}

function get_btn_post(page) {
    // $("#mes_grid").setGridParam({
    //     url: '/sysCommonGet',
    //     datatype: "json",
    //     page: page,
    //     postData: main_data.send_data_post
    // }).trigger("reloadGrid");
}

////////////////////////////호출 함수//////////////////////////////////

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        data : grid_data,
        datatype: "local",
        mtype: 'POST',
        colNames: ['업체코드','업체명', '업체명(영문)', '사업자번호', '대표자', '등록자','등록일'],
        colModel: [
            {name: '', index: '',key:true, width: 60},
            {name: '', index: '', width: 60},
            {name: '', index: '', width: 60},
            {name: '', index: '', width: 60},
            {name: '', index: '', width: 60},
            {name: '', index: '', width: 60},
            {name: '', index: '', width: 60, formatter: formmatterDate,},
        ],
        caption: "업체코드관리 | MES",
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

