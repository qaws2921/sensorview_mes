
////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
}


////////////////////////////클릭 함수/////////////////////////////////////
function addupdate_btn() {
    var add_data = value_return(".modal_value");
    var formData = new FormData();
    formData.append("in_no",add_data.in_no);
    formData.append("part_code",add_data.part_code);
    formData.append("act_type",add_data.act_type);
    formData.append("file2",$("#file_02").prop("files")[0]);
    formData.append("file3",$("#file_03").prop("files")[0]);
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "/testRecvFileAdd",
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        success: function (data) {

           // get_btn(1);
            //$("#addDialog").dialog('close');
            //closeWindowByMask();

            console.log(data);
        },
        error: function (e) {
            closeWindowByMask();
            console.log("ERROR : ", e);
        }
    });
}
////////////////////////////호출 함수/////////////////////////////////////

function file_change(e) {
    if ( $(e).val() !== ''){
        $(e).closest("div").children(".file_labal").text("완료");
    }
}

function modal_make1() {
    $("#addDialog").dialog({
        autoOpen:false,
        modal: true,
        width: 600,
        height: 'auto',
        resizable: false,
        buttons: [
            {
                text: '저장',
                'class': 'btn btn-primary btn-minier',
                click: function () {
                    addupdate_btn();
                }
            },
            {
                text: '취소',
                'class': 'btn btn-minier',
                click: function () {
                    $(this).dialog('close');
                }
            }
        ]
    });
}



