<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type="text/javascript" src="/data-component/mesQMS/Standard/qmsTestItem/qmsTestItem_modal1.js" charset="UTF-8"></script>

<div id="addDialog" title="검사항목추가" style="display:none">
    <div class="profile-user-info profile-user-info-striped">
        <div class="profile-info-row">
            <div class="profile-info-name">검사구분</div>
            <div class="profile-info-value">
                <input type="text" name="check_name" id="check_name" class="form-control modal_value" readonly>
                <input type="hidden" name="check_code" id="check_code" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">코드그룹</div>
            <div class="profile-info-value">
                <input type="text" name="code_name" id="code_name" class="form-control modal_value" readonly>
                <input type="hidden" name="code_code" id="code_code" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">검사코드</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value" autofocus>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">검사명</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">사용유무</div>
            <div class="profile-info-value">
                <select class="form-control modal_value">
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                </select>
            </div>
        </div>
    </div>
</div>