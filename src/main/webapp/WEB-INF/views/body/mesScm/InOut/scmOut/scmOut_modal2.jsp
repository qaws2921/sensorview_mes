<%@ page language="java" contentType="text/html; charset=UTF-8" %>

<div id="scmOut-add-fromOrder-dialog" title="요청출고추가">
    <div class="col-lg-12">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">출고일자</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" id="datepicker5" class="form-control h-25" tabindex="-1">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">비고</td>
                    <td >
                        <input type="text" class="form-control h-25" />
                    </td>

                </tr>
                </tbody>
            </table>
            <div class="clearfix">
                <div class="pull-left tableTools-container">
                    <div class="dt-buttons btn-overlap btn-group">
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" title="">
		                        <span>
		                            <i class="fa fa-plus bigger-110 blue"></i>
		                            <span>저장</span>
		                        </span>
                        </a>
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" id="close_btn2">
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
                    <table id="scmOutaddfromOrderDialogGrid"></table>
                </div>
            </div>
        </div>
    </div>
</div>