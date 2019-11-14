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
                자재반출현황
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
                        <b>자재반출현황</b>
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
                    <td class="wt-px-100 td-title t-align-c padding-a-0">업체</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" class="form-control h-25" id="SuppSearch-i">
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
                <table id="scmStockRetListGrid"></table>
                <div id="scmStockRetListGridPager"></div>
            </div>
        </div>
    </div>
</div>

<%@include file="/WEB-INF/views/body/common/modal/supp_modal.jsp" %>

<script>

    $(document).ready(function () {
        var scmStockRetListGrid_data = [];
        var suppGrid_data =
            [
                {suppcode:"S0001",suppname:"협력사1",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0002",suppname:"협력사2",suppum:"1482-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0003",suppname:"협력사3",suppum:"1522-20925429",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0004",suppname:"협력사4",suppum:"1582-21925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0005",suppname:"협력사5",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0006",suppname:"협력사6",suppum:"1582-22135829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0007",suppname:"협력사7",suppum:"1582-20885829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0008",suppname:"협력사8",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0009",suppname:"협력사9",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0010",suppname:"협력사10",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0011",suppname:"협력사11",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0012",suppname:"협력사12",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0013",suppname:"협력사13",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0014",suppname:"협력사14",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0015",suppname:"협력사15",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0016",suppname:"협력사16",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0017",suppname:"협력사17",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
                {suppcode:"S0018",suppname:"협력사18",suppum:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
            ];

        $( "#datepicker").datepicker({
            format:'yyyy-mm-dd',
            language: "kr",
        });
        $( "#datepicker2").datepicker({
            format:'yyyy-mm-dd',
            language: "kr"
        });

        $("#SuppSearch-i").on('click', function(e) {
            e.preventDefault();

            var dialog = $( "#supp-search-dialog" ).removeClass('hide').dialog({
                modal: true,
                width: 800,
                height: 470
            });
        });

        var grid_selector = "#scmStockRetListGrid";
        var pager_selector = "#scmStockRetListGridPager";
        var parent_column = $(grid_selector).closest('[class*="col-"]');

        var grid_selector2 = "#SuppSearchGrid";
        var pager_selector2 = "#SuppSearchGridPager";

        $(window).on('resize.jqGrid', function () {
            $(grid_selector).jqGrid( 'setGridWidth', parent_column.width());
        })

        $(document).on('settings.ace.jqGrid' , function(ev, event_name, collapsed) {
            if( event_name === 'sidebar_collapsed' || event_name === 'main_container_fixed' ) {
                setTimeout(function() {
                    $(grid_selector).jqGrid( 'setGridWidth', parent_column.width() );
                }, 20);
            }
        })

        $(grid_selector).jqGrid({
            data: scmStockRetListGrid_data,
            datatype: "local",
            // 다중 select
            multiselect: true,
            // 타이틀
            caption: "자재반출현황 | MES",
            colNames: ['반출일자','반출번호','업체명','품목그룹','품번','품명','규격','단위','반출수량','등록자','반출일시'],
            colModel: [
                {name: 'retdate', index: 'retdate', width: 60},
                {name: 'retnum', index: 'retnum', width: 60},
                {name: 'suppname', index: 'suppname', width: 60},
                {name: 'pgroup', index: 'pgroup', width: 60},
                {name: 'pnum', index: 'pnum', width: 60},
                {name: 'pname', index: 'pname', width: 60},
                {name: 'standard', index: 'standard', width: 60},
                {name: 'unit', index: 'unit', width: 60},
                {name: 'retcount', index: 'retcount', width: 60},
                {name: 'register', index: 'register', width: 60},
                {name: 'retdatetime', index: 'retdatetime', width: 60},
            ],
            viewrecords: true,
            height: 500,
            rowNum: 100,
            rowList:[100,200,300,500,1000],
            pager: pager_selector,
            loadComplete : function() {
                const table = this;
                setTimeout(function(){
                    updatePagerIcons(table);
                }, 0);
            }
        });

        $(grid_selector2).jqGrid({
            data: suppGrid_data,
            datatype: "local",
            // 다중 select
            multiselect: true,
            // 타이틀
            caption: "업체조회 | MES",
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
            pager: pager_selector2,
            // jqGrid load 시 실행 함수 = setTimeout
            // setTimeout함수는 함수 뒤 시간이 지나면 호출됨. 현재 : 0 (1000 = 1초)
            // 호출되는 함수는 pager icon 함수
            loadComplete : function() {

            }
        });

        function updatePagerIcons(table) {
            const replace =
                {
                    'ui-icon-seek-first' : 'ace-icon fa fa-angle-double-left bigger-140',
                    'ui-icon-seek-prev' : 'ace-icon fa fa-angle-left bigger-140',
                    'ui-icon-seek-next' : 'ace-icon fa fa-angle-right bigger-140',
                    'ui-icon-seek-end' : 'ace-icon fa fa-angle-double-right bigger-140'
                };
            $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
                const icon = $(this);
                const $class = $.trim(icon.attr('class').replace('ui-icon', ''));

                if($class in replace) icon.attr('class', 'ui-icon '+replace[$class]);
            })
        };

        $(window).triggerHandler('resize.jqGrid');

        $("#close_btn").on('click',function(e){
            e.preventDefault();
            $("#supp-search-dialog").dialog('close');
        });

    });

</script>


