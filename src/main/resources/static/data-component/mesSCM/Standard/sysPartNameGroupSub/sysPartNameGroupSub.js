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

    modal_start1();
    authcheck();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

function add_btn() {
    // if(main_data.auth.check_add != "N") {
    //     modal_reset(".modal_ value", main_data.readonly); // 해당 클래스 내용을 리셋 시켜줌 ,데이터에 readonly 사용할거
        main_data.check = 'I'; // 저장인지 체크

        $("#addDialog").dialog('open'); // 모달 열기
    // } else {
    //     alert("추가권한이 없습니다.");
    // }
}

////////////////////////////호출 함수//////////////////////////////////
function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "sysPartNameGroupSub"}).then(function (data) {
        main_data.auth = data;
    });
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['생성순','코드'],
        colModel: [
            {name: '', index: '', sortable:false},
            {name: '', index: '', sortable:false}
        ],
        caption: "품명세부분류관리 | MES",
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

        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}

