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
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    selectBox();

    modal_start1();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////
function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: '/tpmMachineRegAlarmGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/tpmMachineRegAlarmGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function add_btn() {
    main_data.check = 'I';
    $('#mes_modal1_grid1').jqGrid("clearGridData");
    $('#mes_modal1_grid2').jqGrid("clearGridData");
    modal_reset(".modal_value", []);
    modal_reset(".modal_value2",[]);
    $('#line_select2').val($('#line_select').val()).prop("selected",true).trigger("change");
    $('#line_select2').prop("disabled", false);
    $('#machine_select2').prop("disabled", false);
    $("#addDialog").dialog('open');
    jqGridResize2("#mes_modal1_grid1", $('#mes_modal1_grid1').closest('[class*="col-"]'));
    jqGridResize2("#mes_modal1_grid2", $('#mes_modal1_grid2').closest('[class*="col-"]'));
}

function select_change1(value) {
    select_makes_sub("#machine_select","/tpmMachineAllGet","machine_code","machine_name",{keyword:value},"Y");
}
function update_btn(jqgrid_data) {
    main_data.check = 'U';
    modal_reset(".modal_value", []);
    modal_reset(".modal_value2", []);
    var send_data = {};
    send_data.line_code = jqgrid_data.line_code;
    send_data.machine_code = jqgrid_data.machine_code;

    ccn_ajax('/tpmMachineRegAlarmAllGet', send_data).then(function (data) {
        console.log(data);
        modal_edits('.modal_value', main_data.readonly, data[0]); // response 값 출력

        var line_code = '';
        if(data[0].line_code != 'AAAAA'){
            line_code = data[0].line_code;
            $('#line_select2').val(data[0].line_code).prop("selected",true).trigger("change");
        } else {
            $('#line_select2').val('').prop("selected",true).trigger("change");
        }


        $('#machine_select2').empty();
        select_makes_sub_ajax2("#machine_select2", "/tpmMachineAllGet", "machine_code", "machine_name", {keyword:line_code}, "Y").then(function (data2) {

            if(data[0].machine_code != 'AAAAA'){
            console.log(data[0].machine_code);
                $('#machine_select2').val(data[0].machine_code).trigger("change");
            } else {
                $('#machine_select2').val('').trigger("change");
            }
        });

        $('#line_select2').prop("disabled", true);
        $('#machine_select2').prop("disabled", true);
        $('#mes_modal1_grid1').jqGrid("clearGridData");
        $('#mes_modal1_grid2').jqGrid("clearGridData");

        var value = [];
        data.forEach(function (d) {
            value.push({user_code:d.alarm_user_code,user_name:d.alarm_user_name});
        });
        return value;
       
    }).then(function (value) {
        $("#mes_modal1_grid2").setGridParam({
            datatype: "local",
            data: value
        }).trigger("reloadGrid");

        $("#addDialog").dialog('open');
        jqGridResize2("#mes_modal1_grid1", $('#mes_modal1_grid1').closest('[class*="col-"]'));
        jqGridResize2("#mes_modal1_grid2", $('#mes_modal1_grid2').closest('[class*="col-"]'));
    });
}


function delete_btn() {
    var gu4 = String.fromCharCode(4);
    var gu5 = String.fromCharCode(5);
    var ids = $("#mes_grid").getGridParam('selarrrow');
    var keywords = [];

    if (ids.length === 0) {
        alert("삭제하는 데이터를 선택해주세요");
    } else {
        if (confirm("삭제하겠습니까?")) {
            main_data.check = 'D';
            for(i=0;i<ids.length;i++){
                var data = $('#mes_grid').jqGrid('getRowData', ids[i]);
                keywords.push(data.line_code+gu4+data.machine_code+gu4+data.alarm_user_code);
            }

            wrapWindowByMask2();
            ccn_ajax("/tpmMachineRegAlarmDel", {keyword:keywords.join(gu5)}).then(function (data) {
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
////////////////////////////호출 함수//////////////////////////////////

function selectBox() {
    select_makes2("#line_select", "/getLine", "line_code", "line_name").then(function (data){
        select_makes_sub("#machine_select","/tpmMachineAllGet","machine_code","machine_name",{keyword:''},"Y");
    });
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['rownum','라인명','line_code','설비명','machine_code','알람수신자','alaram_user_code','사전알림(일)','등록자','등록일시'],
        colModel: [
            {name: 'rownum', index: 'rownum', sortable: false,key:true,hidden:true},
            {name: 'line_name', index: 'line_name', sortable: false, width: 60},
            {name: 'line_code', index: 'line_code', sortable: false,hidden:true},
            {name: 'machine_name', index: 'machine_name', sortable: false, width: 60},
            {name: 'machine_code', index: 'machine_code', sortable: false,hidden:true},
            {name: 'alarm_user_name', index: 'alarm_user_name', sortable: false, width: 60},
            {name: 'alarm_user_code', index: 'alarm_user_code', sortable: false,hidden:true},
            {name: 'alarm_day', index: 'alarm_day', sortable: false, width: 60},
            {name: 'user_name', index: 'user_name', sortable: false, width: 60},
            {name: 'create_date', index: 'create_date', width: 60, sortable: false, formatter: formmatterDate,},
        ],
        caption: "예방점검알람설정 | MES",
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
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}
