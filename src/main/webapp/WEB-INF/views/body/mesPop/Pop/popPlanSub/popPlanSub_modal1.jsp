<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type="text/javascript" src="/data-component/mesPOP/Pop/popPlanSub/popPlanSub_modal1.js" charset="UTF-8"></script>

<div id="addDialog" title="생산계획(SUB)등록" style="display:none">
    <div class="profile-user-info profile-user-info-striped">
        <div class="profile-info-row">
            <div class="profile-info-name">공정라우팅</div>
            <div class="profile-info-value">
                <select class="form-control h-25 modal_value" id="route_select_modal1" style="width:100%">
                </select>
            </div>
            <div class="profile-info-name">공정명</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value" id="line_code_modal1" readonly>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">계획일자</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value">
            </div>
            <div class="profile-info-name">마감일</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">품목</div>
            <div class="profile-info-value">
                <select class="form-control h-25 modal_value" id="mat_prod_select" style="width:100%">
                </select>
            </div>
            <div class="profile-info-name"></div>
            <div class="profile-info-value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">계획수량</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value">
            </div>
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
            <div class="profile-info-name">작업자</div>
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
            <div class="profile-info-name">비고</div>
            <div class="profile-info-value">
                <input type="text" class="form-control modal_value">
            </div>

        </div>
    </div>
</div>
