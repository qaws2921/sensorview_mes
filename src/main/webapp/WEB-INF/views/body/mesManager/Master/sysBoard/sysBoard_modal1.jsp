<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type="text/javascript" src="/data-component/admin/master/sysBoard/sysBoard_modal1.js" charset="UTF-8"></script>

<div id="addDialog" title="게시판관리" style="display: none">
    <div class="profile-user-info profile-user-info-striped">
        <div class="profile-info-row">
            <div class="profile-info-name"> 게시판코드 </div>
            <div class="profile-info-value">
                <input type="text" name="board_code" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name"> 영문명 </div>
            <div class="profile-info-value">
                <input type="text" name="board_en" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name"> 한글명 </div>
            <div class="profile-info-value">
                <input type="text" name="board_kr" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name"> 권한 </div>
            <div class="profile-info-value">
                <select name="board_auth" id="board_auth" class="form-control modal_value" style="width: 100%">
                    <option value="">선택안함</option>
                    <option value="1">당사</option>
                    <option value="2">전체</option>
                </select>
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name"> 최대파일수 </div>
            <div class="profile-info-value">
                <input type="text" name="files" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name"> 최대파일크기(MB) </div>
            <div class="profile-info-value">
                <input type="text" name="file_size" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name"> 사용유무 </div>
            <div class="profile-info-value">
                <select name="use_yn" id="use_yn" class="form-control modal_value ynCheck" style="width: 100%">
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                </select>
            </div>
        </div>
    </div>
</div>

