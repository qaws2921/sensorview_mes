/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly:[],
};

////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid',$('#mes_grid').closest('[class*="col-"]'));

    modal_start1();
    selectBox();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

function get_btn(page) {
    // main_data.send_data = value_return(".condition_main");
    // main_data.send_data_post = main_data.send_data;
    // console.log(main_data.send_data);
    $("#mes_grid").setGridParam({
        url: "/qmsTestStdGet",
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/qmsTestStdGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function add_btn() {
    modal_reset(".modal_value", main_data.readonly);
    $("select[name=gubun_select2] option:eq(0)").prop("selected", true).trigger("change");
    modalValuePush("#line_select","#line_code","#line_name");
    main_data.check = 'I';
    $("#addDialog").dialog('open');
}



////////////////////////////호출 함수//////////////////////////////////

function selectBox() {
    select_makes("#line_select", "/getLine", "line_code", "line_name");
    select_data_makes('#gubun_select', "/sysBPartGroupSelectGet" , "part_grp_code", "part_grp_name",{keyword:''});
    select_makes3('#gubun_select2', "/sysBPartGroupSelectGet" , "part_grp_code", "part_grp_name",{keyword:''}).then(function (data) {
        select_data_makes('#code_select', "/sysBPartAllGet" , "part_code", "part_name",{keyword2:data,keyword:''});
    });
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        mtype: "POST",
        datatype: "local",
        colNames: ['제품구분','제품명','1차','2차','등록자','수정일'],
        colModel: [
            {name: 'part_grp_code', index: 'part_grp_code', width: 50, sortable:false,},
            {name: 'part_code', index: 'part_code', width: 50, sortable:false,},
            {name: 'diameter1_start', index: 'diameter1_start', width: 50, sortable:false,},
            {name: 'diameter2_start', index: 'diameter2_start', width: 50, sortable:false,},
            {name: 'user_code', index: 'user_code', width: 50, sortable:false,},
            {name: 'update_date', index: 'update_date', width: 50, sortable:false,},
        ],
        caption: "외경검사기준 | MES",
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
            update_btn(data);

        }
    });
}