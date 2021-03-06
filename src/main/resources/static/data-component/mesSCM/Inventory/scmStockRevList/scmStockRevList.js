/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    auth:{}
};

////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    authcheck();
    datepickerInput();
    selectBox();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////
function select_type_change(value) {
    if(main_data.change ==='N'){
        console.log(value);
        if(value == 'C'){
            $('#part_group3').text('');
            $('#part_group3').removeClass('td-title');
            $('#part_name_select').empty();
            $('#part_name').addClass('select_hide');
        }else {
            $('#part_group3').text('품명');
            $('#part_group3').addClass('td-title');
            $('#part_name').removeClass('select_hide');
            part_type_select_ajax_all('#part_name_select', "/sysPartNameGroupAllGet","code_name2" ,"code_name2",{keyword:'MAT_PROD', keyword2:'CODE'});
            part_type_select_ajax_all("#part_group1_select", "/sysPartGroupAllGet", "part_grp_code", "part_grp_name",{keyword:value}).then(function (data) {
                $('#part_group2_select').empty();
                var option = null;
                option = $("<option></option>").text('전체').val('');
                $('#part_group2_select').append(option);
                $('#part_group2_select').select2();
            });
        }
    }



}

function select_change1(value) {
    if(value === ''){
        $('#part_group2_select').empty();
        var option = null;
        option = $("<option></option>").text('전체').val('');
        $('#part_group2_select').append(option);
        $('#part_group2_select').select2();
    }else{
        part_type_select_ajax_all('#part_group2_select', "/sysPartGroup2AllGet","part_grp_code2" ,"part_grp_name2",{keyword:$("#part_type_select").val(), keyword2:value});
    }
}
function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data.stop_date = main_data.send_data.stop_date.replace(/\-/g, '');
    main_data.send_data_post = main_data.send_data;

    $("#mes_grid").setGridParam({
        url: '/scmStockRevListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/scmStockRevListGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

////////////////////////////호출 함수//////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "scmStockRevList"}).then(function (data) {
        main_data.auth = data;
    });
}
function selectBox() {
    $("#part_type_select").select2();
    part_type_select_ajax_all("#part_group1_select", "/sysPartGroupAllGet", "part_grp_code", "part_grp_name",{keyword:'D'}).then(function (data) {
        $("#part_type_select").val('D').trigger("change");
        main_data.change='N';
        if($('#part_group1_select').val() === ''){
            $('#part_group2_select').empty();
            var option = null;
            option = $("<option></option>").text('전체').val('');
            $('#part_group2_select').append(option);
            $('#part_group2_select').select2();
        }else{
            part_type_select_ajax_all('#part_group2_select', "/sysPartGroup2AllGet","part_grp_code2" ,"part_grp_name2",{keyword:'D', keyword2:data[0].part_grp_code});
        }
    });

    part_type_select_ajax_all('#part_name_select', "/sysPartNameGroupAllGet","code_name2" ,"code_name2",{keyword:'MAT_PROD', keyword2:'CODE'});
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        mtype: 'POST',
        datatype: "local",
        colNames: ['조정일자','조정번호','품목그룹','품번','품명','규격','단위','바코드','조정전수량','조정후수량','증가','조정사유','등록자','조정일시'],
        colModel: [
            {name: 'work_date', index: 'part_type_name', width: 60,formatter: formmatterDate2},
            {name: 'rev_no', index: 'part_type_name', width: 60},
            {name: 'part_type_name', index: 'part_type_name', width: 60},
            {name: 'part_code', index: 'part_code', width: 60},
            {name: 'part_name', index: 'part_name', width: 60},
            {name: 'spec', index: 'spec', width: 60},
            {name: 'unit_name', index: 'unit_name', width: 60},
            {name: 'bcr', index: 'bcr', width: 60},
            {name: 'stock_qty_prev', index: 'stock_qty_prev', width: 60},
            {name: 'stock_qty', index: 'stock_qty', width: 60},
            {name: 'increase_qty', index: 'increase_qty', width: 60},
            {name: 'rev_code', index: 'rev_code', width: 60},
            {name: 'user_name', index: 'user_name', width: 60},
            {name: 'update_date', index: 'update_date', width: 60,formatter: formmatterDate},
        ],
        caption: "자재조정현황 | MES",
        autowidth: true,
        height: 562,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}

