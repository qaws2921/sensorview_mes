<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type="text/javascript" src="/data-component/mesSCM/Standard/sysBPart/sysBPart_modal1.js"
        charset="UTF-8"></script>

<div id="addDialog" title="자재품목추가" style="display:none">
    <div class="profile-user-info profile-user-info-striped">
        <div class="profile-info-row">
            <div class="profile-info-name">품목구분</div>
            <div class="profile-info-value">
                <select name="part_grp_code" id="partGrp_select2" class="form-control keyword wt-100 modal_value"  style="width:100%">

                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">품목코드</div>
            <div class="profile-info-value">
                <input type="text" name="part_code" class="form-control modal_value">
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">품목명</div>
            <div class="profile-info-value">
                <input type="text" name="part_name" class="form-control modal_value">
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">보관로케이션</div>
            <div class="profile-info-value">
                <select name="loc_code" id="loc_select" class="form-control keyword  modal_value"  style="width:100%">
                    <option value="">선택안함</option>
                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">업체코드</div>
            <div class="profile-info-value">
                <div class="input-icon input-icon-right">
                    <input type="text" name="supp_code" id="supp_code_main" class="form-control modal_value" readonly onclick="supp_btn();">
                    <input type="hidden" name="supp_code" class="form-control h-25 condition_main">
                    <i class="ace-icon fa fa-search dark" style="top: -2px;"></i>
                </div>

            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">업체명</div>
            <div class="profile-info-value">
                <input type="text" name="supp_name" id="supp_name_main" class="form-control modal_value" readonly>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">규격</div>
            <div class="profile-info-value">
                <input type="text" name="spec" class="form-control modal_value">
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">단위</div>
            <div class="profile-info-value">
                <select name="unit_code" id="unit_select" class="form-control keyword modal_value"  style="width:100%">
                    <option value="">선택안함</option>
                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">L/T</div>
            <div class="profile-info-value">
                <input type="text" name="ss" class="form-control modal_value">
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">검사기준</div>
            <div class="profile-info-value">
                <select name="keyword" class="form-control keyword  modal_value">
                    <option>검사</option>
                    <option>무검사</option>
                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">검사구분</div>
            <div class="profile-info-value">
                <select name="keyword" class="form-control keyword  modal_value">
                    <option>X</option>
                    <option>전수</option>
                    <option>샘플링</option>
                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">재고최대</div>
            <div class="profile-info-value">
                <input type="text" name="max_qty" class="form-control modal_value">
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">재고최소</div>
            <div class="profile-info-value">
                <input type="text" name="min_qty" class="form-control modal_value">
            </div>
        </div>

    </div>
</div>