<%@ page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<c:set var="now" value="<%=new java.util.Date()%>" />
<c:set var="yesterday" value="<%=new java.util.Date(new Date().getTime()-60*60*24*1000)%>" />
<style>
    #scmInDialogLeftGridPager #pg_scmInDialogLeftGridPager table{
        table-layout:auto !important;
    }
    #SuppSearchGridPager #pg_SuppSearchGridPager table{
        table-layout:auto !important;
    }

</style>

<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
            <span class="sp-title">
                자재반출
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
                        <b>자재반출</b>
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
                <table id="scmStockRetTopGrid"></table>
                <div id="scmStockRetTopGridPager"></div>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-xs-12 table-responsive">
                <table id="scmStockRetBottomGrid"></table>
                <div id="scmStockRetBottomGridPager"></div>
            </div>
        </div>
    </div>
</div>

<div id="scmIn-add-dialog" class="hide" title="자재반출 추가">
    <div class="col-lg-12">
        <div class="col-lg-5 padding0" id="content1">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">업체</td>
                    <td class="wt-px-150">
                          <span class="input-icon input-icon-right">
                          <input type="text" class="form-control h-25" value="" id="SuppSearch-i-Main">
                          <i class="ace-icon fa fa-search dark" style="top: -2px;" id="SuppSearch-Main"></i>
                          </span>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">품목그룹</td>
                    <td class="wt-px-150 h-25">
                        <select class="form-control">
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
                    <table id="scmStockRetLeftGrid"></table>
                    <div id="scmStockRetLeftGridPager"></div>
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
                    <td class="wt-px-100 t-align-c td-title padding-a-0">반출일자</td>
                    <td class="wt-px-150">
                        <div class="input-icon input-icon-right">
                            <input type="text" id="datepicker3" class="form-control h-25">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">비고</td>
                    <td>
                        <input type="text" class="form-control h-25"/>
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
                    <table id="scmStockRetRightGrid"></table>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="supp-search-dialog" class="hide" title="업체조회">
    <div class="col-lg-12">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100">
                        <select class="form-control h-25">
                            <option value="">업체명</option>
                            <option value="">업체코드</option>
                        </select>
                    </td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control h-25">
                    </td>
                    <td>
                        <div class="dt-buttons btn-overlap btn-group">
                            <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" title="">
			                        <span>
			                            <i class="fa fa-search bigger-110 blue"></i>
			                            <span>조회</span>
			                        </span>
                            </a>
                            <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" title="">
			                        <span>
			                            <i class="fa fa-check bigger-110 blue"></i>
			                            <span>선택</span>
			                        </span>
                            </a>
                            <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" id="close_btn2">
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
                <div class="col-xs-12">
                    <table id="SuppSearchGrid"></table>
                    <div id="SuppSearchGridPager"></div>
                </div>
            </div>
        </div>
    </div>
</div>


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
        $( "#datepicker3").datepicker({
            format:'yyyy-mm-dd',
            language: "kr"
        }).datepicker('setDate','today');

        /**
         * @DESC : jquery ui dialog
         * @생성일 : 2019-10-30
         * @생성자 : 김재일
         * **/
        $( "#showDialog" ).on('click', function(e) {
            e.preventDefault();
            $('#scmIn-add-dialog').removeClass('hide').dialog({
                modal: true,
                width: 1300,
                height: 600
            });
        });


        $("#SuppSearch-i").on('click', function(e) {
            e.preventDefault();

            var dialog = $( "#supp-search-dialog" ).removeClass('hide').dialog({
                modal: true,
                width: 800,
                height: 470,
            });
        });

        $("#SuppSearch-i-Main").on('click', function(e) {
            e.preventDefault();

            var dialog = $( "#supp-search-dialog" ).removeClass('hide').dialog({
                modal: true,
                width: 800,
                height: 470
            });
        });

        /**
         * @DESC : jqGrid 생성
         * @생성일 : 2019-10-30
         * @생성자 : 김재일
         * **/
        var grid_selector = "#scmStockRetTopGrid";
        var pager_selector = "#scmStockRetTopGridPager";
        var parent_column = $(grid_selector).closest('[class*="col-"]');

        var grid_selector2 = "#scmStockRetBottomGrid";
        var pager_selector2 = "#scmStockRetBottomGridPager";
        var parent_column2 = $(grid_selector2).closest('[class*="col-"]');

        var grid_selector3 = "#scmStockRetLeftGrid";
        var pager_selector3 = "#scmStockRetLeftGridPager";
        var parent_column3 = $(grid_selector3).closest('[class*="col-"]');

        var grid_selector4 = "#scmStockRetRightGrid";
        var parent_column4 = $(grid_selector4).closest('[class*="col-"]');

        var grid_selector5 = "#SuppSearchGrid";
        var pager_selector5 = "#SuppSearchGridPager";
        var parent_column5 = $(grid_selector5).closest('[class*="col-"]');


        /**
         * @DESC : jqGrid resize
         * @생성일 : 2019-10-30
         * @생성자 : 김재일
         * **/
        $(window).on('resize.jqGrid', function () {
            $(grid_selector).jqGrid( 'setGridWidth', parent_column.width());
        })

        $(window).on('resize.jqGrid', function () {
            $(grid_selector2).jqGrid( 'setGridWidth', parent_column2.width());
        })

        // 리사이즈 세팅
        $(document).on('settings.ace.jqGrid' , function(ev, event_name, collapsed) {
            if( event_name === 'sidebar_collapsed' || event_name === 'main_container_fixed' ) {
                setTimeout(function() {
                    $(grid_selector).jqGrid( 'setGridWidth', parent_column.width() );
                }, 20);
            }
        })

        $(document).on('settings.ace.jqGrid' , function(ev, event_name, collapsed) {
            if( event_name === 'sidebar_collapsed' || event_name === 'main_container_fixed' ) {
                setTimeout(function() {
                    $(grid_selector2).jqGrid( 'setGridWidth', parent_column2.width() );
                }, 20);
            }
        })


        /**
         * @DESC : jqGrid 생성
         * @생성일 : 2019-10-30
         * @생성자 : 김재일
         * **/
        $(grid_selector).jqGrid({
            data: topGrid_data,
            datatype: "local",
            // 다중 select
            multiselect: true,
            // 타이틀
            caption: "자재반출 | MES",
            colNames: ['반고일자','전표번호','업체','처리자','반출일시'],
            colModel: [
                {name: 'retdate', index: 'retdate', width: 60},
                {name: 'rgnum', index: 'rgnum', width: 60},
                {name: 'supp', index: 'supp', width: 60},
                {name: 'manager', index: 'manager', width: 60},
                {name: 'retdatetime', index: 'retdatetime', width: 60},
            ],
            viewrecords: true,
            height: 150,
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
            data: bottomGrid_data,
            datatype: "local",
            caption: "자재반출 | MES",
            colNames: ['전표번호','품목그룹','품번','품명','규격','단위','반출수량'],
            colModel: [
                {name: 'pgnum', index: 'pgnum', width: 60},
                {name: 'group', index: 'group', width: 60},
                {name: 'p_num', index: 'p_num', width: 60},
                {name: 'p_name', index: 'p_name', width: 60},
                {name: 'standard', index: 'standard', width: 60},
                {name: 'unit', index: 'unit', width: 60},
                {name: 'ret_num', index: 'ret_num', width: 60},
            ],
            viewrecords: true,
            height: 200,
            rowNum: 100,
            rowList:[100,200,300,500,1000],
            pager: pager_selector2,
            loadComplete : function() {
                const table = this;
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
            caption: "자재반출추가 | MES",
            colNames: ['품목그룹','품번','품명','규격','단위','포장수량'],
            colModel: [
                {name: 'gruoup', index: 'gruoup'},
                {name: 'num', index: 'num'},
                {name: 'name', index: 'name'},
                {name: 'standard', index: 'standard'},
                {name: 'unit', index: 'unit'},
                {name: 'packagenum', index: 'packagenum'},
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
                const table = this;
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
            caption: "자재반출추가 | MES",
            colNames: ['품목그룹','품번','품명','규격','단위','반출수량'],
            colModel: [
                {name: 'group', index: 'gruoup', width: 60},
                {name: 'num', index: 'num', width: 60},
                {name: 'name', index: 'name', width: 60},
                {name: 'standard', index: 'standard', width: 60},
                {name: 'unit', index: 'unit', width: 60},
                {name: 'ret_num', index: 'ret_num', width: 60},
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
                const table = this;
                setTimeout(function(){
                    updatePagerIcons(table);
                }, 0);
            }
        });

        $(grid_selector5).jqGrid({
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
                {name: 'suppum', index: 'suppnum',width: 200},
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
            pager: pager_selector5,
            // jqGrid load 시 실행 함수 = setTimeout
            // setTimeout함수는 함수 뒤 시간이 지나면 호출됨. 현재 : 0 (1000 = 1초)
            // 호출되는 함수는 pager icon 함수
            loadComplete : function() {

            }
        });

        // pager 아이콘 생성 함수
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
        }

        // 넓이 조절 함수
        $(window).triggerHandler('resize.jqGrid');

        /**
         * @DESC : Jquery ui dialog
         * @생성일 : 2019-11-01
         * @생성자 : 김재일
         * **/
        $("#close_btn").on('click',function(e){
            e.preventDefault();
            $("#scmIn-add-dialog").dialog('close');
        });

        $("#close_btn2").on('click',function(e){
            e.preventDefault();
            $("#supp-search-dialog").dialog('close');
        });


    });
</script>


