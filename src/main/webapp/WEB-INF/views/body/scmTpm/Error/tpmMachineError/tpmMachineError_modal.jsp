<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type="text/javascript" src="/data-component/mesTpm/Error/tpmMachineError/tpmMachineError_modal1.js"
        charset="UTF-8"></script>

<div id="addDialog" title="사후보전관리 추가" style="display:none">
    <div class="profile-user-info profile-user-info-striped">


        <div class="profile-info-row">
            <div class="profile-info-name">라인</div>
            <div class="profile-info-value">
                <select name="part_grp_code"  class="form-control keyword wt-100 modal_value" style="width: 100%">
                        <option>선택안함</option>
                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">설비명</div>
            <div class="profile-info-value">
                <select name="part_grp_code"  class="form-control keyword wt-100 modal_value" style="width: 100%">
                    <option>선택안함</option>
                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">점검일</div>
            <div class="profile-info-value">
                <input type="text"  id="datepicker3" class="form-control modal_value" readonly>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">고장내용</div>
            <div class="profile-info-value">
                <select name="part_grp_code"  class="form-control keyword wt-100 modal_value" style="width: 100%">
                    <option>선택안함</option>
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">고장분류</div>
            <div class="profile-info-value">
                <select name="part_grp_code"  class="form-control keyword wt-100 modal_value" style="width: 100%">
                    <option>선택안함</option>
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">점검결과</div>
            <div class="profile-info-value">
                <select name="part_grp_code"  class="form-control keyword wt-100 modal_value" style="width: 100%">
                    <option>선택안함</option>
                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">조사사항</div>
            <div class="profile-info-value">
                <select name="part_grp_code"  class="form-control keyword wt-100 modal_value" style="width: 100%">
                    <option>선택안함</option>
                </select>

            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">가동중단</div>
            <div class="profile-info-value">
                <select name="part_grp_code"  class="form-control keyword wt-100 modal_value" style="width: 100%">
                    <option>Y</option>
                    <option>N</option>
                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">고정시간(분)</div>
            <div class="profile-info-value">
                <input type="text" name="spec" class="form-control modal_value">
            </div>
        </div>


    </div>
</div>
