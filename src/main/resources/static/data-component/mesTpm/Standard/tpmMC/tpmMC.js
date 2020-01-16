/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: ['machine_code'],
    delCheck1:0,
    delCheck2:0,
    delCheck3:0,
    auth:{}
};


////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    selectBox();
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    authcheck();
    modal_start1();
    modal_start2();
    jqgridPagerIcons();


});


////////////////////////////클릭 함수//////////////////////////////////

// 조회 버튼
function get_btn(page) {
    main_data.send_data = value_return(".condition_main"); // value_return 클래스명 넣으면 name에 맞게 객체 생성

    main_data.send_data_post = main_data.send_data; // 수정 삭제시 다시 조회하기 위한 데이터저장

    $("#mes_grid").setGridParam({ // 그리드 조회
        url: '/tpmMCGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

// 수정 삭제 시 호출 하는 조회
function get_btn_post(page) {
    $("#mes_grid").setGridParam({ // 그리드 조회
        url: '/tpmMCGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}



function delete_btn() {
    if(main_data.auth.check_del != "N") {
        var gu5 = String.fromCharCode(5);
        var ids = $("#mes_grid").getGridParam('selarrrow'); // 체크된 그리드 로우
        if (ids.length === 0) {
            alert("삭제하는 데이터를 선택해주세요");
        } else {
            if (confirm("삭제하겠습니까?")) {
                main_data.check = 'D';
                wrapWindowByMask2();
                ccn_ajax("/tpmMCDel", {keyword: ids.join(gu5)}).then(function (data) {
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
    } else {
        alert("삭제권한이 없습니다.");
    }
}


function add_btn() {
    if(main_data.auth.check_add != "N") {
        modal_reset(".modal_value", main_data.readonly);
        datepicker_makes("#datepicker", 0);

        $("#line_select2").val($('#line_select').val()).trigger("change");

        readURLRemove(1);
        readURLRemove(2);
        readURLRemove(3);

        $("#mes_modal_grid").jqGrid('clearGridData');
        main_data.check = 'I';
        $("#addDialog").dialog('open');
        jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));
    } else {
        alert("추가권한이 없습니다.");
    }
}

////////////////////////////호출 함수//////////////////////////////////
function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "tpmMC"}).then(function (data) {
        main_data.auth = data;
    });
}
function selectBox() {
    select_makes("#line_select", "/getLine", "line_code", "line_name");
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['설비코드', '설비명', '설치장소','비고', '등록자', '등록일'],
        colModel: [
            {name: 'machine_code', index: 'machine_code', key: true, sortable: false, width: 60},
            {name: 'machine_name', index: 'machine_name', sortable: false, width: 60},
            {name: 'line_name', index: 'line_name', sortable: false, width: 60},
            {name: 'remark', index: 'remark', sortable: false, width: 60},
            {name: 'user_name', index: 'user_name', sortable: false, width: 60},
            {name: 'update_date', index: 'update_date', width: 60, sortable: false, formatter: formmatterDate,},
        ],
        caption: "설비정보관리 | MES",
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
