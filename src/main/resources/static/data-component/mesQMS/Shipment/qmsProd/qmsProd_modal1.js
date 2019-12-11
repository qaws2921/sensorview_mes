////////////////////////////데이터////////////////////////////////////////
var modal_grid_data=[{a:'그룹1',b:'part1',c:'제품1',d:'Ø0.91mm',e:'EA',f:'30',g:'샘플검사',h:'20',i:'10',j:'5',k:'불량',l:'조립',m:'미결합',n:'조치중',o:'Y'}];

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {

    modal_make1();
    jqGrid_modal1();
    datepickerInput_modal1();

    jqGridResize('#mes_modal_grid',$('#mes_modal_grid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////
function update_btn() {
    $("#addDialog").dialog('open');
    jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));
}
////////////////////////////호출 함수/////////////////////////////////////

function modal_make1() {
    $("#addDialog").dialog({
        modal: true,
        width:900,
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
        caption: "출하검사등록 | MES",
        colNames: ['품목그룹','품번','품명','규격','단위','입고LOT','검사구분','입고수량','검사수량','불량수량','검사결과','불량유형','불량상세','조치구분','성적서'],
        colModel: [
            {name: 'a', index: 'a', key:true, width: 80, sortable: false},
            {name: 'b', index: 'b',width: 80, sortable: false},
            {name: 'c', index: 'c',width: 80, sortable: false},
            {name: 'd', index: 'd',width: 80, sortable: false},
            {name: 'e', index: 'e',width: 80, sortable: false},
            {name: 'f', index: 'f',width: 80, sortable: false},
            {name: 'g', index: 'g',width: 80, sortable: false},
            {name: 'h', index: 'h',width: 80, sortable: false},
            {name: 'i', index: 'i',width: 80, sortable: false},
            {name: 'j', index: 'j',width: 80, sortable: false},
            {name: 'k', index: 'k',width: 80, sortable: false},
            {name: 'l', index: 'l',width: 80, sortable: false},
            {name: 'm', index: 'm',width: 80, sortable: false},
            {name: 'n', index: 'n',width: 80, sortable: false},
            {name: 'o', index: 'o',width: 80, sortable: false},
        ],
        autowidth: true,
        height: 250,
        rowNum: 100,

        rowList: [100, 200, 300, 400],
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            update_btn2();
        }
    });
}

function datepickerInput_modal1() {
    datepicker_makes("#datepicker3", 0);
}

