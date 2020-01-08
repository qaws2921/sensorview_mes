////////////////////////////데이터/////////////////////////////////////
var modal_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
};

var lastsel;
var saverow = 0;
var savecol = 0;

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();

    jqGrid_modal1();
    jqGridResize("#mes_modal1_grid1", $('#mes_modal1_grid1').closest('[class*="col-"]'));
    jqGridResize("#mes_modal1_grid2", $('#mes_modal1_grid2').closest('[class*="col-"]'));
    selectBox();
    datepickerInput_modal1();
}

////////////////////////////클릭 함수/////////////////////////////////////

function select_change1(value) {
    ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:value}).then(function (value) {
        for(var i=1; i<=3;i++) {
            group_cb(value,i);
        }
    });
}

function get_modal1_btn(page) {
    modal_data.send_data = value_return(".modal_value");
    modal_data.send_data.keyword =$('#part_type_select').val();

    modal_data.send_data_post = modal_data.send_data;
    console.log(modal_data);
    $("#mes_modal1_grid1").setGridParam({
        url: '/sysPartGet',
        datatype: "json",
        page: page,
        postData: modal_data.send_data
    }).trigger("reloadGrid");
}

function get_modal1_btn_post(page) {
    $("#mes_modal1_grid1").setGridParam({
        url: '/scmReqOrderGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}


function right_modal1_btn() {
    $("#mes_modal1_grid2").jqGrid("saveCell", saverow, savecol);
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
////////////////////////////호출 함수/////////////////////////////////////
function datepickerInput_modal1() {
    datepicker_makes("#datepicker3", 0);
    datepicker_makes("#datepicker4", 1);
}

function modal_make1() {
    $("#addDialog").dialog({
        modal: true,
        width: 1000,
        height: 'auto',
        autoOpen: false,
        resizable: false,
        buttons : [
            {
                "class": "hide",
            }
        ]
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


function selectBox() {
    part_type_select_ajax("#part_type_select", "/sysPartTypeGet", "part_type_code", "part_type_name",{keyword:''}).then(function (data) {
        ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:data[0].part_type_code}).then(function (value) {
            for(var i=1; i<=3;i++) {
                group_cb(value,i);
            }
        })
    });

}

function jqGrid_modal1() {
    $("#mes_modal1_grid1").jqGrid({
        mtype: 'POST',
        datatype: "local",
        multiselect: true,
        caption: "구매의뢰서 | MES",
        colNames: [ '품번', '품명', '규격', '단위', '발주단위'],
        colModel: [
            {name: 'part_code', index: 'part_code',key:true, sortable: false, width:80},
            {name: 'part_name', index: 'part_name', sortable: false, width:60},
            {name: 'spec', index: 'spec', sortable: false, width:60},
            {name: 'unit_name', index: 'unit_name', sortable: false, width:60},
            {name: 'ord_qty', index: 'ord_qty', sortable: false, width:60},
        ],
        autowidth: true,
        height: 250,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: "#mes_modal1_grid1_pager"
    });

    $("#mes_modal1_grid2").jqGrid({
        datatype: "local",
        multiselect: true,
        caption: "구매의뢰서 | MES",
        colNames: [ '품번', '품명', '규격','단위', '발주단위','요청수량'],
        colModel: [
            {name: 'part_code', index: 'part_code', width: 60,key:true, sortable: false},
            {name: 'part_name', index: 'part_name', width: 60, sortable: false},
            {name: 'spec', index: 'spec', width: 60, sortable: false},
            {name: 'unit_name', index: 'unit_name', width: 60, sortable: false},
            {name: 'ord_qty', index: 'ord_qty', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false,},
        ],
        autowidth: true,
        height: 300,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        }
    });

}