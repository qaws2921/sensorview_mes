
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
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize("#mes_grid2", $('#mes_grid2').closest('[class*="col-"]'));
    datepickerInput();
    /*----모달----*/
    suppModal_start();
    jqgridPagerIcons();
});

////////////////////////////클릭 함수//////////////////////////////////
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
        multiselect: true,
        // 타이틀
        caption: "자재마감 현황 | MES",
        colNames: ['마감일자','업체','금액','비고'],
        colModel: [
            {name: '', index: '' ,formatter: formmatterDate2, sortable: false},
            {name: '', index: '', sortable: false},
            {name: '', index: '', sortable: false},
            {name: '', index: '', sortable: false},
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
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창

        }

    });

    $('#mes_grid2').jqGrid({
        mtype: 'POST',
        datatype: "local",
        caption: "제품출고 지시 | MES",
        colNames: ['입고일자','전표번호','구분','품번','품명','업체','입고수량','화폐','단가','금액'],
        colModel: [
            {name: '', index: '' ,formatter: formmatterDate2, sortable: false},
            {name: '', index: '',sortable: false},
            {name: '', index: '',sortable: false},
            {name: '', index: '',sortable: false},
            {name: '', index: '',sortable: false},
            {name: '', index: '',sortable: false},
            {name: '', index: '',sortable: false},
            {name: '', index: '',sortable: false},
            {name: '', index: '',sortable: false},
            {name: '', index: '',sortable: false},

        ],
        autowidth: true,
        viewrecords: true,
        height: 200,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid_pager2'

    });

}