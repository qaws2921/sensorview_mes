<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type="text/javascript" src="/data-component/admin/bom/sysPart/sysPart.js"
        charset="UTF-8"></script>

<div id="addDialog" title="품목정보 추가" style="display:none">
    <div class="profile-user-info profile-user-info-striped">
        <div class="profile-info-row">
            <div class="profile-info-name">구분</div>
            <div class="profile-info-value">
                <input type="text" id="part_type_name" name="part_type_name" class="form-control modal_value" readonly>
                <input type="hidden"  name="part_type" id="part_type_code" class="form-control modal_value">
            </div>
            <div class="profile-info-name" id="part_group1_modal1"></div>
            <div class="profile-info-value">
                <select id="part_group_select1_modal1" name="part_group1" class="form-control keyword modal_value" style="width:100%">
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name" id="part_group2_modal1"></div>
            <div class="profile-info-value">
                <select id="part_group_select2_modal1" name="part_group2" class="form-control keyword modal_value" style="width:100%">
                </select>
            </div>
            <div class="profile-info-name" id="part_group3_modal1"></div>
            <div class="profile-info-value">
                <select id="part_group_select3_modal1" name="part_group3" class="form-control keyword modal_value" style="width:100%">
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">품목코드</div>
            <div class="profile-info-value">
                <input type="text" name="part_code" class="form-control modal_value" readonly placeholder="자동생성">
            </div>
            <div class="profile-info-name">품목명</div>
            <div class="profile-info-value">
                <input type="text" name="part_name" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">보관로케이션</div>
            <div class="profile-info-value">
                <select id="loc_select" name="loc_code" class="form-control keyword modal_value" style="width:100%">
                    <option value="">선택안함</option>
                </select>
            </div>
            <div class="profile-info-name">L/T</div>
            <div class="profile-info-value">
                <input type="text" id="lt" name="lt" class="form-control modal_value" onchange="inputIntChangeLT();">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">업체코드</div>
            <div class="profile-info-value">
                <div class="input-icon input-icon-right">
                    <input type="text" name="supp_code" class="form-control h-25 modal_value"
                           id="supp_code_main" onclick="supp_btn('A');" readonly>
                    <i class="ace-icon fa fa-search dark" style="top: -2px;" id="SuppSearch"></i>
                </div>
            </div>
            <div class="profile-info-name">업체명</div>
            <div class="profile-info-value">
                <input type="text" name="supp_name" id="supp_name_main" class="form-control modal_value" placeholder="자동입력" readonly>
            </div>

        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">규격</div>
            <div class="profile-info-value">
                <input type="text" name="spec" class="form-control modal_value">
            </div>
            <div class="profile-info-name">단위</div>
            <div class="profile-info-value">
                <select id="unit_select" name="unit_code" class="form-control keyword modal_value" style="width:100%">
                    <option value="">선택안함</option>
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">검사등급</div>
            <div class="profile-info-value">
                <select id="qc_select" name="qc_level" class="form-control modal_value" style="width:100%">
                    <option value="">선택안함</option>
                    <option value="0">무검사</option>
                    <option value="1">샘플검사</option>
                    <option value="2">전수검사</option>
                </select>
            </div>
            <div class="profile-info-name">재고최대</div>
            <div class="profile-info-value">
                <input type="text" id="max_qty" name="max_qty" class="form-control modal_value" onchange="inputIntChangeMaxQty();">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">재고최소</div>
            <div class="profile-info-value">
                <input type="text" id="min_qty" name="min_qty" class="form-control modal_value" onchange="inputIntChangeMinQty();">
            </div>
            <div class="profile-info-name">발주단위</div>
            <div class="profile-info-value">
                <input type="text" id="ord_qty" name="ord_qty" class="form-control modal_value" onchange="inputIntChangeOrdQty();">
            </div>
        </div>
    </div>
</div>

<%@include file="/WEB-INF/views/body/common/modal/supp_modal.jsp" %>


