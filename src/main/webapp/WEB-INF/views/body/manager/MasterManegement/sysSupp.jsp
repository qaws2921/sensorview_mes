<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<script type="text/javascript" src="<c:url value='/'/>mes/common/page_event_common.js" charset="UTF-8"></script>
<script type="text/javascript" src="<c:url value='/static'/>mes/common/basic_pom.js" charset="UTF-8"></script>

<link href="<c:url value='/static'/>css/sensorview/managerForm.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript">


function object_send() {
	var object = {
			page_event:page_event1,		
			jqGrid_object :[ {
                        jqGrid_function:jqGrid_basic,
						main_name : '#mes_grid',
						page_name : '#mes_grid_pager',
						 colNames:['사용자코드','사용자명','부서','직책','권한','전화번호','이메일','사용유무','최근로그인','수정일'],
					        colModel:[
					            {name:'user_code',index:'user_code',key: true,sortable: false},
					            {name:'user_name',index:'user_name' ,sortable: false},
					            {name:'dept_code',index:'dept_code',sortable: false},
					            {name:'duty_code',index:'duty_code',sortable: false},
					            {name:'auth_code',index:'auth_code',sortable: false},
					            {name:'tel_no',index:'tel_no',sortable: false},
					            {name:'email',index:'email',sortable: false},
					            {name:'use_yn',index:'use_yn',sortable: false},
					            {name:'login_date',index:'login_date',formatter:formmatter_date,sortable: false},
					            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false},
					        ],
				        height : 450,    
						jqGrid_top_tag:".table-responsive",
					}],
					modal_name:["#authAddDialog"],
					modal_column : {
							user_code:"사용자코드를 입력해주세요", // 모달 name : '이름'
							user_name:"사용자명를 입력해주세요",	// 모달 name : '이름'
							dept_code:"부서를 선택해주세요",	// 모달 name : '이름'
							duty_code:"직책을 선택해주세요",	// 모달 name : '이름'
							auth_code:"권한을 선택해주세요",	// 모달 name : '이름'
							tel_no:"전화번호를 입력해주세요",	// 모달 name : '이름'
							email:"이메일을 입력해주세요",	// 모달 name : '이름'
					},
					modal_class:".modal_value",
					modal_size:[{
						 maxWidth:900,
					      maxHeight: 500,
					      width: 900,
					      height: 'auto',
					      autoOpen: false,
					      resizable:false
					}],
					readonly : ['user_code'],
					getUrl:"/sysUserGet",
					auUrl:"/sysUserAdd",
					deleteUrl:"/sysUserDelete",
					deleteCode:["user_code"],
					cud_check:'I',
					condition_objact:{},
					add_after:true,
			
					condition_class:".keyword",
					condition_column: {
						keyword:"부서를 선택해주세요"
					}
					
				
					
				}
	return object;
};	



</script>

<div id="wrap" class="order-list clearfix">
    <div class="title-row clearfix">
        <div class="page-header">
            <h2><img src="<c:url value='/static'/>images/Menu_Icon.png"> 업체코드 관리</h2>
        </div>
        <ul class="breadcrumb">
            <li><a href="/vendor/dashboard">관리자</a></li>
            <li class="active"><a href="/vendor/order/order_goods_list">마스터관리</a></li>
            <li class="active"><a href="/vendor/order/order_goods_list">업체코드 관리</a></li>
        </ul>
    </div>

    <form id="listFrm" method="get" action="/vendor/order/order_goods_list">
        <div class="filter-box clearfix">
            <div class="filter-text-left">
            	<table class="Group_tbl">
            		<tr >
            		<td class="Group_td_title" >구분</td> 
	            	<td class="Group_td_text" style="width: 60%;">
		            	<select name="keyword" class="keyword condition_main" id="dept_select" style="width: 100%;">
		            		<option value="1">당사</option>
		            		<option value="2">고객사</option>
		            		<option value="3">협력사</option>
		            		
		           	 	</select>
	            	</td>               
	            	</tr>
	            	
            	</table>
            	<a class="btn btn-search" role='button' href="javascript:void(0)" id="get_btn" >조회</a>
                <a class="btn btn-search add-btn" role='button' href="javascript:void(0)" id="add_btn">추가</a>
                <a class="btn btn-search" role='button' href="javascript:void(0)" id="delete_btn">삭제</a>
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
<div id="authAddDialog" title="SensorView MES | 공통코드 추가" style="display: none">
    <div class="search-box clearfix">
        <div class="search-wrap clearfix">
            <table class="search_table">
                <colgroup>
                    <col width="100"/>
                    <col width="150"/>
                   	<col width="100"/>
                   	<col width="150"/>
                </colgroup>
                <tfoot>
                <tr>
                    <th>사용자코드</th>
                    <td colspan="3">                       
                        <div class="search-input">
                            <input name="user_code"  type="text" type="text" value="" class="form-control modal_value column_main" readonly  placeholder="사용자코드를 입력하세요." />
                       
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>사용자명</th>
                    <td>
                        <div class="search-input">
                            <input name="user_name" type="text" type="text" value="" class="form-control modal_value " placeholder="사용자명을 입력하세요." />
                        </div>
                    </td>
                    <th>부서</th>
                    <td colspan="3">
                        <div>
                          	<select name="dept_code" class="form-control modal_value" id="dept_select2">
                          		<option value="">선택안함</option>
                          	</select>
                       
                        </div>
                    </td>
                </tr>
                 <tr>
                    <th>직책</th>
                    <td>
						<div>
                          	<select name="duty_code" class="form-control modal_value" id="duty_select">
                          		<option value="">선택안함</option>
                          	</select>
                       
                        </div>
                    </td>
                    <th>권한</th>
                    <td>
  						<div>
                          	<select name="auth_code" class="form-control modal_value" id="auth_select">
                          		<option value="">선택안함</option>
                          	</select>
                        </div>
                    </td>
                </tr>             
                <tr>
                    <th>전화번호</th>
                    <td colspan="3">
                        <div class="search-input">
                            <input name="tel_no" type="text" type="text" value="" class="form-control modal_value" placeholder="전화번호를 입력하세요."/>
                       
                        </div>
                    </td>                   
                </tr>
                 <tr>
                    <th>이메일</th>
                    <td colspan="3">
                        <div class="search-input">
                            <input name="email" type="text" type="text" value="" class="form-control modal_value" placeholder="이메일을 입력하세요."/>
                       
                        </div>
                    </td>
                 
                </tr>
                <tr>
                    <th>사용유무</th>
                    <td  colspan="3">
                        <div class="search-input">
                        	<select name="use_yn" class="form-control modal_value">
                          		<option>Y</option>
                          		<option>N</option>
                          	</select>
                        </div>
                    </td>         
                </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <div class="bottom-btns clearfix">
        <button class="btn btn-normal inverse close-btn" id="close_btn" >취소</button>
        <button  class="btn btn-normal inverse" id="addUdate_btn">저장</button>
    </div>
</div>

