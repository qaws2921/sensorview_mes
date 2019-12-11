var grid_data=[];

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    jqGrid_modal();
}

////////////////////////////클릭 함수/////////////////////////////////////

////////////////////////////호출 함수/////////////////////////////////////
function modal_make1() {

    $("#addDialog").dialog({
        modal: true,
        width: '800',
        height: 'auto',
        autoOpen: false,
        resizable: false,
        buttons: [
            {
                text: '저장',
                'class': 'btn btn-primary btn-minier',
                click: function () {
                    $(this).dialog('close');
                }
            },
            {
                text: '취소',
                'class': 'btn btn-minier',
                click: function () {
                    $(this).dialog('close');
                }
            }
        ]
    })
}

function jqGrid_modal() {
    $('#mes_modal_grid').jqGrid({
        data:grid_data,
        datatype: "local",
        colNames: ['부품명','규격','소요수량','구매처','연락처','비고'],
        colModel: [
            {name: '', index: '', key:true, sortable: false},
            {name: 'a', index: 'a', sortable: false},
            {name: '', index: '', sortable: false},
            {name: '', index: '', sortable: false},
            {name: '', index: '', sortable: false},
            {name: '', index: '', sortable: false}
        ],
        width : "485",
        rowNum: 100,
        rowList:[100,200,300,500,1000],
    });
}
