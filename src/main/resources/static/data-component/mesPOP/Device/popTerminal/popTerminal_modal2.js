var grid_modal_data=[];
////////////////////////////시작 함수/////////////////////////////////////
function modal_start2() {
    modal_make2();

    jqGrid_modal();
    jqGridResize('#mes_modal_grid', $('#mes_grid').closest('[class*="col-"]'));
    jqgridPagerIcons();
}

////////////////////////////클릭 함수/////////////////////////////////////

////////////////////////////호출 함수/////////////////////////////////////
function modal_make2() {

    $("#addDialog2").dialog({
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

function jqGrid_modal() {
    $('#mes_modal_grid').jqGrid({
        datatype: "local",
        data:grid_modal_data,
        // mtype: 'POST',
        colNames: ['세부코드','세부내용','적용값'],
        colModel: [
            {name: '', index: '', key: true, sortable: false, },
            {name: '', index: '', sortable: false, },
            {name: '', index: '', sortable: false,},
        ],
        caption: "공정마스터세부항목추가 | MES",
        width: 400,
        height: 300,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        multiselect: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
        }
    });
}
