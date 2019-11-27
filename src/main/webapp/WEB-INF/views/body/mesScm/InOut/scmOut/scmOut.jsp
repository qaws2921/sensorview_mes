<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<style>
    #scmOutaddDialogLeftGridPager #pg_scmOutaddDialogLeftGridPager table{
        table-layout:auto !important;
    }
</style>

<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
            <span class="sp-title">
                출고처리
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
                <b>출고처리</b>
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
                            <input type="text" name="start_date" id="datepicker" class="form-control h-25" value="<fmt:formatDate value='${yesterday}' pattern='yyyy-MM-dd'/>">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="t-align-c" style="width:25px !important;">
                        ~
                    </td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="end_date" id="datepicker2" class="form-control h-25"  value="<fmt:formatDate value='${now}' pattern='yyyy-MM-dd'/>">
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
                <div id="tabs">
                    <ul>
                        <li><a href="#tabs-1" id="f-tab">자재출고</a></li>
                        <li><a href="#tabs-2" id="s-tab">요청출고</a></li>
                    </ul>
                    <div id="tabs-1">
                        <div class="row">
                            <div class="col-xs-12">
                                <table id="scmOut1TopGrid" class="form-control"></table>
                                <div id="scmOut1TopGridPager"></div>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-xs-12">
                                <table id="scmOut1BottomGrid"></table>
                                <div id="scmOut1BottomGridPager"></div>
                            </div>
                        </div>
                    </div>
                    <div id="tabs-2">
                        <div class="row">
                            <div class="col-xs-12">
                                <table id="scmOut2TopGrid"></table>
                                <div id="scmOut2TopGridPager"></div>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-xs-12">
                                <table id="scmOut2BottomGrid"></table>
                                <div id="scmOut2BottomGridPager"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<%@include file="scmOut_modal1.jsp"%>
<%@include file="scmOut_modal2.jsp"%>

<script>
    var check="F";

    $(document).ready(function () {
        var top1Grid_data =[];
        var bottom1Grid_data =[];
        var top2Grid_data =[];
        var bottom2Grid_data =[];

        var scmOutaddLeftGrid_data =[];
        var scmOutaddRightGrid_data =[];

        var scmOutaddfromOrderGrid_data =[];


        $( "#showDialog" ).on('click', function(e) {
            e.preventDefault();
            if(check == "F"){
                $('#scmOut-add-dialog').dialog('open');
            } else if(check == "S"){
                $('#scmOut-add-fromOrder-dialog').dialog('open');
            }

        });

        $('#scmOut-add-dialog').dialog({
            autoOpen:false,
            modal: true,
            width: 1300,
            height: 600
        });

        $('#scmOut-add-fromOrder-dialog').dialog({
            autoOpen:false,
            modal: true,
            width: 800,
            height: 470
        });



        $("#tabs").tabs();

        $("#f-tab").on('click', function(e) {
            check="F";
            console.log(check);
        });

        $("#s-tab").on('click', function(e) {
            check="S";
            console.log(check);
        });

        $( "#datepicker").datepicker({
            format:'yyyy-mm-dd',
            language: "kr",
        });
        $( "#datepicker2").datepicker({
            format:'yyyy-mm-dd',
            language: "kr"
        });
        $( "#datepicker3").datepicker({
            autoclose: true,
            format:'yyyy-mm-dd',
            language: "kr"
        }).datepicker('setDate','today');

        $( "#datepicker4").datepicker({
            autoclose: true,
            format:'yyyy-mm-dd',
            language: "kr"
        }).datepicker('setDate','today');

        $( "#datepicker5").datepicker({
            autoclose: true,
            format:'yyyy-mm-dd',
            language: "kr"
        }).datepicker('setDate','today');

        var grid_selector = "#scmOut1TopGrid";
        var pager_selector = "#scmOut1TopGridPager";
        var parent_column = $(grid_selector).closest('[class*="col-"]');

        var grid_selector2 = "#scmOut1BottomGrid";
        var pager_selector2 = "#scmOut1BottomGridPager";
        var parent_column2 = $(grid_selector2).closest('[class*="col-"]');

        var grid_selector3 = "#scmOut2TopGrid";
        var pager_selector3 = "#scmOut2TopGridPager";

        var grid_selector4 = "#scmOut2BottomGrid";
        var pager_selector4 = "#scmOut2BottomGridPager";

        var grid_selector5 = "#scmOutaddDialogLeftGrid";
        var pager_selector5 = "#scmOutaddDialogLeftGridPager";

        var grid_selector6 = "#scmOutaddDialogRightGrid";

        var grid_selector7 = "#scmOutaddfromOrderDialogGrid";


        $(window).on('resize.jqGrid', function () {
            $(grid_selector).jqGrid( 'setGridWidth', parent_column.width());
        });

        $(window).on('resize.jqGrid', function () {
            $(grid_selector2).jqGrid( 'setGridWidth', parent_column2.width());
        })

        $(window).on('resize.jqGrid', function () {
            $(grid_selector3).jqGrid( 'setGridWidth', parent_column.width());
        });

        $(window).on('resize.jqGrid', function () {
            $(grid_selector4).jqGrid( 'setGridWidth', parent_column2.width());
        })

        $(grid_selector).jqGrid({
            data: top1Grid_data,
            datatype: "local",
            // 다중 select
            multiselect: true,
            // 타이틀
            caption: "출고처리-자재출고 | MES",
            colNames: ['출고일자','전표번호','받을창고','처리자','출고일시'],
            colModel: [
                {name: 'outedate', index: 'outedate'},
                {name: 'rqno', index: 'rqno'},
                {name: 'reccargo', index: 'state'},
                {name: 'manager', index: 'manager'},
                {name: 'outdatetime', index: 'outdatetime'},
            ],
            viewrecords: true,
            height: 145,
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
            data: bottom1Grid_data,
            datatype: "local",
            caption: "출고처리-자재출고 | MES",
            colNames: ['전표번호','품목그룹','품번','품명','규격','단위','출고수량'],
            colModel: [
                {name: 'rqno', index: 'rqno', width: 60},
                {name: 'pgroup', index: 'pgroup', width: 60},
                {name: 'pnum', index: 'pnum', width: 60},
                {name: 'pname', index: 'pname', width: 60},
                {name: 'standard', index: 'standard', width: 60},
                {name: 'unit', index: 'unit', width: 60},
                {name: 'outnum', index: 'outnum', width: 60},
            ],
            viewrecords: true,
            height: 145,
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
            data: top2Grid_data,
            datatype: "local",
            // 다중 select
            multiselect: true,
            // 타이틀
            caption: "출고처리-요청출고 | MES",
            colNames: ['출고일자','전표번호','받을창고','요청자','요청일시'],
            colModel: [
                {name: 'outedate', index: 'outedate'},
                {name: 'rqno', index: 'rqno'},
                {name: 'reccargo', index: 'state'},
                {name: 'manager', index: 'manager'},
                {name: 'outdatetime', index: 'outdatetime'},
            ],
            viewrecords: true,
            height: 145,
            rowNum: 100,
            rowList:[100,200,300,500,1000],
            pager: pager_selector3,
            loadComplete : function() {
                var table = this;
                setTimeout(function(){
                    updatePagerIcons(table);
                }, 0);
            }
        });

        $(grid_selector4).jqGrid({
            data: bottom2Grid_data,
            datatype: "local",
            // 타이틀
            caption: "출고처리-요청출고 | MES",
            colNames: ['전표번호','품목그룹','품번','품명','규격','단위','요청수량'],
            colModel: [
                {name: 'rqno', index: 'rqno', width: 60},
                {name: 'pgroup', index: 'pgroup', width: 60},
                {name: 'pnum', index: 'pnum', width: 60},
                {name: 'pname', index: 'pname', width: 60},
                {name: 'standard', index: 'standard', width: 60},
                {name: 'unit', index: 'unit', width: 60},
                {name: 'reqnum', index: 'reqnum', width: 60},
            ],
            viewrecords: true,
            height: 145,
            rowNum: 100,
            rowList:[100,200,300,500,1000],
            pager: pager_selector4,
            loadComplete : function() {
                var table = this;
                setTimeout(function(){
                    updatePagerIcons(table);
                }, 0);
            }
        });

        $(grid_selector5).jqGrid({
            data: scmOutaddLeftGrid_data,
            datatype: "local",
            // 타이틀
            caption: "출고처리-자재출고 | MES",
            colNames: ['품목그룹','품번','품명','규격','단위','포장수량'],
            colModel: [
                {name: 'pgroup', index: 'pgroup', width: 60},
                {name: 'pnum', index: 'pnum', width: 60},
                {name: 'pname', index: 'pname', width: 60},
                {name: 'standard', index: 'standard', width: 60},
                {name: 'unit', index: 'unit', width: 60},
                {name: 'packnum', index: 'packnum', width: 60},
            ],
            width: 521,
            height: 315,
            rowNum: 100,
            rowList:[100,200,300,500,1000],
            pager: pager_selector5,
            loadComplete : function() {
                var table = this;
                setTimeout(function(){
                    updatePagerIcons(table);
                }, 0);
            }
        });

        $(grid_selector6).jqGrid({
            data: scmOutaddRightGrid_data,
            datatype: "local",
            // 타이틀
            caption: "출고처리-자재출고 | MES",
            colNames: ['품목그룹','품번','품명','규격','단위','출고수량'],
            colModel: [
                {name: 'pgroup', index: 'pgroup', width: 60},
                {name: 'pnum', index: 'pnum', width: 60},
                {name: 'pname', index: 'pname', width: 60},
                {name: 'standard', index: 'standard', width: 60},
                {name: 'unit', index: 'unit', width: 60},
                {name: 'outnum', index: 'outnum', width: 60},
            ],
            width: 621,
            height: 355,
            rowNum: 100,
            rowList:[100,200,300,500,1000],
            loadComplete : function() {
                var table = this;
                setTimeout(function(){
                    updatePagerIcons(table);
                }, 0);
            }
        });

        $(grid_selector7).jqGrid({
            data: scmOutaddfromOrderGrid_data,
            datatype: "local",
            // 다중 select
            multiselect: true,
            // 타이틀
            caption: "출고처리-요청출고 | MES",
            colNames: ['업체코드','업체명','사업자번호','대표','주소'],
            colModel: [
                {name: 'suppcode', index: 'suppcode',width: 80},
                {name: 'suppname', index: 'suppname',width: 80},
                {name: 'suppum', index: 'suppum',width: 200},
                {name: 'ceo', index: 'ceo',width: 80},
                {name: 'address', index: 'address',width: 200},
            ],
            // 페이지 수 보기 (1 / 100) = true
            // 높이 : 450px
            width : 750,
            height: 230,
            // 디폴트 조회 개수 : 100
            rowNum: 100,
            // 단위 별 조회 개수
            // pager 세팅
            // jqGrid load 시 실행 함수 = setTimeout
            // setTimeout함수는 함수 뒤 시간이 지나면 호출됨. 현재 : 0 (1000 = 1초)
            // 호출되는 함수는 pager icon 함수
            loadComplete : function() {

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

    });
</script>