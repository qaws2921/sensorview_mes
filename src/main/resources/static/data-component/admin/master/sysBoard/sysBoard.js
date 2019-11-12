$(function() {   
	$("#mes_grid").jqGrid({
        datatype: "json",
        mtype: 'POST',
        colNames:['게시판코드','영문명','한글명','권한','최대파일','파일크기(MB)','사용유무','등록자','등록일'],
        colModel:[
            {name:'board_code',index:'site_code',key: true ,sortable: false,width:380},
            {name:'board_en',index:'code_type',sortable: false,width:380},
            {name:'board_kr',index:'code_value',sortable: false,width:380},
            {name:'board_auth',index:'code_name1',sortable: false,width:380},
            {name:'files',index:'code_name2',sortable: false,width:380},
            {name:'file_size',index:'code_name3',sortable: false,width:380},
            {name:'use_yn',index:'code_name4',sortable: false,width:380},
            {name:'user_code',index:'code_name5',sortable: false,width:380},
            {name:'create_date',index:'create_date',formatter:formmatter_date,sortable: false,width:380},
        ],
        autowidth:true,
        height: 550,
        pager: "#mes_grid_pager",
        jsonReader: {cell:""},
        rowNum: 100,
        rowList: [100, 200, 300, 400],
        viewrecords: true,
        multiselect:true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid); // 그 셀에 해당되는 데이터
            _this.modal_edit(data); // 데이터 가공
            _this.main_update_btn();
        },
        caption: "SensorView | MES"
    }).navGrid("#mes_grid_pager", { search: false, add: false, edit: false, del: false});

	 $(window).bind('resize', function() {
	        $('#mes_grid').setGridWidth('width', true);
	        $('#mes_grid').setGridWidth($(".table-responsive").width() , true);
	}).trigger('resize');
	 
	 $( "#boardAddDialog" ).dialog({
	      maxWidth:700,
	      maxHeight: 480,
	      width:700,
	      height: 480,
	      autoOpen: false,
	  });
	  
	  
	  $(document).on("click",".add-btn",function(){
		  $('#boardAddDialog').dialog('open');
	  });
	  
	  
	  $(document).on("click",".close-btn",function(){
		  $('#boardAddDialog').dialog('close');
	  });

	 
	$('.sysCommonCodeGruop').select2();
});


function formmatter_date(cellValue) { // 날짜 필터
	   if (cellValue == null){
	       return '';
	   } else {

	    var y = cellValue.substring(0,4);
	    var m = cellValue.substring(4,6);
	    var d = cellValue.substring(6,8);
	    var h = cellValue.substring(8,10);
	    var mm = cellValue.substring(10,12);
	    var s = cellValue.substring(12,14);
	    // 20190718092501
	    var date = y+"-"+m+"-"+d+" "+h+":"+mm+":"+s;
	    return date;
	   }
	}