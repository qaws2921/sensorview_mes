google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawBasic);






/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
  supp_check:'A',
};

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize("#mes_grid2", $('#mes_grid2').closest('[class*="col-"]'));
    datepickerInput();
    selectBox();

    suppModal_start();

    jqgridPagerIcons();
});

////////////////////////////클릭 함수/////////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.start_date = main_data.send_data.start_date.replace(/\-/g, '');
    main_data.send_data.end_date = main_data.send_data.end_date.replace(/\-/g, '');
    main_data.send_data_post = main_data.send_data;
    $("#mes_grid").setGridParam({
        url: "/qmsRecvErrorManGet",
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");



    $("#mes_grid2").setGridParam({
        url: "/qmsRecvErrorListSumGet",
        datatype: "json",
        postData: main_data.send_data
    }).trigger("reloadGrid");



    google.setOnLoadCallback(drawChart);



}





function drawChart() {


    ccn_ajax('/qmsRecvErrorListSumGet', main_data.send_data).then(function (data2) {

            var dataSet =  [ ['yearMonth', '불량률']];

       if (data2.length> 0) {
            list = [];
            var date;
            var bad;
            data2.forEach(function (d) {
                console.log(d.qc_ratio);
                date = formatterDate4(d.work_date);
                bad = parseInt(d.qc_ratio.replace("%"));
                dataSet.push([date,bad]);
            })

           var data = google.visualization.arrayToDataTable(dataSet);
           var options = {
               title: '불량률 그래프',
               hAxis: {
                   title: '기간'
               },
               vAxis: {
                   title: '수입검사\n불량현황'
                   ,ticks:[0,25,50,75,100]
               },
               series:{
                   0:{lineWidth:2,pointSize:8,color:'4444FF',pointShape:'circle'}
               }


           };

           var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
           chart.draw(data, options);
           window.addEventListener('resize', function() {   chart.draw(data, options); }, false);

        } else {
           google.setOnLoadCallback(drawBasic);
       }




    });


}

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', '불량율');

    data.addRows([

    ]);

    var options = {
        title: '불량률 그래프',
        hAxis: {
            title: '기간',
            textPosition : 'none'
        },
        vAxis: {
            title: '수입검사\n불량현황'
            ,ticks:[0,25,50,75,100]
        },

    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options);
    window.addEventListener('resize', function() {   chart.draw(data, options); }, false);
}


function supp_btn(what) {
    main_data.supp_check = what;

    $("#SuppSearchGrid").jqGrid('clearGridData');
    $("#supp-search-dialog").dialog('open');
    $('#gubun_select option:eq(0)').prop("selected", true).trigger("change");
    $('#supp_code_search').val('').trigger("change");

    jqGridResize2("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
}

function suppModal_bus(code, name) {
    if (main_data.supp_check === 'A') {
        $("#supp_name_main").val(name);
        $("#supp_code_main").val(code);
    } else if (main_data.supp_check === 'B') {
        $("#supp_name_modal").val(name);
        $("#supp_code_modal").val(code);
    }
    $("#SuppSearchGrid").jqGrid('clearGridData');

}
////////////////////////////호출 함수/////////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);
}

function selectBox() {
    $('#gubun_select').select2();
}

function jqGrid_main() {
    $("#mes_grid").jqGrid({
        mtype:"POST",
        datatype: "local",
        caption: "수입검사불량현황 | MES",
        colNames: ['rownum','업체코드','입고일자', '전표번호', '업체', '품번', '품명', '규격', '단위', '검사등급', '입고수량', '불량수량', '검사결과','불량유형','불량내용','조치구분','검사자','검사일시'],
        colModel: [
            {name:'rownum',index:'rownum',sortable:false,hidden:true,key:true,},
            {name: 'supp_code', index: 'supp_code',sortable: false, width: 80, hidden:true,},
            {name: 'work_date', index: 'work_date', sortable: false, width: 60, formatter: formmatterDate2},
            {name: 'in_no', index: 'in_no', sortable: false, width: 80},
            {name: 'supp_name', index: 'supp_name', sortable: false, width: 60},

            {name: 'part_code', index: 'part_code',sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 40},
            {name: 'qc_level_name', index: 'qc_level_name', sortable: false, width: 40},
            {name: 'in_qty', index: 'in_qty', sortable: false, width: 40},
            {name: 'ng_qty', index: 'ng_qty', sortable: false, width: 40},
            {name: 'qc_result_name', index: 'qc_result_name', sortable: false, width: 40},
            {name: 'qc_name', index: 'ng_type_name', sortable: false, width: 60},
            {name: 'ng_name', index: 'ng_name', sortable: false, width: 60},
            {name: 'act_type_name', index: 'act_type_name', sortable: false, width: 40},
            {name: 'user_name', index: 'user_name', sortable: false, width: 40},
            {name: 'update_date', index: 'update_date', sortable: false, width: 90, formatter: formmatterDate},
        ],
        autowidth: true,
        viewrecords: true,
        height: 180,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        pager: '#mes_grid_pager',
        onCellSelect: function (rowid, icol, cellcontent, e) {

        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창

        }

    });

    $('#mes_grid2').jqGrid({
        mtype:"POST",
        datatype: "local",
        caption: "수입검사불량현황 | MES",
        colNames: ['구분', '검사수량', '불량수량', '불량률'],
        colModel: [
            {name: 'work_date', index: 'work_date', width: 60, sortable: false,formatter:formatterDate4},
            {name: 'qc_qty', index: 'qc_qty', width: 60, sortable: false},
            {name: 'ng_qty', index: 'ng_qty', width: 60, sortable: false},
            {name: 'qc_ratio', index: 'qc_ratio', width: 60, sortable: false},
        ],
        autowidth: true,
        height: 220,
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
    });
}