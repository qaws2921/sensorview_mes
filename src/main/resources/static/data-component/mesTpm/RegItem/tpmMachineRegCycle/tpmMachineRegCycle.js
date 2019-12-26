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


////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    selectBox();
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    modal_start1();
    jqgridPagerIcons();
});

////////////////////////////클릭 함수//////////////////////////////////
function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;

    console.log(main_data);
    $("#mes_grid").setGridParam({
        url: '/tpmMachineRegGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/tpmMachineRegGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function add_btn() {
    modal_reset(".modal_value", main_data.readonly)
    var date = new Date();
    date.setDate(date.getDate() + 1);

    main_data.check = 'I';
    $("select[name=line_name] option:eq(0)").prop("selected", true).trigger("change");
    $("select[name=qc_code] option:eq(0)").prop("selected", true).trigger("change");
    $("select[name=cycle_type] option:eq(0)").prop("selected", true).trigger("change");
    $("#datepicker3").datepicker('setDate', date);

    $('#line_select2').prop("disabled", false);
    $('#machine_select2').prop("disabled", false);
    $('#qc_select').prop("disabled", false);

    $("#addDialog").dialog('open');
    jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));
}

function update_btn(jqgrid_data) {
    modal_reset(".modal_value", []);
    main_data.check = 'U';
    var send_data = {};
    send_data.keyword = jqgrid_data.line_code;
    send_data.keyword2 = jqgrid_data.machine_code;

    ccn_ajax('/tpmMachineRegOneGet', send_data).then(function (data) {
        data.start_date = formmatterDate2(data.start_date);
        modal_edits('.modal_value', main_data.readonly, data); // response 값 출력

        $('#line_select2').prop("disabled", true);
        $('#machine_select2').prop("disabled", true);
        $('#qc_select').prop("disabled", true);

        $("#addDialog").dialog('open');
    });
}

function delete_btn() {
    var gu4 = String.fromCharCode(4);
    var gu5 = String.fromCharCode(5);
    var ids = $("#mes_grid").getGridParam('selarrrow');
    var keywords = [];
    var code_list;

    if (ids.length === 0) {
        alert("삭제하는 데이터를 선택해주세요");
    } else {
        if (confirm("삭제하겠습니까?")) {
            main_data.check = 'D';
            for(i=0;i<ids.length;i++){
                var data = $('#mes_grid').jqGrid('getRowData', ids[i]);
                console.log(data);
                keywords.push(data.machine_code+gu4+data.qc_code+gu4+data.line_code);
            }
            code_list=keywords.join(gu5);
            wrapWindowByMask2();
            ccn_ajax("/tpmMachineRegDel", {keyword:code_list}).then(function (data) {
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
}
function select_change1(value) {
    select_makes_sub("#machine_select","/tpmMachineAllGet","machine_code","machine_name",{keyword:value},"Y");
}
////////////////////////////호출 함수//////////////////////////////////

function selectBox() {
    select_makes2("#line_select", "/getLine", "line_code", "line_name").then(function (data){
        select_makes_sub("#machine_select","/tpmMachineAllGet","machine_code","machine_name",{keyword:data},"Y");
    });

}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['rownum','line_code','machine_code','설비명', '점검항목코드', '점검항목명','반복구분', '시작일', '사용유무','등록자','수정일시'],
        colModel: [
            {name: 'rownum', index: 'rownum', key: true, hidden:true, sortable: false, width: 60},
            {name: 'line_code', index: 'line_code', hidden:true, sortable: false, width: 60},
            {name: 'machine_code', index: 'machine_code', hidden:true, sortable: false, width: 60},
            {name: 'machine_name', index: 'machine_name', sortable: false, width: 60},
            {name: 'qc_code', index: 'qc_code', sortable: false, width: 60},
            {name: 'qc_name', index: 'qc_name', sortable: false, width: 60},
            {name: 'cycle_type_name', index: 'cycle_type_name', sortable: false, width: 60},
            {name: 'start_date', index: 'start_date', sortable: false, width: 60, formatter: formmatterDate2},
            {name: '', index: '', sortable: false, width: 60},
            {name: 'user_name', index: 'user_name', sortable: false, width: 60},
            {name: 'update_date', index: 'update_date', width: 60, sortable: false, formatter: formmatterDate,},
        ],
        caption: "예방점검주기설정 | MES",
        autowidth: true,
        height: 550,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        multiselect: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지

        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            update_btn(data);
        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}
