/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly:[],
};

////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid',$('#mes_grid').closest('[class*="col-"]'));

    modal_start1();
    selectBox();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: "/qmsTestStdGet",
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/qmsTestStdGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}

function add_btn() {
    modal_reset(".modal_value", main_data.readonly);
    main_data.check = 'I';
    if(main_data.check == 'I'){
        $('#gubun_select2').prop("disabled",false);
        $('#code_select').prop("disabled",false);
    }
    modalValuePush("#line_select","#line_code","#line_name");

    if($('#gubun_select').val() == ''){
        $("select[name=part_grp_code] option:eq(0)").prop("selected", true).trigger("change");
    }else {
        $('#gubun_select2').val($('#gubun_select').val()).prop("selected",true).trigger("change");
    }
    $("#addDialog").dialog('open');
}
function update_btn(jqgrid_data) {
    modal_reset(".modal_value", []);
    main_data.check = 'U';
    var send_data = {};
    send_data.part_code = jqgrid_data.part_code;
    send_data.part_name = jqgrid_data.part_name;

    ccn_ajax('/qmsTestStdOneGet', send_data).then(function (data) {
        modal_edits('.modal_value', main_data.readonly, data); // response 값 출력
        $('#gubun_select2').val(data.part_grp_code).trigger("change");
        select_data_makes2('#code_select', "/sysBPartAllGet" , "part_code", "part_name",{keyword2:data.part_grp_code,keyword:''}).then(function (value) {
            $('#code_select').val(data.part_code).trigger("change");
            if(main_data.check=='U'){
                $('#gubun_select2').prop("disabled",true);
                $('#code_select').prop("disabled",true);
            }

            $("#addDialog").dialog('open');
        });


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
            ccn_ajax("/qmsTestStdDelete", {keyword: ids.join(",")}).then(function (data) {
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

////////////////////////////호출 함수//////////////////////////////////

function selectBox() {
    select_makes("#line_select", "/getLine", "line_code", "line_name");
    select_data_makes('#gubun_select', "/sysBPartGroupSelectGet" , "part_grp_code", "part_grp_name",{keyword:''});

    select_makes3('#gubun_select2', "/sysBPartGroupSelectGet" , "part_grp_code", "part_grp_name",{keyword:''}).then(function (data) {
        select_data_makes('#code_select', "/sysBPartAllGet" , "part_code", "part_name",{keyword2:data,keyword:''});
    });
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        mtype: "POST",
        datatype: "local",
        colNames: ['제품구분','제품코드','라인코드','라인명','제품명','1차','2차','등록자','수정일'],
        colModel: [
            {name: 'part_grp_name', index: 'part_grp_name', width: 50, sortable:false},
            {name: 'part_code', index: 'part_code',key:true, width: 50, sortable:false,hidden:true},
            {name: 'line_name', index: 'line_name', width: 50, sortable:false,hidden:true},
            {name: 'line_code', index: 'line_code', width: 50, sortable:false,hidden:true},
            {name: 'part_name', index: 'part_name', width: 50, sortable:false},
            {name: 'diameter1', index: 'diameter1', width: 50, sortable:false},
            {name: 'diameter2', index: 'diameter2', width: 50, sortable:false},
            {name: 'user_name', index: 'user_name', width: 50, sortable:false},
            {name: 'update_date', index: 'update_date', width: 50, sortable:false, formatter:formmatterDate}
        ],
        caption: "외경검사기준 | MES",
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