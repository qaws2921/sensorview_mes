/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////


////////////////////////////시작 함수/////////////////////////////////
$(document).ready(function () {
    selectBox();

});
////////////////////////////클릭 함수////////////////////////////////


////////////////////////////호출 함수////////////////////////////////

function selectBox() {
    $("#status1_select").select2();
    $("#status2_select").select2();
    $("#crm_type_select").select2();
    $("#sale_type_select").select2();
    $("#price_type_select").select2();
    $("#prod_type_select").select2();
    $("#delivery_price_select").select2();
    select_makes2("#part_type_select", "/getPartType", "part_type_code", "part_type_name").then(function (data) {
        select_makes3("#partGrp_select", "/sysBPartGroupSelectGet", "part_grp_code", "part_grp_name",{keyword:data}).then(function (data2) {
            select_makes_sub("#part_select", "/sysBPartAllGet", "part_code", "part_name", {keyword: data,keyword:data2}, "N");
            select_makes_sub("#part_select2", "/sysBPartAllGet", "part_code", "part_name", {keyword: data,keyword:data2}, "N");

        });
    });

    select_makes("#unit_select", "/sysCommonUnitGet", "code_value", "code_name1");
    select_data_makes('delivery_select','/sysCommonAllGet','code_value','code_name1',{keyword:'ss'});
}