/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    readonly: [],
    auth:{}
};
////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    authcheck();
    modal_start1();
    datepickerInput();
    selectBox();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////
function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data.stop_date = main_data.send_data.stop_date.replace(/\-/g, '');
    console.log(main_data);
    $("#mes_grid").setGridParam({
        url: '/popPlanSubGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/popPlanSubGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function add_btn() {
    if (main_data.auth.check_add !="N") {
        modal_reset('.modal_value',main_data.readonly);
        main_data.check = 'I'; // 저장인지 체크
        $('#route_select_modal1 option:eq(0)').prop("selected", true).trigger("change");
        $('#mat_prod_select_modal1 option:eq(0)').prop("selected", true).trigger("change");
        $('#unit_select_modal1 option:eq(0)').prop("selected", true).trigger("change");
        $('#prod_type_select_modal1 option:eq(0)').prop("selected", true).trigger("change");
        $('#prod_dept_select_modal1 option:eq(0)').prop("selected", true).trigger("change");
        $('#line_user_select_modal1 option:eq(0)').prop("selected", true).trigger("change");

        var date = new Date();
        var date2 = new Date();
        date2.setDate(date.getDate()+1);
        $('#datepicker3').datepicker('setDate',date);
        $('#datepicker4').datepicker('setDate',date2);

        $("#addDialog").dialog('open');
    } else {
        alert("추가권한이 없습니다,");
    }
}

function delete_btn() {
    if(main_data.auth.check_del != "N") {
        var gu5 = String.fromCharCode(5);
        var ids = $("#mes_grid").getGridParam('selarrrow');
        if (ids.length === 0) {
            alert("삭제하는 데이터를 선택해주세요");
        } else {
            if (confirm("삭제하겠습니까?")) {
                main_data.check = 'D';
                wrapWindowByMask2();
                ccn_ajax("/popPlanSubDel", {keyword: ids.join(gu5)}).then(function (data) {
                    if (data.result === 'NG') {
                        alert(data.message);
                    } else {
                        get_btn_post($("#mes_grid").getGridParam('page'));
                    }
                    closeWindowByMask();
                }).catch(function (err) {
                    closeWindowByMask();
                    console.error(err); // Error 출력
                });
            }
        }
    } else {
        alert("삭제권한이 없습니다.");
    }
}

function update_btn(jqgrid_data) {
    if (main_data.auth.check_edit !="N") {
        main_data.check = 'U';
        modal_reset(".modal_value", []);
        ccn_ajax('/popPlanSubOneGet', jqgrid_data).then(function (data) {
            data.plan_date = data.plan_date.substring(0,4)+'-'+data.plan_date.substring(4,6)+'-'+data.plan_date.substring(6);
            data.end_date = data.end_date.substring(0,4)+'-'+data.end_date.substring(4,6)+'-'+data.end_date.substring(6);
            modal_edits('.modal_value', main_data.readonly, data); // response 값 출력
            console.log(data);
            $("#addDialog").dialog('open');
        });
    } else {
        alert("수정권한이 없습니다.");
    }
}

////////////////////////////호출 함수//////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function selectBox() {
    select_makes_sub("#line_select", "/sysProdLineAllGet", "line_code", "line_name",{keyword:'2'},'Y');
}

function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "popPlanSub"}).then(function (data) {
        main_data.auth = data;
    });
}
function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['등록번호','공정','품명','단위','계획량','생산량','계획일','용도','생산구분','등록자','작업자','등록일','마감일','Remark','비고'],
        colModel: [
            {name: 'plan_no3', index: 'plan_no3', width: 90,key:true, sortable: false},
            {name: 'line_name', index: 'line_name', width: 60, sortable: false},
            {name: 'mat_name', index: 'mat_name', width: 60, sortable: false},
            {name: 'unit_name', index: 'unit_name', width: 60, sortable: false},
            {name: 'plan_qty', index: 'plan_qty', width: 60, sortable: false},
            {name: 'work_qty', index: 'work_qty', width: 60, sortable: false},
            {name: 'plan_date', index: 'plan_date', width: 60, sortable: false,formatter: formmatterDate2},
            {name: 'prod_type_name', index: 'prod_type_name', width: 40, sortable: false},
            {name: 'prod_dept_name', index: 'prod_dept_name', width: 40, sortable: false},
            {name: 'user_name', index: 'user_name', width: 40, sortable: false},
            {name: 'work_user_name', index: 'work_user_name', width: 40, sortable: false},
            {name: 'update_date', index: 'update_date', width: 90, sortable: false,formatter: formmatterDate},
            {name: 'end_date', index: 'end_date', width: 60, sortable: false,formatter: formmatterDate2},
            {name: 'remark', index: 'remark', width: 80, sortable: false},
            {name: 'remark1', index: 'remark1', width: 80, sortable: false}
        ],
        caption: '생산계획(SUB) | MES',
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


