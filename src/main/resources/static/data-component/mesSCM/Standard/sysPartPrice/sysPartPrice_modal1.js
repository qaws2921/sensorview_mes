////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    selectBox_modal1();
    datepickerInput_modal1();
    modal_make1();
}


////////////////////////////클릭 함수/////////////////////////////////////
function addUdate_btn() {
    var modal_objact = value_return(".modal_value");
    modal_objact.start_date = modal_objact.start_date.replace(/[^0-9]/g,'');
    modal_objact.stop_date = modal_objact.stop_date.replace(/[^0-9]/g,'');
    if (modal_objact.unit_price === ''){
        modal_objact.unit_price = 0;
    }

    if (effectiveness1(modal_objact)) {
        var text = '저장하겠습니까?';
        if (main_data.check === "U") {
            text = '수정하겠습니까?';
        }
        if (confirm(text)) {

            modal_objact.keyword = main_data.check;

            ccn_ajax("/sysPartPriceAdd", modal_objact).then(function (data) {
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


function  partModal_bus(rowid,name) {
    modal_reset(".part_value", []);
    $("#part_name_modal").val(name);
    $("#part_code_modal").val(rowid);
}

function part_btn() {
    $("#partSearchGrid").jqGrid('clearGridData');
    $("select#part_type_select_modal option[value='B']").remove();
    $("#part_type_select_modal  option:eq(0)").prop("selected", true).trigger("change");
    $("#part-search-dialog").dialog('open');
    jqGridResize2("#partSearchGrid", $('#partSearchGrid').closest('[class*="col-"]'));
}


////////////////////////////호출 함수/////////////////////////////////////

function datepickerInput_modal1() {
    datepicker_makes("#datepicker3", 0);
    datepicker_makes("#datepicker4", 1);
}


function effectiveness1(modal_objact) { // 유효성 검사
    if (modal_objact.supp_code === '') {
        alert("업체를 선택해주세요");
        return false;
    } else if (modal_objact.part_code === '') {
        alert("품목을 선택해주세요");
        return false;
    } else if (modal_objact.start_date === '') {
        alert("시작일을 선택해주세요");
        return false;
    }  else {
        return true;
    }
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
                text: "저장",
                'id': "addUdate_btn",
                "class": "btn btn-primary btn-minier",
                click: function () {
                    addUdate_btn();
                }
            },
            {
                text: "취소",
                "class": "btn btn-minier",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ],
        open: function () {
            if ($.ui && $.ui.dialog && !$.ui.dialog.prototype._allowInteractionRemapped && $(this).closest(".ui-dialog").length) {
                if ($.ui.dialog.prototype._allowInteraction) {
                    $.ui.dialog.prototype._allowInteraction = function (e) {
                        if ($(e.target).closest('.select2-drop').length) return true;

                        if (typeof ui_dialog_interaction!="undefined") {
                            return ui_dialog_interaction.apply(this, arguments);
                        } else {
                            return true;
                        }
                    };
                    $.ui.dialog.prototype._allowInteractionRemapped = true;
                }
                else {
                    $.error("You must upgrade jQuery UI or else.");
                }
            }
        },
        _allowInteraction: function (event) {
            return !!$(e.target).closest('.ui-dialog, .ui-datepicker, .select2-drop').length;
        }
    });


}

function selectBox_modal1() {
    select_data_makes('#currency_select','/sysCommonAllGet','code_value','code_name1',{keyword:'CURRENCY_TYPE'});
}