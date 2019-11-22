/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: ['user_code']
};


////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid',$('#mes_grid').closest('[class*="col-"]'));
    selectBox();
    modal_start1();

    modal_start2();
    suppModal_start();

    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

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

function upload_btn() {
    $('#uploadDialog').dialog('open');
    jqGridResize2('#modal2_grid',$('#modal2_grid').closest('[class*="col-"]'));
}


////////////////////////////호출 함수//////////////////////////////////

function selectBox() {
    select_makes("#gubun_select", "/getPartType", "part_type_code", "part_type_name");

}


function jqGrid_main() {
    $('#mes_grid').jqGrid({
        mtype: 'POST',
        datatype: "local",
        colNames: ['품목구분', '품목코드', '품목명', '보관로케이션', '업체명', '규격', '단위', 'L/T', '검사기준', '검사구분', '재고최대', '재고최소', '등록자', '수정일'],
        colModel: [
            {name: 'p_category', index: 'p_category', width: 40},
            {name: 'p_code', index: 'p_code', width: 40},
            {name: 'p_name', index: 'p_name', width: 40},
            {name: 'location', index: 'location', width: 40},
            {name: 'c_name', index: 'c_name', width: 40},
            {name: 'standard', index: 'standard', width: 40},
            {name: 'unit', index: 'unit', width: 40},
            {name: 'LT', index: 'LT', width: 40},
            {name: 'i_standard', index: 'i_standard', width: 40},
            {name: 'i_category', index: 'i_standard', width: 40},
            {name: 'stock_max', index: 'stock_max', width: 40},
            {name: 'stock_min', index: 'stock_min', width: 40},
            {name: 'manager', index: 'manager', width: 40},
            {name: 'modified_date', index: 'modified_date', width: 40},
        ],
        caption: "자재정보관리 | MES",
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