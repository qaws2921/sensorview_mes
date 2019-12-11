////////////////////////////데이터////////////////////////////////////////
var modal_grid_data=[];

var main_data = {
    supp_check: 'A',
};

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {

    modal_make1();
    jqGrid_modal1();
    datepickerInput_modal1();
    suppModal_start();

    jqGridResize('#mes_modal_grid',$('#mes_modal_grid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////
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

////////////////////////////호출 함수/////////////////////////////////////

function modal_make1() {
    $("#addDialog").dialog({
        modal: true,
        width:'auto',
        height: 'auto',
        autoOpen:false,
        resizable: false,
        buttons: [
            {
                "class": "hide",
            }
        ]
    });
}

function jqGrid_modal1() {
    $('#mes_modal_grid').jqGrid({
        datatype: "local",
        data: modal_grid_data,
        caption: "수입검사등록 | MES",
        colNames: ['품목그룹','품번','품명','규격','단위','입고LOT','검사구분','입고수량','검사수량','불량수량','검사결과','불량유형','불량상세','조치구분','성적서'],
        colModel: [
            {name: '', index: '', key:true, width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
        ],
        autowidth: true,
        height: 250,
        rowNum: 100,

        rowList: [100, 200, 300, 400],

    });
}

function datepickerInput_modal1() {
    datepicker_makes("#datepicker3", 0);
}

