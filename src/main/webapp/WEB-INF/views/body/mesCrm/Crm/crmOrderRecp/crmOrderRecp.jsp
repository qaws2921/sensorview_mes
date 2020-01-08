<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script src="http://malsup.github.com/jquery.form.js"></script>
<script type="text/javascript" src="/data-component/mesCRM/Crm/crmOrderRecp/crmOrderRecp.js" charset="UTF-8"></script>
<style>
    input[id="chbox1"] {
        position: relative;
        top: 3px;
    }
    input[id="chbox2"] {
        position: relative;
        top: 3px;
    }
</style>
<form method="POST" action="/crmOrderRecpAdd" id="crmRecp">
<%--    <input type="hidden" value="${userData.site_code}"name="site_code">--%>
<%--    <input type="hidden" value="${userData.user_code}"name="user_code">--%>
    <div class="main-content-inner">
        <div class="page-content">
            <div class="col-lg-12">
                <div class="col-lg-12 ">
                    <span class="sp-title">수주정보</span>
                </div>
                <table class="table multi_table">
                    <tbody>
                    <tr>
                        <td class="td-title t-align-c">수주번호</td>
                        <td class="wt-px-125">
                            <input type="text" class="form-control" readonly placeholder="자동생성">
                        </td>
                        <td class="td-title t-align-c">진행상태</td>
                        <td class="wt-px-125">
                            <select class="form-control main_value" id="status1_select" name="status1" style="width:100%;">
                                <option value="0">대기</option>
                                <option value="1">생산중</option>
                                <option value="2">생산완료</option>
                                <option value="3">출하</option>
                            </select>
                        </td>
                        <td class="td-title t-align-c">진행여부</td>
                        <td class="wt-px-125">
                            <select class="form-control main_value" id="status2_select" name="status2" style="width:100%;">
                                <option value="1">접수</option>
                                <option value="2">취소</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-title t-align-c">접수일</td>
                        <td class="wt-px-125">
                            <div class="input-icon input-icon-right">
                                <input type="text" name="work_date" id="datepicker"
                                       class="form-control main_value h-25 condition_main" readonly>
                                <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                            </div>
                        </td>

                        <td class="td-title t-align-c">납기일</td>
                        <td class="wt-px-125">
                            <div class="input-icon input-icon-right">
                                <input type="text" name="end_date" id="datepicker2"
                                       class="form-control main_value h-25 condition_main" readonly>
                                <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                            </div>
                        </td>
                        <td class="td-title t-align-c">수주처</td>
                        <td class="wt-px-125">
                                <span class="input-icon input-icon-right">
                                    <input type="text" class="form-control main_value" id="supp_name_main" name="supp_name" onclick="supp_btn('A');" readonly/>
                                    <input type="hidden"  class="form-control main_value" id="supp_code_main" name="supp_code"/>
                                    <i class="ace-icon fa fa-search dark" style="top: -2px;" id="SuppSearch-Main"></i>
                                </span>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div class="col-lg-12 ">
                    <span class="sp-title">영업정보</span>
                </div>
                <table class="table multi_table">
                    <tbody>
                    <tr>
                        <td class="td-title t-align-c">영업구분</td>
                        <td class="wt-px-100">
                            <select class="form-control main_value" id="crm_type_select" name="crm_type" style="width: 100%;">
                                <option value="1">국내</option>
                                <option value="2">해외</option>
                            </select>
                        </td>
                        <td class="td-title t-align-c">담당자</td>
                        <td class="wt-px-100">
                            <select class="form-control main_value">
                            </select>
                        </td>
                        <td class="td-title t-align-c">배송방법</td>
                        <td class="wt-px-100">
                            <select class="form-control main_value" id="delivery_select" name="delivery" style="width: 100%;">
                            </select>
                        </td>
                        <td class="td-title t-align-c">판매구분</td>
                        <td class="wt-px-100">
                            <select class="form-control main_value" id="sale_type_select" name="sale_type" style="width: 100%;">
                                <option value="1">판매</option>
                                <option value="2">샘플</option>
                            </select>
                        </td>
                        <td class="td-title t-align-c">유/무상</td>
                        <td class="wt-px-100">
                            <select class="form-control main_value" id="price_type_select" name="price_type" style="width: 100%;">
                                <option value="1">유상</option>
                                <option value="2">무상</option>
                            </select>
                        </td>
                        <td class="td-title t-align-c">배송업체</td>
                        <td class="wt-px-100">
                            <select class="form-control main_value" id="delivery_corp_select" name="delivery_corp" style="width: 100%;">

                            </select>
                        </td>
<%--                        <td class="wt-px-100 td-title t-align-c"></td>--%>
<%--                        <td class="wt-px-200"></td>--%>
                        <td class="td-title t-align-c">샘플용도</td>
                        <td class="wt-px-100">
                            <input type="text" class="form-control main_value" name="sample">
                        </td>
                        <td class="td-title t-align-c">배송비부담</td>
                        <td class="wt-px-100">
                            <select class="form-control main_value" id="delivery_price_select" name="delivery_price" style="width: 100%;">
                                <option value="1">당사</option>
                                <option value="2">착불</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


</form>
<script>
    // function putData(){
    //     if (confirm("저장 하시겠습니까?")) {
    //         var options = {
    //             success : function(message) {
    //                 alert(message);
    //             },
    //             type : "POST"
    //         };
    //         $("#crmRecp").ajaxSubmit(options);
    //     }
    // }
</script>
<%@include file="/WEB-INF/views/body/common/modal/supp_modal.jsp" %>