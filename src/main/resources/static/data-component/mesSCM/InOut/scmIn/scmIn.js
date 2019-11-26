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
    modal_start2();

    suppModal_start();

    jqgridPagerIcons();

});


////////////////////////////클릭 함수/////////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");


    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g,'');
    main_data.send_data.end_date = main_data.send_data.end_date.replace(/\-/g,'');
    main_data.send_data_post = main_data.send_data;
    console.log(main_data.send_data_post);
    $("#scmInTopGrid").setGridParam({
        url:"/scmInGet",
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/scmInGet',
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
    $( "#scmInDialogRightGrid" ).jqGrid('clearGridData');
    modal2_data.part_code = '';
    modal2_data.sub_data = [];
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
function suppModal_bus(code,name) {
    if (main_data.supp_check === 'A'){
        $("#supp_name_main").val(name);
        $("#supp_code_main").val(code);
    }else if(main_data.supp_check === 'B'){

        $("#supp_name_modal").val(name);
        $("#supp_code_modal").val(code);
        modal2_data.part_code = '';
        modal2_data.sub_data = [];
        $( "#scmInDialogRightGrid" ).jqGrid('clearGridData');
    }
    $( "#SuppSearchGrid" ).jqGrid('clearGridData');
}
function suppModal_close_bus() {
    if (main_data.supp_check === 'A'){
        $("#supp_name_main").val("");
        $("#supp_code_main").val("");
    }
    $( "#SuppSearchGrid" ).jqGrid('clearGridData');
}



function datepickerInput() {
    datepicker_makes("#datepicker",-1);
    datepicker_makes("#datepicker2",0);

}


function jqGrid_main() {
    $("#scmInTopGrid").jqGrid({
        mtype: 'POST',
        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "입고등록 | MES",
        colNames: ['입고일자','전표번호','업체','상태','처리자','출고일시'],
        colModel: [
            {name: 'work_date', index: 'work_date', width: 60, sortable: false,formatter:formmatterDate2},
            {name: 'in_no', index: 'in_no', key: true,width: 60, sortable: false},
            {name: 'supp_name', index: 'supp_name', width: 60, sortable: false},
            {name: 'status_name', index: 'status_name', width: 60, sortable: false},
            {name: 'user_name', index: 'user_name', width: 60, sortable: false},
            {name: 'out_date', index: 'out_date', width: 60, sortable: false},
        ],
        autowidth: true,
        viewrecords: true,
        height: 200,
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
            {name: 'num', index: 'code', width: 60, sortable: false},
            {name: 'group', index: 'name', width: 60, sortable: false},
            {name: 'p_num', index: 'cargo', width: 60, sortable: false},
            {name: 'p_name', index: 'location', width: 60, sortable: false},
            {name: 'c_name', index: 'cargo', width: 60, sortable: false},
            {name: 'standard', index: 'cargo', width: 60, sortable: false},
            {name: 'unit', index: 'standard', width: 60, sortable: false},
            {name: 'in_num', index: 'unit', width: 60, sortable: false},
            {name: 'bad_num', index: 'max', width: 60, sortable: false},
            {name: 'real_num', index: 'min', width: 60, sortable: false},
        ],
        autowidth: true,
        viewrecords: true,
        height: 150,
        rowNum: 100,
        rowList:[100,200,300,500,1000],
        pager: '#scmInBottomGridPager'

    });

}


///////////////////////////////지울거//////////////////////////////////////////


var bottomGrid_data =
    [
        {num:"P01-123112215",group:"투비시스템",state:"입고",manager:"LEE",outdate:"2019-11-15 09:00:00"},
    ];