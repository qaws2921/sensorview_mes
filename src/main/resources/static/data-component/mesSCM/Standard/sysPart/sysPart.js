/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: []
};

var colNames = ['구분','t1','t2','t3','품목코드','품목명','보관로케이션','업체명','규격','단위','L/T','검사등급','재고최대','재고최소','등록자','수정일']

////////////////////////////시작 함수//////////////////////////////////
$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    jqgridPagerIcons();

    selectBox();
    modal_start1();
});

////////////////////////////클릭 함수//////////////////////////////////
function select_change1(value) {
    ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:value}).then(function (value) {
        for(var i=1; i<=3;i++) {
            group_cb(value,i);
            group_cb_modal1(value,i);
        }
        grid_head_value_change(value);
    });
}

function add_btn() {
    modal_reset(".modal_value", main_data.readonly);
    $('#part_group1_modal1').text($('#part_group1').text());
    $('#part_group2_modal1').text($('#part_group2').text());
    $('#part_group3_modal1').text($('#part_group3').text());

    modalValuePush("#part_type_select","#part_type_code","#part_type_name");
    main_data.check = 'I';
    if($('#part_group_select1').val() == ''){
        $("select[name=part_group1] option:eq(0)").prop("selected", true).trigger("change");
    }else {
        $('#part_group_select1_modal1').val($('#part_group_select1').val()).trigger("change");
    }
    if($('#part_group_select2').val() == ''){
        $("select[name=part_group2] option:eq(0)").prop("selected", true).trigger("change");
    }else {
        $('#part_group_select2_modal1').val($('#part_group_select2').val()).trigger("change");
    }
    if($('#part_group_select3').val() == ''){
        $("select[name=part_group3] option:eq(0)").prop("selected", true).trigger("change");
    }else {
        $('#part_group_select3_modal1').val($('#part_group_select3').val()).trigger("change");
    }
    $("select[name=unit_name] option:eq(0)").prop("selected", true).trigger("change");
    $("select[name=qc_level] option:eq(0)").prop("selected", true).trigger("change");
    $("select[name=loc_code] option:eq(0)").prop("selected", true).trigger("change");

    $("#addDialog").dialog('open');
}

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;

    grid_head_change();

    $("#mes_grid").setGridParam({
        url: '/sysPartGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/sysPartGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function update_btn(jqgrid_data) {

}




////////////////////////////호출 함수//////////////////////////////////

function grid_head_value_change(value) {
    colNames[1] = value.part_group1;
    colNames[2] = value.part_group2;
    colNames[3] = value.part_group3;
}

function grid_head_change() {
    $.jgrid.gridUnload('#mes_grid');
    jqGrid_main();
    jqGridResize2('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    jqgridPagerIcons();
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

function group_cb_modal1(value,i) {
    ccn_ajax('/sysPartGroupAllGet',{keyword:value.part_type_code,keyword2:i}).then(function (value1) {
        $('#part_group_select'+i+'_modal1').empty();
        var option = null;
        for(var j=0;j<value1.length;j++){
            option = $("<option></option>").text(value1[j].part_grp_name).val(value1[j].part_grp_code);
            $('#part_group_select'+i+'_modal1').append(option);
        }
        $('#part_group_select'+i+'_modal1').select2();
    });
}
function selectBox() {
    part_type_select_ajax("#part_type_select", "/sysPartTypeGet", "part_type_code", "part_type_name",{keyword:''}).then(function (data) {
        ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:data[0].part_type_code}).then(function (value) {
            console.log(value);
            for(var i=1; i<=3;i++) {
                group_cb(value,i);
                group_cb_modal1(value,i);
            }
            grid_head_value_change(value);
            grid_head_change();
        })
    });

}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: colNames,
        colModel: [
            {name: 'part_type_name', index: 'part_type_name', sortable: false, width: 60},
            {name: 'part_grp_name1', index: 'part_grp_name1', sortable: false, width: 60},
            {name: 'part_grp_name2', index: 'part_grp_name2', sortable: false, width: 60},
            {name: 'part_grp_name3', index: 'part_grp_name3', sortable: false, width: 60},
            {name: 'part_code', index: 'part_code', sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'loc_name', index: 'loc_name', sortable: false, width: 60},
            {name: 'supp_name', index: 'supp_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: 'qc_level_name', index: 'qc_level_name', sortable: false, width: 60},
            {name: 'max_qty', index: 'max_qty', sortable: false, width: 60},
            {name: 'min_qty', index: 'min_qty', sortable: false, width: 60},
            {name: 'user_name', index: 'user_name', sortable: false, width: 60},
            {name: 'update_date', index: 'update_date', width: 60, sortable: false, formatter: formmatterDate,},
        ],
        caption: "품목정보 | MES",
        autowidth: true,
        height: 550,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        multiselect: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}