/**
 * various.js 와 연동
 */
alert('11dd111ss111dddddd123123');
////////////////////////////데이터/////////////////////////////////////
/**
 * @desc : 사용자관리 main 데이터
 * @생성자 : 김종효
 * @생성일 : 2019-11-12
 * */
var main_data = {
    check: 'I',
    supp_check:'A',
    send_data: {},
    send_data_post: {},

};

////////////////////////////시작 함수/////////////////////////////////////
/**
 * @desc : 사용자관리 main 시작 함수
 * @생성자 : 김종효
 * @생성일 : 2019-11-12
 * */
$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#scmInTopGrid", $('#scmInTopGrid').closest('[class*="col-"]'));
    jqGridResize("#scmInBottomGrid", $('#scmInBottomGrid').closest('[class*="col-"]'));
    datepickerInput();
    /*----모달----*/
    modal_start1();

    suppModal_start();

    jqgridPagerIcons();

});


////////////////////////////클릭 함수/////////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;
    console.log(main_data.send_data_post);

    $("#scmInTopGrid").setGridParam({
        datatype: "local",
        page: page,
        data: topGrid_data
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

function under_get(rowid) {
    console.log(rowid);
    $("#scmInBottomGrid").setGridParam({
        datatype: "local",
        data: bottomGrid_data
    }).trigger("reloadGrid");
}


function add_btn() {
    modal_reset(".modal_value", []);
    $( "#scmInDialogLeftGrid" ).jqGrid('clearGridData');
    $("#datepicker3").datepicker('setDate','today');
    
    main_data.check = 'I';

    $("#scmIn-add-dialog").dialog('open');
    jqGridResize2("#scmInDialogLeftGrid", $('#scmInDialogLeftGrid').closest('[class*="col-"]'));
    jqGridResize2("#scmInDialogRightGrid", $('#scmInDialogRightGrid').closest('[class*="col-"]'));
}



function supp_btn(what) {
    main_data.supp_check = what;
    $("#supp_modal_keyword").val("supp_name");
    $("#supp_modal_keyword2").val("");

    $( "#SuppSearchGrid" ).jqGrid('clearGridData');
    $( "#supp-search-dialog" ).dialog('open');
     jqGridResize2("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
}

function suppModal_bus(code,name) {
    if (main_data.supp_check === 'A'){
        $("#supp_name_main").val(name);
        $("#supp_code_main").val(code);
    }else if(main_data.supp_check === 'B'){
        $("#supp_name_modal").val(name);
        $("#supp_code_modal").val(code);
    }
    $( "#SuppSearchGrid" ).jqGrid('clearGridData');

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


function datepickerInput() {
    datepicker_makes("#datepicker",-1);
    datepicker_makes("#datepicker2",0);

}


function jqGrid_main() {
    $("#scmInTopGrid").jqGrid({

        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "입고등록 | MES",
        colNames: ['입고일자','전표번호','업체','상태','처리자','출고일시'],
        colModel: [
            {name: 'indate', index: 'indate', width: 60},
            {name: 'num', index: 'num', key: true,width: 60},
            {name: 'supp', index: 'supp', width: 60},
            {name: 'state', index: 'state', width: 60},
            {name: 'manager', index: 'manager', width: 60},
            {name: 'outdate', index: 'outdate', width: 60},
        ],
        autowidth: true,
        viewrecords: true,
        height: 150,
        rowNum: 100,
        rowList:[100,200,300,500,1000],
        pager: '#scmInTopGridPager',
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onCellSelect:function (rowid,icol,cellcontent,e) {
            under_get(rowid);
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            update_btn(data);

        }

    });

    $('#scmInBottomGrid').jqGrid({

        datatype: "local",
        caption: "입고등록 | MES",
        colNames: ['전표번호','품목그룹','품번','품명','업체명','규격','단위','입고수량','불량수량','실입고수량'],
        colModel: [
            {name: 'num', index: 'code', width: 60},
            {name: 'group', index: 'name', width: 60},
            {name: 'p_num', index: 'cargo', width: 60},
            {name: 'p_name', index: 'location', width: 60},
            {name: 'c_name', index: 'cargo', width: 60},
            {name: 'standard', index: 'cargo', width: 60},
            {name: 'unit', index: 'standard', width: 60},
            {name: 'in_num', index: 'unit', width: 60},
            {name: 'bad_num', index: 'max', width: 60},
            {name: 'real_num', index: 'min', width: 60},
        ],
        autowidth: true,
        viewrecords: true,
        height: 200,
        rowNum: 100,
        rowList:[100,200,300,500,1000],
        pager: '#scmInBottomGridPager'

    });

}


///////////////////////////////지울거//////////////////////////////////////////
var topGrid_data =
    [
        {indate:"2019-11-14",num:"P01-123112215",supp:"투비시스템",state:"입고",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112216",supp:"투비시스템",state:"입고",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112217",supp:"투비시스템",state:"입고",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112218",supp:"투비시스템",state:"검사대기",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112219",supp:"투비시스템",state:"입고완료",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112220",supp:"투비시스템",state:"검사대기",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112221",supp:"투비시스템",state:"검사대기",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112222",supp:"투비시스템",state:"검사대기",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112223",supp:"투비시스템",state:"검사대기",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112224",supp:"투비시스템",state:"입고",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112225",supp:"투비시스템",state:"입고",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112226",supp:"투비시스템",state:"입고완료",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112227",supp:"투비시스템",state:"입고완료",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112228",supp:"투비시스템",state:"입고완료",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112229",supp:"투비시스템",state:"입고",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112230",supp:"투비시스템",state:"입고완료",manager:"LEE",outdate:"2019-11-15 09:00:00"},
        {indate:"2019-11-14",num:"P01-123112231",supp:"투비시스템",state:"입고",manager:"LEE",outdate:"2019-11-15 09:00:00"},
    ];

var bottomGrid_data =
    [
        {num:"P01-123112215",group:"투비시스템",state:"입고",manager:"LEE",outdate:"2019-11-15 09:00:00"},
    ];