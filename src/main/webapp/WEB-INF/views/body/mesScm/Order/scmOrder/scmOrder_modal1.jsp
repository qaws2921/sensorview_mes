<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<script type="text/javascript" src="/data-component/mesSCM/Order/scmOrder/scmOrder_modal1.js" charset="UTF-8"></script>
<div id="addDialog" title="발주추가" style="display: none">
    <div class="col-lg-12">
        <div class="col-lg-5 padding0" id="content1">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">업체</td>
                    <td class="wt-px-150 h-25">
                          <span class="input-icon input-icon-right">
                            <input type="text" name="supp_name" class="form-control h-25 modal_value" value="" id="supp_name_modal" onclick="supp_btn('B');">
                            <input type="hidden" name="supp_code" class="form-control h-25 modal_value" value="" id="Ssupp_code_modal">
                          <i class="ace-icon fa fa-search dark" style="top: -2px;" id="SuppSearch-Main"></i>
                          </span>
                    </td>

                    <td class="wt-px-100 t-align-c td-title padding-a-0">품목그룹</td>
                    <td class="wt-px-150 h-25">
                        <select name="part_code" class="form-control modal_value" id="p_group">
                            <option value="">전체</option>
                            <option>그룹2</option>
                            <option>그룹3</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>

            <div class="clearfix">
                <div class="pull-left tableTools-container">
                    <div class="dt-buttons btn-overlap btn-group">
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="get_modal1_btn(1);">
                            <span>
                                <i class="fa fa-search bigger-110 blue"></i>
                                <span>조회</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <table id="mes_add_grid"></table>
                    <div id="mes_add_grid_pager"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-1 padding0 mid-arrow-r">
            <div class="dt-buttons btn-overlap btn-group">
                <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="right_modal1_btn();">
                        <span>
                            <i class="fa fa-arrow-right bigger-110 blue"></i>
                        </span>
                </a>
                <br><br>
                <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="left_modal1_btn();">
                        <span>
                            <i class="fa fa-arrow-left bigger-110 pink"></i>
                        </span>
                </a>
            </div>
        </div>
        <div class="col-lg-6 padding0" id="content2">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">발주일자</td>
                    <td class="wt-px-150 h-25">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="work_date" id="datepicker3" class="form-control h-25 modal_value2">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">금액표기</td>
                    <td class="wt-px-150 h-25">
                       <select class="form-control">
                           <option>표기안함</option>
                       </select>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>

            <div class="clearfix">
                <div class="pull-left tableTools-container">
                    <div class="dt-buttons btn-overlap btn-group">
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" title="" onclick="add_modal1_btn();">
                            <span>
                                <i class="fa fa-plus bigger-110 blue"></i>
                                <span>저장</span>
                            </span>
                        </a>
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" id="close_btn">
                            <span>
                            	 <i class="fa fa-times bigger-110 blue"></i>
                                <span>취소</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row" style="margin-bottom:30px;">
                <div class="col-xs-12">
                    <table id="mes_add_grid2"></table>
                </div>
            </div>
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">Terms of Payment</td>
                    <td class="wt-px-150">
                        <select class="form-control">
                            <option>T</option>
                            <option>T in advance</option>
                        </select>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">Terms of Delivery</td>
                    <td class="wt-px-150">
                        <select class="form-control">
                            <option>택배</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">Delivery</td>
                    <td colspan="3">
                        <select class="form-control">
                            <option>전체</option>
                            <option>입고대기</option>
                            <option>완료</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">Attachment</td>
                    <td colspan="3">
                        <label><input type="checkbox"/>Test Report</label>
                        <label><input type="checkbox"/>RoHS Report</label>
                        <label><input type="checkbox"/>C.O.C</label>
                        <label><input type="checkbox"/>Samples for Incoming Test</label>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">Shipping Nomination</td>
                    <td colspan="3">
                        <select class="form-control">
                            <option>주소</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">비고</td>
                    <td colspan="3">
                       <input type="text" class="form-control"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
