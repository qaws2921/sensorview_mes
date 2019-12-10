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

// var testdata = [
//     {id:'1',code:'CSVA1',code2:'확정',jan:'1000',feb:'1000',mar:'1000',sum:'3000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {rowspan:"3"}, sumtotal:{rowspan:"3"},dif:{rowspan:"3"},prod_no:{rowspan:"3"},prod_stock:{rowspan:"3"},prod_date:{rowspan:"3"}}},
//     {id:'2',code:'CSVA1',code2:'협의',jan:'1000',feb:'0',mar:'0',sum:'1000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {display: "none"}, sumtotal:{display: "none"},dif:{display: "none"},prod_no:{display: "none"},prod_stock:{display: "none"},prod_date:{display: "none"}}},
//     {id:'3',code:'CSVA1',code2:'예상',jan:'0',feb:'0',mar:'500',sum:'500',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {display: "none"}, sumtotal:{display: "none"},dif:{display: "none"},prod_no:{display: "none"},prod_stock:{display: "none"},prod_date:{display: "none"}}},
//     {id:'4',code:'CSVA2',code2:'확정',jan:'1000',feb:'1000',mar:'1000',sum:'3000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {rowspan:"3"}, sumtotal:{rowspan:"3"},dif:{rowspan:"3"},prod_no:{rowspan:"3"},prod_stock:{rowspan:"3"},prod_date:{rowspan:"3"}}},
//     {id:'5',code:'CSVA2',code2:'협의',jan:'1000',feb:'0',mar:'0',sum:'1000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {display: "none"}, sumtotal:{display: "none"},dif:{display: "none"},prod_no:{display: "none"},prod_stock:{display: "none"},prod_date:{display: "none"}}},
//     {id:'6',code:'CSVA2',code2:'예상',jan:'0',feb:'0',mar:'500',sum:'500',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', attr: {code: {display: "none"}, sumtotal:{display: "none"},dif:{display: "none"},prod_no:{display: "none"},prod_stock:{display: "none"},prod_date:{display: "none"}}},
// ];

var testdata = [
    {id:'1',code:'CSVA1',code2:'확정',jan:'1000',feb:'1000',mar:'1000',sum:'3000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말',},
    {id:'2',code:'CSVA1',code2:'협의',jan:'1000',feb:'0',mar:'0',sum:'1000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말',},
    {id:'3',code:'CSVA1',code2:'예상',jan:'0',feb:'0',mar:'500',sum:'500',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말',},
    {id:'4',code:'CSVA2',code2:'확정',jan:'1000',feb:'1000',mar:'1000',sum:'3000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', },
    {id:'5',code:'CSVA2',code2:'협의',jan:'1000',feb:'0',mar:'0',sum:'1000',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', },
    {id:'6',code:'CSVA2',code2:'예상',jan:'0',feb:'0',mar:'500',sum:'500',sumtotal:'4500',dif:'1500',prod_no:'3000',prod_stock:'0',prod_date:'4월말', },
];

// var arrtSetting = function (rowId, val, rawObject, cm) {
//     var attr = rawObject.attr[cm.name], result;
//     if (attr.rowspan) {
//         result = ' rowspan=' + '"' + attr.rowspan + '"';
//     } else if (attr.display) {
//         result = ' style="display:' + attr.display + '"';
//     }
//     return result;
// };

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

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.keyword = main_data.send_data.keyword.replace("년", '');
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: "/crmPlanGet",
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");

}

function add_btn() {
    modal_reset(".modal_value", main_data.readonly);
    modalValuePush("#bungi_select","#bungi_code","#bungi_name");
    $("#plan_year").val($("#datepicker").val());
    main_data.check = 'I';

    var value =  $('#bungi_select').val();
    if (value === "1"){
        $("#month1").text("1월");
        $("#month2").text("2월");
        $("#month3").text("3월");
    } else if(value ==="2"){
        $("#month1").text("4월");
        $("#month2").text("5월");
        $("#month3").text("6월");
    } else if(value ==="3"){
        $("#month1").text("7월");
        $("#month2").text("8월");
        $("#month3").text("9월");
    } else {
        $("#month1").text("10월");
        $("#month2").text("11월");
        $("#month3").text("12월");
    }

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
            {startColumnName: 'month_plan1', numberOfColumns: 3, titleText: '<center>'+value+'분기</center>'},

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
            {startColumnName: 'month_plan1', numberOfColumns: 3, titleText: '<center>1분기</center>'},

        ]
    });
}

function jqGrid_main() {
    console.log(colNames);
    $('#mes_grid').jqGrid({
        mtype: 'POST',
        datatype: 'local',
        caption: '계획관리 | MES',
        colNames: colNames,
        colModel: [
            {name: 'part_code', index: 'part_code',key:true, sortable: false, width: 60, sorttype:"text", fixed:true, cellattr:form},
            {name: 'plan_name', index: 'plan_name', sortable: false, width: 60},
            {name: 'month_plan1', index: 'month_plan1', sortable: false, width: 60},
            {name: 'month_plan2', index: 'month_plan2', sortable: false, width: 60},
            {name: 'month_plan3', index: 'month_plan3', sortable: false, width: 60},
            {name: 'plan_qty', index: 'plan_qty', sortable: false, width: 60},
            {name: 'total_qty', index: 'total_qty', sortable: false, width: 60, sorttype:"text", fixed:true, cellattr:form2},
            {name: 'diff_qty', index: 'diff_qty', sortable: false, width: 60, sorttype:"text", fixed:true, cellattr:form3 },
            {name: 'prod_qty', index: 'prod_qty', sortable: false, width: 60, sorttype:"text", fixed:true, cellattr:form4 },
            {name: 'stock_qty', index: 'stock_qty', sortable: false, width: 60, sorttype:"text", fixed:true, cellattr:form5 },
            {name: 'prod_desc', index: 'prod_desc', sortable: false, width: 60, sorttype:"text", fixed:true, cellattr:form6 },
        ],
        loadonce: true,
        autowidth: true,
        viewrecords: true,
        hoverrows: false,
        height: 500,
        rowNum: 300,
        rowList: [300, 600],
        pager: '#mes_grid_pager',
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        gridComplete: function() {  // 그리드 생성 후 호출되는 이벤트

            var grid = this;

            $('td[rowspan="1"]', grid).each(function () {

                var spans = $('td[rowspanid="' + this.id + '"]', grid).length + 1;

                if (spans > 1) {

                    $(this).attr('rowspan', spans);

                }
            });
        }

    });
    jqgridPagerIcons();

    // var newWidth = $("#mes_grid_code").width() + $("#mes_grid_code2").outerWidth(true);
    // jQuery("#mes_grid").jqGrid("setLabel", "code", "제품코드", "", {
    //     style: "width: " + newWidth + "px;",
    //     colspan: "2"
    // });
    // jQuery("#mes_grid").jqGrid("setLabel", "code2", "", "", {style: "display: none"});
}

var prevCellVal = { cellId: undefined, value: undefined,rowid:undefined };
var form = function(rowId, val, rawObject, cm, rdata) {

    var result;

    if (prevCellVal.value == val) {

        result = ' style="display: none" rowspanid="' + prevCellVal.cellId + '"';

    } else {

        var cellId = this.id + '_row_' + rowId + '_' + cm.name;

        result = ' rowspan="1" id="' + cellId + '"';

        prevCellVal = { cellId: cellId, value: val };

    }

    return result;

};


var prevCellVal2 = { cellId: undefined, value: undefined,rowid:undefined};
var form2 = function(rowId, val, rawObject, cm, rdata) {

    var result;

    if (prevCellVal2.rowid == rawObject.part_code) {

        result = ' style="display: none" rowspanid="' + prevCellVal2.cellId + '"';

    } else {
        
        var cellId = this.id + '_row_' + rowId + '_' + rawObject.part_code+"_"+cm.name;

        result = ' rowspan="1" id="' + cellId + '"';

        prevCellVal2 = { cellId: cellId, value: val,rowid: rawObject.part_code};

    }

    return result;

};
var prevCellVal3 = { cellId: undefined, value: undefined,rowid:undefined};
var form3 = function(rowId, val, rawObject, cm, rdata) {

    var result;

    if (prevCellVal3.rowid == rawObject.part_code) {

        result = ' style="display: none" rowspanid="' + prevCellVal3.cellId + '"';

    } else {
        
        var cellId = this.id + '_row_' + rowId + '_' + rawObject.part_code+"_"+cm.name;

        result = ' rowspan="1" id="' + cellId + '"';

        prevCellVal3 = { cellId: cellId, value: val,rowid: rawObject.part_code};

    }

    return result;

};
var prevCellVal4 = { cellId: undefined, value: undefined,rowid:undefined};
var form4 = function(rowId, val, rawObject, cm, rdata) {

    var result;

    if (prevCellVal4.rowid == rawObject.part_code) {

        result = ' style="display: none" rowspanid="' + prevCellVal4.cellId + '"';

    } else {
        
        var cellId = this.id + '_row_' + rowId + '_' + rawObject.part_code+"_"+cm.name;

        result = ' rowspan="1" id="' + cellId + '"';

        prevCellVal4 = { cellId: cellId, value: val,rowid: rawObject.part_code};

    }

    return result;

};
var prevCellVal5 = { cellId: undefined, value: undefined,rowid:undefined};
var form5 = function(rowId, val, rawObject, cm, rdata) {

    var result;

    if (prevCellVal5.rowid == rawObject.part_code) {

        result = ' style="display: none" rowspanid="' + prevCellVal5.cellId + '"';

    } else {
        
        var cellId = this.id + '_row_' + rowId + '_' + rawObject.part_code+"_"+cm.name;

        result = ' rowspan="1" id="' + cellId + '"';

        prevCellVal5 = { cellId: cellId, value: val,rowid: rawObject.part_code};

    }

    return result;

};
var prevCellVal6 = { cellId: undefined, value: undefined,rowid:undefined};
var form6 = function(rowId, val, rawObject, cm, rdata) {

    var result;

    if (prevCellVal6.rowid == rawObject.part_code) {

        result = ' style="display: none" rowspanid="' + prevCellVal6.cellId + '"';

    } else {
        
        var cellId = this.id + '_row_' + rowId + '_' + rawObject.part_code+"_"+cm.name;

        result = ' rowspan="1" id="' + cellId + '"';

        prevCellVal6 = { cellId: cellId, value: val,rowid: rawObject.part_code};

    }

    return result;

};