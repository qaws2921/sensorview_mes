/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var grid_data=[];

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: ['pc_code']
};


////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    modal_start1();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

function get_btn(page) {
    $("#mes_grid").setGridParam({
        url: "/popPCGet",
        datatype: "json",
        page: page,
    }).trigger("reloadGrid");
}

function add_btn() {
    main_data.check = 'I';
    modal_reset('.modal_value',main_data.readonly);
    $("#addDialog").dialog('open');
}


function update_btn(jqgrid_data) {

    modal_reset(".modal_value", []); // 해당 클래스 내용을 리셋 시켜줌 ,데이터에 readonly 사용할거

    main_data.check = 'U'; // 수정인지 체크


    ccn_ajax('/popPCOneGet', {keyword:jqgrid_data.pc_code}).then(function (data) { // user의 하나 출력
        modal_edits('.modal_value', main_data.readonly, data); // response 값 출력
        $("#addDialog").dialog('open');
    });
}


function delete_btn() {
    var gu5 = String.fromCharCode(5);
    var ids = $("#mes_grid").getGridParam('selarrrow'); // 체크된 그리드 로우
    if (ids.length === 0) {
        alert("삭제하는 데이터를 선택해주세요");
    } else {
        if (confirm("삭제하겠습니까?")) {
            main_data.check = 'D';
            wrapWindowByMask2();
            ccn_ajax("/popPCDel", {pc_code: ids.join(gu5)}).then(function (data) {
                if (data.result === 'NG') {
                    alert(data.message);
                } else {
                    get_btn($("#mes_grid").getGridParam('page'));
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

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['컴퓨터코드', '컴퓨터명', 'IP','비고','등록자','등록일'],
        colModel: [
            {name: 'pc_code', index: 'pc_code', key: true, sortable: false, width: 60},
            {name: 'pc_name', index: 'pc_name', sortable: false, width: 60},
            {name: 'ip', index: 'ip', sortable: false, width: 60},
            {name: 'remark', index: 'remark', sortable: false, width: 60},
            {name: 'user_name', index: 'user_name', sortable: false, width: 60},
            {name: 'update_date', index: 'update_date', width: 60, sortable: false, formatter: formmatterDate,},
        ],
        caption: "컴퓨터관리 | MES",
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
