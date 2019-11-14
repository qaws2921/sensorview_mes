<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<script type="text/javascript" src="/data-component/admin/user/sysUser/sysUser.js" charset="UTF-8"></script>
<script type="text/javascript" src="/data-component/admin/user/sysUser/sysUser_modal.js" charset="UTF-8"></script>

<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
                    <span class="sp-title">
                        사용자관리
                        <small class="sp-small">
                            <i class="ace-icon fa fa-angle-double-right"></i>
                            Manufacturing Execution System
                        </small>
                    </span>
            <span style="float: right">
                        관리자
                        <i class="ace-icon fa fa-angle-double-right"></i>
              사용자관리
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        사용자관리
                    </span>
        </div>
    </div>

    <div class="page-content">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">조회구분</td>
                    <td>
                        <select name="keyword" class="form-control wt-px-125 keyword condition_main" id="dept_select" >
                            <option value="">전체</option>
                        </select>
                    </td>

                </tr>
                </tbody>
            </table>
        </div>
        <div class="clearfix">
            <div class="pull-left tableTools-container">
                <div class="dt-buttons btn-overlap btn-group">
                    <a  id="get_btn" class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="get_btn(1)">
                                <span>
                                    <i class="fa fa-search bigger-110 blue"></i>
                                    <span>조회</span>
                                </span>
                    </a>
                    <a id="add_btn" class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" id="showDialog" onclick="add_btn()">
                                <span><i class="fa fa-plus bigger-110 blue"></i>
                                    <span>등록</span>
                                </span>
                    </a>
                    <a id="delete_btn" class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="delete_btn()">
                                <span>
                                    <i class="fa fa-trash bigger-110 blue"></i>
                                    <span>삭제</span>
                                </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 table-responsive">
                <table id="mes_grid"></table>
                <div id="mes_grid_pager"></div>
            </div>
        </div>
    </div>
</div>

<div id="addDialog" title="사용자관리" style="display: none">
    <div class="profile-user-info profile-user-info-striped">
        <div class="profile-info-row">
            <div class="profile-info-name"> 사용자코드 </div>
            <div class="profile-info-value">
                <input type="text" name="user_code" class="form-control modal_value">
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name"> 사용자명 </div>

            <div class="profile-info-value">
                <input type="text" name="user_name" class="form-control modal_value">
            </div>

        </div>
        <div class="profile-info-row">
            <div class="profile-info-name"> 부서 </div>
            <div class="profile-info-value">
                <select name="dept_code" class="form-control modal_value" id="dept_select2">
                    <option value="">선택안함</option>
                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name"> 직책 </div>
            <div class="profile-info-value">
                <select name="duty_code" class="form-control modal_value" id="duty_select">
                    <option value="">선택안함</option>
                </select>
            </div>

        </div>
        <div class="profile-info-row">
            <div class="profile-info-name"> 권한 </div>
            <div class="profile-info-value">
                <select name="auth_code" class="form-control modal_value" id="auth_select">
                    <option value="">선택안함</option>
                </select>
            </div>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name"> 전화번호 </div>
            <div class="profile-info-value">
                <input type="text" name="tel_no" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name"> 이메일 </div>
            <div class="profile-info-value">
                <input type="text" name="email" class="form-control modal_value">
            </div>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name"> 사용유무 </div>
            <div class="profile-info-value">
                <select name="use_yn" class="form-control modal_value ynCheck">
                    <option>Y</option>
                    <option>N</option>
                </select>
            </div>
        </div>
    </div>
</div>


