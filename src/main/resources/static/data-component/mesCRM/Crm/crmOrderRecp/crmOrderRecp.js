/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////


////////////////////////////시작 함수/////////////////////////////////
$(document).ready(function () {
    selectBox();
    datepickerInput();

});
////////////////////////////클릭 함수////////////////////////////////
function radio1_btn() {

    $('input[name=connector1]').attr("readonly","readonly");
    $('input[name=connector2]').attr("readonly","readonly");
    $('input[name=part_length]').attr("readonly","readonly");
    $("#part_select2").select2({disabled: true});

    $("#part_select").select2({disabled: false});
}

function radio2_btn() {
    $("#part_select").select2({disabled: true});
    $('input[name=connector1]').removeAttr("readonly");
    $('input[name=connector2]').removeAttr("readonly");
    $('input[name=part_length]').removeAttr("readonly");

    $("#part_select2").select2({disabled: false});


}


function select_change1(data) {
    select_makes3("#partGrp_select", "/sysBPartGroupSelectGet", "part_grp_code", "part_grp_name",{keyword:data}).then(function (data2) {
        select_makes_sub("#part_select", "/sysBPartAllGet", "part_code", "part_name", {keyword: data,keyword2:data2}, "N");
        select_makes_sub("#part_select2", "/sysBPartAllGet", "part_code", "part_name", {keyword: data,keyword2:data2}, "N");

    });
}

function select_change2(data2) {
    var data = $("#part_type_select option:selected").val();
    select_makes_sub("#part_select", "/sysBPartAllGet", "part_code", "part_name", {keyword: data,keyword2:data2}, "N");
    select_makes_sub("#part_select2", "/sysBPartAllGet", "part_code", "part_name", {keyword: data,keyword2:data2}, "N");


}

function sum_qty_keyup() {
   var qty =  $('input[name=qty]').val();
   var unit_price = $('input[name=unit_price]').val();

   if (isNaN(qty)){
       qty = qty.replace(/[^0-9]/g,'');
       $('input[name=qty]').val(qty);

   } else if (isNaN(unit_price)) {
       unit_price = unit_price.replace(/[^0-9]/g,'');
       $('input[name=unit_price]').val(unit_price);

   }


   if (qty !== '' && unit_price !=='') {
        $('input[name=price]').val(parseInt(qty)*parseInt(unit_price));
   }else {
       $('input[name=price]').val("");
   }

}


////////////////////////////호출 함수////////////////////////////////
function datepickerInput() {
    datepicker_makes("#datepicker", 0);
    datepicker_makes("#datepicker2", 0);

}
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
            select_makes_sub("#part_select", "/sysBPartAllGet", "part_code", "part_name", {keyword: data,keyword2:data2}, "N");
            select_makes_sub("#part_select2", "/sysBPartAllGet", "part_code", "part_name", {keyword: data,keyword2:data2}, "N");

        });
    });

    select_makes("#unit_select", "/sysCommonUnitGet", "code_value", "code_name1");
    select_data_makes('#delivery_select','/sysCommonAllGet','code_value','code_name1',{keyword:'DELIVERY'});
    select_data_makes('#delivery_corp_select','/sysCommonAllGet','code_value','code_name1',{keyword:'DELIVERY_CORP'});
    select_data_makes('#currency_select','/sysCommonAllGet','code_value','code_name1',{keyword:'CURRENCY_TYPE'});
    $("#part_select2").select2({disabled: true});
}