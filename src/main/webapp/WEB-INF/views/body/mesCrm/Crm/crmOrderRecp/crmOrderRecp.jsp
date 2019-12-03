<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script src="http://malsup.github.com/jquery.form.js"></script>
<script type="text/javascript" src="/data-component/mesCRM/Crm/crmOrderRecp/crmOrderRecp.js" charset="UTF-8"></script>
<form method="POST" action="/crmRecpAdd" id="crmRecp">
    <input type="hidden" value="${userData.site_code}"name="site_code">
    <input type="hidden" value="${userData.user_code}"name="user_code">
    <div class="main-content-inner">
        <div class="page-content">
            <div class="col-lg-12">
                <div class="col-lg-6">
                    <div class="col-lg-12 ">
                        <span class="sp-title">수주정보</span>
                    </div>
                    <table class="table multi_table">
                        <tbody>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">수주번호</td>
                            <td class="wt-px-200">
                                <input type="text" class="form-control" readonly>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">진행상태</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="status1_select" name="status1">
                                    <option value="0">대기</option>
                                    <option value="1">생산중</option>
                                    <option value="2">생산완료</option>
                                    <option value="3">출하</option>
                                </select>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">진행여부</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="status2_select" name="status2">
                                    <option value="1">접수</option>
                                    <option value="2">취소</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">접수일</td>
                            <td class="wt-px-200">
                                <div class="input-icon input-icon-right">
                                    <input type="text" name="work_date" id="datepicker"
                                           class="form-control h-25 condition_main" readonly>
                                    <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                                </div>
                            </td>

                            <td class="wt-px-100 td-title t-align-c">납기일</td>
                            <td class="wt-px-200">
                                <div class="input-icon input-icon-right">
                                    <input type="text" name="end_date" id="datepicker2"
                                           class="form-control h-25 condition_main" readonly>
                                    <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                                </div>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">수주처</td>
                            <td class="wt-px-200">
                                <span class="input-icon input-icon-right">
                                    <input type="text" class="form-control" id="supp_name_main" onclick="supp_btn('A');" readonly/>
                                    <input type="hidden" class="form-control" id="supp_code_main" name="supp_code"/>
                                    <i class="ace-icon fa fa-search dark" style="top: -2px;" id="SuppSearch-Main"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">제품구분</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="part_type_select" onchange="select_change1(this.value);" name="part_type">
                                </select>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">품목구분</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="partGrp_select" onchange="select_change2(this.value);">

                                </select>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">End User</td>
                            <td class="wt-px-200">
                                <span class="input-icon input-icon-right">
                                    <input type="text" class="form-control" id="supp_name_modal" onclick="supp_btn('B');" readonly/>
                                    <input type="hidden" class="form-control" id="supp_code_modal" name="end_supp_code"/>
                                    <i class="ace-icon fa fa-search dark" style="top: -2px;" id="SuppSearch2-Main"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">
                                <label for="chk1" class="td-title" style="font-size: 11px"> 단품 </label>&nbsp;<input
                                    type="radio" name="unit_type" value="1" id="chk1" checked onclick="radio1_btn();">
                            </td>
                            <td class="wt-px-200">
                                <select class="form-control" id="part_select">

                                </select>
                            </td>
                            <td colspan="4"></td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">
                                <label for="chk2" class="td-title" style="font-size: 11px"> 조립 </label>&nbsp;<input
                                    type="radio" name="unit_type" id="chk2"  onclick="radio2_btn();">
                            </td>
                            <td class="wt-px-200">
                                <input type="text" name="connector1" class="form-control" readonly>
                            </td>
                            <td class="wt-px-200">
                                <select class="form-control" id="part_select2">

                                </select>
                            </td>
                            <td class="wt-px-200">
                                <input type="text" name="connector2" class="form-control" readonly>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">개별길이(M)</td>
                            <td class="wt-px-200">
                                <input type="text" name="part_length" class="form-control" readonly>
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">단위</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="unit_select" name="unit_type">

                                </select>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">수량</td>
                            <td class="wt-px-200">
                                <input type="text" name="qty" class="form-control" value="0" onkeyup="sum_qty_keyup();">
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">옵션</td>
                            <td colspan="5" class="t-align-c">
                                <input type="checkbox" name="option1" id="chbox1" value="고객성적서">
                                <label for="chbox1" style="font-size: 11px">고객성적서</label>
                                <input type="checkbox" name="option2" id="chbox2" value="슬리브">
                                <label for="chbox2" style="font-size: 11px">슬리브</label>
                                <input type="checkbox" name="option3" id="chbox3" value="고객라벨">
                                <label for="chbox3" style="font-size: 11px">고객라벨</label>
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">비고</td>
                            <td colspan="5" class="t-align-c">
                                <input type="text" class="form-control" name="remark">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-6">
                    <div class="col-lg-12 ">
                        <span class="sp-title">영업정보</span>
                    </div>
                    <table class="table multi_table">
                        <tbody>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">영업구분</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="crm_type_select" name="crm_type">
                                    <option value="1">국내</option>
                                    <option value="2">해외</option>
                                </select>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">담당자</td>
                            <td class="wt-px-200">
                                <input type="text" class="form-control" name="user_name">
                            </td>
                            <td class="wt-px-100 td-title t-align-c">배송방법</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="delivery_select" name="delivery">

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">판매구분</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="sale_type_select" name="sale_type">
                                    <option value="1">판매</option>
                                    <option value="2">샘플</option>
                                </select>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">유/무상</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="price_type_select" name="price_type">
                                    <option value="1">유상</option>
                                    <option value="2">무상</option>
                                </select>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">배송업체</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="delivery_corp_select" name="delivery_corp">

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">생산</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="prod_type_select" name="prod_type">
                                    <option value="1">내부</option>
                                    <option value="2">외부</option>
                                </select>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">샘플용도</td>
                            <td class="wt-px-200">
                                <input type="text" class="form-control" name="sample">
                            </td>
                            <td class="wt-px-100 td-title t-align-c">배송비부담</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="delivery_price_select" name="delivery_price">
                                    <option value="1">당사</option>
                                    <option value="2">착불</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">통화단위</td>
                            <td class="wt-px-200">
                                <select class="form-control" id="currency_select" name="currency_type">

                                </select>
                            </td>
                            <td class="wt-px-100 td-title t-align-c">단가</td>
                            <td class="wt-px-200">
                                <input type="text" name="unit_price"  value="0" class="form-control"  onkeyup="sum_qty_keyup();">
                            </td>
                            <td class="wt-px-100 td-title t-align-c">합계</td>
                            <td class="wt-px-200">
                                <input type="text" name="sum_price" value="0" class="form-control" readonly>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-6">
                    <div class="col-lg-12 ">
                        <span class="sp-title">고객정보</span>
                    </div>
                    <table class="table multi_table">
                        <tbody>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">발주번호</td>
                            <td class="wt-px-200">
                                <input type="text" class="form-control" name="supp_ord_no">
                            </td>
                            <td class="wt-px-100 td-title t-align-c">결재방법</td>
                            <td class="wt-px-200">
                                <input type="text" class="form-control" name="payment">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">담당자</td>
                            <td class="wt-px-200">
                                <input type="text" class="form-control" name="supp_user_name">
                            </td>
                            <td class="wt-px-100 td-title t-align-c">연락처</td>
                            <td class="wt-px-200">
                                <input type="text" class="form-control" name="supp_tel_no">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c">배송지</td>
                            <td colspan="3">
                                <input type="text" class="form-control" name="address">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-lg-12">
                <hr/>
                <div class="clearfix">
                    <div class="pull-right tableTools-container">
                        <div class="dt-buttons btn-overlap btn-group">
                            <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" onclick="putData();">
                                <span><i class="fa fa-plus bigger-110 blue"></i><span>저장</span></span>
                            </a>
                            <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold">
                                <span><i class="fa fa-times bigger-110 blue"></i><span>닫기</span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
<script>
    function putData(){
        if (confirm("저장 하시겠습니까?")) {
            var options = {
                success : function(message) {
                    alert(message);
                },
                type : "POST"
            };
            $("#crmRecp").ajaxSubmit(options);
        }
    }
</script>
<%@include file="/WEB-INF/views/body/common/modal/supp_modal.jsp" %>