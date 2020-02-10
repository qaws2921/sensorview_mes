////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    selectBox_modal1();
    datepickerInput_modal1();
}

////////////////////////////클릭 함수/////////////////////////////////////
function select_change1_modal1(value) {
    ccn_ajax('/popRouteOneGet',{keyword:value}).then(function (data){
        $('#line_name_modal1').val(data.lc1);
        $('#line_code_modal1').val(data.line_code1);
        select_data_makes2('#line_user_select_modal1','/popLineUserAllGet','user_code','user_name',{keyword:data.line_code1});
    });
}

function addUdate_btn() {
    var modal_objact = value_return(".modal_value");
    modal_objact.plan_date = modal_objact.plan_date.replace(/\-/g, '');
    modal_objact.end_date = modal_objact.end_date.replace(/\-/g, '');
    modal_objact.keyword = main_data.check;
    modal_objact.mat_name= $("#mat_prod_select_modal1 option:checked").text();

    console.log(modal_objact);

    if (effectiveness1(modal_objact)) {
        var text = '저장하겠습니까?';

        if (main_data.check === "U") {
            text = '수정하겠습니까?';
        }
        if (confirm(text)) {
            modal_objact.keyword = main_data.check;
            ccn_ajax("/popPlanSubAdd", modal_objact).then(function (data) {
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
function effectiveness1(modal_objact) { // 유효성 검사
    return true;
}

function datepickerInput_modal1() {
    datepicker_makes("#datepicker3", 0);
    datepicker_makes("#datepicker4", 1);
}

function selectBox_modal1() {
    select_data_makes2('#route_select_modal1','/popRouteGroupAllGet','route_code','route_name',{keyword:'2'}).then(function(data){
        $('#line_name_modal1').val(data[0].lc1);
        $('#line_code_modal1').val(data[0].line_code1);
        select_data_makes2('#line_user_select_modal1','/popLineUserAllGet','user_code','user_name',{keyword:data[0].line_code1});
    });
    $('#prod_type_select_modal1').select2();
    select_data_makes('#mat_prod_select_modal1','/sysCommon2AllGet','code_name1','code_name2',{keyword:'MAT_PROD',keyword2:'CODE'});
    part_type_select_ajax('#prod_dept_select_modal1',"/sysCommonAllGet",'code_value','code_name1',{keyword:'PROD_DEPT'});
    select_makes('#unit_select_modal1','/sysCommonUnitGet','code_value','code_name1');
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
