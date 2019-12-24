/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: ['qc_code']
};

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main(); // main 그리드 생성
    jqGridResize("#mes_grid" , $('#mes_grid').closest('[class*="col-"]')); //그리드 리 사이즈


    /*----모달----*/
    modal_start1(); // 모달1 시작 함수
    jqgridPagerIcons(); // 그리드 아이콘 설정 맨 하단으로

});


////////////////////////////클릭 함수/////////////////////////////////////
// 조회 버튼
function get_btn(page) {
    $("#mes_grid").setGridParam({ // 그리드 조회
        url: '/tpmMachineRegItemGet',
        datatype: "json",
        page: page,
    }).trigger("reloadGrid");
}

// 수정 삭제 시 호출 하는 조회
function get_btn_post(page) {
    $("#mes_grid").setGridParam({ // 그리드 조회
        url: '/tpmMachineRegItemGet',
        datatype: "json",
        page: page,
    }).trigger("reloadGrid");
}


// 추가 버튼
function add_btn() {

    modal_reset(".modal_value", main_data.readonly); // 해당 클래스 내용을 리셋 시켜줌 ,데이터에 readonly 사용할거

    main_data.check = 'I'; // 저장인지 체크

    $("#addDialog").dialog('open'); // 모달 열기
}

// 그리는 더블 클릭 시 발동
function update_btn(jqgrid_data) {

    modal_reset(".modal_value", []); // 해당 클래스 내용을 리셋 시켜줌 ,데이터에 readonly 사용할거

    main_data.check = 'U'; // 수정인지 체크

    ccn_ajax('/tpmMachineRegItemOneGet', {keyword:jqgrid_data.qc_code}).then(function (data) { // user의 하나 출력
        modal_edits('.modal_value', main_data.readonly, data); // response 값 출력
        $("#addDialog").dialog('open');
    });
}

// 삭제 버튼
function delete_btn() {
    var gu5 = String.fromCharCode(5);
    var ids = $("#mes_grid").getGridParam('selarrrow'); // 체크된 그리드 로우
    if (ids.length === 0) {
        alert("삭제하는 데이터를 선택해주세요");
    } else {
        if (confirm("삭제하겠습니까?")) {
            main_data.check = 'D';
            wrapWindowByMask2();
            ccn_ajax("/tpmMachineRegItemDel", {keyword: ids.join(gu5)}).then(function (data) {
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




function jqGrid_main() {
    $("#mes_grid").jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames : ['점검항목코드','점검항목명','사용유무','등록자','점검일시'],
        colModel : [
            {name:'qc_code',index:'qc_code',key: true ,sortable: false,width:380},
            {name:'qc_name',index:'qc_name',sortable: false,width:380},
            {name:'use_yn',index:'use_yn',sortable: false,width:380},
            {name:'user_name',index:'user_name',sortable: false,width:380},
            {name:'update_date',index:'update_date',formatter:formmatterDate,sortable: false,width:380},
        ],
        caption: "예방점검 항목관리 | MES",
        autowidth: true,
        height: 550,
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


