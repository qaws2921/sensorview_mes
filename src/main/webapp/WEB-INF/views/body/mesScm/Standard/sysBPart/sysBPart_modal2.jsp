<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<script type="text/javascript" src="/data-component/mesSCM/Standard/sysBPart/sysBPart_modal2.js"
        charset="UTF-8"></script>

<div id="uploadDialog" title="자재품목 엑셀업로드">
    <div class="col-lg-12">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title">
                        찾아보기
                    </td>
                    <td class="wt-px-200">
                        <input name="keyword2" type="text" class="form-control h-25 suppModal_condition">
                    </td>
                    <td>
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold"
                           title="" onclick="">
                                            <span>
                                                <i class="fa fa-search bigger-110 blue"></i>
                                                <span>파일찾기</span>
                                            </span>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="clearfix">
                <div class="pull-left tableTools-container">
                    <div class="dt-buttons btn-overlap btn-group">
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold"
                           title="" onclick="">
                                            <span>
                                                <i class="fa fa-search bigger-110 blue"></i>
                                                <span>가져오기</span>
                                            </span>
                        </a>
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold"
                           title="" onclick="">
                                            <span>
                                                <i class="fa fa-check bigger-110 blue"></i>
                                                <span>적용</span>
                                            </span>
                        </a>
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold"
                           id="close_btn2" onclick="">
                                            <span>
                                                <i class="fa fa-times bigger-110 blue"></i>
                                                <span>목록으로</span>
                                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <table id="modal2_grid"></table>
                    <div id="modal2_grid_pager"></div>
                </div>
            </div>
        </div>
    </div>
</div>