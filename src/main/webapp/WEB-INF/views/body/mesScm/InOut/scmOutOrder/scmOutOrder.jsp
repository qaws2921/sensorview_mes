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
                출고요청
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
                <b>출고요청</b>
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
                    <td class="wt-px-100 td-title t-align-c padding-a-0">처리구분</td>
                    <td class="wt-px-200">
                        <select class="form-control h-25" id="scmOutOrderSelect">
                            <option>전체</option>
                            <option>대기</option>
                            <option>완료</option>
                        </select>
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
                                <span><i class="fa fa-plus bigger-110 blue"></i>
                                    <span>추가</span>
                                </span>
                    </a>
                    <a id="delete_btn" class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
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
                <table id="scmOutOrderTopGrid"></table>
                <div id="scmOutOrderTopGridPager"></div>
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-xs-12 table-responsive">
                <table id="scmOutOrderBottomGrid"></table>
                <div id="scmOutOrderBottomGridPager"></div>
            </div>
        </div>

    </div>
</div>

<%@include file="scmOutOrder_modal1.jsp"%>
<script>

    $(document).ready(function () {
        var topGrid_data =
            [
            ];
        var bottomGrid_data =
            [
            ];
        var dialogLeftGrid_data =
            [
            ];
        var dialogRightGrid_data =
            [
            ];

        $( "#scmOutOrderSelect" ).select2();

        $( "#datepicker").datepicker({
            format:'yyyy-mm-dd',
            language: "kr",
        });
        $( "#datepicker2").datepicker({
            format:'yyyy-mm-dd',
            language: "kr"
        });
        $( "#datepicker3").datepicker({
            format:'yyyy-mm-dd',
            language: "kr"
        }).datepicker('setDate','today');

        var grid_selector = "#scmOutOrderTopGrid";
        var pager_selector = "#scmOutOrderTopGridPager";
        var parent_column = $(grid_selector).closest('[class*="col-"]');

        var grid_selector2 = "#scmOutOrderBottomGrid";
        var pager_selector2 = "#scmOutOrderBottomGridPager";
        var parent_column2 = $(grid_selector2).closest('[class*="col-"]');

        var grid_selector3 = "#scmOutOrderDialogLeftGrid";
        var pager_selector3 = "#scmOutOrderDialogLeftGridPager";

        var grid_selector4 = "#scmOutOrderDialogRightGrid";

        $( "#showDialog" ).on('click', function(e) {
            e.preventDefault();
            $('#scmOutOrder-add-dialog').removeClass('hide').dialog({
                modal: true,
                width: 1300,
                height: 600
            });
        });

        $(window).on('resize.jqGrid', function () {
            $(grid_selector).jqGrid( 'setGridWidth', parent_column.width());
        });

        $(window).on('resize.jqGrid', function () {
            $(grid_selector2).jqGrid( 'setGridWidth', parent_column2.width());
        })


        $(grid_selector).jqGrid({
            data: topGrid_data,
            datatype: "local",
            // 다중 select
            multiselect: true,
            // 타이틀
            caption: "출고요청 | MES",
            colNames: ['출고일자','전표번호','처리구분','등록자','요청일시','처리자','출고일시'],
            colModel: [
                {name: 'outedate', index: 'outedate'},
                {name: 'rqno', index: 'rqno'},
                {name: 'state', index: 'state'},
                {name: 'register', index: 'register'},
                {name: 'reqdate', index: 'reqdate'},
                {name: 'manager', index: 'manager'},
                {name: 'outdatetime', index: 'outdatetime'},
            ],
            viewrecords: true,
            height: 150,
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

        $(grid_selector2).jqGrid({
            data: bottomGrid_data,
            datatype: "local",
            caption: "출고요청 | MES",
            colNames: ['전표번호','품목그룹','품번','품명','규격','단위','입고수량','불량수량','실입고수량'],
            colModel: [
                {name: 'rqno', index: 'rqno', width: 60},
                {name: 'pgroup', index: 'pgroup', width: 60},
                {name: 'pnum', index: 'pnum', width: 60},
                {name: 'pname', index: 'pname', width: 60},
                {name: 'standard', index: 'standard', width: 60},
                {name: 'unit', index: 'unit', width: 60},
                {name: 'innum', index: 'innum', width: 60},
                {name: 'badnum', index: 'badnum', width: 60},
                {name: 'realnum', index: 'realnum', width: 60},
            ],
            viewrecords: true,
            height: 200,
            rowNum: 100,
            rowList:[100,200,300,500,1000],
            pager: pager_selector2,
            loadComplete : function() {
                var table = this;
                setTimeout(function(){
                    updatePagerIcons(table);
                }, 0);
            }
        });

        $(grid_selector3).jqGrid({
            data: bottomGrid_data,
            datatype: "local",
            // 다중 select
            multiselect: true,
            // 타이틀
            caption: "출고요청추가 | MES",
            colNames: ['품목그룹','품번','품명','규격','단위'],
            colModel: [
                {name: 'gruoup', index: 'gruoup'},
                {name: 'num', index: 'num'},
                {name: 'name', index: 'name'},
                {name: 'standard', index: 'standard'},
                {name: 'unit', index: 'unit'},
            ],
            // 페이지 수 보기 (1 / 100) = true
            // 높이 : 450px
            width : 521,
            height: 315,
            // 디폴트 조회 개수 : 100
            rowNum: 100,
            // 단위 별 조회 개수
            rowList:[100,200,300,500,1000],
            // pager 세팅
            pager: pager_selector3,
            // jqGrid load 시 실행 함수 = setTimeout
            // setTimeout함수는 함수 뒤 시간이 지나면 호출됨. 현재 : 0 (1000 = 1초)
            // 호출되는 함수는 pager icon 함수
            loadComplete : function() {
                var table = this;
                setTimeout(function(){
                    updatePagerIcons(table);
                }, 0);
            }
        });

        $(grid_selector4).jqGrid({
            data: bottomGrid_data,
            datatype: "local",
            // 다중 select
            multiselect: true,
            // 타이틀
            caption: "출고요청추가 | MES",
            colNames: ['품목그룹','품번','품명','규격','단위','요청수량'],
            colModel: [
                {name: 'group', index: 'gruoup', width: 60},
                {name: 'num', index: 'num', width: 60},
                {name: 'name', index: 'name', width: 60},
                {name: 'standard', index: 'standard', width: 60},
                {name: 'unit', index: 'unit', width: 60},
                {name: 'req_num', index: 'in_num', width: 60},
            ],
            // 페이지 수 보기 (1 / 100) = true
            // 높이 : 450px
            width: 621,
            height: 355,
            // 디폴트 조회 개수 : 100
            rowNum: 100,
            // 단위 별 조회 개수
            rowList:[100,200,300,500,1000],
            // pager 세팅
            // jqGrid load 시 실행 함수 = setTimeout
            // setTimeout함수는 함수 뒤 시간이 지나면 호출됨. 현재 : 0 (1000 = 1초)
            // 호출되는 함수는 pager icon 함수
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
        }

        // 넓이 조절 함수
        $(window).triggerHandler('resize.jqGrid');

        $("#close_btn").on('click',function(e){
            e.preventDefault();
            $("#scmOutOrder-add-dialog").dialog('close');
        });

    });
</script>


