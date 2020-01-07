var modal3_data = {
    part_code: '',
    sub_data: []
}
var lastsel3;
var saverow3;
var savecol3;

////////////////////////////시작 함수/////////////////////////////////////
function modal_start3() {

    modal_make3();
    modal3_jqGrid();
    datepickerInput_modal3();
    jqGridResize("#modal3Grid", $('#modal3Grid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////

function modal3_get_btn(page) {
    var modal3_send_data = value_return(".modal3_condition");
    modal3_send_data.start_date = modal3_send_data.start_date.replace(/\-/g, '');
    modal3_send_data.end_date = modal3_send_data.end_date.replace(/\-/g, '');

    modal3_send_data.keyword2 = '0';
    modal3_send_data.keyword3 = modal3_data.part_code;
    $("#modal3Grid").setGridParam({
        url: '/scmOrderListGet',
        datatype: "json",
        page: page,
        postData: modal3_send_data,
    }).trigger("reloadGrid");
}


function modal3_close() {
    $("#addDialog3").dialog('close');
    suppModal_close_bus();

}


function modal3_modal_open(rowid) {
    modal3_data.part_code = rowid;

    $("#supp_name_modal3").val($("#supp_name_modal").val());
    $("#supp_code_modal3").val($("#supp_code_modal").val());

    datepicker_makes("#modal3_datepicker", -1);
    datepicker_makes("#modal3_datepicker2", 0);

    $("#addDialog3").dialog('open');
    jqGridResize2("#modal3Grid", $('#modal3Grid').closest('[class*="col-"]'));
}

////////////////////////////호출 함수/////////////////////////////////////


function modal_make3() {
    $("#addDialog3").dialog({
        autoOpen: false,
        modal: true,
        minWidth: 1100,
        height: 'auto',
        resizable: false,
        buttons: [
            {
                "class": "hide",
            }
        ]

    });

}

function modal3_jqGrid() {
    $('#modal3Grid').jqGrid({
        datatype: "local",
        // 다중 select
        mtype: 'POST',
        // 타이틀
        caption: "업체조회 | MES",
        colNames: ['발주일자', '발주번호', '품번', '품명', '규격', '단위', '발주수량', '기입고수량', '입고수량', '완료처리'],
        colModel: [
            {name: 'work_date', index: 'work_date', sortable: false, width: 60, formatter: formmatterDate2},
            {name: 'ord_no', index: 'ord_no', key: true, sortable: false, width: 80},
            {name: 'part_code', index: 'part_code', sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 40},
            {name: 'ord_qty', index: 'ord_qty', sortable: false, width: 60},
            {name: 'qty', index: 'qty', sortable: false, width: 60},
            {
                name: 'in_qty', index: 'in_qty', sortable: false, width: 60,
                editable: true,
                keys: false,
                editoptions: {

                    dataEvents: [
                        {
                            type: 'focusout',
                            fn: function (e) {
                                var row = $(e.target).closest('tr.jqgrow');
                                var rowid = row.attr('id');
                                var data = $('#modal3Grid').jqGrid('getRowData', rowid);
                                var value = e.target.value;

                                if (isNaN(value)) {
                                    alert("숫자만 입력가능합니다.");
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    $("#modal3Grid").jqGrid("saveCell", saverow3, savecol3);
                                    return false;
                                } else if ((parseInt(data.ord_qty) + parseInt(data.qty)) < parseInt(value)) {
                                    alert("입고 가능 수량이 초과 하였습니다.");
                                    e.target.value = 0;
                                    $("#modal3Grid").jqGrid("saveCell", saverow3, savecol3);
                                    return false;
                                }
                                $("#modal3Grid").jqGrid("saveCell", saverow3, savecol3);
                                var sumOfPrice = jQuery("#modal3Grid").jqGrid('getCol', 'in_qty', false, 'sum');
                                jQuery("#modal3Grid").jqGrid('footerData', 'set', {ord_qty: 'Total:', in_qty: sumOfPrice});
                                alert(sumOfPrice);

                            }
                        }

                    ]
                }
            },
            {
                name: 'result_check', index: 'result_check', sortable: false, width: 60,
                editable: true,                                       // 수정가능 여부
                formatter: 'select',                                 // SELECT 포매터
                edittype: 'select',                                    // EDIT타입 : SELECT
                editoptions: {
                    value: "N:N;Y:Y",             // EDIT옵션(SELECT, INPUT, CHECKBOX등 옵션 상이함)
                    defaultValue: 'N',
                    dataEvents: [{
                        type: 'change',
                        fn: function (e) {                // 값 : this.value || e.target.val()

                            $("#modal3Grid").jqGrid("saveCell", saverow3, savecol3);
                        },
                    },
                        {
                            type: 'focusout',
                            fn: function (e) {
                                $("#modal3Grid").jqGrid("saveCell", saverow3, savecol3);

                            }
                        }
                    ]


                }
            }

        ],
        autowidth: true,
        height: 250,
        rowNum: 100,
        cellEdit: true,
        cellsubmit: 'clientArray',
        beforeEditCell: function (id, name, val, IRow, ICol) {
            lastsel3 = id;
            saverow3 = IRow;
            savecol3 = ICol;


        },
        afterSaveCell: function (rowid, name, val, iRow, iCol) {
            var data = $('#modal3Grid').jqGrid('getRowData', rowid);
            if (iCol === 8) {
                if (isNaN(data.in_qty)) {
                    alert("숫자만 입력가능합니다.");
                    data.in_qty = data.in_qty.replace(/[^0-9]/g, '');
                    $('#modal3Grid').jqGrid('setCell', rowid, 'in_qty', data.in_qty);
                    return false;
                } else if ((parseInt(data.ord_qty) + parseInt(data.qty)) < parseInt(data.in_qty)) {
                    alert("입고 가능 수량이 초과 하였습니다.");
                    $('#modal3Grid').jqGrid('setCell', rowid, 'in_qty', 0);
                    return false;
                }
            }


        },
        pager: '#modal3GridPager',
        jsonReader: {cell: ""},
        rowList: [100, 200, 300, 400],
        viewrecords: true,
        beforeSelectRow: function (rowid, e) {
            var radio = $(e.target).closest('tr').find('input[type="radio"]');
            $('input[name="radio_SuppSearchGrid"]').removeAttr("checked").trigger('change');
            radio.prop('checked', true).trigger('change');
            return true; // allow row selection
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            crmModal_check();

        },
        footerrow: true,
        userDataOnFooter: true,
        loadComplete: function () {
            var $self = $(this),
                sum = $self.jqGrid("getCol", "in_qty", false, "sum");

            $self.jqGrid("footerData", "set", {ord_qty: "Total:", in_qty: sum});
        }


        });
}

function datepickerInput_modal3() {
    datepicker_makes("#modal3_datepicker", -1);
    datepicker_makes("#modal3_datepicker2", 0);
}

function formatterN(cellValue) { // 날짜 필터

    return 'N'
}

