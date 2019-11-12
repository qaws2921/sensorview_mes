<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<%-- <script type="text/javascript" src="<c:url value='/'/>vendor/mes/common/jqGrid_common.js" charset="UTF-8"></script>
<script type="text/javascript" src="<c:url value='/'/>vendor/mes/common/page_event_common.js" charset="UTF-8"></script>
<script type="text/javascript" src="<c:url value='/'/>vendor/mes/admin/auth/sysAuth/sysAuth.js" charset="UTF-8"></script> --%>
<link href="<c:url value='/'/>css/sensorview/managerForm.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript">
jQuery("#list2").jqGrid({

    url : '/test',

    datatype : "json",

    colNames : ['Inv No', 'Date', 'Client', 'Amount', 'Tax'],

    colModel:[

           {name:'id', index:'id', width:55},

           {name:'invdate', index:invdate, width:90},

           {name:'name', index:'name asc, invdate', width:100},

           {name:'amount', index:'amount', width:80, align:"right"},

           {name:'txt', index:'tax', width:80, align:"right},

    ],

    rowNum:10,

    rowList:[10,20,30],

    pager:'#pager2',

    sortname:'id',

    viewrecords: true,

    sortorder:"desc",

    caption:"JSON Example"

});

 jQuery("#list2").jqGrid('navGrid','#pager2',{edit:false,add:false,del:false});

</script>

<div id="wrap" class="order-list clearfix">
    <div class="title-row clearfix">
        <div class="page-header">
            <h2>권한그룹 관리</h2>
        </div>
        <ul class="breadcrumb">
            <li><a href="/vendor/dashboard">관리자</a></li>
            <li class="active"><a href="/vendor/order/order_goods_list">권한관리</a></li>
            <li class="active"><a href="/vendor/order/order_goods_list">권한그룹 관리</a></li>
        </ul>
    </div>
    <form id="listFrm" method="get" action="/vendor/order/order_goods_list">
        <div class="filter-box clearfix">
            <div class="filter-text-left">
                <a class="btn btn-search" role='button' href="javascript:void(0)" id="get_btn">조회</a>
                <a class="btn btn-search" role='button' href="javascript:void(0)" id="add_btn">추가</a>
                <a class="btn btn-search" role='button' href="javascript:void(0)" id="delete_btn" >삭제</a>

            </div>
            <div class="filter-text-right">
<%--                <a class="btn btn-excel" role='button' href="javascript:excelDown()">Excel Download</a>--%>
            </div>
        </div>
    </form>
    <div class="table-responsive clearfix">
        <table id="mes_grid"></table>
        <div id="mes_grid_pager"></div>
    </div>

    <!--div class="bottom-btns clearfix">
        <button class="btn btn-danger pull-left">삭제</button>
        <button class="btn btn-danger inverse">판매중지</button>
        <button class="btn btn-normal inverse">판매중</button>
    </div-->
</div>



<%-- jquery ui dialog wrap--%>
<%-- 권한그룹 추가 dialog Form--%>
<div id="AddDialog" title="SensorView MES | 권한그룹 추가" style="display: none">
    <div class="search-box clearfix">
        <div class="search-wrap clearfix">
            <table class="search_table">
                <colgroup>
                    <col width="100"/>
                    <col width="570"/>
                    <col width="*"/>
                </colgroup>
                <tfoot>
                <tr>
                	<!-- 내용을 입력할 태그에 class="modal_value" 필수 , name = 해당 컬럼   -->
                    <th>입고일자</th>
                    <td>
                        <div class="search-input">
                            <input type="text" name="site_code" type="text" value="" class="form-control modal_value" placeholder="입고일자를 입력하세요."/>
                        </div>
                    </td>
                </tr>
               
                <tr>
                    <th>전표번호</th>
                    <td>
                        <div class="search-input">
                            <input type="text" name="work_date" type="text" value="" class="form-control modal_value" placeholder="전표번호를 입력하세요." />
                        </div>
                    </td>
                </tr>
                 <tr>
                    <th>업체</th>
                    <td>
                        <div class="search-input">
                            <input type="text" name="supp_code" type="text" value="" class="form-control modal_value" placeholder="업체명을 입력하세요." />
                        </div>
                    </td>
                </tr>
                 <tr>
                    <th>처리자</th>
                    <td>
                        <div class="search-input">
                            <input type="text" name="code_list" type="text" value="" class="form-control modal_value" placeholder="처리자 성함을 입력하세요." />
                        </div>
                    </td>
                </tr>
                 <tr>
                    <th>출고일시</th>
                    <td>
                        <div class="search-input">
                            <input type="text" name="user_code" type="text" value="" class="form-control modal_value" placeholder="출고일시를 입력하세요." />
                        </div>
                    </td>
                </tr>
                </tfoot> 
            </table>
        </div>
    </div>
	
    <div class="bottom-btns clearfix">
        <button class="btn btn-normal inverse" id="close_btn" >취소</button>
        <button  class="btn btn-normal inverse" id="addUdate_btn">저장</button>
    </div>
</div>
