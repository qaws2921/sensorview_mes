<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<script type="text/javascript" src="/data-component/common/modal/suppModal.js" charset="UTF-8"></script>
<div id="supp-search-dialog" title="업체조회" class="test">
    <div class="col-lg-12">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100">
                        <select name="keyword" class="form-control h-25 suppModal_condition">
                            <option value="supp_name">업체명</option>
                            <option value="supp_code">업체코드</option>
                        </select>
                    </td>
                    <td class="wt-px-200">
                        <input name="keyword2" type="text" class="form-control h-25 suppModal_condition">
                    </td>
                    <td>
                        <div class="dt-buttons btn-overlap btn-group">
                            <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" title="" onclick="suppModal_get_btn(1)">
			                        <span>
			                            <i class="fa fa-search bigger-110 blue"></i>
			                            <span>조회</span>
			                        </span>
                            </a>
                            <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" title="" onclick="suppModal_check()">
			                        <span>
			                            <i class="fa fa-check bigger-110 blue"></i>
			                            <span>선택</span>
			                        </span>
                            </a>
                            <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" id="close_btn2" onclick="suppModal_close()">
			                        <span>
			                            <i class="fa fa-times bigger-110 blue"></i>
			                            <span>취소</span>
			                        </span>
                            </a>
                        </div>
                    </td>

                </tr>
                </tbody>
            </table>
            <div class="row">
                <div class="col-xs-12 rrr">
                    <table id="SuppSearchGrid"></table>
                    <div id="SuppSearchGridPager"></div>
                </div>
            </div>
        </div>
    </div>
</div>