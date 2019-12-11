<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<script type="text/javascript" src="/data-component/mesSCM/inOut/scmOutOrder/scmOutOrder_modal1.js" charset="UTF-8"></script>
<div id="scmOutOrder-add-dialog"  title="출고요청추가" style="display: none">
    <div class="col-lg-12">
        <div class="col-lg-5 padding0" id="content1">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">품목그룹</td>
                    <td class="wt-px-150">
                        <select name="keyword2" id="grp_select" class="form-control h-25 modal_value" style="width: 100%">

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
                    <table id="scmOutOrderDialogLeftGrid"></table>
                    <div id="scmOutOrderDialogLeftGridPager"></div>
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
                    <td class="wt-px-100 t-align-c td-title padding-a-0">출고일자</td>
                    <td class="wt-px-125">
                        <div  class="input-icon input-icon-right">
                            <input type="text" name="work_date" id="datepicker3" class="form-control h-25 modal_value2" readonly>
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">공정</td>
                    <td class="wt-px-100">
                        <select name="cargo_code_to" id="line_select" class="form-control modal_value2">

                        </select>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">용도</td>
                    <td class="wt-px-100">
                        <select name="usage" id="usage_select" class="form-control modal_value2">
                            <option value="1">양산</option>
                            <option value="2">개발</option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
            <input type="hidden" name="ord_no" id="ord_no" class="form-control h-25 modal_value2">
            <div class="clearfix">
                <div class="pull-left tableTools-container">
                    <div class="dt-buttons btn-overlap btn-group">
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" title="" onclick=" add_modal1_btn();">
                            <span>
                                <i class="fa fa-plus bigger-110 blue"></i>
                                <span>저장</span>
                            </span>
                        </a>
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" id="close_btn" onclick="close_modal1_btn();">
                            <span>
                            	 <i class="fa fa-times bigger-110 blue"></i>
                                <span>취소</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <table id="scmOutOrderDialogRightGrid"></table>
                </div>
            </div>
        </div>
    </div>
</div>