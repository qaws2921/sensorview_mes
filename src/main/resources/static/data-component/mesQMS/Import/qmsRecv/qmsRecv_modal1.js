////////////////////////////데이터////////////////////////////////////////
var modal_grid_data=[];

var main_data = {
    supp_check: 'A',
};

var lastsel;
var saverow = 0;

var savecol = 0;

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {

    modal_make1();
    jqGrid_modal1();
    datepickerInput_modal1();
    suppModal_start();

    jqGridResize('#mes_modal_grid',$('#mes_modal_grid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////
function supp_btn(what) {
    main_data.supp_check = what;
    $("#supp_modal_keyword").val("supp_name");
    $("#supp_modal_keyword2").val("");

    $("#SuppSearchGrid").jqGrid('clearGridData');
    $("#supp-search-dialog").dialog('open');
    jqGridResize2("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
}

function suppModal_bus(code, name) {
    if (main_data.supp_check === 'A') {
        $("#supp_name_main").val(name);
        $("#supp_code_main").val(code);
    } else if (main_data.supp_check === 'B') {
        $("#supp_name_modal").val(name);
        $("#supp_code_modal").val(code);
    }
    $("#SuppSearchGrid").jqGrid('clearGridData');

}


function update_btn(rowid) {
    modal_reset(".modal_value", []);
    $("#mes_modal_grid").jqGrid('clearGridData');
    main_data.check = 'U';
    ccn_ajax('/qmsRecvSubAllGet', {keyword: rowid}).then(function (data) {
        $("#in_no").val(data[0].in_no);
        $("#supp_name_modal").val(data[0].supp_name);
        $("#supp_code_modal").val(data[0].supp_code);
        $("#datepicker3").val(formmatterDate2(data[0].work_date));

        $("#mes_modal_grid").setGridParam({
            datatype: "local",
            data: data
        }).trigger("reloadGrid");


        $("#addDialog").dialog('open');
        jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));
    });
}

function addupdate_btn() {

    var gu4 = String.fromCharCode(4);
    var gu5 = String.fromCharCode(5);


    var add_data = value_return(".modal_value");
    add_data.work_date = add_data.work_date.replace(/\-/g, '');
    var jdata = $("#mes_modal_grid").getRowData();
    if (jdata.length > 0) {
        var list = [];
        var list2 = [];

        jdata.forEach(function (data, j) {
            if (data.qc_qty !== ''
                && data.ng_qty !==''
                && data.ng_type !==''
            ) {
                list.push(data.part_code + gu4 + data.in_qty+ gu4 + data.qc_qty+ gu4 + data.ng_qty + gu4 + data.qc_result+ gu4 + data.ng_type + gu4 + data.ng_name+ gu4 + data.act_type);
            } else {
                list2.push(data.part_code);
            }
        });
        callback(function () {
            if (list2.length > 0) {
                alert(list2.join(", ") + "를 다시 확인해주세요");
            } else {
                if (confirm('저장하겠습니까?')) {
                    wrapWindowByMask2();
                    add_data.keyword = list.join(gu5);
                    console.log(add_data);


                    var formData = new FormData();


                    var index = 0;
                    var index2 = 0;
                    jdata.forEach(function (j,i) {
                        if ($("#file_"+j.part_code).val() !== ""){
                            formData.append("file_in_no"+(i-index),add_data.in_no);
                            formData.append("file_part_code"+(i-index),j.part_code);
                            formData.append("file"+i,$("#file_"+j.part_code).prop("files")[0]);
                            index2++;
                        } else {
                            index++;
                        }
                    });

                    callback(function () {
                        formData.append("index",index2);
                        $.ajax({
                            type: "POST",
                            enctype: 'multipart/form-data',
                            url: "/test_file",
                            data: formData,
                            processData: false,
                            contentType: false,
                            cache: false,
                            success: function (data) {
                                console.log("SUCCESS : ", data);
                            },
                            error: function (e) {
                                console.log("ERROR : ", e);
                            }

                        });

                        closeWindowByMask();
                    })



                    // ccn_ajax("/scmOrderAdd", add_data).then(function (data) {
                    //     if (data.result === 'NG') {
                    //         alert(data.message);
                    //     } else {
                    //         if (main_data.check === "I") {
                    //             get_btn(1);
                    //         } else {
                    //             get_btn_post($("#mes_grid").getGridParam('page'));
                    //         }
                    //     }
                    //     $('#mes_grid2').jqGrid('clearGridData');
                    //     closeWindowByMask();
                    //     $("#addDialog").dialog('close');
                    // }).catch(function (err) {
                    //     closeWindowByMask();
                    //     alert("저장실패");
                    // });
                }
            }
        })
    } else {
        alert("저장 목록을 넣어주세요");
    }




    // console.log($("#file_prtcode01").val());
    // if ($("#file_prtcode01").val() === ""){
    //     alert("Sss");
    // }
}

////////////////////////////호출 함수/////////////////////////////////////

function modal_make1() {
    $("#addDialog").dialog({
        modal: true,
        width:'auto',
        height: 'auto',
        autoOpen:false,
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
        caption: "수입검사등록 | MES",
        colNames: ['품목그룹','품번','품명','규격','단위','입고LOT','검사구분','입고수량','검사수량','불량수량','검사결과','불량유형','불량상세','조치구분','성적서'],
        colModel: [
            {name: 'part_grp_name', index: 'part_grp_name', width: 60, sortable: false},
            {name: 'part_code', index: 'part_code',key:true, width: 60, sortable: false},
            {name: 'part_name', index: 'part_name', width: 60, sortable: false},
            {name: 'spec', index: 'spec', width: 60, sortable: false},
            {name: 'unit_name', index: 'unit_name', width: 60, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: 'qc_level_name', index: 'qc_level_name', width: 60, sortable: false},
            {name: 'in_qty', index: 'in_qty', width: 60, sortable: false},
            {name: 'qc_qty', index: 'qc_qty',width: 80, sortable: false,
                editable: true,
                editoptions: {

                    dataEvents: [
                        {
                            type: 'focusout',
                            fn: function (e) {
                                var row = $(e.target).closest('tr.jqgrow');
                                var rowid = row.attr('id');
                                var value = e.target.value;
                                if (isNaN(value)){
                                    alert("숫자만 입력가능합니다.");
                                    e.target.value = e.target.value.replace(/[^0-9]/g,'');
                                    $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);
                                    return false;
                                }

                                $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);

                            }
                        }

                    ]
                }
            },
            {name: 'ng_qty', index: 'ng_qty',width: 80, sortable: false,
                editable: true,
                editoptions: {

                    dataEvents: [
                        {
                            type: 'focusout',
                            fn: function (e) {
                                var row = $(e.target).closest('tr.jqgrow');
                                var rowid = row.attr('id');
                                var value = e.target.value;
                                if (isNaN(value)){
                                    alert("숫자만 입력가능합니다.");
                                    e.target.value = e.target.value.replace(/[^0-9]/g,'');
                                    $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);
                                    return false;
                                }

                                $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);

                            }
                        }

                    ]
                }
            },
            {name: 'qc_result', index: 'qc_result',width: 80, sortable: false,
                editable: true,                                       // 수정가능 여부
                formatter : 'select',                                 // SELECT 포매터
                edittype:'select',                                    // EDIT타입 : SELECT
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
            {name: 'ng_type', index: 'ng_type',width: 80, sortable: false,
                editable: true,                                       // 수정가능 여부
                formatter : 'select',                                 // SELECT 포매터
                edittype:'select',                                    // EDIT타입 : SELECT
                editoptions: {
                    value: main_data.qcItem_list_string.join(";"),             // EDIT옵션(SELECT, INPUT, CHECKBOX등 옵션 상이함)
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
            {name: 'ng_name', index: 'ng_name',width: 80, sortable: false,
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
            {name: 'act_type', index: 'act_type',width: 80, sortable: false,
                editable: true,                                       // 수정가능 여부
                formatter : 'select',                                 // SELECT 포매터
                edittype:'select',                                    // EDIT타입 : SELECT
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
            {name: 'file', index: 'file',width: 80, sortable: false,formatter:filebox}
            // {name: 'file', index: 'file',width: 80, sortable: false,
            //     editable: true,
            //     edittype: 'file',
            //     editoptions: {
            //         defaultValue: 'N',
            //         enctype: "multipart/form-data",
            //         dataEvents: [{
            //             type: 'change',
            //             fn: function (e) {                // 값 : this.value || e.target.val()
            //                 alert("sss");
            //                 $("#mes_modal_grid").jqGrid("saveCell", saverow, savecol);
            //             },
            //         }
            //         ]
            //     },
            //     width: 210,
            //
            //
            // },
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

    });
}

function datepickerInput_modal1() {
    datepicker_makes("#datepicker3", 0);
}


function filebox(cellvalue, options, rowObject) {
    return "<input type='file' id='file_"+rowObject.part_code+"' style='font-size: 9px; width:100%' />";
}
