var grid_data=[];
////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    jqGrid_modal1();

    jqGridResize('#mes_modal_grid',$('#mes_modal_grid').closest('[class*="col-"]'));
}

////////////////////////////클릭 함수/////////////////////////////////////

////////////////////////////호출 함수/////////////////////////////////////
function modal_make1() {

    $("#addDialog").dialog({
        modal: true,
        width: 800,
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

function jqGrid_modal1() {
    $('#mes_modal_grid').jqGrid({
        data:grid_data,
        datatype: "local",
        colNames: ['알람수신자'],
        colModel: [
            {name: '', index: '', key:true, sortable: false},
        ],
        width : 'auto',
        rowNum: 100,
        multiselect: 'true',
    });
}
