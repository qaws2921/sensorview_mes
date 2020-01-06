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
    if ($("#LT").val() === "") {
        $("#LT").val(0);
    } else {
        $("#LT").val($("#LT").val().replace(/[^0-9]/g, ''));
    }
}
function inputIntChangeMaxQty() {
    if ($("#max_qty").val() === ""){
        $("#max_qty").val(0);
    }else {
        $("#max_qty").val($("#max_qty").val().replace(/[^0-9]/g,''));
    }

}
function inputIntChangeMinQty() {
    if ($("#min_qty").val() === ""){
        $("#min_qty").val(0);
    }else {
        $("#min_qty").val($("#min_qty").val().replace(/[^0-9]/g,''));
    }

}
function inputIntChangeOrdQty() {
    if ($("#ord_qty").val() === ""){
        $("#ord_qty").val(0);
    }else {
        $("#ord_qty").val($("#ord_qty").val().replace(/[^0-9]/g,''));
    }
}
function supp_btn(what) {
    modal_data.supp_check = what;
    $("#supp_modal_keyword").val("supp_name");
    $("#supp_modal_keyword2").val("");

    $("#SuppSearchGrid").jqGrid('clearGridData');
    $("#supp-search-dialog").dialog('open');
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