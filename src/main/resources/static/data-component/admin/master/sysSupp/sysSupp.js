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
    $("#mes_grid").setGridParam({
        url: '/sysSuppListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/sysSuppListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

////////////////////////////호출 함수//////////////////////////////////

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['업체코드','업체명','대표자','업체명(영문)','사업자번호','전화번호','업태','팩스번호','종목','결재방법','주소','등록자','등록일'],
        colModel: [
            {name: 'supp_code', index: 'supp_code',key:true, width: 60},
            {name: 'supp_name', index: 'supp_name', width: 60},
            {name: 'ceo', index: 'ceo', width: 60},
            {name: 'supp_name_en', index: 'supp_name_en', width: 60},
            {name: 'supp_no', index: 'supp_no', width: 60},
            {name: 'tel_no', index: 'tel_no', width: 60},
            {name: 'buss_type', index: 'buss_type', width: 60},
            {name: 'fax_no', index: 'fax_no', width: 60},
            {name: 'category', index: 'category', width: 60},
            {name: 'give_type', index: 'give_type', width: 60},
            {name: 'address', index: 'address', width: 60},
            {name: 'user_name', index: 'user_name', width: 60},
            {name: 'create_date', index: 'create_date', width: 60, formatter: formmatterDate,},
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
        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}

