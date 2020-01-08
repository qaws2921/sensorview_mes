////////////////////////////데이터/////////////////////////////////////
var modal_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
};

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
    console.log(modal_data);
        // $("#mes_add_grid").setGridParam({
        //     url: "/sysPartSuppGet",
        //     datatype: "json",
        //     page: page,
        //     postData: data
        // }).trigger("reloadGrid");
}
function get_modal1_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/scmReqOrderGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
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
        caption: "발주추가 | MES",
        colNames: [ '품번', '품명', '규격', '단위', '검사기준'],
        colModel: [
            {name: 'part_code', index: 'part_code',key:true, sortable: false},
            {name: 'part_name', index: 'part_name', sortable: false},
            {name: 'spec', index: 'spec', sortable: false},
            {name: 'unit_name', index: 'unit_name', sortable: false},
            {name: 'qc_level_name', index: 'qc_level_name', sortable: false},
        ],
        autowidth: true,
        height: 250,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: "#mes_modal1_grid1_pager",
    });

    $("#mes_modal1_grid2").jqGrid({
        datatype: "local",
        multiselect: true,
        caption: "발주추가 | MES",
        colNames: [ '품번', '품명', '규격','도면REV', '단위', '검사기준','발주수량','납기일'],
        colModel: [
            {name: 'part_code', index: 'part_code', width: 60,key:true, sortable: false},
            {name: 'part_name', index: 'part_name', width: 60, sortable: false},
            {name: 'spec', index: 'spec', width: 60, sortable: false},
            {name: '', index: '', width: 60, sortable: false},
            {name: 'unit_name', index: 'unit_name', width: 60, sortable: false},
            {name: 'qc_level_name', index: 'qc_level_name', width: 60, sortable: false},
            {name: 'ord_qty', index: 'ord_qty', width: 60, sortable: false,},
            {name: 'end_date', index: 'end_date', width: 60, sortable: false,formatter: formmatterDate2}
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