////////////////////////////데이터////////////////////////////////////////
var modal_grid_data=[];

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {

    modal_make1();
    datepickerInput_modal1();
    jqGrid_modal1();

    jqGridResize('#mes_modal_grid',$('#mes_modal_grid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////

////////////////////////////호출 함수/////////////////////////////////////

function modal_make1() {
    $("#addDialog").dialog({
        autoOpen:false,
        modal: true,
        minWidth:900,
        height: 'auto',
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
        pager: '#mes_modal_grid_pager',
        rowList: [100, 200, 300, 400],
        viewrecords: true,
    });
}

function datepickerInput_modal1() {
    datepicker_makes("#datepicker3", 0);
}

