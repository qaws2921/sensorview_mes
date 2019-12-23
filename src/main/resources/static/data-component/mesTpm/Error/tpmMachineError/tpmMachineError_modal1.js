////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    selectBox_modal1();
    datepickerInput_modal1();
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

            ccn_ajax("/sysBPartAdd", modal_objact).then(function (data) {
                if (data.result === 'NG') {
                    alert(data.message);
                } else {
                    if (main_data.check === "I") {
                        get_btn(1);
                    } else {
                        get_btn_post($("#mes_grid").getGridParam('page'));
                    }
                }
                $("#addDialog").dialog('close');
            }).catch(function (err) {
                alert("저장실패");
            });
        }
    }

}

function select_change2(value) {
    select_makes_sub("#machine_select2","/tpmMachineAllGet","machine_code","machine_name",{keyword:value},"Y");
}



////////////////////////////호출 함수/////////////////////////////////////

function selectBox_modal1() {
    select_makes2("#line_select2", "/getLine", "line_code", "line_name").then(function (data){
        select_makes_sub("#machine_select2","/tpmMachineAllGet","machine_code","machine_name",{keyword:data},"N");
    });
}

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

function effectiveness1(modal_objact) { // 유효성 검사
    if (modal_objact.part_grp_code === '') {
        alert("품목구분을 선택해주세요");
        return false;
    } else if (modal_objact.part_code === '') {
        alert("품목코드를 입력해주세요");
        return false;
    } else if (modal_objact.part_name === '') {
        alert("품목명을 입력해주세요");
        return false;
    } else {

        return true;
    }
}

function datepickerInput_modal1() {
    datepicker_makes("#datepicker3", 0);

}