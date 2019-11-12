$(function() {
	
	jqGrid_common(jqGrid_object); // jqGrid 호출
	jqGrid_resize('#mes_grid','.table-responsive'); // jqGrid 사이즈 조정;
	modal_dialog(); // 모달창 생성
	   
	
	// 모달 클릭 테스트
	  $(document).on("click",".add-btn",function(){
		  $('#msgAddDialog').dialog('open');
	  });
	  
	  
	  $(document).on("click",".close-btn",function(){
		  $('#msgAddDialog').dialog('close');
	  });
});

//조회 버튼을 누를시 조회
function get_btn(page) {
	$('#mes_grid').setGridParam({ url: 'sysCommonGet' ,datatype: "json", page: page}).trigger("reloadGrid");
}

//테스트
function test() {
	alert("Sss");
}


//jqGrid 에 보낼 값
var jqGrid_object = {
		main_name : '#mes_grid',
		page_name : '#mes_grid_pager',
		colNames:['코드','명칭1','명칭2','명칭3','명칭4','등록자','등록일','수정일'],
        colModel:[
            {name:'msg_code',index:'msg_code',key: true ,sortable: false,width:380},
            {name:'msg_name1',index:'msg_name1',sortable: false,width:380},
            {name:'msg_name2',index:'msg_name2',sortable: false,width:380},
            {name:'msg_name3',index:'msg_name3',sortable: false,width:380},
            {name:'msg_name4',index:'msg_name4',sortable: false,width:380},
            {name:'user_code',index:'user_code',sortable: false,width:380},
            {name:'create_date',index:'create_date',formatter:formmatter_date,sortable: false,width:380},
            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false,width:380},
        ],
        height : 550,    
}





// 모달창
function modal_dialog() {
	$( "#commonAddDialog" ).dialog({
		maxWidth:500,
		maxHeight: 450,
		width:500,
		height:450,
		autoOpen: false,
	  });
}