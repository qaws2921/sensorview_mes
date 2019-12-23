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

function add_modal1_btn() {
    var check1=0;
    var check2=0;
    var check3=0;
    var add_data = value_return(".modal_value");
    if (effectiveness1(add_data)){
    var formData = new FormData(document.getElementById('tpmMC_form'));
    formData.append("install_date", formData.get('install_date').replace(/\-/g, ''));
        if ($("#file_02").prop("files")[0] !== null) {
            check1 = 1;
            formData.append("file2", $("#file_02").prop("files")[0]);
        }
        formData.append("check1", check1);

        if ($("#file_02").prop("files")[0] !== null) {
            check2 = 1;
            formData.append("file2", $("#file_02").prop("files")[0]);
        }
        formData.append("check2", check2);

        if ($("#file_02").prop("files")[0] !== null) {
            check3 = 1;
            formData.append("file2", $("#file_02").prop("files")[0]);
        }
        formData.append("check3", check3);


    console.log(formData.get('loc_code'));

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