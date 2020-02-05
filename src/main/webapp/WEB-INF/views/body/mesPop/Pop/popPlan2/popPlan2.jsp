<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<script type="text/javascript" src="/data-component/mesPOP/Pop/popPlan2/popPlan2.js" charset="UTF-8"></script>

<div class="main-content-inner">

    <div class="page-content">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">계획일자</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="start_date" id="datepicker"
                                   class="form-control h-25 condition_main" readonly>
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">품목군</td>
                    <td class="wt-px-200">
                        <select class="form-control condition_main" name="keyword2" style="width:100%">
                        </select>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">제품군</td>
                    <td class="wt-px-200">
                        <select class="form-control condition_main" name="keyword3" style="width:100%">
                        </select>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">제품명</td>
                    <td class="wt-px-200">
                        <select class="form-control condition_main" name="keyword4" style="width:100%">
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
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="get_btn(1)">
                            <span>
                                <i class="fa fa-search bigger-110 blue"></i>
                                <span>조회</span>
                            </span>
                    </a>

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
</div>

<%--<%@include file="sysPartName_modal1.jsp" %>--%>




