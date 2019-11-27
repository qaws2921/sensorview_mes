<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page session="false" %>
<script type="text/javascript" src="/ui-component/assets/js/jquery.fileDownload.js"></script>
<script type="text/javascript" src="/data-component/mesSCM/InOut/scmInList/scmInList.js" charset="UTF-8"></script>
<script type="text/javascript">
    //<![CDATA[
    $(function() {
        $("#btn-excel").on("click", function () {
            var $preparingFileModal = $("#preparing-file-modal");
            $preparingFileModal.dialog({ modal: true });
            $("#progressbar").progressbar({value: false});
            $.fileDownload ("/excel_download", {
                data : {"name":"scmInList",
                    "row0":$('#datepicker').val().replace(/-/gi,""),
                    "row1": $('#datepicker2').val().replace(/-/gi,""),
                    "row2":$('#supp_code_main').val()},
                successCallback: function (url) {
                    $preparingFileModal.dialog('close');
                },
                failCallback: function (responseHtml, url) {
                    $preparingFileModal.dialog('close');
                    $("#error-modal").dialog({ modal: true });
                }
            });
            return false;
        });

    });
    //]]>
</script>
<style>
    #SuppSearchGridPager #pg_SuppSearchGridPager table{
        table-layout:auto !important;
    }
</style>

<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
            <span class="sp-title">
                입고현황
                <small class="sp-small">
                    <i class="ace-icon fa fa-angle-double-right"></i>
                    Manufacturing Execution System
                </small>
            </span>
            <span style="float: right">
                자재관리
                <i class="ace-icon fa fa-angle-double-right"></i>
                입출고관리
                <i class="ace-icon fa fa-angle-double-right"></i>
                <b>입고현황</b>
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
                    <td class="t-align-c" style="width:25px !important;">
                        ~
                    </td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="end_date" id="datepicker2"
                                   class="form-control h-25 condition_main">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">업체</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="supp_name" class="form-control h-25 condition_main"
                                   id="supp_name_main" onclick="supp_btn('A');">
                            <input type="hidden" name="keyword" class="form-control h-25 condition_main"
                                   id="supp_code_main">
                            <i class="ace-icon fa fa-search dark" style="top: -2px;" id="SuppSearch"></i>
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
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="get_btn(1)">
                        <span><i class="fa fa-search bigger-110 blue"></i>
                            <span>조회</span>
                        </span>
                    </a>
                    <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                       id="btn-excel" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
                        <span><i class="fa fa-download bigger-110 blue"></i>
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

        <!-- 파일 생성중 보여질 진행막대를 포함하고 있는 다이얼로그 입니다. -->
        <div title="엑셀 저장중...." id="preparing-file-modal" style="display: none;">
            <div id="progressbar" style="width: 100%; height: 22px; margin-top: 20px;"></div>
        </div>
        <!-- 에러발생시 보여질 메세지 다이얼로그 입니다. -->
        <div title="알림" id="error-modal" style="display: none;">
            <p>엑셀파일 저장실패.</p>
        </div>

    </div>
</div>

<%@include file="/WEB-INF/views/body/common/modal/supp_modal.jsp" %>


