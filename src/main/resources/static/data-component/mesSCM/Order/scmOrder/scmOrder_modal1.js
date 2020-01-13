var lastsel;
var saverow = 0;
var savecol = 0;

function modal_start1() {
    modal_make1();
    datepicker_modal1();
    selectBox_modal1();
    jqGrid_modal1();
    jqGridResize("#mes_add_grid", $('#mes_add_grid').closest('[class*="col-"]'));
    jqGridResize("#mes_add_grid2", $('#mes_add_grid2').closest('[class*="col-"]'));

}

function get_modal1_btn(page) {
    var data = value_return(".modal_value");
    if (data.keyword5 !== '') {
        $("#mes_add_grid").setGridParam({
            url: "/sysPartSuppGet",
            datatype: "json",
            page: page,
            postData: data
        }).trigger("reloadGrid");
    }else {
        alert("업체를 선택 해주세요");
    }



}


function update_btn(rowid) {
    if (main_data.auth.check_edit !="N") {
        modal_reset(".modal_value2", []);
        modal_reset(".modal_value", []);
        $("#mes_add_grid").jqGrid('clearGridData');
        $("#mes_add_grid2").jqGrid('clearGridData');
        $("#ord_no").val(rowid);
        main_data.check = 'U';

        ccn_ajax('/scmOrderSub2Get', {keyword: rowid}).then(function (data) {
            $("#part_type_select option:eq(0)").prop("selected", true).trigger("change");
            $("select[name=view_amount]").val(data[0].view_amount).trigger("change");
            $("select[name=t_payment]").val(data[0].t_payment).trigger("change");
            $("select[name=t_delivery]").val(data[0].t_delivery).trigger("change");
            $("input[name=delivery]").val(data[0].delivery).trigger("change");
            $("input:radio[name=attachment]:input[value="+data[0].attachment+"]").prop("checked", true);
            $("select[name=shipping_addr]").val(data[0].shipping_addr).trigger("change");
            $("input[name=remark]").val(data[0].remark).trigger("change");
            $("#supp_name_modal").val(data[0].supp_name).trigger("change");
            $("#supp_code_modal").val(data[0].supp_code).trigger("change");
            $("#datepicker3").val(formmatterDate2(data[0].work_date));


            $("#mes_add_grid2").setGridParam({
                datatype: "local",
                data: data
            }).trigger("reloadGrid");

            $("#addDialog").dialog('open');
            jqGridResize2("#mes_add_grid", $('#mes_add_grid').closest('[class*="col-"]'));
            jqGridResize2("#mes_add_grid2", $('#mes_add_grid2').closest('[class*="col-"]'));
        });
    } else {
        alert("수정권한이 없습니다.");
    }
}


function add_modal1_btn() {
    $("#mes_add_grid2").jqGrid("saveCell", saverow, savecol);
    if (main_data.check2 === 'Y') {
        var add_data = value_return(".modal_value2");
        add_data.work_date = add_data.work_date.replace(/\-/g, '');
        add_data.supp_code = add_data.keyword5;
        add_data.attachment = $("input:radio[name=attachment]:checked").val();
        var jdata = $("#mes_add_grid2").getRowData();
        if (jdata.length > 0) {
            var list = [];
            var list2 = [];

            jdata.forEach(function (data, j) {
                if (data.ord_qty !== '' && data.end_date !=='' ) {
                    list.push(data.part_code + "$" + data.ord_qty+"$"+data.end_date.replace(/\-/g, ''));
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
                        add_data.keyword = list.join("&");
                        ccn_ajax("/scmOrderAdd", add_data).then(function (data) {
                            if (data.result === 'NG') {
                                alert(data.message);
                            } else {
                                if (main_data.check === "I") {
                                    get_btn(1);
                                } else {
                                    get_btn_post($("#mes_grid").getGridParam('page'));
                                }
                            }
                            $('#mes_grid2').jqGrid('clearGridData');
                            closeWindowByMask();
                            $("#addDialog").dialog('close');
                        }).catch(function (err) {
                            closeWindowByMask();
                            alert("저장실패");
                        });
                    }
                }
            })
        } else {
            alert("저장 목록을 넣어주세요");
        }
    }
}



function right_modal1_btn() {
    $("#mes_add_grid2").jqGrid("saveCell", saverow, savecol);
    if (main_data.check2 === 'Y') {

        var ids = $("#mes_add_grid").getGridParam('selarrrow').slice();

        if (ids.length === 0 ){
            alert("옮길 데이터를 선택해주세요");
            return false;
        }


        var ids2 = $("#mes_add_grid2").jqGrid("getDataIDs");

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
                list.push($("#mes_add_grid").getRowData(idsfor));
            }
        });

        callback(function () {
            if (overlap.length !== 0) {
                alert(overlap.join(", ") + " 중복");
            }
            ids2 = $("#mes_add_grid2").getRowData();
            ids2 = ids2.concat(list);

            $('#mes_add_grid2').jqGrid("clearGridData");

            $("#mes_add_grid2").setGridParam({
                datatype: "local",
                data: ids2
            }).trigger("reloadGrid");

            $('#mes_add_grid').jqGrid("resetSelection");
        });
    }
}


function left_modal1_btn() {
    $("#mes_add_grid2").jqGrid("saveCell", saverow, savecol);
    if (main_data.check2 === 'Y') {
        var ids2 = $("#mes_add_grid2").getGridParam('selarrrow').slice();

        for (var i = 0; i < ids2.length; i++) {
            $('#mes_add_grid2').jqGrid('delRowData', ids2[i]);
        }
        $('#mes_add_grid2').jqGrid("resetSelection");
    }
}





function jqGrid_modal1() {
    $("#mes_add_grid").jqGrid({
        mtype: 'POST',
        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "발주추가 | MES",
        colNames: [ '품번', '품명', '규격', '단위', '검사기준'],
        colModel: [

            {name: 'part_code', index: 'part_code',key:true, sortable: false},
            {name: 'part_name', index: 'part_name', sortable: false},
            {name: 'spec', index: 'spec', sortable: false},
            {name: 'unit_name', index: 'unit_name', sortable: false},
            {name: 'qc_level_name', index: 'qc_level_name', sortable: false},
        ],
        // 페이지 수 보기 (1 / 100) = true
        // 높이 : 450px
        autowidth: true,
        height: 406,
        // 디폴트 조회 개수 : 100
        rowNum: 100,
        // 단위 별 조회 개수
        rowList: [100, 200, 300, 500, 1000],
        // pager 세팅
        pager: "#mes_add_grid_pager",

    });

    $("#mes_add_grid2").jqGrid({

        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "발주추가 | MES",
        colNames: [ '품번', '품명', '규격','도면REV', '단위', '검사기준','발주수량','납기일'],
        colModel: [

            {name: 'part_code', index: 'part_code', width: 80,key:true, sortable: false},
            {name: 'part_name', index: 'part_name', width: 50, sortable: false},
            {name: 'spec', index: 'spec', width: 50, sortable: false},
            {name: '', index: '', width: 50, sortable: false},
            {name: 'unit_name', index: 'unit_name', width: 50, sortable: false},
            {name: 'qc_level_name', index: 'qc_level_name', width: 50, sortable: false},
            {name: 'ord_qty', index: 'ord_qty', width: 50, sortable: false,
                editable: true,
                    editoptions: {

                        dataEvents: [
                            {
                                type: 'focusout',
                                fn: function (e) {
                                    var row = $(e.target).closest('tr.jqgrow');
                                    var value = e.target.value;
                                    if (isNaN(value)){
                                         alert("숫자만 입력가능합니다.");
                                        e.target.value = e.target.value.replace(/[^0-9]/g,'');
                                        $("#mes_add_grid2").jqGrid("saveCell", saverow, savecol);
                                         return false;
                                    }
                                    $("#mes_add_grid2").jqGrid("saveCell", saverow, savecol);

                                }
                            }

                        ]
                    }
            },
            {name: 'end_date', index: 'end_date', width: 80, sortable: false,formatter: formmatterDate2, editable: true,
                editoptions: {
                    dataInit: function (element) {
                        $(element).attr("readonly","readonly").datepicker({
                            format: 'yyyymmdd',
                            autoclose: true,
                            language: "kr",
                            widgetPositioning:{
                                horizontal: 'auto',
                                vertical: 'bottom'
                            },

                        }).on('changeDate', function(e) {
                            $("#mes_add_grid2").jqGrid("saveCell", saverow, savecol);

                        }).on('hide', function(ev) {
                            $("#mes_add_grid2").jqGrid("saveCell", saverow, savecol);
                        });
                    },

                }
            },
        ],
        autowidth: true,
        height: 280,
        cellEdit: true,
        cellsubmit: 'clientArray',
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        beforeEditCell: function (id, name, val, IRow, ICol) {
                lastsel = id;
                saverow = IRow;
                savecol = ICol;

        },
        onCellSelect: function (rowid, icol, cellcontent, e) {

        }
    });

}


function modal_make1() {
    $("#addDialog").dialog({
        modal: true,
        width: 1300,
        height: 'auto',
        autoOpen: false,
        resizable: false

    });
}

function datepicker_modal1() {
    datepicker_makes("#datepicker3", 0);

}

function selectBox_modal1() {
    select_makes_sub("#grp_select", "/sysBPartGroupSelectGet", "part_grp_code", "part_grp_name", {keyword: ''}, 'Y');
    $("#view_select").select2();
    select_data_makes('select[name=t_payment]','/sysCommonAllGet','code_value','code_name1',{keyword:'MT_ORD_PAY'});
    select_data_makes('select[name=t_delivery]','/sysCommonAllGet','code_value','code_name1',{keyword:'MT_ORD_DELIVERY'});
    select_data_makes('select[name=shipping_addr]','/sysCommonAllGet','code_value','code_name1',{keyword:'MT_ORD_SHIPPING'});



    part_type_select_ajax("#part_type_select", "/sysPartTypeGet", "part_type_code", "part_type_name",{keyword:''}).then(function (data) {
        ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:data[0].part_type_code}).then(function (value) {
            for(var i=1; i<=3;i++) {
                group_cb(value,i);

            }

        })
    });

}


function group_cb(value,i) {
    $('#part_group'+i).text(value["part_group"+i]);
    ccn_ajax('/sysPartGroupAllGet',{keyword:value.part_type_code,keyword2:i}).then(function (value1) {
        $('#part_group_select'+i).empty();
        var option = null;
        var allSelect = ($("<option></option>").text("전체").val(""));
        $('#part_group_select'+i).append(allSelect);
        for(var j=0;j<value1.length;j++){
            option = $("<option></option>").text(value1[j].part_grp_name).val(value1[j].part_grp_code);
            $('#part_group_select'+i).append(option);
        }
        $('#part_group_select'+i).select2();
    });
}

function select_change1(value) {
    if (value !== ''){
        ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:value}).then(function (value) {
            for(var i=1; i<=3;i++) {
                group_cb(value,i);
            }
        });
    }
}