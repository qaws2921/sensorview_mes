/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    supp_check:'A',
    send_data: {},
    send_data_post: {},

};

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));

    datepickerInput();
    suppModal_start();

    jqgridPagerIcons();

});

////////////////////////////클릭 함수/////////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;
    console.log(main_data.send_data_post);

    $("#mes_grid").setGridParam({
        url: '/scmInListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/scmInListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function supp_btn(what) {
    main_data.supp_check = what;
    $("#supp_modal_keyword").val("supp_name");
    $("#supp_modal_keyword2").val("");

    $( "#SuppSearchGrid" ).jqGrid('clearGridData');
    $( "#supp-search-dialog" ).dialog('open');
    jqGridResize2("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
}

function suppModal_bus(code,name) {
    if (main_data.supp_check === 'A'){
        $("#supp_name_main").val(name);
        $("#supp_code_main").val(code);
    }else if(main_data.supp_check === 'B'){
        $("#supp_name_modal").val(name);
        $("#supp_code_modal").val(code);
    }
    $( "#SuppSearchGrid" ).jqGrid('clearGridData');

}
////////////////////////////호출 함수/////////////////////////////////////

function datepickerInput() {
    datepicker_makes("#datepicker",-1);
    datepicker_makes("#datepicker2",0);

}


function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "입고현황 | MES",
        colNames: ['입고일자','입고번호','업체명','품목그룹','품번','품명','규격','단위','입고수량','불량수량','실입고수량','등록자','입고일시'],
        colModel: [
            {name: 'indate', index: 'indate', width: 60},
            {name: 'innum', index: 'innum', width: 60},
            {name: 'suppname', index: 'suppname', width: 60},
            {name: 'pgroup', index: 'pgroup', width: 60},
            {name: 'pnum', index: 'pnum', width: 60},
            {name: 'pname', index: 'pname', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'incount', index: 'incount', width: 60},
            {name: 'badcount', index: 'badcount', width: 60},
            {name: 'realcount', index: 'realcount', width: 60},
            {name: 'register', index: 'register', width: 60},
            {name: 'indatetime', index: 'indatetime', width: 60},
        ],
        viewrecords: true,
        height: 500,
        rowNum: 100,
        rowList:[100,200,300,500,1000],
        pager: '#mes_grid_pager',
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onCellSelect:function (rowid,icol,cellcontent,e) {
            under_get(rowid);
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            update_btn(data);

        }
    });
}