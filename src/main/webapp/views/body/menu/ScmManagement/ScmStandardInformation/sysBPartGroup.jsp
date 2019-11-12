<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<link href="<c:url value='/'/>css/sensorview/managerForm.css" rel="stylesheet" type="text/css" media="all" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.10.3/xlsx.full.min.js"></script>

<script type="text/javascript">
$(document).ready(function() {

	
	$("#mes_grid").jqGrid({
		jsonReader: {    
	   		root	: "rows",  
	   		page	: "page",
	   		total	: "total",
	   		records : "records",
		},
		colNames : ['그룹코드', '그룹명', '비고', '등록자', '수정일'],
		colModel : [
			{name:'part_grp_code'	 	, index:'part_grp_code'	, key: true, sortable: false,width:380},
			{name:'part_grp_name'	, index:'part_grp_name'	 ,			  sortable: false,width:380},
			{name:'remark'	 	, index:'remark'	 ,			  sortable: false,width:380},
			{name:'user_code'	, index:'user_code'	 ,			  sortable: false,width:380},
			{name:'update_date'	, index:'update_date',			  sortable: false,width:380},
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
        userDataOnFooter: true, // use the userData parameter of the JSON response to display data on footer
		ondblClickRow : function(rowid, iRow, iCol, e){		/* 해당 row를 선택했을 경우 발생하는 이벤트 처리 */ 
			$('#save_type').val('U');
			$('#addDialog').dialog({ 
				maxWidth:500,
				maxHeight: 450,
				width: 500,
				height: 300,
				buttons: [
	                {
	                    text: "저장",
	                    'id'	: "addUdate_btn",
	                    "class" : "btn btn-primary btn-minier",
	                    click: function() {
	                    	$.ajax({
	         				url: '/sysBPartGroupAdd',
	         				type: 'POST',
	         				async: true,
	         				dataType : "json",
	         				contentType :"application/json",
	         				data :JSON.stringify(
	         						{	 'part_grp_code'	:$('#part_grp_code').val()
	         							,'part_grp_name'		:$('#part_grp_name').val()
	         							,'remark'		:$('#remark').val()
	         							,'save_type'	:$('#save_type').val()
	         						}),
	         					success: function (data) {
	         						alert(data.result);
	         						$('#addDialog').dialog( "close" );
	         						$('#mes_grid').setGridParam({url: "/sysBPartGroupGet",datatype: "json",mtype: 'POST',page: 1, }).trigger("reloadGrid");	
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
	            ],
				autoOpen: true});
			 var sqCmsmem =$("#mes_grid").jqGrid('getRowData', rowid).part_grp_code;
			$('#part_grp_code').val($("#mes_grid").jqGrid('getRowData', rowid).part_grp_code);
			$('#part_grp_name').val($("#mes_grid").jqGrid('getRowData', rowid).part_grp_name);
			$('#remark').val($("#mes_grid").jqGrid('getRowData', rowid).remark);
			$('#save_type').val('U');
		},
		onRightClickRow : function(rowid){
		},
	})

	$('#get_btn').on('click',function(){
		$('#mes_grid').setGridParam({   url: "/sysBPartGroupGet",
										datatype: "json", 
										mtype: 'POST',
										page: 1, 
		}).trigger("reloadGrid");	
	});
	
	$('#add_btn').on('click',function(){
		$('#part_grp_code').removeAttr("readonly");
		$('#part_grp_code').val('');
		$('#part_grp_name').val('');
		$('#remark').val('');
		$('#save_type').val('I');
		
		 $('#addDialog').dialog({ 
			maxWidth:500,
			maxHeight: 450,
			width: 500,
			height: 300,
			buttons: [
                {
                    text: "저장",
                    'id'	: "addUdate_btn",
                    "class" : "btn btn-primary btn-minier",
                    click: function() {
                    	$.ajax({
         				url: '/sysBPartGroupAdd',
         				type: 'POST',
         				async: true,
         				dataType : "json",
         				contentType :"application/json",
         				data :JSON.stringify(
         						{	 'part_grp_code'	:$('#part_grp_code').val()
         							,'part_grp_name'		:$('#part_grp_name').val()
         							,'remark'		:$('#remark').val()
         							,'save_type'	:$('#save_type').val()
         						}),
         					success: function (data) {
         						alert(data.result);
         						$('#addDialog').dialog( "close" );
         						$('#mes_grid').setGridParam({url: "/sysBPartGroupGet",datatype: "json",mtype: 'POST',page: 1, }).trigger("reloadGrid");	
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
            ],
			autoOpen: true
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
				url: '/sysBPartGroupDel',
				type: 'POST',
				async: true,
				dataType : "json",
				contentType :"application/json",
				data :JSON.stringify({"code_list": delList}),
					success: function (data) {
						alert(data.message);
						$('#mes_grid').setGridParam({url: "/sysBPartGroupGet",datatype: "json",mtype: 'POST',page: 1, }).trigger("reloadGrid");	
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
			url: '/sysBPartGroupAdd',
			type: 'POST',
			async: true,
			dataType : "json",
			contentType :"application/json",
			data :JSON.stringify(
					{	 'part_grp_code':$('#part_grp_code').val()
						,'part_grp_name':$('#part_grp_name').val()
						,'remark'		:$('#remark').val()
						,'save_type'	:$('#save_type').val()
					}),
				success: function (data) {
					alert(data.result);
					$('#addDialog').dialog( "close" );
					$("#mes_grid").setGridParam({url:'/sysBPartGroupGet'});
				},
				error: function () {
				}
		});	
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
    
<%-- jquery ui dialog wrap--%>
<%-- 권한그룹 추가 dialog Form--%>
<div id="addDialog" title="로케이션 관리" style="display: none">
<input type="hidden" name="save_type" id="save_type" value="" class="form-control modal_value"/>
        <div class="profile-user-info profile-user-info-striped">
         <div class="profile-info-row">
                <div class="profile-info-name"> 그룹코드 </div>
                <div class="profile-info-value">
					<input type="text" name="part_grp_code" id="part_grp_code" type="text" value="" class="form-control modal_value" readOnly/>
                </div>
            </div>
        
            <div class="profile-info-row">
                <div class="profile-info-name"> 그룹명 </div>
                <div class="profile-info-value">
                    <input type="text" name="part_grp_name" id="part_grp_name" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
            
            <div class="profile-info-row">
                <div class="profile-info-name"> 비고 </div>
                <div class="profile-info-value">
                    <input type="text" name="remark" id="remark" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
        </div>
    </div>
</div>
