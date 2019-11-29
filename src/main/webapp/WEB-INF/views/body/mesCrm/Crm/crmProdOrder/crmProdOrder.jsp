<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script type="text/javascript" src="/data-component/mesCRM/Crm/crmProdOrder/crmProdOrder.js" charset="UTF-8"></script>
<style>
    .pd-4>tbody>tr>td{
        padding:4px!important;
    }
</style>
<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
            <span class="sp-title">
            	구매 생산지시
            	<small class="sp-small"><i class="ace-icon fa fa-angle-double-right"></i>
            	Manufacturing Execution System
            	</small>
            </span>
            <span style="float: right">
            	영업관리
            	<i class="ace-icon fa fa-angle-double-right"></i>
             	영업관리
                <i class="ace-icon fa fa-angle-double-right"></i>
                <b>구매 생산지시</b>
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
                                   class="form-control h-25 condition_main">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="t-align-c" style="width:25px !important;">~</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="end_date" id="datepicker2"
                                   class="form-control h-25 condition_main">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
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
                       onclick="">
                            <span><i class="fa fa-plus bigger-110 blue"></i>
                            <span>지시 생성</span>
                            </span>
                    </a>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-9 table-responsive">
                <table id="mes_grid"></table>
                <div id="mes_grid_pager"></div>
            </div>
            <div class="col-xs-3 table-responsive" style="margin-top: -20px;">
                <div class="col-lg-12">
                    <div class="col-lg-12 ">
                        <span class="sp-title">영업정보</span>
                    </div>
                    <table class="table multi_table pd-4">
                        <tbody>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">영업구분</td>
                            <td class="wt-px-150">
                                <select class="form-control">
                                    <option>국내</option>
                                    <option>해외</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">담당자</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">배송방법</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">배송업체</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">배송비부담</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">생산</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">판매구분</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">유/무상</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">샘플용도</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">통화단위</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">단가</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">합계</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-12">
                    <table class="table multi_table pd-4">
                        <div class="col-lg-12 ">
                            <span class="sp-title">고객정보</span>
                        </div>
                        <tbody>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">발주번호</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">결재방법</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">담당자</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">연락처</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td class="wt-px-100 td-title t-align-c padding-a-0">배송지</td>
                            <td class="wt-px-150">
                                <input type="text" class="form-control">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
