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
    readonly: ['cargo_code']
};

////////////////////////////시작 함수/////////////////////////////////////
/**
 * @desc : 사용자관리 main 시작 함수
 * @생성자 : 김종효
 * @생성일 : 2019-11-12
 * */
$(document).ready(function () {
    jqGrid_main(); // main 그리드 생성
    jqGridResize("#mes_grid" , $('#mes_grid').closest('[class*="col-"]')); //그리드 리 사이즈
    selectBox(); // select2 생성

    /*----모달----*/
    modal_start1(); // 모달1 시작 함수
    jqgridPagerIcons(); // 그리드 아이콘 설정 맨 하단으로

});


////////////////////////////클릭 함수/////////////////////////////////////
// 조회 버튼
function get_btn(page) {
    main_data.send_data = value_return(".condition_main"); // value_return 클래스명 넣으면 name에 맞게 객체 생성

    main_data.send_data_post = main_data.send_data; // 수정 삭제시 다시 조회하기 위한 데이터저장

    $("#mes_grid").setGridParam({ // 그리드 조회
        url: '/sysCargoGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

// 수정 삭제 시 호출 하는 조회
function get_btn_post(page) {
    $("#mes_grid").setGridParam({ // 그리드 조회
        url: '/sysCargoGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

// 추가 버튼
function add_btn() {

    modal_reset(".modal_value", main_data.readonly); // 해당 클래스 내용을 리셋 시켜줌 ,데이터에 readonly 사용할거

    main_data.check = 'I'; // 저장인지 체크

    modalValuePush("#cargo_select","#cargo_grp_code","#cargo_grp_name"); // name1의 값을 name2,name3 에 넣어줌

    $("#addDialog").dialog('open'); // 모달 열기
}

// 그리는 더블 클릭 시 발동
function update_btn(jqgrid_data) {

    modal_reset(".modal_value", []); // 해당 클래스 내용을 리셋 시켜줌 ,데이터에 readonly 사용할거

    main_data.check = 'U'; // 수정인지 체크


    ccn_ajax('/sysCargoOneGet', {keyword:jqgrid_data.cargo_code}).then(function (data) { // user의 하나 출력
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
            ccn_ajax("/sysCargoDelete", {keyword: ids.join(gu5)}).then(function (data) {
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
    $("#cargo_select").select2();
}


function jqGrid_main() {
    $("#mes_grid").jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames:['구분코드','구분','창고코드','창고명','수량관리','활성','등록자','등록일'],
        colModel:[
            {name:'cargo_grp_code',index:'cargo_grp_code',sortable: false,hidden:true},
            {name:'cargo_grp_name',index:'cargo_grp_name',sortable: false},
            {name:'cargo_code',index:'cargo_code',key: true ,sortable: false},
            {name:'cargo_name',index:'cargo_name',sortable: false},
            {name:'qty_yn',index:'qty_yn',sortable: false},
            {name:'use_yn',index:'use_yn',sortable: false},
            {name:'user_name',index:'user_name',sortable: false},
            {name:'update_date',index:'update_date',formatter:formmatterDate,sortable: false},
        ],
        caption: "창고관리 | MES",
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


