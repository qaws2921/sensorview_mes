
////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
}


////////////////////////////클릭 함수/////////////////////////////////////


function addUdate_btn() {
    var modal_objact = value_return(".modal_value");
    if (effectiveness1(modal_objact)) {
        var text = '저장하겠습니까?';
        if (main_data.check === "U") {
            text = '수정하겠습니까?';
        }
        if (confirm(text)) {

            modal_objact.keyword = main_data.check;

            ccn_ajax("/popPCAdd", modal_objact).then(function (data) {
                if (data.result === 'NG') {
                    alert(data.message);
                } else {
                    if (main_data.check === "I") {
                        get_btn(1);
                    } else {
                        get_btn($("#mes_grid").getGridParam('page'));
                    }
                }
                $("#addDialog").dialog('close');
            }).catch(function (err) {
                alert("저장실패");
            });
        }
    }

}



////////////////////////////호출 함수/////////////////////////////////////

function modal_make1() {
    $("#addDialog").dialog({
        autoOpen:false,
        modal: true,
        width: 'auto',
        height: 'auto',
        resizable: false,
        buttons: [
            {
                text: '저장',
                'class': 'btn btn-primary btn-minier',
                click: function () {
                    addUdate_btn();
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
    });
}


function effectiveness1(modal_objact) { // 유효성 검사
    if (modal_objact.pc_code === '') {
        alert("컴퓨터코드를 입력해주세요");
        return false;
    } else if (modal_objact.pc_name === '') {
        alert("컴퓨터명을 입력해주세요");
        return false;
    } else if (modal_objact.ip === '') {
        alert("ip를 입력해주세요");
        return false;
    } else {

        return true;
    }
}
