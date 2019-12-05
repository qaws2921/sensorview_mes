/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly:['qc_code'],
};

var grid_data=[];

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
    main_data.send_data = value_return(".condition_main");

    main_data.send_data_post = main_data.send_data;
    console.log(main_data.send_data);
    $("#mes_grid").setGridParam({
        url: '/qmsQcItemGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/qmsQcItemGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}


function add_btn() {
    modal_reset(".modal_value", main_data.readonly);
    modalValuePush("#check_select","#qc_group","#qc_group_name");
    modalValuePush("#code_select","#qc_type","#qc_type_name");
    main_data.check = 'I';
    $("#addDialog").dialog('open');
}
function update_btn(jqgrid_data) {

    modal_reset(".modal_value", []);
    main_data.check = 'U';
    var send_data = {};
    send_data.qc_code = jqgrid_data.qc_code;


    ccn_ajax('/qmsQcItemOneGet', send_data).then(function (data) {
        modal_edits('.modal_value', main_data.readonly, data); // response 값 출력
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
            ccn_ajax("/qmsQcItemDel", {keyword: ids.join("&")}).then(function (data) {
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
    $('#check_select').select2();
    $('#code_select').select2();
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        mtype: 'POST',
        datatype: "local",
        colNames: ['검사구분','코드그룹','검사코드','검사명','사용유무','등록자','수정일'],
        colModel: [
            {name: 'qc_group_name', index: 'qc_group_name', width: 50, sortable:false,},
            {name: 'qc_type_name', index: 'qc_type_name', width: 50, sortable:false,},
            {name: 'qc_code', index: 'qc_code',key:true, width: 50, sortable:false,},
            {name: 'qc_name', index: 'qc_name', width: 50, sortable:false,},
            {name: '', index: '', width: 50, sortable:false,},
            {name: 'user_name', index: 'user_name', width: 50, sortable:false,},
            {name: 'update_date', index: 'update_date', width: 50, sortable:false,},
        ],
        caption: "검사항목관리 | MES",
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