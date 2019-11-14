////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    selectBox_modal1();
    modal_make1();
}


////////////////////////////클릭 함수/////////////////////////////////////
function addUdate_btn(){
	var modal_objact = value_return(".modal_value");
	if (effectiveness1(modal_objact)) {
		var text = '저장하겠습니까?';
		if (main_data.check === "U") {
			text = '수정하겠습니까?';
		}
		if (confirm(text)) {
			
			modal_objact.keyword = main_data.check;
			
			receive_data("/sysUserAdd",modal_objact).then(function (data) {
				if (data.result === 'NG'){
                    alert(data.message);
                } else {     
                	if (main_data.check === "I") {
                		get_btn(1);												
					}else {
						get_btn($("#mes_grid").getGridParam('page'));
					}
                }
                $("#addDialog").dialog('close');
			}).catch(function (err) {
				alert("저장실패");
			});			
		}
	}
	
}

////////////////////////////호출 함수/////////////////////////////////////
function effectiveness1(modal_objact) { // 유효성 검사
    if (modal_objact.user_code === ''){
        alert("사용자코드를 입력해주세요");
        return false;
    } else if (modal_objact.user_name === ''){
        alert("사용자이름을 입력해주세요");
        return false;
    } else if (modal_objact.dept_code === ''){
        alert("부서를 선택해주세요");
        return false;
    } else if (modal_objact.duty_code === ''){
        alert("직책을 선택해주세요");
        return false;
    } else if (modal_objact.auth_code === ''){
        alert("권한을 선택해주세요");
        return false;
    } else if (modal_objact.tel_no === ''){
        alert("전화번호를 입력해주세요");
        return false;
    } else if (modal_objact.email === ''){
        alert("메일을 입력해주세요");
        return false;
    }else {

        return true;
    }
}


function modal_make1() {		
	$("#addDialog").dialog({
		modal: true,  
		width: 'auto',
		height: 'auto',
		autoOpen: false,
		resizable:false,
		buttons: [
          {
              text: "저장",
              'id'	: "addUdate_btn",
              "class" : "btn btn-primary btn-minier",
              click: function() {
            	  addUdate_btn(); 
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
}

function selectBox_modal1() {
	select_makes("#dept_select2","/sysDeptAllGet","dept_code","dept_name");
	select_makes("#duty_select","/sysCommonDutyGet","code_value","code_name1");
	select_makes("#auth_select","/sysAuthAllGet","auth_code","auth_name");
}