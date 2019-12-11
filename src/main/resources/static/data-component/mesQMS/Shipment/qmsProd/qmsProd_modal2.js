////////////////////////////시작 함수/////////////////////////////////////
function modal_start2() {
    modal_make2();
}
////////////////////////////클릭 함수/////////////////////////////////////
function update_btn2() {
    $("#addDialog2").dialog('open');
}
////////////////////////////호출 함수/////////////////////////////////////
function modal_make2() {
    $("#addDialog2").dialog({
        modal: true,
        width:'auto',
        height: 'auto',
        autoOpen:false,
        resizable: false,
        buttons: [
            {
                text: '등록',
                'class': 'btn btn-primary btn-minier',
                click: function () {
                    $(this).dialog('close');
                }
            },
            {
                text: '닫기',
                'class': 'btn btn-minier',
                click: function () {
                    $(this).dialog('close');
                }
            }
        ]
    });
}