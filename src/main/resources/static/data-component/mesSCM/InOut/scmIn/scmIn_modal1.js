var lastsel;
var modal1_data = {
    add_data: {}
}

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    datepickerInput_modal1();
    jqGrid_modal1();
    jqGridResize("#scmInDialogLeftGrid", $('#scmInDialogLeftGrid').closest('[class*="col-"]'));
    jqGridResize("#scmInDialogRightGrid", $('#scmInDialogRightGrid').closest('[class*="col-"]'));
    selectBox_modal1();

}


////////////////////////////클릭 함수/////////////////////////////////////
function get_modal1_btn(page) {
    if($("#supp_code_modal").val() === ''){
        alert("업체를 선택하세요");
    }else {
        $("#scmInDialogLeftGrid").setGridParam({
            url:"/sysBPartModalGet",
            datatype: "json",
            page: page,
            postData: value_return(".modal_value")
        }).trigger("reloadGrid");
    }

}


function update_btn(rowid) {

    modal_reset(".modal_value2", []);
    modal_reset(".modal_value", []);
    $( "#scmInDialogLeftGrid" ).jqGrid('clearGridData');
    $( "#scmInDialogRightGrid" ).jqGrid('clearGridData');
    $("#in_no").val(rowid);
    modal2_data.part_code = '';
    modal2_data.sub_data = [];
    main_data.check = 'U';

    ccn_ajax('/scmInSub2Get', {keyword:rowid}).then(function (data) {

        $("#supp_name_modal").val(data[0].supp_name);
        $("#supp_code_modal").val(data[0].supp_code);

        $("#datepicker3").val(formmatterDate2(data[0].work_date));
        $("#remark").val(data[0].remark);

        var push;
        var list;
        var list2;
        var list3;
        data.forEach(function (s) {
            push = {};
            list = [];
            list3 = [];
            push.part_code = s.part_code;
            list = s.sub.split("$");
            list.forEach(function (s2) {
                list2 = [];
                list2 = s2.split("\\");
                list3.push({lot:list2[0],qty:list2[1]});


            });
            push.list = list3;
            modal2_data.sub_data.push(push);

        })



        $("#scmInDialogRightGrid").setGridParam({
            datatype: "local",
            data: data
        }).trigger("reloadGrid");

        $("#scmIn-add-dialog").dialog('open');
        jqGridResize2("#scmInDialogLeftGrid", $('#scmInDialogLeftGrid').closest('[class*="col-"]'));
        jqGridResize2("#scmInDialogRightGrid", $('#scmInDialogRightGrid').closest('[class*="col-"]'));
    });
}


function right_modal1_btn() {
    if(main_data.check2 === 'Y') {
        // $('#scmInDialogRightGrid').jqGrid('saveRow', lastsel, false, 'clientArray');
        var ids = $("#scmInDialogLeftGrid").getGridParam('selarrrow').slice();

        var ids2 = $("#scmInDialogRightGrid").jqGrid("getDataIDs");

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
                list.push($("#scmInDialogLeftGrid").getRowData(idsfor));
            }
        });

        callback(function () {
            if (overlap.length !== 0) {
                alert(overlap.join(", ") + " 중복");
            }
            ids2 = $("#scmInDialogRightGrid").getRowData();
            ids2 = ids2.concat(list);
            $("#scmInDialogRightGrid").setGridParam({
                datatype: "local",
                data: ids2
            }).trigger("reloadGrid");

            $('#scmInDialogLeftGrid').jqGrid("resetSelection");
        });
    }
}


function left_modal1_btn() {
    if(main_data.check2 === 'Y') {
        var ids2 = $("#scmInDialogRightGrid").getGridParam('selarrrow').slice();
        var idx;
        ids2.forEach(function (id, j) {
            modal2_data.sub_data.forEach(function (id2, i) {
                if (id === id2.part_code) {
                    idx = findArrayIndex(modal2_data.sub_data, function (item) {
                        return item.part_code === id
                    })
                    if (idx !== -1) {
                        modal2_data.sub_data.splice(idx, 1);
                    }
                }
            });

        });


        for (var i = 0; i < ids2.length; i++) {
            $('#scmInDialogRightGrid').jqGrid('delRowData', ids2[i]);
        }
        $('#scmInDialogRightGrid').jqGrid("resetSelection");
    }
}


function add_modal1_btn() {
    if(main_data.check2 === 'Y') {
        var add_data = value_return(".modal_value2");
        add_data.work_date = add_data.work_date.replace(/\-/g, '');

        // $('#scmInDialogRightGrid').jqGrid('saveRow', lastsel, false, 'clientArray');
        var jdata = $("#scmInDialogRightGrid").getRowData();
        var list = [];
        var list2 = [];
        var list3 = [];
        var list4 = [];
        var list5 = [];
        jdata.forEach(function (data, j) {
            if (data.lot === '') {
                list.push(data.part_code);
            } else if (data.qty === '') {
                list.push(data.part_code);
            } else {
                list2.push(data.part_code);
                list3.push(data.lot);
                list4.push(data.qty);
                list5.push(data.pack_qty);
            }
        });
        callback(function () {
            if (list.length > 0) {
                alert(list.join(", ") + "를 다시 확인해주세요");
            } else {
                add_data.keyword4 = list2.join("&");
                add_data.keyword5 = list3.join("&");
                add_data.keyword6 = list4.join("&");
                add_data.keyword7 = list5.join("&");

                var code_list = [];
                var code_list2 = [];
                var idx;

                    list2.forEach(function (s2, i2) {


                            idx = findArrayIndex(modal2_data.sub_data, function (item) {
                                return item.part_code === s2
                            });

                            if (idx !== -1) {

                                modal2_data.sub_data[idx].list.forEach(function (s3, k) {
                                    code_list.push(s3.lot + "\\" + s3.qty);
                                    console.log(s3.lot + "\\" + s3.qty);
                                    if (modal2_data.sub_data[idx].list.length === k + 1) {
                                        code_list2.push(code_list.join("$"));
                                        console.log("끝");
                                        code_list = [];

                                    }
                                    ;
                                });
                            }



                        // if (s.part_code === s2) {
                        //     s.list.forEach(function (s3, k) {
                        //         code_list.push(s3.lot + "\\" + s3.qty);
                        //         console.log(s3.lot + "\\" + s3.qty);
                        //         if (s.list.length === k + 1) {
                        //             code_list2.push(code_list.join("$"));
                        //             console.log("끝");
                        //             code_list = [];
                        //
                        //         };
                        //     });
                        // };
                    });


                var code_list3 = code_list2.join("&");
                add_data.keyword8 = code_list3;
                console.log(add_data.keyword8);
                ccn_ajax("/scmInAdd", add_data).then(function (data) {
                    if (data.result === 'NG') {
                        alert(data.message);
                    } else {
                        if (main_data.check === "I") {
                            get_btn(1);
                        } else {
                            get_btn_post($("#scmInTopGrid").getGridParam('page'));
                        }
                    }
                    $('#scmInBottomGrid').jqGrid('clearGridData');
                    $("#scmIn-add-dialog").dialog('close');
                }).catch(function (err) {
                    alert("저장실패");
                });
            }
        })
    }
}

function modal2_modal_open(rowid) {
    modal2_data.part_code = rowid;
    modal_reset(".modal_value3", []);
    var data = $('#scmInDialogRightGrid').jqGrid('getRowData', rowid);
    if (data.lot !== ''){
        modal2_edit(rowid);
    }
    $("#scmInAddDialog").dialog('open');
}

////////////////////////////호출 함수/////////////////////////////////////

function jqGrid_modal1() {
    $("#scmInDialogLeftGrid").jqGrid({
        mtype: 'POST',
        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "입고등록 | MES",
        colNames: ['품목그룹', '품번', '품명', '규격','단위', '포장수량', '검사등급'],
        colModel: [
            {name: 'part_grp_name', index: 'part_grp_name', sortable: false},

            {name: 'part_code', key: true, index: 'part_code', sortable: false},
            {name: 'part_name', index: 'part_name', sortable: false},
            {name: 'spec', index: 'spec' , sortable: false},
            {name: 'unit_name', index: 'unit_name'},

            {name: 'qty', index: 'qty'},
            {name: 'i_standard_name', index: 'grade_name', sortable: false},

        ],
        // 페이지 수 보기 (1 / 100) = true
        // 높이 : 450px
        autowidth: true,
        height: 300,
        // 디폴트 조회 개수 : 100
        rowNum: 100,
        // 단위 별 조회 개수
        rowList: [100, 200, 300, 500, 1000],
        // pager 세팅
        pager: "#scmInDialogLeftGridPager",
        // jqGrid load 시 실행 함수 = setTimeout
        // setTimeout함수는 함수 뒤 시간이 지나면 호출됨. 현재 : 0 (1000 = 1초)
        // 호출되는 함수는 pager icon 함수

    });

    $("#scmInDialogRightGrid").jqGrid({

        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "입고등록 | MES",
        colNames: ['품목그룹', '품번', '품명', '규격','단위', '검사등급', 'lot_no', '입고수량','패킹수','수량등록'],
        colModel: [
            {name: 'part_grp_name', index: 'part_grp_name', width: 60, sortable: false},

            {name: 'part_code', key: true, index: 'part_code', width: 60, sortable: false},
            {name: 'part_name', index: 'part_name', width: 60, sortable: false},
            {name: 'spec', index: 'spec', width: 60, sortable: false},
            {name: 'unit_name', index: 'unit_name', width: 60},

            {name: 'i_standard_name', index: 'grade_name', width: 60, sortable: false},

            {name: 'lot', index: 'lot', width: 60, sortable: false},
            {name: 'qty', index: 'qty', width: 60, sortable: false},
            {name: 'pack_qty', index: 'pack_qty', width: 60, sortable: false},
            {name:'button',index:'button',width:60,formatter:qtyButton, sortable: false}

            // {name: 'in_pty', index: 'in_pty', width: 60
            //     editoptions: {
            //
            //         dataEvents: [
            //             {
            //                 type: 'focusout',
            //                 fn: function (e) {
            //                     var row = $(e.target).closest('tr.jqgrow');
            //                     var rowid = row.attr('id');
            //                     var value = e.target.value;
            //                     if (isNaN(value)){
            //                         e.target.value = '';
            //                     }
            //                     if (rowid !== lastsel) {
            //                         $("#scmInDialogRightGrid").jqGrid('saveRow', lastsel,false,'clientArray');
            //                     }
            //                     // if ($("#"+lastsel+"_in_pty").val() !== '' && $("#"+lastsel+"_bad_pty").val() !== '') {
            //                     //     $("#scmInDialogRightGrid").jqGrid('saveRow', lastsel,false,'clientArray');
            //                     // }
            //
            //
            //                 }
            //             }
            //
            //         ]
            //     }
            // },
            // {
            //     name: 'bad_pty', index: 'bad_pty', width: 60, editable: true,
            //     editoptions: {
            //
            //         dataEvents: [
            //             {
            //                 type: 'focusout',
            //                 fn: function (e) {
            //
            //
            //                     var row = $(e.target).closest('tr.jqgrow');
            //                     var rowid = row.attr('id');
            //                     var value = e.target.value;
            //                     if (isNaN(value)){
            //                         e.target.value = '';
            //                     }
            //
            //                     if (rowid !== lastsel) {
            //                         $("#scmInDialogRightGrid").jqGrid('saveRow', lastsel,false,'clientArray');
            //                     }
            //                     // if ($("#"+lastsel+"_in_pty").val() !== '' && $("#"+lastsel+"_bad_pty").val() !== '') {
            //                     //     $("#scmInDialogRightGrid").jqGrid('saveRow', lastsel,false,'clientArray');
            //                     // }
            //
            //
            //                 }
            //             }
            //
            //         ]
            //     }
            // },
        ],
        // 페이지 수 보기 (1 / 100) = true
        // 높이 : 450px
        autowidth: true,
        height: 340,
        // 디폴트 조회 개수 : 100
        rowNum: 100,
        // 단위 별 조회 개수
        rowList: [100, 200, 300, 500, 1000],
        // pager 세팅
        // jqGrid load 시 실행 함수 = setTimeout
        // setTimeout함수는 함수 뒤 시간이 지나면 호출됨. 현재 : 0 (1000 = 1초)
        // 호출되는 함수는 pager icon 함수
        loadonce: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },

        onCellSelect: function (rowid, icol, cellcontent, e) {
            // if (icol === 7 || icol === 8) {
            //
            //
            //     if ($("#" + lastsel + "_in_pty").val()) {
            //         if (isNaN($("#" + lastsel + "_in_pty").val())) {
            //             alert("입고 수량은 숫자만 가능합니다.");
            //             return false;
            //         }
            //     }
            //
            //     if ($("#" + lastsel + "_bad_pty").val()) {
            //         if (isNaN($("#" + lastsel + "_bad_pty").val())) {
            //             alert("불량 수량은 숫자만 가능합니다.");
            //             return false;
            //         }
            //     }
            //
            //     if (rowid === lastsel) {
            //         $('#scmInDialogRightGrid').jqGrid('editRow', rowid, true);
            //     }
            //
            //     if (rowid && rowid !== lastsel) {
            //         $('#scmInDialogRightGrid').jqGrid('saveRow', lastsel, false, 'clientArray');
            //         $('#scmInDialogRightGrid').jqGrid('editRow', rowid, {
            //             keys: false
            //         });
            //         lastsel = rowid;
            //         if(icol === 7){
            //             $("#" + lastsel + "_in_pty").focus();
            //         }else if(icol === 8){
            //             $("#" + lastsel + "_bad_pty").focus();
            //         }
            //     }
            // }
        }

    });

}


function qtyButton (cellvalue, options, rowObject) {
    return ' <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" title="" id="showDialog" onclick="modal2_modal_open(\''+rowObject.part_code+'\')">\n' +
        '                            <span><i class="fa fa-plus bigger-110 blue"></i>\n' +
        '                            <span>추가</span>\n' +
        '                            </span>\n' +
        '                    </a>';

};




function modal_make1() {
    $("#scmIn-add-dialog").dialog({
        modal: true,
        width: 'auto',
        height: 'auto',
        autoOpen: false,
        resizable: false,
    });
}

function selectBox_modal1() {
    select_makes_sub("#grp_select", "/sysBPartGroupSelectGet", "part_grp_code", "part_grp_name",{keyword:''},'Y');

}

function datepickerInput_modal1() {
    datepicker_makes("#datepicker3", 0);

}

