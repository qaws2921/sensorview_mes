<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script type="text/javascript" src="/data-component/mesCRM/Crm/crmPlan/crmPlan.js" charset="UTF-8"></script>

<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
            <span class="sp-title">
            	계획관리
            	<small class="sp-small"><i class="ace-icon fa fa-angle-double-right"></i>
            	Manufacturing Execution System
            	</small>
            </span>
            <span style="float: right">
            	영업관리
            	<i class="ace-icon fa fa-angle-double-right"></i>
             	영업관리
                <i class="ace-icon fa fa-angle-double-right"></i>
                <b>계획관리</b>
           </span>
        </div>
    </div>

    <div class="page-content">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">조회</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="start_date" id="datepicker"
                                   class="form-control h-25 condition_main">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>

                    <td class="wt-px-100 td-title t-align-c padding-a-0">분기</td>
                    <td class="wt-px-200">
                       <select class="form-control">
                           <option>1분기</option>
                           <option>2분기</option>
                           <option>3분기</option>
                           <option>4분기</option>
                       </select>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">제품코드</td>
                    <td class="wt-px-200">
                       <input type="text" class="form-control"/>
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
                       onclick="add_btn()">
                            <span><i class="fa fa-plus bigger-110 blue"></i>
                            <span>추가</span>
                            </span>
                    </a>
                    <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" title=""
                       onclick="">
                            <span><i class="fa fa-plus bigger-110 blue"></i>
                            <span>저장</span>
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

<%@include file="crmPlan_modal1.jsp"%>
