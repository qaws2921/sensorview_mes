<%@ page language="java" contentType="text/html; charset=UTF-8" %>

<div id="scmOut-add-dialog" title="자재출고 추가">
    <div class="col-lg-12">
        <div class="col-lg-5 padding0" id="content1">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">품목그룹</td>
                    <td class="wt-px-150 h-25">
                        <select class="form-control" id="p_group">
                            <option>그룹1</option>
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
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
	                            <span>
	                                <i class="fa fa-search bigger-110 blue"></i>
	                                <span>조회</span>
	                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <table id="scmOutaddDialogLeftGrid"></table>
                    <div id="scmOutaddDialogLeftGridPager"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-1 padding0 mid-arrow-r">
            <div class="dt-buttons btn-overlap btn-group">
                <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
	                        <span>
	                            <i class="fa fa-arrow-right bigger-110 blue"></i>
	                        </span>
                </a>
                <br><br>
                <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
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
                    <td class="wt-px-150">
                        <div class="input-icon input-icon-right">
                            <input type="text" id="datepicker3" class="form-control h-25">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">비고</td>
                    <td>
                        <input type="text" class="form-control h-25">
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
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" id="close_btn">
	                            <span>
	                            	 <i class="fa fa-times bigger-110 blue"></i>
	                                <span>취소</span>
	                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <table id="scmOutaddDialogRightGrid"></table>
                </div>
            </div>
        </div>
    </div>
</div>