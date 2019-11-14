/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
/**
 * @desc : 사용자관리 main 데이터
 * @생성자 : 김종효
 * @생성일 : 2019-11-12
 * */
var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: ['user_code']
};

////////////////////////////시작 함수/////////////////////////////////////
/**
 * @desc : 사용자관리 main 시작 함수
 * @생성자 : 김종효
 * @생성일 : 2019-11-12
 * */
$(document).ready(function () {
    jqGrid_main();
    jqgridPagerIcons();
    jqGrid_resizes("#mes_grid", ".table-responsive");
    selectBox();

    /*----모달----*/
    modal_start1();

});


////////////////////////////클릭 함수/////////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");

    main_data.send_data_post = main_data.send_data;

    $("#mes_grid").setGridParam({
        url: '/sysUserGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/sysUserGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function add_btn() {

    modal_reset(".modal_value", main_data.readonly);

    main_data.check = 'I';

    $("#addDialog").dialog('open');
}


function update_btn(jqgrid_data) {

    modal_reset(".modal_value", []);

    main_data.check = 'U';

    jqgrid_data.dept_code = main_data.send_data_post.keyword;

    ccn_ajax('/sysUserOneGet', jqgrid_data).then(function (data) {
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
            ccn_ajax("/sysUserDelete", {keyword: ids.join(",")}).then(function (data) {
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


////////////////////////////호출 함수/////////////////////////////////////

function selectBox() {
    select_makes("#dept_select", "/sysDeptAllGet", "dept_code", "dept_name");

}


function jqGrid_main() {
    $("#mes_grid").jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['사용자코드', '사용자명', '부서', '직책', '권한', '전화번호', '이메일', '사용유무', '최근로그인', '수정일'],
        colModel: [
            {name: 'user_code', index: 'user_code', key: true, sortable: false},
            {name: 'user_name', index: 'user_name', sortable: false},
            {name: 'dept_name', index: 'dept_name', sortable: false},
            {name: 'duty_name', index: 'duty_name', sortable: false},
            {name: 'auth_name', index: 'auth_name', sortable: false},
            {name: 'tel_no', index: 'tel_no', sortable: false},
            {name: 'email', index: 'email', sortable: false},
            {name: 'use_yn', index: 'use_yn', sortable: false},
            {name: 'login_date', index: 'login_date', formatter: formmatterDate, sortable: false},
            {name: 'update_date', index: 'update_date', formatter: formmatterDate, sortable: false},
        ],
        caption: "사용자관리 | MES",
        autowidth: true,
        height: 450,
        pager: '#mes_grid_pager',
        jsonReader: {cell: ""},
        rowNum: 100,
        rowList: [100, 200, 300, 400],
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
    }).navGrid("#mes_grid_pager", {search: false, add: false, edit: false, del: false});
}



