/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
/**
 * @desc : 라인정보관리 main 데이터
 * @생성자 : 이용환
 * @생성일 : 2019-12-20
 * */
var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly:[]
}

////////////////////////////시작 함수//////////////////////////////////
/**
 * @desc : 라인정보관리 main 시작 함수
 * @생성자 : 이용환
 * @생성일 : 2019-12-20
 * */
$(document).ready(function () {
    jqGrid_main(); // main 그리드 생성
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]')); // 그리드 리사이즈

    /*----모달----*/
    modal_start1(); // 모달1 시작 함수

    jqgridPagerIcons(); // 그리드 아이콘 설정
});

////////////////////////////클릭 함수//////////////////////////////////
// 조회버튼
function get_btn(page) {
    $("#mes_grid").setGridParam({ // 그리드 조회
        url: '/sysProdLineGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}
//등록 버튼
function add_btn() {
    modal_reset(".modal_value", main_data.readonly); // 해당 클래스 명을 가진 항목들의 내용을 리셋,비워줌 main_data readonly 에 추가한 name의 항목에 readonly 옵션을 추가
    main_data.check = 'I'; // 추가인지 체크 'I' 추가 , 'U' 수정, 'D' 삭제
    $("#addDialog").dialog('open'); // 모달 열기
}

////////////////////////////호출 함수//////////////////////////////////

function jqGrid_main() {
    //jqGrid 생성
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames : ['부서코드','부서','라인코드','라인명','등록자','등록일'],
        colModel : [
            {name:'dept_code',index:'dept_code',hidden:true,sortable: false,width:380},
            {name:'dept_name',index:'dept_name',sortable: false,width:380},
            {name:'line_code',index:'line_code',key: true ,sortable: false,width:380},
            {name:'line_name',index:'line_name',sortable: false,width:380},
            {name:'user_name',index:'user_name',sortable: false,width:380},
            {name:'update_date',index:'update_date',formatter:formmatterDate,sortable: false,width:380},
        ],
        caption: "라인정보 | MES",
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
        ondblClickRow: function (rowid, iRow, iCol, e) {            // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            update_btn(data);
        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}
