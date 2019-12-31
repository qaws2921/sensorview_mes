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


    jqGridResize('#mes_modal_grid',$('#mes_modal_grid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////
function crm_btn() {
    $("#crmSearchGrid").jqGrid('clearGridData');
    $("#crm-search-dialog").dialog('open');
    jqGridResize2("#crmSearchGrid", $('#crmSearchGrid').closest('[class*="col-"]'));
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

function close_modal1_btn() {
    $("#addDialog").dialog('close');
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
                            formData.append("file_in_no"+(i-index),j.in_no);
                            formData.append("file_part_code"+(i-index),j.part_code);
                            formData.append("file"+i,$("#file_"+(i-index).part_code).files[0]);
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
                    //             get_btn(fullcalendar);
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
        colNames: ['품목그룹','품번','품명','규격','단위','수주수량','가납품수량','납품가능수량','납품요청수량'],
        colModel: [
            {name: 'part_grp_name', index: 'part_grp_name', width: 60, sortable: false},
            {name: 'part_code', index: 'part_code',key:true, width: 60, sortable: false},
            {name: 'part_name', index: 'part_name', width: 60, sortable: false},
            {name: 'spec', index: 'spec', width: 60, sortable: false},
            {name: 'unit_name', index: 'unit_name', width: 60, sortable: false},
            {name: '', index: '',width: 80, sortable: false},
            {name: 'qc_level_name', index: 'qc_level_name', width: 60, sortable: false},
            {name: 'in_qty', index: 'in_qty', width: 60, sortable: false},
            {name: 'in_qty', index: 'in_qty', width: 60, sortable: false},


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


