var modal_data = {
    supp_check: 'A',
};
////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    selectBox_modal1();
    suppModal_start();
}

////////////////////////////클릭 함수/////////////////////////////////////
function inputIntChangeLT() {
    if ($("#lt").val() !== "") {
        $("#lt").val($("#lt").val().replace(/[^0-9]/g, ''));
    }
}
function inputIntChangeMaxQty() {
    if ($("#max_qty").val() !== ""){
        $("#max_qty").val($("#max_qty").val().replace(/[^0-9]/g,''));
    }

}
function inputIntChangeMinQty() {
    if ($("#min_qty").val() !== ""){
        $("#min_qty").val($("#min_qty").val().replace(/[^0-9]/g,''));
    }

}
function inputIntChangeOrdQty() {
    if ($("#ord_qty").val() !== ""){
        $("#ord_qty").val($("#ord_qty").val().replace(/[^0-9]/g,''));
    }
}

function supp_btn(what) {
    modal_data.supp_check = what;
    $("#SuppSearchGrid").jqGrid('clearGridData');
    $("#supp-search-dialog").dialog('open');
    $('#gubun_select option:eq(0)').prop("selected", true).trigger("change");
    $('#supp_code_search').val('').trigger("change");
    jqGridResize2("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
}

function suppModal_bus(code, name) {
    if (modal_data.supp_check === 'A') {
        $("#supp_name_main").val(name);
        $("#supp_code_main").val(code);
    }
    $("#SuppSearchGrid").jqGrid('clearGridData');

}

function suppModal_close_bus() {
    if (modal_data.supp_check === 'A') {
        $("#supp_name_main").val("");
        $("#supp_code_main").val("");
    }
    $("#SuppSearchGrid").jqGrid('clearGridData');
}

function addUdate_btn() {
    if ($("#lt").val() === "") {
        $("#lt").val(0);
    }
    if ($("#max_qty").val() === ""){
        $("#max_qty").val(0);
    }
    if ($("#min_qty").val() === ""){
        $("#min_qty").val(0);
    }
    if ($("#ord_qty").val() === ""){
        $("#ord_qty").val(0);
    }

    var modal_objact = value_return(".modal_value");

    if (effectiveness1(modal_objact)) {
        var text = '저장하겠습니까?';
        if (main_data.check === "U") {
            text = '수정하겠습니까?';
        }
        if (confirm(text)) {

            modal_objact.keyword = main_data.check;
            ccn_ajax("/sysPartAdd", modal_objact).then(function (data) {
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

function selectBox_modal1() {

    // select_makes3("#cargo_select", "/cargoListGet", "cargo_code", "cargo_name",{keyword:'',keyword2:''}).then(function (data) {
    select_data_makes('#loc_select','/sysLocAll2Get',"loc_code","loc_name",{keyword:'M100'});
    // });
    select_makes('#unit_select','/sysCommonUnitGet','code_value','code_name1');
    $('#qc_select').select2();
}

function effectiveness1(modal_objact) { // 유효성 검사
    if (modal_objact.part_type === '') {
        alert("구분을 선택해주세요");
        return false;
    }else if (modal_objact.part_group1 === '') {
        alert("part_group1 을 입력해주세요");
        return false;
    }else if (modal_objact.part_group2 === '') {
        alert("part_group2 을 입력해주세요");
        return false;
    } else if (modal_objact.part_group3 === '') {
        alert("part_group3 을 입력해주세요");
        return false;
    }  else if (modal_objact.part_name === '') {
        alert("품목명을 입력해주세요");
        return false;
    } else {
        return true;
    }
}