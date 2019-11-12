$(function() {
	jqGrid_common(jqGrid_object); // jqGrid 호출
	jqGrid_resize('#mes_grid','.table-responsive'); // jqGrid 사이즈 조정;
	modal_dialog(); // 모달창 생성
	   
	
	// 모달 클릭 테스트
	  $(document).on("click",".add-btn",function(){
		  $('#userAddDialog').dialog('open');
	  });
	  
	  
	  $(document).on("click",".close-btn",function(){
		  $('#userAddDialog').dialog('close');
	  });
});

//조회 버튼을 누를시 조회
function get_btn(page) {
	$('#mes_grid').setGridParam({ url: 'sysUserGet' ,datatype: "json", page: page}).trigger("reloadGrid");
}

//테스트
function test() {
	alert("Sss");
}


// jqGrid 에 보낼 값
var jqGrid_object = {
		main_name : '#mes_grid',
		page_name : '#mes_grid_pager',
		colNames : ['권한그룹코드','권한그룹명','등록자','등록일'],
		colNames:['사용자코드','사용자명','부서','직책','권한','전화번호','이메일','사용유무','최근로그인','수정일'],
        colModel:[
            {name:'user_code',index:'user_code',key: true ,sortable: false},
            {name:'user_name',index:'user_name',sortable: false},
            {name:'dept_code',index:'dept_code',sortable: false},
            {name:'duty_code',index:'duty_code',sortable: false},
            {name:'user_type',index:'user_type',sortable: false},
            {name:'tel_no',index:'tel_no',sortable: false},
            {name:'email',index:'email',sortable: false},
            {name:'use_yn',index:'use_yn',sortable: false},
            {name:'login_date',index:'login_date',formatter:formmatter_date,sortable: false},
            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false},
        ],
        height : 550,    
}





// 모달창
function modal_dialog() {
	$( "#userAddDialog" ).dialog({
		  maxWidth:500,
	      maxHeight: 600,
	      width: 500,
	      height: 600,
	      autoOpen: false,
	  });
}
