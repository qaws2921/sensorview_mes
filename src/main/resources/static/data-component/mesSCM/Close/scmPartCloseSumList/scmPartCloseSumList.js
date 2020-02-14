
////////////////////////////데이터/////////////////////////////////////
var main_data = {
    check: 'I',
    supp_check: 'A',
    send_data: {},
    send_data_post: {},
    auth:{}
};


////////////////////////////시작 함수/////////////////////////////////////
$(document).ready(function () {
    jqGrid_main();

    datepickerInput();
    /*----모달----*/
    suppModal_start();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize("#mes_grid2", $('#mes_grid2').closest('[class*="col-"]'));
    jqgridPagerIcons();
});

////////////////////////////클릭 함수//////////////////////////////////


function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data.end_date = main_data.send_data.end_date.replace(/\-/g, '');
    $("#mes_grid").setGridParam({
        url: '/scmPartCloseSumListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
    $('#mes_grid2').jqGrid('clearGridData');
}

function under_get_btn(rowid) {
    $("#mes_grid2").setGridParam({
        url: '/scmPartCloseSumListSubGet',
        datatype: "json",
        page: 1,
        postData: {keyword:rowid}
    }).trigger("reloadGrid");
}


function supp_btn(what) {
    main_data.supp_check = what;

    $("#SuppSearchGrid").jqGrid('clearGridData');
    $("#supp-search-dialog").dialog('open');
    $('#gubun_select option:eq(0)').prop("selected", true).trigger("change");
    $('#supp_code_search').val('').trigger("change");

    jqGridResize2("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));

}

function suppModal_bus(code, name) {
    if (main_data.supp_check === 'A') {
        $("#supp_name_main").val(name);
        $("#supp_code_main").val(code);
    } else if (main_data.supp_check === 'B') {
        $("#supp_name_modal").val(name);
        $("#supp_code_modal").val(code);
    }
    $("#SuppSearchGrid").jqGrid('clearGridData');

}

function suppModal_close_bus() {
    if (main_data.supp_check === 'A') {
        $("#supp_name_main").val("");
        $("#supp_code_main").val("");
    }
    $("#SuppSearchGrid").jqGrid('clearGridData');
}
////////////////////////////호출 함수//////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function jqGrid_main() {
    $("#mes_grid").jqGrid({
        mtype: 'POST',
        datatype: "local",
        // 다중 select

        // 타이틀
        caption: "자재마감 현황 | MES",
        colNames: ['마감일자','마감번호','업체','금액','비고'],
        colModel: [
            {name: 'work_date', index: 'work_date' ,formatter: formmatterDate2, sortable: false},
            {name: 'close_no', index: 'close_no',key:true, sortable: false},
            {name: 'supp_name', index: 'supp_name', sortable: false},
            {name: 'amounts', index: 'amounts', sortable: false,formatter:comma},
            {name: 'remark', index: 'remark', sortable: false},
        ],
        autowidth: true,
        viewrecords: true,
        height: 250,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid_pager',

        onCellSelect: function (rowid, icol, cellcontent, e) {
            under_get_btn(rowid);
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창

        }

    });

    $('#mes_grid2').jqGrid({
        mtype: 'POST',
        datatype: "local",
        caption: "자재마감 현황 | MES",
        colNames: ['입고일자','전표번호','구분','품번','품명','업체','입고수량','화폐','단가','금액'],
        colModel: [
            {name: 'work_date', index: 'work_date' ,formatter: formmatterDate2, sortable: false},
            {name: 'in_no', index: 'in_no',sortable: false},
            {name: 'in_type_name', index: 'in_type_name',sortable: false},
            {name: 'part_code', index: 'part_code',sortable: false},
            {name: 'part_name', index: 'part_name',sortable: false},
            {name: 'supp_name', index: 'supp_name',sortable: false},
            {name: 'qty', index: 'qty',sortable: false,formatter:comma},
            {name: 'unit_name', index: 'unit_name',sortable: false},
            {name: 'unit_price', index: 'unit_price',sortable: false,formatter:comma},
            {name: 'amounts', index: 'amounts',sortable: false,formatter:comma},

        ],
        autowidth: true,
        viewrecords: true,
        height: 200,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid_pager2'

    });

}