/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
};

var testdata = [
    {id:'1',code:'CSVA1',code2:'확정',jan:'1000',feb:'1000',mar:'1000',sum:'3000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {rowspan:"3"}, sumtotal:{rowspan:"3"},dif:{rowspan:"3"},prod_no:{rowspan:"3"},prod_stock:{rowspan:"3"},prod_date:{rowspan:"3"}}},
    {id:'2',code:'CSVA1',code2:'협의',jan:'1000',feb:'0',mar:'0',sum:'1000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {display: "none"}, sumtotal:{display: "none"},dif:{display: "none"},prod_no:{display: "none"},prod_stock:{display: "none"},prod_date:{display: "none"}}},
    {id:'3',code:'CSVA1',code2:'예상',jan:'0',feb:'0',mar:'500',sum:'500',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {display: "none"}, sumtotal:{display: "none"},dif:{display: "none"},prod_no:{display: "none"},prod_stock:{display: "none"},prod_date:{display: "none"}}},
    {id:'4',code:'CSVA2',code2:'확정',jan:'1000',feb:'1000',mar:'1000',sum:'3000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {rowspan:"3"}, sumtotal:{rowspan:"3"},dif:{rowspan:"3"},prod_no:{rowspan:"3"},prod_stock:{rowspan:"3"},prod_date:{rowspan:"3"}}},
    {id:'5',code:'CSVA2',code2:'협의',jan:'1000',feb:'0',mar:'0',sum:'1000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {display: "none"}, sumtotal:{display: "none"},dif:{display: "none"},prod_no:{display: "none"},prod_stock:{display: "none"},prod_date:{display: "none"}}},
    {id:'6',code:'CSVA2',code2:'예상',jan:'0',feb:'0',mar:'500',sum:'500',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {display: "none"}, sumtotal:{display: "none"},dif:{display: "none"},prod_no:{display: "none"},prod_stock:{display: "none"},prod_date:{display: "none"}}},
];
var arrtSetting = function (rowId, val, rawObject, cm) {
    var attr = rawObject.attr[cm.name], result;
    if (attr.rowspan) {
        result = ' rowspan=' + '"' + attr.rowspan + '"';
    } else if (attr.display) {
        result = ' style="display:' + attr.display + '"';
    }
    return result;
};

var colNames_sub = {
    a:['제품코드','분류', '1월', '2월', '3월', '소계', '전체계', '차이', '생산량','시점재고', '생산시기'],
    b:['제품코드','분류', '4월', '5월', '6월', '소계', '전체계', '차이', '생산량','시점재고', '생산시기'],
    c:['제품코드','분류', '7월', '8월', '9월', '소계', '전체계', '차이', '생산량','시점재고', '생산시기'],
    d:['제품코드','분류', '10월', '11월', '12월', '소계', '전체계', '차이', '생산량','시점재고', '생산시기'],
}

var colNames = ['제품코드','분류', '1월', '2월', '3월', '소계', '전체계', '차이', '생산량','시점재고', '생산시기']
////////////////////////////시작 함수/////////////////////////////////
$(document).ready(function () {
    jqGrid_main();
    jqGrid_header();
    // jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    selectBox();
    datepickerInput();
    modal_start1();


    jqgridPagerIcons();
});
////////////////////////////클릭 함수////////////////////////////////
function add_btn() {
    $("#addDialog").dialog('open');
}

function bungi_change(value) {
    if (value === '1'){
        colNames = colNames_sub.a;
    } else if (value === '2'){
        colNames = colNames_sub.b;
    } else if(value === '3'){
        colNames = colNames_sub.c;
    } else if(value === '4'){
        colNames = colNames_sub.d;
    }

    //$("#mes_grid").jqGrid("setLabel", colNames, '');

    $('#mes_grid').jqGrid('destroyGroupHeader');
    $.jgrid.gridUnload('#mes_grid');
    jqGrid_main();
    jQuery("#mes_grid").jqGrid('setGroupHeaders', {
        useColSpanStyle: true,
        groupHeaders: [
            {startColumnName: 'jan', numberOfColumns: 3, titleText: '<center>'+value+'분기</center>'},

        ]
    });

}

////////////////////////////호출 함수////////////////////////////////
function datepickerInput() {
    var date = new Date();
    date.setDate(date.getDate());
    console.log(date);
    $('#datepicker').datepicker({
        autoclose: true,
        format:'yyyy'+'년',
        language: "kr",
        minViewMode: 'years',
    }).datepicker('setDate',date);
}

function selectBox() {
    $('#bungi_select').select2();
}

function jqGrid_header() {
    jQuery("#mes_grid").jqGrid('setGroupHeaders', {
        useColSpanStyle: true,
        groupHeaders: [
            {startColumnName: 'jan', numberOfColumns: 3, titleText: '<center>1분기</center>'},

        ]
    });
}

function jqGrid_main() {
    console.log(colNames);
    $('#mes_grid').jqGrid({
        data: testdata,
        datatype: 'local',
        caption: '계획관리 | MES',
        colNames: colNames,
        colModel: [
            {name: 'code', index: 'code', sortable: false, width: 60, cellattr: arrtSetting},
            {name: 'code2', index: 'code2', sortable: false, width: 60},
            {name: 'jan', index: 'jan', sortable: false, width: 60},
            {name: 'feb', index: 'feb', sortable: false, width: 60},
            {name: 'mar', index: 'mar', sortable: false, width: 60},
            {name: 'sum', index: 'sum', sortable: false, width: 60},
            {name: 'sumtotal', index: 'sumtotal', sortable: false, width: 60, cellattr: arrtSetting},
            {name: 'dif', index: 'dif', sortable: false, width: 60, cellattr: arrtSetting},
            {name: 'prod_no', index: 'prod_no', sortable: false, width: 60, cellattr: arrtSetting},
            {name: 'prod_stock', index: 'prod_stock', sortable: false, width: 60, cellattr: arrtSetting},
            {name: 'prod_date', index: 'prod_date', sortable: false, width: 60, cellattr: arrtSetting},
        ],
        loadonce: true,
        autowidth: true,
        viewrecords: true,
        height: 500,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid_pager',
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
    });
    jqgridPagerIcons();

    var newWidth = $("#mes_grid_code").width() + $("#mes_grid_code2").outerWidth(true);
    jQuery("#mes_grid").jqGrid("setLabel", "code", "제품코드", "", {
        style: "width: " + newWidth + "px;",
        colspan: "2"
    });
    jQuery("#mes_grid").jqGrid("setLabel", "code2", "", "", {style: "display: none"});
}