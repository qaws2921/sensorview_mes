function jqgridPagerIcons() {
    var replace =
        {
            'ui-icon-seek-first' : 'ace-icon fa fa-angle-double-left bigger-140',
            'ui-icon-seek-prev' : 'ace-icon fa fa-angle-left bigger-140',
            'ui-icon-seek-next' : 'ace-icon fa fa-angle-right bigger-140',
            'ui-icon-seek-end' : 'ace-icon fa fa-angle-double-right bigger-140'
        };
    $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
        var icon = $(this);
        var $class = $.trim(icon.attr('class').replace('ui-icon', ''));

        if($class in replace) icon.attr('class', 'ui-icon '+replace[$class]);
    })
}


function formmatterDate(cellValue) { // 날짜 필터
	   if (cellValue == null){
	       return '';
	   } else {
	    var y = cellValue.substring(0,4);
	    var m = cellValue.substring(4,6);
	    var d = cellValue.substring(6,8);
	    var h = cellValue.substring(8,10);
	    var mm = cellValue.substring(10,12);
	    var s = cellValue.substring(12,14);
	    var date = y+"-"+m+"-"+d+" "+h+":"+mm+":"+s;
	    return date;
	   }
}

function jqGridResize(main_name, top_name) {
	$(window).on('resize', function () {
		$(main_name).setGridWidth($(top_name).width(), true);
	}).trigger('resize');
}
function jqGridResize2(main_name, top_name) {

		$(main_name).setGridWidth($(top_name).width(), true);

}


function modal_reset(class_name,readonly) {
	$(class_name).each(function(i){
		for (var i = 0; i < readonly.length; i++) {
			if (readonly[i] ===$(this).attr("name") ) {
				$(this).removeAttr("readonly");
			}
		}
		$(this).val("").trigger('change');
		if ($(this).hasClass("ynCheck") === true) {
			$(this).val("Y").trigger('change');
		}
	});
}


function value_return(class_name) {
	var modal_objact = {};
	var objectName = null;
	var objectValue = null;
	$(class_name).each(function(i){
		objectName = $(this).attr("name");
		objectValue = $(this).val();
		modal_objact[objectName] = objectValue;
	});	
		return modal_objact
		
}

function modal_edits(class_name,readonly,data) {
	$(class_name).each(function(i){
		for (var i = 0; i < readonly.length; i++) {
			if (readonly[i] ===$(this).attr("name") ) {
				$(this).attr("readonly","readonly");
			}
		}
		$(this).val(data[$(this).attr("name")]).trigger('change');

	});
}



function select_makes(tag,url,value,text) {
	ccn_ajax(url,null).then(function (data) {
		var option = null 
		for (var j = 0; j < data.length; j++) {
			option = $("<option></option>").text(data[j][text]).val(data[j][value]);
			$(tag).append(option);
		}
		$(tag).select2();
	}).catch(function (err) {
		console.error(err); // Error 출력
	});	
}



function ccn_ajax(url,data){
	return new Promise(function (resolve, reject) {
		$.ajax({
	        url: url,
	        type: 'POST',
	        async: true,
	        dataType: "json",
	        data:data,
	        success: function (data2) {
	        	resolve(data2);       
	        },
	        error: function () {
	        	reject(new Error("Request is failed"));
            }
	    });	
	  });
}

function datepicker_makes(tag,num) {
	var date = new Date();
	date.setDate(date.getDate() + num);

    $( tag ).datepicker({
        autoclose: true,
        format:'yyyy-mm-dd',
        language: "kr",
    }).datepicker('setDate',date);
}


function modalValuePush(name1,name2,name3) {

		$(name2).val($(name1).val());
		if ($(name1).val() === ""){
			$(name3).val("");

		} else {

			$(name3).val($(name1 + " option:selected").text().trim());
		}


}

function callback(cb) {
	return  cb();
}





