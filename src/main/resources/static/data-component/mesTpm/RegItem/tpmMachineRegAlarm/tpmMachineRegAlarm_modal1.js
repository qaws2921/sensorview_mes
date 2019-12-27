////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    jqGrid_modal1();
    jqGridResize("#mes_modal1_grid1", $('#mes_modal1_grid1').closest('[class*="col-"]'));
    jqGridResize("#mes_modal1_grid2", $('#mes_modal1_grid2').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////


////////////////////////////호출 함수/////////////////////////////////////

function modal_make1() {

    $("#addDialog").dialog({
        modal: true,
        width: 900,
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

function jqGrid_modal1() {
    $("#mes_modal1_grid1").jqGrid({
        mtype: 'POST',
        datatype: "local",
        multiselect: true,
        caption: "예방점검알람추가 | MES",
        colNames: ['사용자코드', '사용자명'],
        colModel: [
            {name: '', index: '', sortable: false},
            {name: '', index: '', sortable: false},
        ],
        autowidth: true,
        height: 300,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: "#mes_modal1_grid1_pager",
    });

    $("#mes_modal1_grid2").jqGrid({
        mtype: 'POST',
        datatype: "local",
        multiselect: true,
        caption: "예방점검알람추가 | MES",
        colNames: ['사용자코드', '사용자명'],
        colModel: [
            {name: '', index: '', sortable: false},
            {name: '', index: '', sortable: false},
        ],
        autowidth: true,
        height: 340,
    });

}
