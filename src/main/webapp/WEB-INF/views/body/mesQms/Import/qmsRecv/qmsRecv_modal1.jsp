<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<script type="text/javascript" src="/data-component/mesQMS/Import/qmsRecv/qmsRecv_modal1.js" charset="UTF-8"></script>
<div id="addDialog" title="수입검사등록" style="display:none">
    <div class="col-lg-12">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">입고일자</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" id="datepicker3" class="form-control h-25" readonly>
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">전표번호</td>
                    <td class="wt-px-200">
                        <select class="form-control keyword condition_main" style="width: 100%">
                        </select>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">업체명</td>
                    <td class="wt-px-200">
                        <select class="form-control keyword condition_main" style="width: 100%">
                            <option value="">전체</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>

            <div class="clearfix">
                <div class="pull-left tableTools-container">
                    <div class="dt-buttons btn-overlap btn-group">
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold">
                            <span>
                                <i class="fa fa-plus bigger-110 blue"></i>
                                <span>저장</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12">
                    <table id="mes_modal_grid"></table>
                    <div id="mes_modal_grid_pager"></div>
                </div>
            </div>
        </div>
    </div>
</div>