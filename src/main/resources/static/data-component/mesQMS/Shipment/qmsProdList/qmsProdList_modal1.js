
////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
}

////////////////////////////클릭 함수/////////////////////////////////////

////////////////////////////호출 함수/////////////////////////////////////

function modal_make1() {
    $("#addDialog").dialog({
        modal: true,
        width: 'auto',
        height: 'auto',
        autoOpen: false,
        resizable: false,
        buttons: [
            {
                text: '닫기',
                'class': 'btn btn-minier',
                click: function () {
                    $("#addDialog").dialog('close');
                }
            }
        ]
    });
}