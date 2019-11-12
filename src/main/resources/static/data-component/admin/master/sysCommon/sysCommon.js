$(function() { 

	jqGrid_common(jqGrid_object); // jqGrid 호출
	jqGrid_resize('#mes_grid','.table-responsive'); // jqGrid 사이즈 조정;
	modal_dialog(); // 모달창 생성
	   
	
	// 모달 클릭 테스트
	  $(document).on("click",".add-btn",function(){
		  $('#commonAddDialog').dialog('open');
	  });
	  
	  
	  $(document).on("click",".close-btn",function(){
		  $('#commonAddDialog').dialog('close');
	  });
	
});

// 조회 버튼을 누를시 조회
function get_btn(page) {
	$('#mes_grid').setGridParam({ url: 'sysCommonGet' ,datatype: "json", page: page}).trigger("reloadGrid");
}

//테스트
function test() {
	alert("Sss");
}


// jqGrid 에 보낼 값
var jqGrid_object = {
		main_name : '#mes_grid',
		page_name : '#mes_grid_pager',
		 colNames:['공용그룹','코드','명칭1','명칭2','명칭3','명칭4','명칭5','명칭6','명칭7','명칭8','사용유무','등록자','등록일'],
        colModel:[
            {name:'site_code',index:'site_code',key: true ,sortable: false,width:380},
            {name:'code_type',index:'code_type',sortable: false,width:380},
            {name:'code_value',index:'code_value',sortable: false,width:380},
            {name:'code_name1',index:'code_name1',sortable: false,width:380},
            {name:'code_name2',index:'code_name2',sortable: false,width:380},
            {name:'code_name3',index:'code_name3',sortable: false,width:380},
            {name:'code_name4',index:'code_name4',sortable: false,width:380},
            {name:'code_name5',index:'code_name5',sortable: false,width:380},
            {name:'code_name6',index:'code_name6',sortable: false,width:380},
            {name:'code_name7',index:'code_name7',sortable: false,width:380},
            {name:'code_name8',index:'code_name8',sortable: false,width:380},
            {name:'create_date',index:'create_date',formatter:formmatter_date,sortable: false,width:380},
            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false,width:380},
        ],
        height : 550,    
}





// 모달창
function modal_dialog() {
	$( "#commonAddDialog" ).dialog({
		maxWidth:700,
	    maxHeight: 480,
	    width:700,
	    height: 480,
	    autoOpen: false,
	  });
}
