<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type="text/javascript" src="/data-component/cr"
        charset="UTF-8"></script>

<div id="addDialog" title="계획추가" style="display:none">
    <div class="profile-user-info profile-user-info-striped">
        <div class="profile-info-row">
            <div class="profile-info-name"> 분기</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value">
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name"> 품목구분</div>
            <div class="profile-info-value">
                <select class="form-control modal_value">
                    <option>전체</option>
                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name"> 제품코드</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value">
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name"> 수정시점 재고</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value">
            </div>
        </div>

    </div>
</div>
