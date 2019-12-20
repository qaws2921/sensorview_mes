////////////////////////////시작 함수/////////////////////////////////////

function modal_start1() {
    modal_make1();
    selectBox_modal();
}

////////////////////////////클릭 함수/////////////////////////////////////

////////////////////////////호출 함수/////////////////////////////////////
//모달생성
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
    })
}

function selectBox_modal() {
    select_makes("#dept_select", "/sysDeptAllGet", "dept_code", "dept_name");
}
// // 유효성 검사
// function effectiveness1(modal_objact) {
//     if (modal_objact.board_code === '') {
//         alert("게시판코드를 입력해주세요");
//         return false;
//     } else if (modal_objact.board_en === '') {
//         alert("영문명을 입력해주세요");
//         return false;
//     } else if (modal_objact.board_kr === '') {
//         alert("한글명을 입력해주세요");
//         return false;
//     }else if (modal_objact.board_auth === '') {
//         alert("권한을 선택해주세요");
//         return false;
//     } else {
//         return true;
//     }
// }
