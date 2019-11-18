<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<script type="text/javascript" src="/data-component/mesSCM/Standard/sysBPartGroup/sysBPartGroup.js" charset="UTF-8"></script>

    <div class="main-content-inner">
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <div class="col-lg-12 ">
                <span class="sp-title">
                    자재그룹관리
                    <small class="sp-small">
                    <i class="ace-icon fa fa-angle-double-right"></i>
                    Manufacturing Execution System
                    </small>
                </span>
                <span style="float: right">
                    자재관리
                    <i class="ace-icon fa fa-angle-double-right"></i>
                    기준정보
                    <i class="ace-icon fa fa-angle-double-right"></i>
                    <b>자재그룹관리</b>
                </span>
            </div>
        </div>

        <div class="page-content">
            <div class="clearfix">
                <div class="pull-left tableTools-container">
                    <div class="dt-buttons btn-overlap btn-group">
                        <a id="get_btn"
                            class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" title="" onclick="">
                            <span>
                                <i class="fa fa-search bigger-110 blue"></i>
                                <span>조회</span>
                            </span>
                        </a>
                        <a id="add_btn"
                            class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="add_btn()">
                            <span>
                                <i class="fa fa-plus bigger-110 blue"></i>
                                <span>추가</span>
                            </span>
                        </a>
                        <a id="delete_btn"
                            class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold" title="" onclick="">
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

<%@include file="sysBPartGroup_modal1.jsp" %>




