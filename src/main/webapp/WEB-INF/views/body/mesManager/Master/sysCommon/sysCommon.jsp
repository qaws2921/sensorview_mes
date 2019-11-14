<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>\
<script type="text/javascript" src="/mes/common/page_event_common.js" charset="UTF-8"></script>
<script type="text/javascript" src="/mes/common/basic_pom.js" charset="UTF-8"></script>

<link href="/css/sensorview/managerForm.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript">


function object_send() {
	var object = {
			page_event:page_event1,		
			jqGrid_object :[ {
                        jqGrid_function:jqGrid_basic,
						main_name : '#mes_grid',
						page_name : '#mes_grid_pager',
				        colNames:['공용그룹','코드','명칭1','명칭2','명칭3','명칭4','명칭5','명칭6','명칭7','명칭8','사용유무','등록자','등록일'],
				        colModel:[
				            {name:'code_type',index:'code_type',sortable: false},
				            {name:'code_value',index:'code_value',key: true ,sortable: false},
				            {name:'code_name1',index:'code_name1',sortable: false},
				            {name:'code_name2',index:'code_name2',sortable: false},
				            {name:'code_name3',index:'code_name3',sortable: false},
				            {name:'code_name4',index:'code_name4',sortable: false},
				            {name:'code_name5',index:'code_name5',sortable: false},
				            {name:'code_name6',index:'code_name6',sortable: false},
				            {name:'code_name7',index:'code_name7',sortable: false},
				            {name:'code_name8',index:'code_name8',sortable: false},
				            {name:'use_yn',index:'use_yn',sortable: false},
				            {name:'user_name',index:'user_name',sortable: false},
				            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false,width:380},
				        ],
				        height : 450,    
						jqGrid_top_tag:".table-responsive",
					}],
					modal_name:["#authAddDialog"],
					modal_column : {
							auth_code:"권한그룹코드를 입력해주세요", // 모달 name : '이름'
							auth_name:"권한그룹명를 입력해주세요"	// 모달 name : '이름'
					},
					modal_class:".modal_value",
					modal_size:[{
						 maxWidth:900,
					      maxHeight: 450,
					      width: 900,
					      height: 450,
					      autoOpen: false
					}],
					readonly : ['code_value'],
					getUrl:"/sysCommonGet",
					auUrl:"/sysAuthAdd",
					deleteUrl:"/sysAuthDelete",
					deleteCode:["auth_code"],
					cud_check:'I',
					condition_objact:{},
					
					
					select_tag:[{tag:"#code_group",url:"/sysCommonGroupGet",valueName:"group_name",textName:"group_name"}],
					condition_class:".keyword",
					condition_column: {
						keyword:"코드그룹을 선택해주세요"
					},
					main_value_class:[".condition_main",".column_main",".column_text"],
				
					
				}
	return object;
};	



</script>

<div id="wrap" class="order-list clearfix">
    <div class="title-row clearfix">
        <div class="page-header">
            <h2>공통코드 관리</h2>
        </div>
        <ul class="breadcrumb">
            <li><a href="/vendor/dashboard">관리자</a></li>
            <li class="active"><a href="/vendor/order/order_goods_list">마스터관리</a></li>
            <li class="active"><a href="/vendor/order/order_goods_list">공통코드 관리</a></li>
        </ul>
    </div>

    <form id="listFrm" method="get" action="/vendor/order/order_goods_list">
        <div class="filter-box clearfix">
            <div class="filter-text-left">
            	<table class="Group_tbl">
            		<tr >
            		<td class="Group_td_title" >코드 그룹</td> 
	            	<td class="Group_td_text" style="width: 60%;">
		            	<select name="keyword" class="keyword condition_main" id="code_group" style="width: 100%;">
		            		<option value="">선택안함</option>
		            		
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
                    <th>그룹코드</th>
                    <td colspan="3">                       
                        <div class="search-input">
                            <input name="code_type"  type="text" type="text" value="" class="form-control modal_value column_main" readonly />
                       
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>코드</th>
                    <td>
                        <div class="search-input">
                            <input name="code_value" type="text" type="text" value="" class="form-control modal_value " placeholder="코드를 입력하세요." />
                        </div>
                    </td>
                    <th>사용유무</th>
                    <td colspan="3">
                        <div>
                          	<select name="use_yn" class="form-control modal_value">
                          		<option>Y</option>
                          		<option>N</option>
                          	</select>
                       
                        </div>
                    </td>
                </tr>
                 <tr>
                    <th>명칭1</th>
                    <td>
                        <div class="search-input">
                            <input name="code_name1" type="text" type="text" value="" class="form-control modal_value" placeholder="명칭1을 입력하세요."/>
                       
                        </div>
                    </td>
                    <th>명칭2</th>
                    <td>
                        <div class="search-input">
                            <input name="code_name2" type="text" type="text" value="" class="form-control modal_value" placeholder="명칭2을 입력하세요."/>
                       
                        </div>
                    </td>
                </tr>             
                <tr>
                    <th>명칭3</th>
                    <td>
                        <div class="search-input">
                            <input name="code_name3" type="text" type="text" value="" class="form-control modal_value" placeholder="명칭3을 입력하세요."/>
                       
                        </div>
                    </td>
                    <th>명칭4</th>
                    <td>
                        <div class="search-input">
                            <input name="code_name4" type="text" type="text" value="" class="form-control modal_value" placeholder="명칭4을 입력하세요."/>
                       
                        </div>
                    </td>
                </tr>
                 <tr>
                    <th>명칭5</th>
                    <td>
                        <div class="search-input">
                            <input name="code_name5" type="text" type="text" value="" class="form-control modal_value" placeholder="명칭5을 입력하세요."/>
                       
                        </div>
                    </td>
                       <th>명칭6</th>
                    <td>
                        <div class="search-input">
                            <input name="code_name6" type="text" type="text" value="" class="form-control modal_value" placeholder="명칭6을 입력하세요."/>
                       
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>명칭7</th>
                    <td>
                        <div class="search-input">
                            <input name="code_name7" type="text" type="text" value="" class="form-control modal_value" placeholder="명칭7을 입력하세요."/>
                       
                        </div>
                    </td>
                     <th>명칭8</th>
                    <td>
                        <div class="search-input">
                            <input name="code_name8" type="text" type="text" value="" class="form-control modal_value" placeholder="명칭8을 입력하세요."/>
                       
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

