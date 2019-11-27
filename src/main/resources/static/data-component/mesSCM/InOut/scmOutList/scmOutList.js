/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    send_data: {},
    send_data_post: {},
};

var grid_data=[];
var grid2_data=[];

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize("#mes_grid2", $('#mes_grid2').closest('[class*="col-"]'));
    datepickerInput();

    jqgridPagerIcons();
});
////////////////////////////클릭 함수/////////////////////////////////////
function get_btn(page) {
    main_data.send_data = value_return2(".condition_main");
    main_data.send_data_post = main_data.send_data;
    console.log(main_data.send_data);
    $("#mes_grid").setGridParam({
        url: '/scmOutListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/scmOutListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}
////////////////////////////호출 함수/////////////////////////////////////

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['출고일자','출고번호','업체명','품목그룹','품번','품명','규격','단위','출고수량','등록자','출고일시'],
        colModel: [
            {name: 'outdate', index: 'outdate', width: 60},
            {name: 'outnum', index: 'outnum', width: 60},
            {name: 'suppname', index: 'suppname', width: 60},
            {name: 'pgroup', index: 'pgroup', width: 60},
            {name: 'pnum', index: 'pnum', width: 60},
            {name: 'pname', index: 'pname', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'outcount', index: 'outcount', width: 60},
            {name: 'register', index: 'register', width: 60},
            {name: 'outdatetime', index: 'outdatetime', width: 60},
        ],
        caption: "출고현황 | MES",
        autowidth: true,
        height: 200,
        pager: '#mes_grid_pager',
        rowList:[100,200,300,500,1000],
        rowNum: 100,
        viewrecords: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onCellSelect:function (rowid,icol,cellcontent,e) {

        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
        }
    });

    $('#mes_grid2').jqGrid({
        data:grid2_data,
        datatype: "local",
        caption: "출고현황 | MES",
        colNames: ['출고일자','출고번호','업체명','품목그룹','품번','품명','규격','단위','출고수량','등록자','출고일시'],
        colModel: [
            {name: 'outdate', index: 'outdate', width: 60},
            {name: 'outnum', index: 'outnum', width: 60},
            {name: 'suppname', index: 'suppname', width: 60},
            {name: 'pgroup', index: 'pgroup', width: 60},
            {name: 'pnum', index: 'pnum', width: 60},
            {name: 'pname', index: 'pname', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'outcount', index: 'outcount', width: 60},
            {name: 'register', index: 'register', width: 60},
            {name: 'outdatetime', index: 'outdatetime', width: 60},
        ],
        viewrecords: true,
        height: 200,
        rowNum: 100,
        rowList:[100,200,300,500,1000],
    });
}
