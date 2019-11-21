<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<script type="text/javascript" src="/data-component/mesSCM/Inventory/scmStockSumDay/scmStockSumDay.js"
        charset="UTF-8"></script>

<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
                <span class="sp-title">
                    자재 일원장
                    <small class="sp-small">
                    <i class="ace-icon fa fa-angle-double-right"></i>
                    Manufacturing Execution System
                    </small>
                </span>
            <span style="float: right">
                    자재관리
                    <i class="ace-icon fa fa-angle-double-right"></i>
                    재고관리
                    <i class="ace-icon fa fa-angle-double-right"></i>
                    <b>자재 일원장</b>
                </span>
        </div>
    </div>

    <div class="page-content">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">조회일자</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" id="datepicker" class="form-control h-25" pattern='yyyy-MM-dd'/>
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">구분</td>
                    <td class="wt-px-200 t-align-c">
                        <select name="keyword" class="form-control keyword condition_main">
                            <option value="">전체</option>
                        </select>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">품목구분</td>
                    <td class="wt-px-200 t-align-c">
                        <select name="keyword" class="form-control keyword condition_main">
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
                       title="" onclick="">
                            <span>
                                <i class="fa fa-search bigger-110 blue"></i>
                                <span>조회</span>
                            </span>
                    </a>
                    <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title=""
                       onclick="">
                            <span>
                                <i class="fa fa-download bigger-110 blue"></i>
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





