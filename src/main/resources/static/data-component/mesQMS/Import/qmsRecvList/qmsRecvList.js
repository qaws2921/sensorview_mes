/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data=[];

var main_data = {
    check: 'I',
    supp_check: 'A',
    send_data: {},
    send_data_post: {},
};

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));

    datepickerInput();
    suppModal_start();
    selectBox();

    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data.end_date = main_data.send_data.end_date.replace(/\-/g, '');
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: "/qmsRecvListGet",
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}



function supp_btn(what) {
    main_data.supp_check = what;
    $("#supp_modal_keyword").val("supp_name");
    $("#supp_modal_keyword2").val("");

    $("#SuppSearchGrid").jqGrid('clearGridData');
    $("#supp-search-dialog").dialog('open');
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
        $preparingFileModal.dialog({ modal: true });
        $("#progressbar").progressbar({value: false});
        $.fileDownload ("/excel_download", {
            data : {
                "name": "qmsRecvList",
                "row0": $('#datepicker').val().replace(/-/gi, ""),
                "row1": $('#datepicker2').val().replace(/-/gi, ""),
                "row2": $('#supp_code_main').val(),
                "row3": $("#result_select").val()
            },
            successCallback: function (url) {
                $preparingFileModal.dialog('close');
            },
            failCallback: function (responseHtml, url) {
                $preparingFileModal.dialog('close');
                $("#error-modal").dialog({ modal: true });
            }
        });
        return false;
    }else{
        alert('다운로드가 취소되었습니다.');
    }
}






////////////////////////////호출 함수/////////////////////////////////////

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function selectBox() {
    $('#result_select').select2();
}


function jqGrid_main() {
    $('#mes_grid').jqGrid({
        mtype: 'POST',
        datatype: "local",
        colNames: ['rownum','입고일자', '전표번호', '업체', '품목그룹', '품번', '품명', '규격', '단위',  '검사등급'
            , '입고수량','검사수량','불량수량', '검사결과','불량유형'
            ,'불량내용','완료여부','성적서','부적합보고서','개선조치','file1','file2','file3','검사자','검사일시'],
        colModel: [
            {name: 'rownum', index: 'rownum', key:true, hidden:true, sortable: false, width: 80},
            {name: 'work_date', index: 'work_date', sortable: false, width: 60, formatter: formmatterDate2},
            {name: 'in_no', index: 'in_no', sortable: false, width: 80},
            {name: 'supp_name', index: 'supp_name', sortable: false, width: 60},
            {name: 'part_grp_name', index: 'part_grp_name', sortable: false, width: 60},
            {name: 'part_code', index: 'part_code', sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 60},
            {name: 'qc_level_name', index: 'qc_level_name', sortable: false, width: 60},
            {name: 'in_qty', index: 'in_qty', sortable: false, width: 60},
            {name: 'qc_qty', index: 'qc_qty', sortable: false, width: 60},
            {name: 'ng_qty', index: 'ng_qty', sortable: false, width: 60},
            {name: 'qc_result_name', index: 'qc_result_name', sortable: false, width: 60},
            {name: 'qc_name', index: 'qc_name', sortable: false, width: 60},
            {name: 'ng_name', index: 'ng_name', sortable: false, width: 60},
            {name: 'act_type_name', index: 'act_type_name', sortable: false, width: 60},
            {name: 'file1_name', index: 'file1_name', sortable: false, width: 60,align :'center', formatter:file1_formatter},
            {name: 'file2_name', index: 'file2_name', sortable: false, width: 60,align :'center', formatter:file2_formatter},
            {name: 'file3_name', index: 'file3_name', sortable: false, width: 60,align :'center', formatter:file3_formatter},
            {name: 'file1', index: 'file1', sortable: false, width: 60,hidden:true},
            {name: 'file2', index: 'file2', sortable: false, width: 60,hidden:true},
            {name: 'file3', index: 'file3', sortable: false, width: 60,hidden:true},
            {name: 'user_name', index: 'user_name', sortable: false, width: 60},
            {name: 'update_date', index: 'update_date', sortable: false, width: 90, formatter: formmatterDate},

        ],
        caption: "수입검사현황 | MES",
        autowidth: true,
        height: $(window).height() - 450,
        pager: '#mes_grid_pager',
        rowList: [100, 200, 300, 500, 1000],
        rowNum: 100,
        viewrecords: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onCellSelect: function (rowid, icol, cellcontent, e) {

        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
        }
    });
}


function file1_formatter(cellvalue, options, rowObject) {
   if(cellvalue === "Y"){
       return "" +
           " <a class='dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold'"+
           "tabindex='0' aria-controls='dynamic-table' data-original-title='' title='' onclick='file_download(\""+rowObject.file1+"\");'>"+
           "<span><i class='fa fa-download bigger-110 blue'></i>"+
           "<span>저장</span>"+
           "</span>"+
           "</a>";
   }else {
       return cellvalue;
   }
}
function file2_formatter(cellvalue, options, rowObject) {
    if(cellvalue === "Y"){
        return "" +
            " <a class='dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold'"+
            "tabindex='0' aria-controls='dynamic-table' data-original-title='' title='' onclick='file_download(\""+rowObject.file2+"\");'>"+
            "<span><i class='fa fa-download bigger-110 blue'></i>"+
            "<span>저장</span>"+
            "</span>"+
            "</a>";
    }else {
        return cellvalue;
    }
}
function file3_formatter(cellvalue, options, rowObject) {
    if(cellvalue === "Y"){
        return "" +
            " <a class='dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold'"+
            "tabindex='0' aria-controls='dynamic-table' data-original-title='' title='' onclick='file_download(\""+rowObject.file3+"\");'>"+
            "<span><i class='fa fa-download bigger-110 blue'></i>"+
            "<span>저장</span>"+
            "</span>"+
            "</a>";
    }else {
        return cellvalue;
    }
}

function file_download(file_name) {
    alert(file_name);
}