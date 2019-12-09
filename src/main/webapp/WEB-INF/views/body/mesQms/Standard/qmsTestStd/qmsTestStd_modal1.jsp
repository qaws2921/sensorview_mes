<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type="text/javascript" src="/data-component/mesQMS/Standard/qmsTestStd/qmsTestStd_modal1.js" charset="UTF-8"></script>

<div id="addDialog" title="외경검사기준추가" style="display:none">
    <div class="profile-user-info profile-user-info-striped">
        <div class="profile-info-row">
            <div class="profile-info-name">공정</div>
            <div class="profile-info-value">
                <input type="text" name="line_name" id="line_name" class="form-control modal_value" readonly>
                <input type="hidden" name="line_code" id="line_code" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">제품구분</div>
            <div class="profile-info-value">
                <select id="gubun_select2" name="part_grp_code" class="form-control" style="width: 100%" onchange="select_change1(this.value);">
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">제품명</div>
            <div class="profile-info-value">
                <select id="code_select" name="part_code" class="form-control modal_value" style="width: 100%">
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">1차</div>
            <div class="profile-info-value t-align-c">
                <input type="text" name="diameter1_start" class="form-control modal_value">
                ~
                <input type="text" name="diameter1_stop" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">2차</div>
            <div class="profile-info-value t-align-c">
                <input type="text" name="diameter2_start" class="form-control modal_value">
                ~
                <input type="text" name="diameter2_stop" class="form-control modal_value">
            </div>
        </div>
    </div>
</div>