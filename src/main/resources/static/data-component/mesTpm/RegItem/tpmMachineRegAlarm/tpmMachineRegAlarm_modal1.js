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

function jqGrid_modal1() {
    $("#mes_modal1_grid1").jqGrid({
        mtype: 'POST',
        datatype: "local",
        multiselect: true,
        caption: "입고등록 | MES",
        colNames: ['품목그룹', '품번', '품명', '규격', '단위', '포장수량', '검사등급'],
        colModel: [
            {name: 'part_grp_name', index: 'part_grp_name', sortable: false},
            {name: 'part_code', key: true, index: 'part_code', sortable: false},
            {name: 'part_name', index: 'part_name', sortable: false},
            {name: 'spec', index: 'spec', sortable: false},
            {name: 'unit_name', index: 'unit_name'},
            {name: 'qty', index: 'qty'},
            {name: 'qc_level_name', index: 'qc_level_name', sortable: false},
        ],
        autowidth: true,
        height: 300,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: "#mes_modal1_grid1_pager",
    });

    $("#mes_modal1_grid2").jqGrid({

        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "입고등록 | MES",
        colNames: ['품목그룹', '품번', '품명', '규격', '단위', '검사등급', 'lot_no', '입고수량', '패킹수', '수량등록'],
        colModel: [
            {name: 'part_grp_name', index: 'part_grp_name', width: 60, sortable: false},
            {name: 'part_code', key: true, index: 'part_code', width: 60, sortable: false},
            {name: 'part_name', index: 'part_name', width: 60, sortable: false},
            {name: 'spec', index: 'spec', width: 60, sortable: false},
            {name: 'unit_name', index: 'unit_name', width: 60},
            {name: 'qc_level_name', index: 'qc_level_name', width: 60, sortable: false},
            {name: 'lot', index: 'lot', width: 60, sortable: false},
            {name: 'qty', index: 'qty', width: 60, sortable: false},
            {name: 'pack_qty', index: 'pack_qty', width: 60, sortable: false},
            {name: 'button', index: 'button', width: 60, sortable: false}

        ],
        autowidth: true,
        height: 340,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onCellSelect: function (rowid, icol, cellcontent, e) {
        }

    });

}
