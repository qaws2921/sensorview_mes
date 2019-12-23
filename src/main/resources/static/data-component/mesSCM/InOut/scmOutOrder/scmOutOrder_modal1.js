var lastsel;

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    datepickerInput_modal1();
    jqGrid_modal1();
    jqGridResize("#scmOutOrderDialogLeftGrid", $('#scmOutOrderDialogLeftGrid').closest('[class*="col-"]'));
    jqGridResize("#scmOutOrderDialogRightGrid", $('#scmOutOrderDialogRightGrid').closest('[class*="col-"]'));
    selectBox_modal1();

}


////////////////////////////클릭 함수/////////////////////////////////////
function get_modal1_btn(page) {
    var data = value_return(".modal_value");
    data.keyword = "";
    $("#scmOutOrderDialogLeftGrid").setGridParam({
        url: "/sysBPartModalGet",
        datatype: "json",
        page: page,
        postData: data
    }).trigger("reloadGrid");


}


function update_btn(rowid) {

    modal_reset(".modal_value2", []);
    modal_reset(".modal_value", []);
    $("#scmOutOrderDialogLeftGrid").jqGrid('clearGridData');
    $("#scmOutOrderDialogRightGrid").jqGrid('clearGridData');
    $("#ord_no").val(rowid);
    main_data.check = 'U';

    ccn_ajax('/scmOutOrderSup2Get', {keyword: rowid}).then(function (data) {

        $("#line_select").val(data[0].cargo_code_to).trigger("change");
        $("#usage_select").val(data[0].usage).trigger("change");
        $("#datepicker3").val(formmatterDate2(data[0].work_date));


        $("#scmOutOrderDialogRightGrid").setGridParam({
            datatype: "local",
            data: data
        }).trigger("reloadGrid");

        $("#scmOutOrder-add-dialog").dialog('open');
        jqGridResize2("#scmOutOrderDialogLeftGrid", $('#scmOutOrderDialogLeftGrid').closest('[class*="col-"]'));
        jqGridResize2("#scmOutOrderDialogRightGrid", $('#scmOutOrderDialogRightGrid').closest('[class*="col-"]'));
    });
}


function right_modal1_btn() {
    if (main_data.check2 === 'Y') {

        var ids = $("#scmOutOrderDialogLeftGrid").getGridParam('selarrrow').slice();

        if (ids.length === 0 ){
            alert("옮길 데이터를 선택해주세요");
            return false;
        }


        var ids2 = $("#scmOutOrderDialogRightGrid").jqGrid("getDataIDs");

        var overlap = [];

        if (ids2.length != 0) {
            ids.forEach(function (idsfor, s) {
                ids2.forEach(function (ids2for) {
                    if (idsfor === ids2for) {
                        ids.splice(s, 1, '');
                        overlap.push(idsfor);
                    }
                });
            });
        }

        var list = [];
        ids.forEach(function (idsfor) {
            if (idsfor !== '') {
                list.push($("#scmOutOrderDialogLeftGrid").getRowData(idsfor));
            }
        });

        callback(function () {
            if (overlap.length !== 0) {
                alert(overlap.join(", ") + " 중복");
            }
            ids2 = $("#scmOutOrderDialogRightGrid").getRowData();
            ids2 = ids2.concat(list);

            $('#scmOutOrderDialogRightGrid').jqGrid("clearGridData");

            $("#scmOutOrderDialogRightGrid").setGridParam({
                datatype: "local",
                data: ids2
            }).trigger("reloadGrid");

            $('#scmOutOrderDialogLeftGrid').jqGrid("resetSelection");
        });
    }
}


function left_modal1_btn() {
    if (main_data.check2 === 'Y') {
        var ids2 = $("#scmOutOrderDialogRightGrid").getGridParam('selarrrow').slice();

        for (var i = 0; i < ids2.length; i++) {
            $('#scmOutOrderDialogRightGrid').jqGrid('delRowData', ids2[i]);
        }
        $('#scmOutOrderDialogRightGrid').jqGrid("resetSelection");
    }
}


function add_modal1_btn() {
    var gu4 = String.fromCharCode(4);
    var gu5 = String.fromCharCode(5);
    if (main_data.check2 === 'Y') {
        var add_data = value_return(".modal_value2");
        add_data.work_date = add_data.work_date.replace(/\-/g, '');

        // $('#scmInDialogRightGrid').jqGrid('saveRow', lastsel, false, 'clientArray');
        var jdata = $("#scmOutOrderDialogRightGrid").getRowData();
        if (jdata.length > 0) {
            var list = [];
            var list2 = [];

            jdata.forEach(function (data, j) {
                if (data.qty !== '') {
                    list.push(data.part_code +gu4 + data.qty);
                } else {
                    list2.push(data.part_code);
                }
            });
            callback(function () {
                if (list2.length > 0) {
                    alert(list2.join(", ") + "를 다시 확인해주세요");
                } else {
                    var text = '저장하겠습니까?';
                    if (main_data.check === "U") {
                        text = '수정하겠습니까?';
                    }
                    if (confirm(text)) {
                        wrapWindowByMask2();
                        add_data.keyword = list.join(gu5);
                        ccn_ajax("/scmOutOrderAdd", add_data).then(function (data) {
                            if (data.result === 'NG') {
                                alert(data.message);
                            } else {
                                if (main_data.check === "I") {
                                    get_btn(1);
                                } else {
                                    get_btn_post($("#scmOutOrderTopGrid").getGridParam('page'));
                                }
                            }
                            $('#scmOutOrderBottomGrid').jqGrid('clearGridData');
                            closeWindowByMask();
                            $("#scmOutOrder-add-dialog").dialog('close');
                        }).catch(function (err) {
                            closeWindowByMask();
                            alert("저장실패");
                        });
                    }
                }
            })
        }else {
            alert("저장 목록을 넣어주세요");
        }
    }
}

function close_modal1_btn() {
    $("#scmOutOrder-add-dialog").dialog('close');
}

////////////////////////////호출 함수/////////////////////////////////////

function jqGrid_modal1() {
    $("#scmOutOrderDialogLeftGrid").jqGrid({
        mtype: 'POST',
        datatype: "local",
        multiselect: true,
        caption: "출고요청 | MES",
        colNames: ['품목그룹', '품번', '품명', '규격', '단위'],
        colModel: [
            {name: 'part_grp_name', index: 'part_grp_name', sortable: false},
            {name: 'part_code', key: true, index: 'part_code', sortable: false},
            {name: 'part_name', index: 'part_name', sortable: false},
            {name: 'spec', index: 'spec', sortable: false},
            {name: 'unit_name', index: 'unit_name', sortable: false},
        ],
        autowidth: true,
        height: 300,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: "#scmOutOrderDialogLeftGridPager",


    });

    $("#scmOutOrderDialogRightGrid").jqGrid({

        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "출고요청 | MES",
        colNames: ['품목그룹', '품번', '품명', '규격', '단위', '요청수량'],
        colModel: [
            {name: 'part_grp_name', index: 'part_grp_name', width: 60, sortable: false},
            {name: 'part_code', key: true, index: 'part_code', width: 60, sortable: false},
            {name: 'part_name', index: 'part_name', width: 60, sortable: false},
            {name: 'spec', index: 'spec', width: 60, sortable: false},
            {name: 'unit_name', index: 'unit_name', width: 60, sortable: false},
            {
                name: 'qty', index: 'qty', width: 60, sortable: false, editable: true,
                editoptions: {

                    dataEvents: [
                        {
                            type: 'focusout',
                            fn: function (e) {
                                var row = $(e.target).closest('tr.jqgrow');
                                var rowid = row.attr('id');
                                var value = e.target.value;
                                if (isNaN(value)) {
                                    alert("숫자만 입력 가능합니다.")
                                    e.target.value = e.target.value.replace(/[^0-9]/g,'');
                                    $('#scmOutOrderDialogRightGrid').jqGrid('saveRow', lastsel, false, 'clientArray');
                                    return false;
                                } else {

                                    $('#scmOutOrderDialogRightGrid').jqGrid('saveRow', lastsel, false, 'clientArray');
                                }


                            }
                        }

                    ]
                }
            },
        ],
        autowidth: true,
        height: 340,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        loadonce: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },

        onCellSelect: function (rowid, icol, cellcontent, e) {
            if (icol === 6) {


                if ($("#" + lastsel + "_qty").val()) {
                    if (isNaN($("#" + lastsel + "_in_pty").val())) {
                        alert("입고 수량은 숫자만 가능합니다.");
                        return false;
                    }
                }
                $('#scmOutOrderDialogRightGrid').jqGrid('saveRow', lastsel, false, 'clientArray');
                $('#scmOutOrderDialogRightGrid').jqGrid('editRow', rowid, {
                    keys: false
                });


            }
            lastsel = rowid;

        }


    });

}


function modal_make1() {
    $("#scmOutOrder-add-dialog").dialog({
        modal: true,
        width: 1300,
        height: 'auto',
        autoOpen: false,
        resizable: false,
    });
}

function selectBox_modal1() {
    select_makes_sub("#grp_select", "/sysBPartGroupSelectGet", "part_grp_code", "part_grp_name", {keyword: ''}, 'Y');
    select_makes("#line_select", "/getLine", "line_code", "line_name");
    $("#usage_select").select2();
}

function datepickerInput_modal1() {
    datepicker_makes("#datepicker3", 0);

}

