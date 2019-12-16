////////////////////////////데이터////////////////////////////////////////

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {

    modal_make1();
    jqGrid_modal1();
    datepickerInput_modal1();

    jqGridResize('#mes_modal_grid', $('#mes_modal_grid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////
function add_modal1_btn() {
    var gu4 = String.fromCharCode(4);
    var gu5 = String.fromCharCode(5);
    var gu3 = String.fromCharCode(3);
    var add_data = value_return(".modal_value");
    var jdata = $("#mes_modal_grid").getRowData();
    if (jdata.length > 0) {
        var list = [];
        var list2 = [];

        jdata.forEach(function (data, j) {
            if (data.qc_qty !== ''
                && data.ng_qty !== ''
            ) {
                if (data.qc_result === '2') {
                    if (data.ng_type !== '' && data.ng_name !== '' && $(".reportsAdd:eq("+j+")").text() !== '추가') {
                        list.push(data.part_code + gu4 + data.qc_qty + gu4 + data.ng_qty + gu4 + data.qc_result + gu4 + data.ng_type + gu4 + data.ng_name + gu4 + data.act_type);
                    } else {
                        list2.push(data.part_code);
                    }
                } else {
                        console.log(j);
                    list.push(data.part_code + gu4 + data.qc_qty + gu4 + data.ng_qty + gu4 + data.qc_result + gu4 + data.ng_type + gu4 + data.ng_name + gu4 + data.act_type);
                }

            } else {
                list2.push(data.part_code);
            }

        });
        callback(function () {
            add_data.keyword = list.join(gu5);
            console.log(add_data);

        })


    }
}


function update_btn(rowid) {

    modal_reset(".modal_value", []);
    $("#mes_modal_grid").jqGrid('clearGridData');
    main_data.check = 'U';
    ccn_ajax('/qmsProdSubAllGet', {keyword: rowid}).then(function (data) {
        $("#in_no").val(data[0].in_no);
        $("#work_date").val(formmatterDate2(data[0].work_date));

        $("#mes_modal_grid").setGridParam({
            datatype: "local",
            data: data
        }).trigger("reloadGrid");


        modal2_data._this = '';
        modal2_data.part_code = '';
        modal2_data.qc_qty = 0;

        $("#addDialog").dialog('open');
        jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));
    });


    $("#addDialog").dialog('open');
    jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));
}

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
                "class": "hide",
            }
        ]
    });
}

function jqGrid_modal1() {
    $('#mes_modal_grid').jqGrid({
        datatype: "local",
        caption: "출하검사등록 | MES",
        colNames: ['품목그룹', '품번', '품명', '규격', '단위', '검사구분', '입고수량', '검사수량', '불량수량', '검사결과', '불량유형', '불량상세', '조치구분', '성적서'],
        colModel: [
            {name: 'part_grp_name', index: 'part_grp_name', width: 60, sortable: false},
            {name: 'part_code', index: 'part_code', key: true, width: 60, sortable: false},
            {name: 'part_name', index: 'part_name', width: 60, sortable: false},
            {name: 'spec', index: 'spec', width: 60, sortable: false},
            {name: 'unit_name', index: 'unit_name', width: 60, sortable: false},
            {name: 'qc_level_name', index: 'qc_level_name', width: 60, sortable: false},
            {name: 'in_qty', index: 'in_qty', width: 60, sortable: false},
            {
                name: 'qc_qty', index: 'qc_qty', width: 80, sortable: false,
                editable: true,
                editoptions: {

                    dataEvents: [
                        {
                            type: 'focusout',
                            fn: function (e) {
                                var row = $(e.target).closest('tr.jqgrow');
                                var rowid = row.attr('id');
                                var idx;
                                row.find('.reportsAdd').text("추가");
                                idx = findArrayIndex(modal2_data.sub_data, function (item) {
                                    return item.part_code === rowid
                                });

                                if (idx !== -1) {
                                    modal2_data.sub_data.splice(idx, 1);
                                }
                                var value = e.target.value;
                                if (isNaN(value)) {
                                    alert("숫자만 입력가능합니다.");
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);
                                    return false;
                                }

                                $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);

                            }
                        }

                    ]
                }
            },
            {
                name: 'ng_qty', index: 'ng_qty', width: 80, sortable: false,
                editable: true,
                editoptions: {

                    dataEvents: [
                        {
                            type: 'focusout',
                            fn: function (e) {
                                var row = $(e.target).closest('tr.jqgrow');
                                var rowid = row.attr('id');
                                var value = e.target.value;
                                if (isNaN(value)) {
                                    alert("숫자만 입력가능합니다.");
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);
                                    return false;
                                }

                                $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);

                            }
                        }

                    ]
                }
            },
            {
                name: 'qc_result', index: 'qc_result', width: 80, sortable: false,
                editable: true,                                       // 수정가능 여부
                formatter: 'select',                                 // SELECT 포매터
                edittype: 'select',                                    // EDIT타입 : SELECT
                editoptions: {
                    value: "1:양품;2:불량",             // EDIT옵션(SELECT, INPUT, CHECKBOX등 옵션 상이함)
                    dataEvents: [{
                        type: 'change',
                        fn: function (e) {                // 값 : this.value || e.target.val()

                            $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);
                        },
                    },
                        {
                            type: 'focusout',
                            fn: function (e) {
                                $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);

                            }
                        }
                    ]


                }
            },
            {
                name: 'ng_type', index: 'ng_type', width: 80, sortable: false,
                editable: true,                                       // 수정가능 여부
                formatter: 'select',                                 // SELECT 포매터
                edittype: 'select',                                    // EDIT타입 : SELECT
                editoptions: {
                    value: ":선택안함;" + main_data.qcItem_list_string.join(";"),             // EDIT옵션(SELECT, INPUT, CHECKBOX등 옵션 상이함)
                    dataEvents: [{
                        type: 'change',
                        fn: function (e) {                // 값 : this.value || e.target.val()

                            $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);
                        },
                    },
                        {
                            type: 'focusout',
                            fn: function (e) {
                                $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);

                            }
                        }
                    ]


                }
            },
            {
                name: 'ng_name', index: 'ng_name', width: 80, sortable: false,
                editable: true,
                editoptions: {

                    dataEvents: [
                        {
                            type: 'focusout',
                            fn: function (e) {

                                $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);

                            }
                        }

                    ]
                }
            },
            {
                name: 'act_type', index: 'act_type', width: 80, sortable: false,
                editable: true,                                       // 수정가능 여부
                formatter: 'select',                                 // SELECT 포매터
                edittype: 'select',                                    // EDIT타입 : SELECT
                editoptions: {
                    value: "0:조치중;1:조치완료",             // EDIT옵션(SELECT, INPUT, CHECKBOX등 옵션 상이함)
                    dataEvents: [{
                        type: 'change',
                        fn: function (e) {                // 값 : this.value || e.target.val()

                            $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);
                        },
                    },
                        {
                            type: 'focusout',
                            fn: function (e) {
                                $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);

                            }
                        }
                    ]


                }
            },
            {name: 'file', index: 'file', width: 80, sortable: false, formatter: reportsButton}
        ],
        autowidth: true,
        height: 250,
        cellEdit: true,
        cellsubmit: 'clientArray',
        beforeEditCell: function (id, name, val, IRow, ICol) {
            lastsel = id;
            saverow = IRow;
            savecol = ICol;

        },
        onCellSelect: function (rowid, icol, cellcontent, e) {
            if (icol === 13) {

                var data = $('#mes_modal_grid').jqGrid('getRowData', rowid);
                if (data.qc_qty !== '0') {
                    update_btn2(rowid, e);
                } else {
                    alert("검사수량을 확인해주세요");
                }
            }

        },

    });
}

function datepickerInput_modal1() {
    datepicker_makes("#datepicker3", 0);
}

function reportsButton(cellvalue, options, rowObject) {
    return ' <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" title="" id="showDialog">\n' +
        '                            <span><i class="fa fa-plus bigger-110 blue"></i>\n' +
        '                            <span class="reportsAdd">추가</span>\n' +
        '                            </span>\n' +
        '                    </a>';

};