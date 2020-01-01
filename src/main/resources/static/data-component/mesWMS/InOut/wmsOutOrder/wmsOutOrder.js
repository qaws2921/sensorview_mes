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
    check2: 'Y'

};

////////////////////////////시작 함수/////////////////////////////////////
/**
 * @desc : 사용자관리 main 시작 함수
 * @생성자 : 김종효
 * @생성일 : 2019-11-12
 * */
$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize("#scmOutOrderBottomGrid", $('#scmOutOrderBottomGrid').closest('[class*="col-"]'));
    datepickerInput();
    /*----모달----*/
    modal_start1();
    crmModal_start();

    jqgridPagerIcons();

});


////////////////////////////클릭 함수/////////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data.end_date = main_data.send_data.end_date.replace(/\-/g, '');
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: "/wmsOutOrderGet",
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
    $('#mes_grid2').jqGrid('clearGridData');
}

function get_btn_post(page) {
    $("#mes_grid").setGridParam({
        url: '/wmsOutOrderGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
    $('#mes_grid2').jqGrid('clearGridData');
}

function under_get(rowid) {

    $("#mes_grid2").setGridParam({
        url: '/wmsOutOrderSubGet',
        datatype: "json",
        page: 1,
        postData: {keyword: rowid,keyword2:''}
    }).trigger("reloadGrid");
}


function add_btn() {



    $("#addDialog").dialog('open');
    jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));

}




function delete_btn() {
    var ids = $("#mes_grid").getGridParam('selarrrow');
    var check = '';
    var check2 = [];
    if (ids.length === 0) {
        alert("삭제하는 데이터를 선택해주세요");
    } else {
        ids.forEach(function (id) {
            check = $('#scmOutOrderTopGrid').jqGrid('getRowData', id).status;
            if (check === '1') {
                check2.push(id);
            }

        })
        if (check2.length > 0) {
            alert(check2.join(",") + " 전표가 출고 완료 되어있습니다.");
        } else {
            if (confirm("삭제하겠습니까?")) {
                main_data.check = 'D';
                wrapWindowByMask2();
                ccn_ajax("/scmOutOrderDel", {ord_no: ids.join("&")}).then(function (data) {
                    if (data.result === 'NG') {
                        alert(data.message);
                    } else {
                        get_btn_post($("#scmOutOrderTopGrid").getGridParam('page'));
                    }
                    $('#scmOutOrderBottomGrid').jqGrid('clearGridData');
                    closeWindowByMask();
                }).catch(function (err) {
                    closeWindowByMask();
                    console.error(err); // Error 출력
                });
            }
        }
        $('#scmOutOrderTopGrid').jqGrid("resetSelection");


    }
}


////////////////////////////호출 함수/////////////////////////////////////

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);

}


function jqGrid_main() {
    $("#mes_grid").jqGrid({
        mtype: 'POST',
        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
       caption: "제품출고 지시 | MES",
       colNames: ['요청일자','요청번호','처리구분','등록자','등록일시','처리자','출고일시'],
       colModel: [
           {name: 'work_date', index: 'work_date' ,formatter: formmatterDate2, sortable: false},
           {name: 'req_no', index: 'req_no', key: true, sortable: false},
           {name: 'status_name', index: 'status_name', sortable: false},
           {name: 'user_name', index: 'user_name', sortable: false},
           {name: 'update_date', index: 'update_date', sortable: false,formatter: formmatterDate},
           {name: 'out_user_name', index: 'out_user_name', sortable: false},
           {name: 'out_update_date', index: 'out_update_date',formatter: formmatterDate, sortable: false},

       ],
        autowidth: true,
        viewrecords: true,
        height: 200,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid_pager',
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onCellSelect: function (rowid, icol, cellcontent, e) {
            under_get(rowid);
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            if (data.status === '1') {
                main_data.check2 = 'N';
            } else {
                main_data.check2 = 'Y';
            }
            update_btn(rowid);

        }

    });

    $('#mes_grid2').jqGrid({
        mtype: 'POST',
        datatype: "local",
        caption: "제품출고 지시 | MES",
       colNames: ['전표번호','품목그룹','품번','품명','규격','단위','요청수량','출고수량'],
       colModel: [
           {name: 'req_no', index: 'req_no', width: 60, sortable: false},
           {name: 'part_grp_name', index: 'part_grp_name', width: 60, sortable: false},
           {name: 'part_code', index: 'part_code', width: 60, sortable: false},
           {name: 'part_name', index: 'part_name', width: 60, sortable: false},
           {name: 'spec', index: 'spec', width: 60, sortable: false},
           {name: 'unit_name', index: 'unit_name', width: 60, sortable: false},
           {name: 'req_qty', index: 'req_qty', width: 60, sortable: false},
           {name: 'qty', index: 'qty', width: 60, sortable: false},

       ],
        autowidth: true,
        viewrecords: true,
        height: 150,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid_pager2'

    });

}




