$(function() {
	jqGrid_common(jqGrid_object); // jqGrid 호출
	jqGrid_resize('#mes_grid','.table-responsive'); // jqGrid 사이즈 조정;
	modal_dialog(); // 모달창 생성
	   
	
	// 모달 클릭 테스트
	  $(document).on("click",".add-btn",function(){
		  $('#userSuppAddDialog').dialog('open');
	  });
	  
	  
	  $(document).on("click",".close-btn",function(){
		  $('#userSuppAddDialog').dialog('close');
	  });

});

//조회 버튼을 누를시 조회
function get_btn(page) {
	$('#mes_grid').setGridParam({ url: 'sysUserSuppGet' ,datatype: "json", page: page}).trigger("reloadGrid");
}

//테스트
function test() {
	alert("Sss");
}


// jqGrid 에 보낼 값
var jqGrid_object = {
		main_name : '#mes_grid',
		page_name : '#mes_grid_pager',
		colNames:['사용자코드','사용자명','권한(x)','전화번호','이메일','사용유무','최근로그인','수정일'],
        colModel:[
            {name:'supp_code',index:'supp_code',key: true ,sortable: false},
            {name:'supp_name',index:'supp_name',sortable: false},
            {name:'ceo',index:'ceo',sortable: false},
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
	$( "#userSuppAddDialog" ).dialog({
	     maxWidth:500,
	      maxHeight: 600,
	      width: 500,
	      height: 600,
	      autoOpen: false,
	  });
}