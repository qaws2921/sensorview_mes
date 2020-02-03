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
                text: '저장',
                'class': 'btn btn-primary btn-minier',
                click: function () {

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

function effectiveness1(modal_objact) { // 유효성 검사
    // if (modal_objact. === '') {
    //     alert(" 입력해주세요");
    //     return false;
    // } else if (modal_objact. === '') {
    //     alert(" 입력해주세요");
    //     return false;
    // } else {
    return true;
    // }
}
