<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<link href="<c:url value='/'/>css/sensorview/managerForm.css" rel="stylesheet" type="text/css" media="all" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.10.3/xlsx.full.min.js"></script>

<script type="text/javascript">
$(document).ready(function() {
	
	$('#startDatepicker').datepicker({
		calendarWeeks: false,
        todayHighlight: true,
        autoclose: true,
        format: "yyyymmdd",
        language: "kr"
    });
    $('#endDatepicker').datepicker({
		calendarWeeks: false,
        todayHighlight: true,
        autoclose: true,
        format: "yyyymmdd",
        language: "kr"
    });
	
	$("#mes_grid").jqGrid({
		jsonReader: {    
	   		root	: "rows",  
	   		page	: "page",
	   		total	: "total",
	   		records : "records",
		},
		colNames : ['업체명', '시작일', '종료일', '품번', '품명', '단위','단가'],
		colModel : [
			{name:'supp_name'	, index:'part_grp_code',			  sortable: false,width:380},
			{name:'start_date'	 	, index:'start_date'	 ,	 	  sortable: false,width:380},
			{name:'stop_date'	, index:'stop_date'	 ,			  sortable: false,width:380},
			{name:'part_code'	, index:'part_code'	 ,		key: true,	  sortable: false,width:380},
			{name:'part_name'	, index:'currency_code',			  sortable: false,width:380},
			{name:'unit_code'	, index:'unit_code',			  sortable: false,width:380},
			{name:'unit_price'	, index:'unit_price',			  sortable: false,width:380},
		],
		caption:'SensorView | MES', 	// 그리드 왼쪽 위에 캡션
		autowidth	: true,				// 그리드 가로 길이
		height	 	: 550,				// 그리드의 높이
		rownumWidth	: 40,				// 로우넘의 가로길이
		rowNum		: 100,				// 그리드에 보여줄 데이터의 갯수,-1하면 무한
		rowList		: [100, 200, 300, 400],	// 한 페이지에 몇 건씩 보여줄 것인지 설정
		rownumbers	: false,			// 왼쪽에 index가 생김 1부터 시작
		viewrecords	: true,
		multiboxonly: true,
		multiselect : true,				// 체크박스 사라짐
		cellEdit	: true,				// 셀의 값변경을 정함 트루하면 바껴짐
		gridview	: true,
		pager		: '#mes_grid_pager',// 밑에 페이저 달 div 아이디
		loadonce: true,
		viewrecords: true,
        /* footerrow: true, */
        userDataOnFooter: true, // use the userData parameter of the JSON response to display data on footer
		ondblClickRow : function(rowid, iRow, iCol, e){		/* 해당 row를 선택했을 경우 발생하는 이벤트 처리 */ 
			$('#save_type').val('U');
			$('#mes_grid2').setGridWidth($(this).width());
			$('#addDialog').dialog({ 
				maxWidth:500,
				maxHeight: 450,
				width: 500,
				height: 800,
				autoOpen: true,
				buttons: [
	                {
	                    text: "저장",
	                    'id'	: "addUdate_btn",
	                    "class" : "btn btn-primary btn-minier",
	                    click: function() {
	                    	$.ajax({
	         				url: '/sysLocAdd',
	         				type: 'POST',
	         				async: true,
	         				dataType : "json",
	         				contentType :"application/json",
	         				data :JSON.stringify(
	         						{	 'cargo_code'	:$('#cargo_code').val()
	         							,'loc_code'		:$('#loc_code').val()
	         							,'loc_name'		:$('#loc_name').val()
	         							,'save_type'	:$('#save_type').val()
	         						}),
	         					success: function (data) {
	         						alert(data.result)
	         					},
	         					error: function () {
	         					}
	         			}); 
	                    }
	                },
	                {
	                    text: "취소",
	                    "class" : "btn btn-minier",
	                    click: function() {
	                        $( this ).dialog( "close" );
	                    }
	                }
	            ]
				
			});
			 var sqCmsmem =$("#mes_grid").jqGrid('getRowData', rowid).part_grp_code;
			$('#cargo_name').val($("#mes_grid").jqGrid('getRowData', rowid).cargo_name);
			$('#cargo_code').val($("#mes_grid").jqGrid('getRowData', rowid).cargo_code);
			$('#loc_code').val($("#mes_grid").jqGrid('getRowData', rowid).loc_code);
			$('#loc_name').val($("#mes_grid").jqGrid('getRowData', rowid).loc_name);
		},
		onRightClickRow : function(rowid){
		},
	})
	$('#get_btn').on('click',function(){
		$('#mes_grid').setGridParam({   url: "/sysBPartPriceGet",
										datatype: "json", 
										mtype: 'POST',
										page: 1, 
										postData:{
										keyword: $('#keyword').val(),
										startDate:$('#startDatepicker').val(),
						    			endDate: $('#endDatepicker').val()
									}, 
		}).trigger("reloadGrid");
		
	});
	
	$('#add_btn').on('click',function(){
		$('#save_type').val('I');
		 $('#addDialog').dialog({ 
			maxWidth:500,
			maxHeight: 450,
			width: 500,
			height: 300,
			autoOpen: true,
			buttons: [
                {
                    text: "저장",
                    'id'	: "addUdate_btn",
                    "class" : "btn btn-primary btn-minier",
                    click: function() {
               		  $.ajax({
         				url: '/sysBPartPriceAdd',
         				type: 'POST',
         				async: true,
         				dataType : "json",
         				contentType :"application/json",
         				data :JSON.stringify(
         						{	 'cargo_code'	:$('#cargo_code').val()
         							,'loc_code'		:$('#loc_code').val()
         							,'loc_name'		:$('#loc_name').val()
         							,'save_type'	:$('#save_type').val()
         						}),
         					success: function (data) {
         						alert(data.result)
         					},
         					error: function () {
         					}
         			}); 
                        $( this ).dialog( "close" );
                    }
                },
                {
                    text: "취소",
                    "class" : "btn btn-minier",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ]
		 });
	});
	
	$('#delete_btn').on('click',function(){
		
		var delList = ""; 									//JSON 객체의 두 번째에 파트 코드를 담기 위한 변수로 배열 형태의 변수
		
		var rowid = $("#mes_grid").jqGrid('getGridParam', 'selarrrow' );	//배열 형태의 변수를 담기 위해 선택된 로우의 id값을 전부 가져온다
		var rowData;
		
		
 		for(var i = 0; i < rowid.length;i++){								//품목 그룹의 값을 전부 배열에 담는다
			rowData = $("#mes_grid").jqGrid('getRowData', rowid[i]);
			delList += rowid[i]+","
		} 
		delList  = delList.substr(0,delList.length-1);
		    $.ajax({
				url: '/sysBPartPriceDel',
				type: 'POST',
				async: true,
				dataType : "json",
				contentType :"application/json",
				data :JSON.stringify({"code_list": delList}),
					success: function (data) {
						alert(data.message)
					},
					error: function () {
						
					}
			});	   
	});
	
	$("#close_btn").on("click",function() {
		 $('#AddDialog').dialog('close');
	});
	
	$("#addUdate_btn").on("click",function() {
		$.ajax({
			url: '/sysBPartPriceAdd',
			type: 'POST',
			async: true,
			dataType : "json",
			contentType :"application/json",
			data :JSON.stringify(
						{	 'cargo_code'	:$('#cargo_code').val()
							,'loc_code'		:$('#loc_code').val()
							,'loc_name'		:$('#loc_name').val()
							,'save_type'	:$('#save_type').val()
						}),
					success: function (data) {
						alert(data.result)
					},
					error: function () {
					}
		});	
	});
	
	$("#cargoCode").on("change", function(){
		$('#mes_grid').setGridParam({  url: "/sysBPartPriceGet",
    		datatype: "json", 
    		mtype: 'POST',
    		page: 1, 
    		postData:{
    			cargo_code:$("#cargoCode option:selected").val(),
    		}
		}).trigger("reloadGrid");
		
	});
});
</script>

<div id="wrap" class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
    
                <div class="col-lg-12 ">
                    <span class="sp-title">
                        자재단가 관리
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
                        자재단가 관리
                    </span>
                </div>
            </div>
    <div class="page-content">
                <div class="clearfix">
                    <div class="pull-left tableTools-container">
                    <div>
		                                
		                                <div class="col-lg-12 padding0">
		                    <table class="table wt-100">
		                        <tbody>
		                        <tr>
		                            <td class="wt-px-100 t-align-c td-title padding-a-0">기간 조회 : </td>
		                            <td>
		                               기간 조회 : <input type="text" id="startDatepicker"> ~ <input type="text" id="endDatepicker">
		                            </td> 
                    
                    <td class="wt-px-100 t-align-c td-title padding-a-0">업체 : </td>
                            <td>
                               <select id="cargoCode">
				            		<option value="">업체</option>
				            		<c:forEach var="cargoName" items="${cargoName}" varStatus="status">
				            			<option value="${cargoName.cargo_code}">${cargoName.cargo_name}</option>
				            		</c:forEach>
								</select>
                            </td>     
		                        </tr>
		                        </tbody>
		                    </table>
		                </div>
		            </div>
                        <div class="dt-buttons btn-overlap btn-group">
                            <a  id="get_btn" class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
                                <span>
                                    <i class="fa fa-search bigger-110 blue"></i>
                                    <span>조회</span>
                                </span>
                            </a>
                            <a id="add_btn" class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" id="showDialog">
                                <span><i class="fa fa-plus bigger-110 blue"></i>
                                    <span>등록</span>
                                </span>
                            </a>
                            <a id="delete_btn" class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
                                <span>
                                    <i class="fa fa-trash bigger-110 blue"></i>
                                    <span>삭제</span>
                                </span>
                            </a>
                            <button id="export">엑셀 다운로드</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 table-responsive">
                        <table id="mes_grid"></table>
                        <div id="mes_grid_pager"></div>
                    </div>
                </div>
            </div>
    <div class="table-responsive clearfix">
        <table id="mes_grid"></table>
        <div id="mes_grid_pager"></div>
    </div>
    
    <div class="table-responsive clearfix">
        <table id="mes_grid2"></table>
        <div id="mes_grid_pager2"></div>
    </div>
</div>

<div id="addDialog" title="로케이션 관리" style="display: none">
        <div class="profile-user-info profile-user-info-striped">
         <div class="profile-info-row">
                <div class="profile-info-name"> 업체명 </div>
                <div class="profile-info-value">
					<input type="text" name="supp_name" id="supp_name" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
        
            <div class="profile-info-row">
                <div class="profile-info-name"> 품번 </div>
                <div class="profile-info-value">
                    <input type="text" name="part_code" id="part_code" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
            
             <div class="profile-info-row">
                <div class="profile-info-name"> 시작일 </div>
                <div class="profile-info-value">
                    <input type="text" id="startDatepicker" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
            
            <div class="profile-info-row">
                <div class="profile-info-name"> 종료일 </div>
                <div class="profile-info-value">
                    <input type="text" id="endDatepicker" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
            
            <div class="profile-info-row">
                <div class="profile-info-name"> 화폐 </div>
                <div class="profile-info-value">
                    <input type="text" name="loc_name" id="loc_name" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
            
            <div class="profile-info-row">
                <div class="profile-info-name"> 단가 </div>
                <div class="profile-info-value">
                    <input type="text" name="unit_price" id="unit_price" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
        </div>
    </div>
