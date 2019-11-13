<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<script>

</script>
<script type="text/javascript">
$(document).ready(function(){
	$("#mes_grid3").jqGrid({
		url: "/scmInGet",
 		datatype: "json", 
 		mtype: 'POST',
 		page: 1, 
 		postData:{
 			keyword: $('#keyword').val(),
 			startDate:$('#startDatepicker').val(),
 			endDate: $('#endDatepicker').val()
 		},
		jsonReader: {cell:""},
		colNames : ['품목그룹','품번','품명','규격','단위','포장수량','검사등급'],
		colModel : [
			{name:'part_grp_code'	, index:'part_grp_code'	, 				sortable: false, width:380},
			{name:'part_code'		, index:'part_code'		, key : true,	sortable: false, width:380},
			{name:'part_name'		, index:'part_name'		,				sortable: false, width:380},
			{name:'spec'			, index:'spec'			,				sortable: false, width:380},
			{name:'unit_code'		, index:'unit_code'		,				sortable: false, width:380},
			{name:'pack_qty'		, index:'pack_qty'		,				sortable: false, width:380},
			{name:'qc_level'		, index:'qc_level'		,				sortable: false, width:380},
		], 
		caption		: '자재 입고 수정',
		width		: 530,
		height 		: 300, 	
		viewrecords	: true,
		multiboxonly: true,
		multiselect	: true,
		pager		: '#mes_grid_pager3',
		gridview	: true,
		
		onRightClickRow : function(rowid){
		},
		ondblClickRow: function(rowid, iRow, iCol, e){
		},
	})
	
	
	$("#mes_grid4").jqGrid({
		url: "/scmInGet",
 		datatype: "json", 
 		mtype: 'POST',
 		page: 1, 
 		postData:{
 			keyword: $('#keyword').val(),
 			startDate:$('#startDatepicker').val(),
 			endDate: $('#endDatepicker').val()
 		},
		jsonReader: {cell:""},
		colNames : ['품목그룹','품번','품명','규격','단위','포장수량','검사등급'],
		colModel : [
			{name:'in_no'			, index:'in_no'			, 				sortable: false, width:380},
			{name:'part_code'		, index:'part_code'		, key : true,	sortable: false, width:380},
			{name:'part_grp_code'	, index:'part_grp_code'	,				sortable: false, width:380},
			{name:'part_name'		, index:'part_name'		,				sortable: false, width:380},
			{name:'spec'			, index:'spec'			,				sortable: false, width:380},
			{name:'unit_code'		, index:'unit_code'		,				sortable: false, width:380},
			{name:'order_qty'		, index:'order_qty'		,				sortable: false, width:380, editable:true},
		], 
		caption		: '자재 입고 수정',
		width		: 540,
		height 		: 300, 	
		viewrecords	: true,
		multiboxonly: true,
		multiselect	: true,
		pager		: '#mes_grid_pager4',
		gridview	: true,
		onRightClickRow : function(rowid){
		},
		ondblClickRow: function(rowid, iRow, iCol, e){
		},
	})
	
	
	$('#modalSuppCode').on("change", function(){
		$("#modalPartCode").find('option').remove();
		$('#modalPartCode').append("<option value=''>"+'전체'+"</option>");
		
		var otherValue = $('#modalSuppCode option:selected').val();
		<c:forEach var="partGroupList" items="${partGroupList}" varStatus="status">
			var jsonPartGroupList = new Object();
			jsonPartGroupList.eachValue = '${partGroupList.supp_code}';
			jsonPartGroupList.partCode = '${partGroupList.part_grp_code}';
			jsonPartGroupList.partGrpName = '${partGroupList.part_grp_name}';
			
			<c:set var="test" value="${partGroupList}"/>
			<c:if test="${partGroupList.supp_code eq null}">
				alert();
			</c:if>
				$('#modalPartCode').append("<option value='"+jsonPartGroupList.partCode+"'>"+jsonPartGroupList.partGrpName+"</option>");
		</c:forEach>
	});
});
</script>
<div id="AddDialog" title="SensorView MES | 권한그룹 추가" style="display: none">
    <div class="search-box clearfix">
        <div class="search-wrap clearfix">
	       <div class="table-responsive clearfix" style="display: block">
	       		<div class="filter-text-left">
	               업체명 :  <select id="modalSuppCode">
	            		<c:forEach var="suppList" items="${suppList}" varStatus="status">
	            			<option value="${suppList.supp_code}">${suppList.supp_name}</option>
	            		</c:forEach>
					</select>
			품목그룹 :  <select id="modalPartCode">
						<option value="">전체</option>
					</select>	
            	</div>
		        <table id="mes_grid3"></table>
		        <div id="mes_grid_pager3"></div>
		        
		        <table id="mes_grid4"></table>
		        <div id="mes_grid_pager4"></div>
		    </div>
        </div>
    </div>
	
    <div class="bottom-btns clearfix">
        <button class="btn btn-normal inverse" id="close_btn" >취소</button>
        <button  class="btn btn-normal inverse" id="addUdate_btn">저장</button>
    </div>
</div>
