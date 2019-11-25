var grid_add_data=[];
var grid2_add_data=[];

function modal_start1() {
    modal_make1();
    datepicker_modal1();

    jqGrid_modal1();
    jqGridResize("#mes_add_grid", $('#mes_add_grid').closest('[class*="col-"]'));
    jqGridResize("#mes_add_grid2", $('#mes_add_grid2').closest('[class*="col-"]'));

}

function jqGrid_modal1() {
    $("#mes_add_grid").jqGrid({
        data: grid_add_data,
        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "발주추가 | MES",
        colNames: ['품목그룹', '품번', '품명', '규격', '단위', '검사기준'],
        colModel: [
            {name: 'group', index: 'group'},
            {name: 'num', index: 'num'},
            {name: 'name', index: 'name'},
            {name: 'standard', index: 'standard'},
            {name: 'unit', index: 'unit'},
            {name: 'i_standard', index: 'i_standard'},
        ],
        // 페이지 수 보기 (1 / 100) = true
        // 높이 : 450px
        autowidth: true,
        height: 500,
        // 디폴트 조회 개수 : 100
        rowNum: 100,
        // 단위 별 조회 개수
        rowList: [100, 200, 300, 500, 1000],
        // pager 세팅
        pager: "#mes_add_grid_pager",

    });

    $("#mes_add_grid2").jqGrid({
        data: grid2_add_data,
        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "발주추가 | MES",
        colNames: ['품목그룹', '품번', '품명', '규격', '단위', '검사기준','발주수량','납기일'],
        colModel: [
            {name: 'group', index: 'group', width: 60},
            {name: 'num', index: 'num', width: 60},
            {name: 'name', index: 'name', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'i_standard', index: 'i_standard', width: 60},
            {name: 'order_num', index: 'order_num', width: 60},
            {name: 'date', index: 'date', width: 60},
        ],
        autowidth: true,
        height: 280,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
    });

}


function modal_make1() {
    $("#addDialog").dialog({
        modal: true,
        width: 1500,
        height: 'auto',
        autoOpen: false,
        resizable: false,
        buttons : [
            {
                "class": "hide",
            }
        ]
    });
}

function datepicker_modal1() {
    datepicker_makes("#datepicker3", 0);

}