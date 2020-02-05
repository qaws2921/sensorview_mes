<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type="text/javascript" src="/data-component/mesPOP/Pop/popPlan1/popPlan_modal1.js" charset="UTF-8"></script>

<div id="addDialog" title="생산계획(1단계)등록" style="display:none">
    <div class="profile-user-info profile-user-info-striped">
        <div class="profile-info-row">
            <div class="profile-info-name">계획일자</div>
            <div class="profile-info-value">
                <div class="input-icon input-icon-right">
                    <input type="text" name="start_date" id="datepicker2"
                           class="form-control h-25 condition_main" readonly>
                    <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                </div>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">품목군</div>
            <div class="profile-info-value">
                <select class="form-control h-25 modal_value" style="width:100%" autofocus>
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">제품군</div>
            <div class="profile-info-value">
                <select class="form-control h-25 modal_value" style="width:100%">
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">제품명</div>
            <div class="profile-info-value">
                <select class="form-control h-25 modal_value" style="width:100%">
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">계획수량</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">용도</div>
            <div class="profile-info-value">
                <select class="form-control h-25 modal_value" style="width:100%">
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">생산구분</div>
            <div class="profile-info-value">
                <select class="form-control h-25 modal_value" style="width:100%">
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">Remark</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">비고</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value">
            </div>
        </div>
    </div>
</div>
