<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<link href="<c:url value='/'/>css/sensorview/managerForm.css" rel="stylesheet" type="text/css" media="all" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.10.3/xlsx.full.min.js"></script>


<script type="text/javascript">

$(document).ready(function() {
	
	
	var now = new Date();
    var year= now.getFullYear();
    var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
    var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();
	
    
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
		jsonReader: {    // json 데이터형식과 맞춰주는거 같다. (요기가 없으니까..그리드안 데이터를 못뿌리네..)
	   		root : "rows",  // list 이름
	   		page : "page",
	   		total : "total",
	   		records : "records",
		},
		colNames : ['입고일자', '전표번호', '업체', '상태', '처리자', '출고일시'],
		colModel : [
			{name:'work_date'	, index:'work_date'	 , 			  sortable: false,width:380},
			{name:'in_no'	 	, index:'in_no'		 , key: true, sortable: false,width:380},
			{name:'supp_name'	, index:'supp_name'	 ,			  sortable: false,width:380},
			{name:'status'	 	, index:'status'	 ,			  sortable: false,width:380},
			{name:'user_code'	, index:'user_code'	 ,			  sortable: false,width:380},
			{name:'update_date'	, index:'update_date',			  sortable: false,width:380},
		],
		caption:'SensorView | MES', 	// 그리드 왼쪽 위에 캡션
		autowidth	: true,				// 그리드 가로 길이
		height	 	: 250,				// 그리드의 높이
		rownumWidth	: 40,				// 로우넘의 가로길이
		rowNum		: 100,				// 그리드에 보여줄 데이터의 갯수,-1하면 무한
		rowList		: [100, 200, 300, 400],	// 한 페이지에 몇 건씩 보여줄 것인지 설정
		rownumbers	: false,			// 왼쪽에 index가 생김 1부터 시작
		viewrecords	: true,
		multiboxonly: true,
		multiselect : true,				// 체크박스 사라짐
		gridview	: true,
		pager		: '#mes_grid_pager',// 밑에 페이저 달 div 아이디
		
		ondblClickRow : function(rowid, iRow, iCol, e){		/* 해당 row를 선택했을 경우 발생하는 이벤트 처리 */ 
			
			$('#mes_grid2').setGridParam({ 
					url: "/scmInSubGet",
					datatype: "json", 
		    		mtype: 'POST',
		    		page: 1, 
		    		postData:{
		    			in_no: rowid,
	    			}
			}).trigger("reloadGrid");	
			
		},
		onRightClickRow : function(rowid){
		},
	})
	
	$("#mes_grid2").jqGrid({
		jsonReader: {cell:""},
		colNames : ['전표번호','품목그룹','품번','품명','규격','단위','입고수량','불량수량','실입고수량'],
		colModel : [
			{name:'in_no'			, index:'in_no'			, 				sortable: false, width:380,},
			{name:'part_code'		, index:'part_code'		, key : true,	sortable: false, width:380,},
			{name:'part_grp_code'	, index:'part_grp_code'	,				sortable: false, width:380,},
			{name:'part_name'		, index:'part_name'		,				sortable: false, width:380,},
			{name:'spec'			, index:'spec'			,				sortable: false, width:380,},
			{name:'unit_code'		, index:'unit_code'		,				sortable: false, width:380,},
			{name:'order_qty'		, index:'order_qty'		,				sortable: false, width:380,},
			{name:'bad_qty'			, index:'bad_qty'		,				sortable: false, width:380,},
			{name:'in_qty'			, index:'in_qty'		,				sortable: false, width:380,},
		], 
		caption		: '자재 입고 수정',
		autowidth	: true,				// 그리드 가로 길이
		height	 	: 250,				// 그리드의 높이
		rownumWidth	: 40,				// 로우넘의 가로길이
		rowNum		: 100,				// 그리드에 보여줄 데이터의 갯수,-1하면 무한
		viewrecords	: true,
		multiboxonly: true,
		multiselect	: true,
		pager		: '#mes_grid_pager2',
		cellEdit	: true,
		cellsubmit	: 'remote',
		cellurl 	: '/scmInAdd',
		gridview	: true,
		
		beforeSubmitCell : function(rowid,iCol,iRow,status,rowdata) { 
			var rowval = $('#mes_grid2').jqGrid('getRowData', rowid);
			
			return { "in_no":rowval.in_no,"part_code":rowval.part_code, "order_qty":rowval.order_qty, "bad_qty":rowval.bad_qty}
	     },

	     afterSubmitCell : function(res) {    // 변경 후
	    	 jQuery('#mes_grid2').trigger("reloadGrid");
	    },
		onRightClickRow : function(rowid){
			$('#mes_grid').setGridHeight('550');
			$('#scmSubGrid').css("display","none");
			$('#mes_grid2').setGridWidth($(this).width());
		},
		ondblClickRow: function(rowid, iRow, iCol, e){
		},
	})
    
    
    $('#get_btn').on('click',function(){
    	 $('#mes_grid').setGridParam({  url: "/scmInGet",
							    		datatype: "json", 
							    		mtype: 'POST',
							    		page: 1, 
							    		postData:{
							    			keyword: $('#keyword').val(),
							    			startDate:$('#startDatepicker').val(),
							    			endDate: $('#endDatepicker').val()
							    		}
    	 }).trigger("reloadGrid");	
    });
    
    $('#add_btn').on('click',function(){
    	 $('#addDialog').dialog({ 
 			maxWidth:500,
 			maxHeight: 450,
 			width: 500,
 			height: 400,
 			autoOpen: true,
 			buttons: [
                 {
                     text: "저장",
                     'id'	: "addUdate_btn",
                     "class" : "btn btn-primary btn-minier",
                     click: function() {
                    	 
                     	 var addList = ""; 									//JSON 객체의 두 번째에 파트 코드를 담기 위한 변수로 배열 형태의 변수
	                 		
	                  		addList += $('#work_date').val()+",";
	                  		addList += $('#in_no').val()+",";
	                  		addList += $('#supp_code').val()+",";
	                  		addList += $('#status').val()+",";
	                  		addList += $('#user_code').val()+",";
	                  		addList += $('#update_date').val();
                    	 $.ajax({
             				url: '/scmInAdd',
             				type: 'POST',
             				async: true,
             				dataType : "json",
             				contentType :"application/json",
             				data : JSON.stringify({code_list:addList,})
             					,success: function (data) {
             						$('#mes_grid').setGridParam({url: "/scmInGet",datatype: "json",mtype: 'POST',page: 1, }).trigger("reloadGrid");
             						$( this ).dialog( "close" );
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
   });
    $('#addUdate_btn').on('click',function(){

	   /*  $.ajax({
				url: '/scmInAdd',
				type: 'POST',
				async: true,
				dataType : "json",
				contentType :"application/json",
				data :JSON.stringify(]/]/
						{	 'work_date'	:$('#work_date').val()
							,'in_no'		:$('#in_no').val()
							,'supp_code'		:$('#supp_code').val()
							,'status'		:$('#status').val()
							,'user_code'		:$('#user_code').val()
							,'update_date'	:$('#update_date').val()
						}),
					success: function (data) {
						$('#mes_grid').setGridParam({url: "/scmInGet",datatype: "json",mtype: 'POST',page: 1, }).trigger("reloadGrid");
					},
					error: function () {
					}
			});  */
    });
    /* 세부 입고 항목을 삭제하기 위한 이벤트로 JSON객체에 두가지 데이터를 담아 전송하도록 작성하였음 첫번째는 스트링 형으로 전표번호, 두번째는 스트링 배열 형으로 파트코드 */
	$("#delete_btn").on("click",function() {
		
		
		var rowid1 = $("#mes_grid2").jqGrid('getGridParam', 'selrow' );		//JSON 객체에 첫번째 스트링 형 전표번호를 담기 위해 그리드의 로우 아이디를 불러옴
		var inNo = $("#mes_grid2").jqGrid('getRowData', rowid1).in_no;		//불러온 로우 아이디로 전표 번호를 구한다
		
		
		var delList = ""; 									//JSON 객체의 두 번째에 파트 코드를 담기 위한 변수로 배열 형태의 변수
		
		var rowid = $("#mes_grid2").jqGrid('getGridParam', 'selarrrow' );	//배열 형태의 변수를 담기 위해 선택된 로우의 id값을 전부 가져온다
		var rowData;
		
		
 		for(var i = 0; i < rowid.length;i++){								//품목 그룹의 값을 전부 배열에 담는다
			rowData = $("#mes_grid2").jqGrid('getRowData', rowid[i]);
			delList += rowid[i]+","
		} 
		delList  = delList.substr(0,delList.length-1);
		$.ajax({
			url: '/scmInDel',
			type: 'POST',
			async: true,
			dataType : "json",
			contentType :"application/json",
			data :JSON.stringify({'in_no':inNo,'code_list':delList}),
				success: function (data) {
					alert("성공")
				},
				error: function () {
					
				}
		});		 
	});
});

</script>

<div id="wrap" class="main-content-inner">
	<!-- 메인 상단 -->
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
		<div class="col-lg-12 ">
			<span class="sp-title">
				로케이션 관리<small class="sp-small"><i class="ace-icon fa fa-angle-double-right"></i>Manufacturing Execution System</small>
			</span>
			<span style="float: right">
				자재관리<i class="ace-icon fa fa-angle-double-right"></i>
				기준정보<i class="ace-icon fa fa-angle-double-right"></i>
				로케이션 관리
			</span>
		</div>
	</div>
	<!-- //메인상단 -->
	
	
	<div class="page-content">
		<div class="clearfix">
			<div class="pull-left tableTools-container">
				<div class="col-lg-12 padding0">
					<table class="table wt-100">
						<tbody>
						<tr>
							<td class="wt-px-100 t-align-c td-title padding-a-0"> 기간 조회  </td>
							<td><input type="text" id="startDatepicker"> ~ <input type="text" id="endDatepicker"></td>    
							
							<td class="wt-px-100 t-align-c td-title padding-a-0">창고 </td>
							<td>
								<select id="cargoCode">
									<option value="">전체</option>
										<c:forEach var="suppList" items="${suppList}" varStatus="status">
											<option value="${suppList.supp_code}">${suppList.supp_name}</option>
										</c:forEach>
								</select>
							</td> 
						</tr>
						</tbody>
					</table>
				</div>
				<div class="dt-buttons btn-overlap btn-group">
					<a  id="get_btn" class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
						<span>
							<i class="fa fa-search bigger-110 blue"></i>
							<span>조회</span>
						</span>
					</a>
					<a id="add_btn" class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" id="showDialog">
						<span>
							<i class="fa fa-plus bigger-110 blue"></i>
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


<div id="addDialog" title="로케이션 관리" style="display:none">
        <div class="profile-user-info profile-user-info-striped">
       		<div class="profile-info-row">
                <div class="profile-info-name"> 입고일자 </div>
                <div class="profile-info-value">
					<input type="text" name=work_date id="work_date" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
        	<div class="profile-info-row">
                <div class="profile-info-name"> 전표번호 </div>
                <div class="profile-info-value">
                   <input type="text" name="in_no" id="in_no" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
          	<div class="profile-info-row">
                <div class="profile-info-name"> 창고명 </div>
                <div class="profile-info-value">
					<input type="text" name="supp_name" id="supp_name" type="text" value="" class="form-control modal_value"/>
					<input type="hidden" name="supp_code" id="supp_code" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
        
            <div class="profile-info-row">
                <div class="profile-info-name"> 상태 </div>
                <div class="profile-info-value">
                    <input type="text" name="status" id="status" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
            
             <div class="profile-info-row">
                <div class="profile-info-name"> 처리자 </div>
                <div class="profile-info-value">
                    <input type="text" name="user_code" id="user_code" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
            
            <div class="profile-info-row">
                <div class="profile-info-name"> 출고일시 </div>
                <div class="profile-info-value">
                    <input type="text" name="update_date" id="update_date" type="text" value="" class="form-control modal_value"/>
                </div>
            </div>
        </div>
    </div>

