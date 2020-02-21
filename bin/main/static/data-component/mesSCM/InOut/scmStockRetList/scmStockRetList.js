/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    supp_check: 'A',
    send_data: {},
    auth:{}
};

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    datepickerInput();

    suppModal_start();
    authcheck();
    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return2(".condition_main");
    $("#mes_grid").setGridParam({
        url: '/scmStockRetListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
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

function excel_download() {
    if (confirm("엑셀로 저장하시겠습니까?")) {
        var $preparingFileModal = $("#preparing-file-modal");
        $preparingFileModal.dialog({modal: true});
        $("#progressbar").progressbar({value: false});
        $.fileDownload("/excel_download", {
            httpMethod: 'POST',
            data : {
                "name":"scmStockRetList",
                "row0":$('#datepicker').val().replace(/-/gi,""),
                "row1": $('#datepicker2').val().replace(/-/gi,""),
                "row2":$('#supp_code_main').val()
            },
            successCallback: function (url) {
                console.log($('#supp_code_main').val());
                $preparingFileModal.dialog('close');
            },
            failCallback: function (responseHtml, url) {
                console.log($('#supp_code_main').val());
                $preparingFileModal.dialog('close');
                $("#error-modal").dialog({modal: true});
            }
        });
        return false;
    } else {
        alert('다운로드가 취소되었습니다.');
    }
}

////////////////////////////호출 함수/////////////////////////////////////
function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "scmStockRetList"}).then(function (data) {
        main_data.auth = data;
    });
}

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        caption: "자재반출현황 | MES",
        colNames: ['반출일자', '반출번호', '업체명', '품번', '품명', '규격', '단위', '반출수량', '등록자', '반출일시'],
        colModel: [
            {name: 'work_date', index: 'work_date', sortable: false, width: 60,formatter: formmatterDate2},
            {name: 'ret_no', index: 'ret_no', sortable: false, width: 60},
            {name: 'supp_name', index: 'supp_name', sortable: false, width: 60},
            {name: 'part_code', index: 'part_code', sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 60},
            {name: 'qty', index: 'qty', sortable: false, width: 60},
            {name: 'user_name', index: 'user_name', sortable: false, width: 60},
            {name: 'update_date', index: 'update_date', sortable: false, width: 60,formatter: formmatterDate}
        ],
        viewrecords: true,
        height: 570,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid_pager'
    });
}