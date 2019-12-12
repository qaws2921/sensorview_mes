<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<script type="text/javascript" src="/data-component/mesPOP/Device/popTerminal/popTerminal_modal2.js" charset="UTF-8"></script>
<div id="addDialog2" title="공정마스터관리" style="display:none">
    <div class="col-lg-12">
        <div class="col-lg-12 padding0" id="content1">

            <table class="table wt-100 ">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">단말기코드</td>
                    <td class="wt-px-200">
                        <input type="text" name="in_no" id="in_no"  class="form-control h-25 modal_value" >
                    </td>

                    <td class="wt-px-100 t-align-c td-title padding-a-0">단말기명</td>
                    <td class="wt-px-200">
                        <input type="text" name="supp_name" class="form-control h-25 modal_value"/>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0" style="border: 0px !important;">세부코드</td>
                    <td colspan="3" style="border: 0px !important;;">
                        <input type="text" name="supp_name" class="form-control h-25 modal_value"/>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0" style="border: 0px !important;">세부내용</td>
                    <td colspan="3" style="border: 0px !important;;">
                        <input type="text" name="supp_name" class="form-control h-25 modal_value"/>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0" style="border: 0px !important;">적용값</td>
                    <td colspan="3" style="border: 0px !important;;">
                        <input type="text" name="supp_name" class="form-control h-25 modal_value"/>
                    </td>
                </tr>
                </tbody>
            </table>

            <div class="clearfix">
                <div class="pull-left tableTools-container">
                    <div class="dt-buttons btn-overlap btn-group">
                        <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                           tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="add_btn()">
                                <span><i class="fa fa-plus bigger-110 blue"></i>
                                    <span>추가</span>
                                </span>
                        </a>
                        <a class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                           tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="delete_btn();">
                                <span>
                                    <i class="fa fa-trash bigger-110 blue"></i>
                                    <span>삭제</span>
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

