var grid_data=[{a:'1'},{a:'2'},{a:'20'}];

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    jqGrid_modal1();
    datepickerInput_modal1();
    selectBox_modal1();
    jqGridResize('#mes_modal_grid',$('#mes_modal_grid').closest('[class*="col-"]'));
}

////////////////////////////클릭 함수/////////////////////////////////////


function inputIntChange() {
    if ($("#install_amount").val() === ""){
        $("#install_amount").val(0);
    }else {
        $("#install_amount").val($("#install_amount").val().replace(/[^0-9]/g,''));
    }

}


function add_modal1_btn() {
    var check=0;
    var add_data = value_return(".modal_value");
    if (effectiveness1(add_data)){
    var formData = new FormData(document.getElementById('tpmMC_form'));
        formData.append("keyword",main_data.check);
        formData.delete("install_date");
        formData.append("install_date", add_data.install_date.replace(/\-/g, ''));
        console.log(formData.get("install_date"));
        return false;
        for (var i = 1; i <=3 ; i ++){
            if (typeof $("#xlsUploads"+i).prop("files")[0] !== "undefined" && $("#xlsUploads"+i).prop("files")[0] !== "" && $("#xlsUploads"+i).prop("files")[0] !== null ) {
                check = 1;
                formData.append("file"+i, $("#xlsUploads"+i).prop("files")[0]);
            }else {
                check = 0;
            }
            formData.append("check"+i, check);
        }
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "/tpmMCAdd",
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            success: function (data) {
                alert(data);
                $('#addDialog').dialog('close');
            },
            error: function (e) {
                alert('업로드에 실패하였습니다.');
                closeWindowByMask();
                console.log("ERROR : ", e);
            }
        });


    }
}


function readURL(input,index) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img-text'+index).remove();
            $('#img'+index).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function readURLRemove(index) {
    $('#img'+index).removeAttr('src');
    if (!$("#img-text"+index).text()){
        var div = $('<div class="img-text" id="img-text'+index+'\">미리보기가 표시됩니다.</div>');
        $('#img_div'+index).prepend(div);
    }

    $("#xlsUploads"+index).val("");
}



// 그리는 더블 클릭 시 발동
function update_btn(jqgrid_data) {

    modal_reset(".modal_value", []); // 해당 클래스 내용을 리셋 시켜줌 ,데이터에 readonly 사용할거

    main_data.check = 'U'; // 수정인지 체크

    ccn_ajax('/tpmMCOneGet', {machine_code:jqgrid_data.machine_code}).then(function (data) { // user의 하나 출력
        modal_edits('.modal_value', main_data.readonly, data); // response 값 출력
        $("#addDialog").dialog('open');
    });
}

////////////////////////////호출 함수/////////////////////////////////////

function datepickerInput_modal1() {
    datepicker_makes("#datepicker", 0);

}
function selectBox_modal1() {
    select_makes("#line_select2", "/getLine", "line_code", "line_name");
}

function modal_make1() {

    $("#addDialog").dialog({
        modal: true,
        width: '800',
        height: 'auto',
        autoOpen: false,
        resizable: false,
        buttons: [
            {
                text: '',
                'class': 'btn btn-primary btn-minier hidden',

            }
        ]
    })
}

function jqGrid_modal1() {
    $('#mes_modal_grid').jqGrid({
        data:grid_data,
        datatype: "local",
        colNames: ['부품명','규격','소요수량','구매처','연락처','비고'],
        colModel: [
            {name: '', index: '', key:true, sortable: false},
            {name: 'a', index: 'a', sortable: false},
            {name: '', index: '', sortable: false},
            {name: '', index: '', sortable: false},
            {name: '', index: '', sortable: false},
            {name: '', index: '', sortable: false}
        ],
        width : 465,
        rowNum: 100,
        rowList:[100,200,300,500,1000],
    });
}
function effectiveness1(modal_objact) { // 유효성 검사
    if (modal_objact.qc_code === '') {
        alert("설비코드를 입력해주세요");
        return false;
    } else if (modal_objact.qc_name === '') {
        alert("설비명을 입력해주세요");
        return false;
    }  else if (modal_objact.line_code === '') {
        alert("설치장소를 선택해주세요");
        return false;
    } else {

        return true;
    }
}