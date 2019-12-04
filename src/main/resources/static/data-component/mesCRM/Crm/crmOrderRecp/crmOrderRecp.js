/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////
var main_data = {
    supp_check:'A'
}

////////////////////////////시작 함수/////////////////////////////////
$(document).ready(function () {
    selectBox();
    datepickerInput();
    suppModal_start();

});
////////////////////////////클릭 함수////////////////////////////////

function add_btn() {
    var data = value_return(".main_value");
    data.work_date = data.work_date.replace(/\-/g, '');
    data.end_date =  data.end_date.replace(/\-/g, '');

    if ($('input:checkbox[name="option1"]').is(":checked")) {
        data.option1 = 'Y';
    }
    if ($('input:checkbox[name="option2"]').is(":checked")) {
        data.option2 = 'Y';
    }

    if ($('input:checkbox[name="option3"]').is(":checked")) {
        data.option3 = 'Y';
    }

    data.work_type =$('input[name="work_type"]:checked').val();

    if (data.work_type === "1"){
        data.connector1 ="";
        data.connector2 ="";
        data.part_length =0;
    } else {
        data.part_code = data.part_code2;
    }
if (effectiveness(data)){


    ccn_ajax("/crmOrderRecpAdd", data).then(function (data2) {
        if (data2.result === 'NG') {
            alert(data2.message);
        } else {
            location.href="/crmOrderRecp";
        }
    }).catch(function (err) {
        console.error(err); // Error 출력
    });
}
}

function supp_btn(what) {
    main_data.supp_check = what;
    $("#supp_modal_keyword").val("supp_name");
    $("#supp_modal_keyword2").val("");

    $("#SuppSearchGrid").jqGrid('clearGridData');
    $("#supp-search-dialog").dialog('open');
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

function suppModal_close_bus() {
    // if (main_data.supp_check === 'A') {
    //     $("#supp_name_main").val("");
    //     $("#supp_code_main").val("");
    // }
    $("#SuppSearchGrid").jqGrid('clearGridData');
}

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

function effectiveness(data) {
    if (data.supp_code === ''){
        alert("수주업체를 선택해주세요");
        return false;
    } else if (data.end_supp_code === ''){
        alert("End_User를 선택해주세요");
        return false;
    }else if (data.part_code === ''){
        alert("품목코드를 선택해주세요");
        return false;
    }else if (data.part_code === ''){
        alert("품목코드를 선택해주세요");
        return false;
    }

    if (data.work_type === '1'){
        if (data.part_code === '') {
            alert("품목코드를 선택해주세요");
            return false;
        }
    } else if (data.work_type === '2'){
        if (data.connector1 === '') {
            alert("커넥터1를 입력해주세요");
            return false;
        } else if (data.part_code === '') {
            alert("품목코드를 선택해주세요");
            return false;
        } else if (data.connector2 === '') {
            alert("커넥터2를 입력해주세요");
            return false;
        } else if (data.part_length === '') {
            alert("길이를 입력해주세요");
            return false;
        }
    }


    if (data.qty === ''){
        alert("수량을 입력해주세요");
        return false;
    } else if (data.sample === ''){
        alert("샘플용도를 입력해주세요");
        return false;
    }else if (data.unit_price === ''){
        alert("단가를 입력해주세요");
        return false;
    }else if (data.price === ''){
        alert("수량과 단가를 다시 확인해주세요");
        return false;
    }else if (data.supp_ord_no === ''){
        alert("발주번호를 입력해주세요");
        return false;
    }else if (data.payment === ''){
        alert("결재방법을 입력해주세요");
        return false;
    }else if (data.supp_user_name === ''){
        alert("고객담당자를 입력해주세요");
        return false;
    }else if (data.supp_tel_no === ''){
        alert("연락처를 입력해주세요");
        return false;
    }else if (data.address === ''){
        alert("배송지를 입력해주세요");
        return false;
    }else {
        return true;
    }

    
}
