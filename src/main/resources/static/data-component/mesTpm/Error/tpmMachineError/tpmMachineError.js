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


////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    selectBox();
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    datepickerInput();
    modal_start1();
    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data.end_date = main_data.send_data.end_date.replace(/\-/g, '');
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: '/tpmMachineErrorGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/tpmMachineErrorGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function add_btn() {

    modal_reset(".modal_value", main_data.readonly);
    main_data.check = 'I';
    $("#datepicker3").datepicker('setDate', 'today');
    if($('#line_select').val() == ''){
        $("select[name=line_name] option:eq(0)").prop("selected", true).trigger("change");
    }else {
        $('#line_select2').val($('#line_select').val()).prop("selected",true).trigger("change");
    }
    $("select[name=error_type] option:eq(0)").prop("selected", true).trigger("change");
    $("select[name=error_result] option:eq(0)").prop("selected", true).trigger("change");
    $("#addDialog").dialog('open');

}

function select_change1(value) {
    select_makes_sub("#machine_select","/tpmMachineAllGet","machine_code","machine_name",{keyword:value},"Y");
}

function delete_btn() {
    var gu5 = String.fromCharCode(5);
    var ids = $("#mes_grid").getGridParam('selarrrow');

    console.log(ids);
    // if (ids.length === 0) {
    //     alert("삭제하는 데이터를 선택해주세요");
    // } else {
    //     if (confirm("삭제하겠습니까?")) {
    //         main_data.check = 'D';
    //         wrapWindowByMask2();
    //         ccn_ajax("/tpmMachineErrorDelete", {keyword: ids.join(gu5)}).then(function (data) {
    //             if (data.result === 'NG') {
    //                 alert(data.message);
    //             } else {
    //                 get_btn_post($("#mes_grid").getGridParam('page'));
    //             }
    //             closeWindowByMask();
    //         }).catch(function (err) {
    //             closeWindowByMask();
    //             console.error(err); // Error 출력
    //         });
    //     }
    // }
}

////////////////////////////호출 함수/////////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function selectBox() {
    select_makes2("#line_select", "/getLine", "line_code", "line_name").then(function (data){
        select_makes_sub("#machine_select","/tpmMachineAllGet","machine_code","machine_name",{keyword:''},"Y");
    });
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: 'local',
        mtype: 'POST',
        colNames: ['rownum','점검일', '라인', '설비',  '고장내용', '점검결과', '조치사항', '등록자', '점검일시'],
        colModel: [
            {name: 'rownum', index: 'rownum', sortable: false,hidden:true,key:true},
            {name: 'work_date', index: 'work_date', sortable: false, width: 60, formatter: formmatterDate2},
            {name: 'line_name', index: 'line_name', sortable: false, width: 60},
            {name: 'machine_name', index: 'machine_name', sortable: false, width: 60},
            {name: 'error_name', index: 'error_name', sortable: false, width: 60},
            {name: 'error_result', index: 'error_result', sortable: false, width: 60},
            {name: 'measure_name', index: 'measure_name', sortable: false, width: 60},
            {name: 'user_name', index: 'user_name', sortable: false, width: 60},
            {name: 'check_date', index: 'check_date', sortable: false, width: 60, formatter: formmatterDate},
        ],
        multiselect: true,
        caption: '사후보전관리 | MES',
        autowidth: true,
        height: $(window).height()-450,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onCellSelect: function (rowid, icol, cellcontent, e) {

        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            update_btn(data);
        }
    });
}