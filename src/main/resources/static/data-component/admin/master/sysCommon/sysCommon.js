/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////


var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly:['code_type']
}

////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    selectBox();

    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    jqgridPagerIcons();

    modal_start1()

});


////////////////////////////클릭 함수//////////////////////////////////
function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: '/sysCommonGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/sysCommonGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function add_btn() {
    modal_reset(".modal_value", main_data.readonly);
    modalValuePush("#group_select","#group_code","#group_name");
    console.log($('#group_code').val());
    console.log($('#group_name').val());
    main_data.check = 'I';

    $("#addDialog").dialog('open');
}

function update_btn(jqgrid_data) {

    modal_reset(".modal_value", []);
    main_data.check = 'U';
    var send_data = {};
    send_data.keyword = jqgrid_data.code_type;
    send_data.keyword2 = jqgrid_data.code_value;


    ccn_ajax('/sysCommonOneGet', send_data).then(function (data) {
        modal_edits('.modal_value', main_data.readonly, data); // response 값 출력
        $('#group_name').val(data.cn);
        $('#group_code').val(data.code_type);
        $("#addDialog").dialog('open');
    });
}

function delete_btn() {
    var ids = $("#mes_grid").getGridParam('selarrrow');
    if (ids.length === 0) {
        alert("삭제하는 데이터를 선택해주세요");
    } else {
        if (confirm("삭제하겠습니까?")) {
            main_data.check = 'D';
            wrapWindowByMask2();
            ccn_ajax("/sysCommonDelete", {keyword: ids.join(",")}).then(function (data) {
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
	select_makes('#group_select', '/getCommonGroup', 'code_value', 'code_name1');
}


function jqGrid_main() {
    $('#mes_grid').jqGrid({

        datatype: "local",
        mtype: 'POST',
        colNames: ['공통코드','공통그룹', '코드', '명칭1', '명칭2', '명칭3', '명칭4', '명칭5', '명칭6', '명칭7', '명칭8', '사용유무', '등록자', '등록일'],
        colModel: [
            {name: 'code_type', index:'code_type',hidden:true},
            {name: 'cn', index: 'cn', width: 60},
            {name: 'code_value', index: 'code_value',key:true, width: 60},
            {name: 'code_name1', index: 'code_name1', width: 60},
            {name: 'code_name2', index: 'code_name2', width: 60},
            {name: 'code_name3', index: 'code_name3', width: 60},
            {name: 'code_name4', index: 'code_name4', width: 60},
            {name: 'code_name5', index: 'code_name5', width: 60},
            {name: 'code_name6', index: 'code_name6', width: 60},
            {name: 'code_name7', index: 'code_name7', width: 60},
            {name: 'code_name8', index: 'code_name8', width: 60},
            {name: 'use_yn', index: 'use_yn', width: 60},
            {name: 'user_name', index: 'user_name', width: 60},
            {name: 'create_date', index: 'create_date', width: 60, formatter: formmatterDate,},
        ],
        caption: "공통코드관리 | MES",
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

