/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: [],
    auth:{}
};
////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    selectBox();
    modal_start1();
    authcheck();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////
function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;
    console.log(main_data);
    $("#mes_grid").setGridParam({
        url: '/sysPartNameGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    // $("#mes_grid").setGridParam({
    //     url: '/',
    //     datatype: "json",
    //     page: page,
    //     postData: main_data.send_data_post
    // }).trigger("reloadGrid");
}

function add_btn() {
    if (main_data.auth.check_add !="N") {
        $("#addDialog").dialog('open');
    } else {
        alert("추가권한이 없습니다,");
    }
}

function select_change1(value) {
    // ccn_ajax('sysPartGroupAllGet',{keyword:value}).then(function (value1) {
    //     $('#part_prod_select').empty();
    //     var option = null;
    //     for (var j = 0; j < value1.length; j++) {
    //         option = $("<option></option>").text(value1[j].part_grp_name).val(value1[j].part_grp_code);
    //         $('#part_group_select').append(option);
    //     }
    //     $('#part_group_select').select2();
    //
    //     ccn_ajax('sysPartGroup2AllGet', {keyword: $('#part_type_select').val(), keyword2:  $('#part_group_select').val()}).then(function (value2) {
    //         $('#part_prod_select').empty();
    //         var option = null;
    //         for(var j=0;j<value2.length;j++){
    //             option = $("<option></option>").text(value2[j].part_grp_name2).val(value2[j].part_grp_code2);
    //             $('#part_prod_select').append(option);
    //         }
    //         $('#part_prod_select').select2();
    //     });
    // });
    part_type_select_ajax("#part_group_select", "/sysPartGroupAllGet", "part_grp_code", "part_grp_name",{keyword:value}).then(function (data2){
        select_makes3('#part_prod_select', "/sysPartGroup2AllGet","part_grp_code2" ,"part_grp_name2",{keyword:value, keyword2:data2[0].part_grp_code})
    });
}

function select_change2(value) {
    // ccn_ajax('sysPartGroup2AllGet',{keyword:$('#part_type_select').val(), keyword2:value}).then(function (value1) {
    //     $('#part_prod_select').empty();
    //     var option = null;
    //     for(var j=0;j<value1.length;j++){
    //         option = $("<option></option>").text(value1[j].part_grp_name2).val(value1[j].part_grp_code2);
    //         $('#part_prod_select').append(option);
    //     }
    //     $('#part_prod_select').select2();
    // });
    select_makes3('#part_prod_select', "/sysPartGroup2AllGet","part_grp_code2" ,"part_grp_name2",{keyword:$('#part_type_select').val(), keyword2:value})
}

////////////////////////////호출 함수//////////////////////////////////
function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "sysPartName"}).then(function (data) {
        main_data.auth = data;
    });
}

function selectBox() {
    part_type_select_ajax("#part_type_select", "/sysPartTypeGet", "part_type_code", "part_type_name",{keyword:''}).then(function (data) {
        part_type_select_ajax("#part_group_select", "/sysPartGroupAllGet", "part_grp_code", "part_grp_name",{keyword:data[0].part_type_code}).then(function (data2){
            select_makes3('#part_prod_select', "/sysPartGroup2AllGet","part_grp_code2" ,"part_grp_name2",{keyword:data[0].part_type_code, keyword2:data2[0].part_grp_code})
        });
    });
}


function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['코드','시리즈','명칭','규격(GHz)','공정유형','제품유형','품목군','제품군','등록자','등록일시','비고'],
        colModel: [
            {name: 'part_code', index: 'part_code', sortable: false, width: 60},
            {name: 'series', index: 'series', sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'frequency', index: 'frequency', sortable: false, width: 60},
            {name: 'route_code', index: 'route_code', sortable: false, width: 60},
            {name: 'part_type_name', index: 'part_type', sortable: false, width: 60},
            {name: 'part_grp_name', index: 'part_grp_name', sortable: false, width: 60},
            {name: 'part_grp_name2', index: 'part_grp_name2', sortable: false, width: 60},
            {name: 'user_code', index: 'user_code', sortable: false, width: 60},
            {name: 'update_date', index: 'update_date', sortable: false, width: 60},
            {name: 'remark', index: 'remark', sortable: false, width: 60}
        ],
        caption: "제품명관리 | MES",
        autowidth: true,
        height: 570,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        multiselect: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            update_btn(data);

        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}

