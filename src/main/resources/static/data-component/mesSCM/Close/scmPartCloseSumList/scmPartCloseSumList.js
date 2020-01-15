
////////////////////////////데이터/////////////////////////////////////
var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    check2: 'Y',
    auth:{}
};


////////////////////////////시작 함수/////////////////////////////////////
$(document).ready(function () {
    jqGrid_main();
    jqGridResize("#mes_grid", $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize("#scmOutOrderBottomGrid", $('#scmOutOrderBottomGrid').closest('[class*="col-"]'));
    datepickerInput();
    /*----모달----*/
    modal_start1();
    crmModal_start();
    selectBox();
    authcheck();
    jqgridPagerIcons();

});