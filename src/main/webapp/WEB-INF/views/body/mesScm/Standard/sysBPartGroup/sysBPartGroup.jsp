<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
                    <span class="sp-title">
                        자재그룹관리
                        <small class="sp-small">
                            <i class="ace-icon fa fa-angle-double-right"></i>
                            Manufacturing Execution System
                        </small>
                    </span>
            <span style="float: right">
                        자재관리
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        기준정보
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        자재그룹관리
                    </span>
        </div>
    </div>

    <div class="page-content">
        <div class="clearfix">
            <div class="pull-left tableTools-container">
                <div class="dt-buttons btn-overlap btn-group">
                    <a id="get_btn"
                       class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="">
                                <span>
                                    <i class="fa fa-search bigger-110 blue"></i>
                                    <span>조회</span>
                                </span>
                    </a>
                    <a id="add_btn"
                       class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="add_btn()">
                                <span><i class="fa fa-plus bigger-110 blue"></i>
                                    <span>추가</span>
                                </span>
                    </a>
                    <a id="delete_btn"
                       class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="">
                                <span>
                                    <i class="fa fa-trash bigger-110 blue"></i>
                                    <span>삭제</span>
                                </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 table-responsive">
                <table id="sysBPartGroupGrid"></table>
                <div id="sysBPartGroupGridPager"></div>
            </div>
        </div>
    </div>
</div>

<%--<%@inlcude file="sysBPartGroup_modal1.jsp" %>--%>

<script>
    $(document).ready(function () {
        var grid_data = [];

        var grid_selector = "#sysBPartGroupGrid";
        var pager_selector = "#sysBPartGroupGridPager";
        var parent_column = $(grid_selector).closest('[class*="col-"]');

        $(window).on('resize.jqGrid', function () {
            $(grid_selector).jqGrid('setGridWidth', parent_column.width());
        });

        $(grid_selector).jqGrid({
            data: grid_data,
            datatype: "local",
            // 다중 select
            multiselect: true,
            // 타이틀
            caption: "자재그룹관리 | MES",
            colNames: ['그룹코드', '그룹명', '비고', '등록자', '수정일'],
            colModel: [
                {name: 'code', index: 'code', width: 60},
                {name: 'name', index: 'name', width: 60},
                {name: 'remark', index: 'remark', width: 60},
                {name: 'manager', index: 'manager', width: 60},
                {name: 'modified_date', index: 'modified_date', width: 60},
            ],
            viewrecords: true,
            height: 580,
            rowNum: 100,
            rowList: [100, 200, 300, 500, 1000],
            pager: pager_selector,
            loadComplete: function () {
                var table = this;
                setTimeout(function () {
                    updatePagerIcons(table);
                }, 0);
            }
        });

        function updatePagerIcons(table) {
            var replace =
                {
                    'ui-icon-seek-first': 'ace-icon fa fa-angle-double-left bigger-140',
                    'ui-icon-seek-prev': 'ace-icon fa fa-angle-left bigger-140',
                    'ui-icon-seek-next': 'ace-icon fa fa-angle-right bigger-140',
                    'ui-icon-seek-end': 'ace-icon fa fa-angle-double-right bigger-140'
                };
            $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function () {
                var icon = $(this);
                var $class = $.trim(icon.attr('class').replace('ui-icon', ''));

                if ($class in replace) icon.attr('class', 'ui-icon ' + replace[$class]);
            })
        }
        $(window).triggerHandler('resize.jqGrid');

        function add_btn() {

            $("#addDialog").dialog('open');
        }

        sysBPartGroupModal_start();

    })
</script>



