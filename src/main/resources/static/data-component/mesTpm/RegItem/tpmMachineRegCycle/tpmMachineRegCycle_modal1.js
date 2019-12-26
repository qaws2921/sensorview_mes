var grid_data=[];
////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    selectBox_modal1();
    datepickerInput_modal1();
}

////////////////////////////클릭 함수/////////////////////////////////////
function select_change2(value) {
    $('#machine_select2').empty();

    select_makes_sub_ajax("#machine_select2","/tpmMachineAllGet","machine_code","machine_name",{keyword:value}).then(function (data) {
        if ($("#machine_select").val() !== ''){
            $("#machine_select2").val($("#machine_select").val()).trigger("change");
            if ($("#machine_select2").val() === null){
                $("#machine_select2 option:eq(0)").prop("selected", true).trigger("change");
            }
        }else {
            $("#machine_select2 option:eq(0)").prop("selected", true).trigger("change");
        }

    });
}

////////////////////////////호출 함수/////////////////////////////////////

function selectBox_modal1() {
    select_makes2("#line_select2", "/getLine", "line_code", "line_name").then(function (data){
        select_makes_sub("#machine_select2","/tpmMachineAllGet","machine_code","machine_name",{keyword:data},"N");
    });
    select_makes3("#qc_select", "/tpmMachineRegItemAllGet","qc_code","qc_name",{keyword:'Y'});
    $('#cycle_select').select2();
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

function datepickerInput_modal1() {
    datepicker_makes1("#datepicker3", 1);
}