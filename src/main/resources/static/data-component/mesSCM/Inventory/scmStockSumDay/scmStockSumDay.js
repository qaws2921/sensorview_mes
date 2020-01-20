/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {}
};

var colNames = ['구분','t1','t2','t3','품목코드','품목명','규격', '단위','전일재고','금일입고','금일출고','재고'];
////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));

    datepickerInput();
    selectBox();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////
function select_change1(value) {
    ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:value}).then(function (value) {
        for(var i=1; i<=3;i++) {
            group_cb(value,i);
        }
        grid_head_value_change(value);
    });
}

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data_post = main_data.send_data;

    grid_head_change();

    $("#mes_grid").setGridParam({
        url: '/scmStockSumDayListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/scmStockSumDayListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

////////////////////////////호출 함수//////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", 0);
}
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
function selectBox() {
    part_type_select_ajax("#part_type_select", "/sysPartTypeGet", "part_type_code", "part_type_name",{keyword:''}).then(function (data) {
        ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:data[0].part_type_code}).then(function (value) {
            for(var i=1; i<=3;i++) {
                group_cb(value,i);
            }
            grid_head_value_change(value);
            grid_head_change();
        })
    });

}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        mtype: 'POST',
        datatype: "local",
        colNames: colNames,
        colModel: [
            {name: 'part_type_name', index: 'part_type_name', width: 60},
            {name: 'part_grp_name1', index: 'part_grp_name1', width: 60},
            {name: 'part_grp_name2', index: 'part_grp_name2', width: 60},
            {name: 'part_grp_name3', index: 'part_grp_name3', width: 60},
            {name: 'part_code', index: 'part_code', width: 60},
            {name: 'part_name', index: 'part_name', width: 60},
            {name: 'spec', index: 'spec', width: 60},
            {name: 'unit_name', index: 'unit_name', width: 60},
            {name: 'prev_qty', index: 'prev_qty', width: 60},
            {name: 'in_qty', index: 'in_qty', width: 60},
            {name: 'out_qty', index: 'out_qty', width: 60},
            {name: 'qty', index: 'qty', width: 60}
        ],
        caption: "자재 일원장 | MES",
        autowidth: true,
        height: 570,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}

