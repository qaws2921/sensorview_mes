<%@ page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<c:set var="now" value="<%=new java.util.Date()%>" />
<c:set var="yesterday" value="<%=new java.util.Date(new Date().getTime()-60*60*24*1000)%>" />

<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
            <span class="sp-title">
                출고현황
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
                        <b>출고현황</b>
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
                            <input type="text" id="datepicker" class="form-control h-25" value="<fmt:formatDate value='${yesterday}' pattern='yyyy-MM-dd'/>">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="t-align-c" style="width:25px !important;">
                        ~
                    </td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" id="datepicker2" class="form-control h-25"  value="<fmt:formatDate value='${now}' pattern='yyyy-MM-dd'/>">
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
                    <a  id="get_btn" class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
                                <span>
                                    <i class="fa fa-search bigger-110 blue"></i>
                                    <span>조회</span>
                                </span>
                    </a>
                    <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" title="" id="showDialog">
                                <span><i class="fa fa-download bigger-110 blue"></i>
                                    <span>저장</span>
                                </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 table-responsive">
                <table id="scmOutListGrid"></table>
                <div id="scmOutListGridPager"></div>
            </div>
        </div>
    </div>
</div>


<script>

    $(document).ready(function () {
        var scmOutListGrid_data = [];

        $( "#datepicker").datepicker({
            format:'yyyy-mm-dd',
            language: "kr",
        });
        $( "#datepicker2").datepicker({
            format:'yyyy-mm-dd',
            language: "kr"
        });

        var grid_selector = "#scmOutListGrid";
        var pager_selector = "#scmOutListGridPager";
        var parent_column = $(grid_selector).closest('[class*="col-"]');

        $(window).on('resize.jqGrid', function () {
            $(grid_selector).jqGrid( 'setGridWidth', parent_column.width());
        })

        $(grid_selector).jqGrid({
            data: scmOutListGrid_data,
            datatype: "local",
            // 다중 select
            multiselect: true,
            // 타이틀
            caption: "출고현황 | MES",
            colNames: ['출고일자','출고번호','업체명','품목그룹','품번','품명','규격','단위','출고수량','등록자','출고일시'],
            colModel: [
                {name: 'outdate', index: 'outdate', width: 60},
                {name: 'outnum', index: 'outnum', width: 60},
                {name: 'suppname', index: 'suppname', width: 60},
                {name: 'pgroup', index: 'pgroup', width: 60},
                {name: 'pnum', index: 'pnum', width: 60},
                {name: 'pname', index: 'pname', width: 60},
                {name: 'standard', index: 'standard', width: 60},
                {name: 'unit', index: 'unit', width: 60},
                {name: 'outcount', index: 'outcount', width: 60},
                {name: 'register', index: 'register', width: 60},
                {name: 'outdatetime', index: 'outdatetime', width: 60},
            ],
            viewrecords: true,
            height: 500,
            rowNum: 100,
            rowList:[100,200,300,500,1000],
            pager: pager_selector,
            loadComplete : function() {
                var table = this;
                setTimeout(function(){
                    updatePagerIcons(table);
                }, 0);
            }
        });

        function updatePagerIcons(table) {
            var replace =
                {
                    'ui-icon-seek-first' : 'ace-icon fa fa-angle-double-left bigger-140',
                    'ui-icon-seek-prev' : 'ace-icon fa fa-angle-left bigger-140',
                    'ui-icon-seek-next' : 'ace-icon fa fa-angle-right bigger-140',
                    'ui-icon-seek-end' : 'ace-icon fa fa-angle-double-right bigger-140'
                };
            $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
                var icon = $(this);
                var $class = $.trim(icon.attr('class').replace('ui-icon', ''));

                if($class in replace) icon.attr('class', 'ui-icon '+replace[$class]);
            })
        };

        $(window).triggerHandler('resize.jqGrid');

    });

</script>


