<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script type="text/javascript" src="/data-component/mesSCM/Order/scmOrder/scmOrder.js" charset="UTF-8"></script>
<style>
    #SuppSearchGridPager #pg_SuppSearchGridPager table{
        table-layout:auto !important;
    }
    #mes_add_grid_pager #pg_mes_add_grid_pager table{
        table-layout:auto !important;
    }
</style>
<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
            <span class="sp-title">
            	발주등록
            	<small class="sp-small"><i class="ace-icon fa fa-angle-double-right"></i>
            	Manufacturing Execution System
            	</small>
            </span>
            <span style="float: right">
            	자재관리
            	<i class="ace-icon fa fa-angle-double-right"></i>
             	구매관리
                <i class="ace-icon fa fa-angle-double-right"></i>
                <b>발주등록</b>
           </span>
        </div>
    </div>

    <div class="page-content">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">조회기간</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="start_date" id="datepicker"
                                   class="form-control h-25 condition_main" readonly>
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="t-align-c" style="width:25px !important;">~</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="end_date" id="datepicker2"
                                   class="form-control h-25 condition_main" readonly>
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">업체</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="supp_name" class="form-control h-25 condition_main"
                                   id="supp_name_main" readonly onclick="supp_btn('A')">
                            <input type="hidden" name="supp_code" class="form-control h-25 condition_main"
                                   id="supp_code_main">
                            <i class="ace-icon fa fa-search dark" style="top: -2px;" id="SuppSearch"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">상태</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>전체</option>
                            <option>입고대기</option>
                            <option>완료</option>
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
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="">
                            <span>
                            <i class="fa fa-search bigger-110 blue"></i>
                            <span>조회</span>
                            </span>
                    </a>
                    <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" title=""
                       onclick="add_btn();">
                            <span><i class="fa fa-plus bigger-110 blue"></i>
                            <span>추가</span>
                            </span>
                    </a>
                    <a class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
                        <span>
                        <i class="fa fa-trash bigger-110 blue"></i>
                        <span>삭제</span>
                        </span>
                    </a>
                    <a class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
                        <span>
                        <i class="fa fa-plus bigger-110 blue"></i>
                        <span>완료처리</span>
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

        <hr/>

        <div class="row">
            <div class="col-xs-12 table-responsive">
                <table id="mes_grid2"></table>
                <div id="mes_grid2_pager"></div>
            </div>
        </div>
    </div>
</div>

<%@include file="scmOrder_modal1.jsp" %>
<%@include file="/WEB-INF/views/body/common/modal/supp_modal.jsp" %>



