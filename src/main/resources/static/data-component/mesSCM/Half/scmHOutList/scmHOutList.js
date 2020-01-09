/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var main_data = {
    send_data: {}
};

////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    datepickerInput();
    jqGrid_main();
    jqgridPagerIcons();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
});

////////////////////////////클릭 함수//////////////////////////////////

////////////////////////////호출 함수//////////////////////////////////

function datepickerInput() {
    datepicker_makes("#datepicker", -1);
    datepicker_makes("#datepicker2", 0);

}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['출고일자', '출고번호', '공장명', '품번', '품명', '규격', '단위', '출고수량', '등록자', '출고일시'],
        colModel: [
            {name: '', index: '', sortable: false, width: 60,formatter: formmatterDate2 },
            {name: '', index: '',key:true, sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60,formatter: formmatterDate}
        ],
        caption: "반제품출고현황 | MES",
        autowidth: true,
        height: 550,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true
    });


}