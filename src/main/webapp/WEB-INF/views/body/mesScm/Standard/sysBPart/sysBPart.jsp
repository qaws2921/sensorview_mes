<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<script type="text/javascript" src="/data-component/mesSCM/Standard/sysBPart/sysBPart.js"
        charset="UTF-8"></script>
<style>
    #SuppSearchGridPager #pg_SuppSearchGridPager table{
        table-layout:auto !important;
    }
</style>

<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
                <span class="sp-title">
                    자재정보관리
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
                    <b>자재정보관리</b>
            </span>
        </div>
    </div>

    <div class="page-content">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">구분</td>
                    <td class="wt-px-200">
                        <select name="keyword" id="gubun_select" class="form-control keyword condition_main" onchange="select_change1(this.value);" style="width: 100%">

                        </select>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">품목구분</td>
                    <td class="wt-px-200">
                        <select name="keyword2" id="partGrp_select" class="form-control keyword condition_main" style="width: 100%">
                            <option value="">전체</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="clearfix">
            <div class="pull-left tableTools-container">
                <div class="dt-buttons btn-overlap btn-group">
                    <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="get_btn(1);">
                                <span>
                                    <i class="fa fa-search bigger-110 blue"></i>
                                    <span>조회</span>
                                </span>
                    </a>
                    <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="add_btn()">
                                <span><i class="fa fa-plus bigger-110 blue"></i>
                                    <span>추가</span>
                                </span>
                    </a>
                    <a class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="delete_btn();">
                                <span>
                                    <i class="fa fa-trash bigger-110 blue"></i>
                                    <span>삭제</span>
                                </span>
                    </a>
                    <a class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="">
                                <span>
                                    <i class="fa fa-download bigger-110 blue"></i>
                                    <span>저장</span>
                                </span>
                    </a>
                    <a class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title=""
                       onclick="upload_btn()">
                                <span>
                                    <i class="fa fa-upload bigger-110 blue"></i>
                                    <span>엑셀 업로드</span>
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
<%@include file="sysBPart_modal1.jsp" %>
<%@include file="sysBPart_modal2.jsp" %>
<%@include file="/WEB-INF/views/body/common/modal/supp_modal.jsp" %>