<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<%-- <script type="text/javascript" src="<c:url value='/'/>vendor/mes/common/jqGrid_common.js" charset="UTF-8"></script>
<script type="text/javascript" src="<c:url value='/'/>vendor/mes/common/page_event_common.js" charset="UTF-8"></script>
<script type="text/javascript" src="<c:url value='/'/>vendor/mes/admin/auth/sysAuth/sysAuth.js" charset="UTF-8"></script> --%>
<link href="<c:url value='/'/>css/sensorview/managerForm.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript">

function object_send() {
	var object = {
        jqGrid_object :[ {
                        jqGrid_function:jqGrid_basic,
						main_name : '#mes_grid',
						page_name : '#mes_grid_pager',
						colNames : ['입고일자','전표번호','업체','상태','처리자','출고일시'],
						colModel : [
				            {name:'work_date',index:'work_date', formatter2:formmatter_date,sortable: false,width:380},
				            {name:'in_no',index:'in_no',key: true ,sortable: false,width:380},
				            {name:'supp_name',index:'supp_name',sortable: false,width:380},
				            {name:'status',index:'status',sortable: false,width:380},
				            {name:'user_code',index:'user_code',sortable: false,width:380},
				            {name:'update_date',index:'update_date', formatter:formmatter_date,sortable: false,width:380},
				        ],
				        height : 550,    
					}],
					jqGrid_top_tag:".table-responsive",
					modal_name:"#AddDialog",
					modal_column : {
						auth_code:"권한그룹코드를 입력해주세요", // 모달 name : '이름'
						auth_name:"권한그룹명를 입력해주세요"	// 모달 name : '이름'
					},
					modal_class:".modal_value",
					modal_size:{
						 maxWidth:500,
					      maxHeight: 450,
					      width: 500,
					      height: 260,
					      autoOpen: false
					},
					readonly : ['auth_code'],
					getUrl:"/scmInGet",
					auUrl:"/scmInAdd",
					deleteUrl:"/sysAuthDelete",
					deleteCode:["auth_code"]
				}
	return object;
};	
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
