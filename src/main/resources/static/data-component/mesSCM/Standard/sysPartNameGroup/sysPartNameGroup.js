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
    selectBox();
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));

    modal_start1();
    authcheck();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;

    // $("#mes_grid").setGridParam({
    //     url: '/',
    //     datatype: "json",
    //     page: page,
    //     postData: main_data.send_data
    // }).trigger("reloadGrid");
}

function get_btn_post(page) {
    // $("#mes_grid").setGridParam({
    //     url: '/',
    //     datatype: "json",
    //     page: page,
    //     postData: main_data.send_data_post
    // }).trigger("reloadGrid");
}

function add_btn() {
    // if (main_data.auth.check_add !="N") {
    //     main_data.check = 'I';

        $("#addDialog").dialog('open');
    // } else {
    //     alert("추가권한이 없습니다,");
    // }
}


function update_btn(jqgrid_data) {
    // if (main_data.auth.check_edit !="N") {
    //     modal_reset(".modal_value", []);
        main_data.check = 'U';
    //     ccn_ajax('/', jqgrid_data).then(function (data) {
    //         modal_edits('.modal_value', main_data.readonly, data); // response 값 출력
    //         $("#addDialog").dialog('open');
    //     });
    // } else {
    //     alert("수정권한이 없습니다.");
    // }
}


function delete_btn() {
    // if(main_data.auth.check_del != "N") {
    //     var gu4 = String.fromCharCode(4);
    //     var gu5 = String.fromCharCode(5);
    //     var ids = $("#mes_grid").getGridParam('selarrrow');
    //     if (ids.length === 0) {
    //         alert("삭제하는 데이터를 선택해주세요");
    //     } else {
    //         if (confirm("삭제하겠습니까?")) {
    //             wrapWindowByMask2();
    //             var list = [];
    //             var data;
    //
    //             ids.forEach(function (id) {
    //                 data = $('#mes_grid').jqGrid('getRowData', id);
    //                 list.push(data.part_type+gu4+data.part_level+gu4+data.part_grp_code);
    //             });
    //
    //             main_data.check = 'D';
    //             callback(function () {
    //                 ccn_ajax("/", {keyword: list.join(gu5)}).then(function (data) {
    //                     if (data.result === 'NG') {
    //                         alert(data.message);
    //                     } else {
    //                         get_btn_post($("#mes_grid").getGridParam('page'));
    //                     }
    //                     closeWindowByMask();
    //                 }).catch(function (err) {
    //                     closeWindowByMask();
    //                     console.error(err); // Error 출력
    //                 });
    //             });
    //
    //         }
    //     }
    // } else {
    //     alert("삭제권한이 없습니다.");
    // }
}

////////////////////////////호출 함수//////////////////////////////////
function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "sysPartNameGroup"}).then(function (data) {
        main_data.auth = data;
    });
}

function selectBox() {
    $('#gubun_select').select2();
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['시리즈','표기','지름', '범위'],
        colModel: [
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60}
        ],
        caption: "품명분류관리 | MES",
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

