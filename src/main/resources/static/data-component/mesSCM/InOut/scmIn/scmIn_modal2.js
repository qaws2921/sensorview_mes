var modal2_data = {
    part_code:'',
    sub_data : [

    ]
}

////////////////////////////시작 함수/////////////////////////////////////
function modal_start2() {
    modal_make2();

}

////////////////////////////클릭 함수/////////////////////////////////////

function modal2_add_btn() {
    if ($(".modal2_check1").val() !== '' || $(".modal2_check2").val() !== ''){
        var data = {};
        var data2 = {};
        var list = [];
        data.part_code = modal2_data.part_code;
        var check = true;
        var in_qty_sum = 0;
        var pack_sum = 0;
        for (var i = 1 ; i <=50; i++){
            data2 = {};
            if ($("#scmIn_sub"+i).val() !== '' && $("#scmIn2_sub"+i).val() !== ''){
                if (check){
                    $("#scmInDialogRightGrid").jqGrid('setCell',modal2_data.part_code,'lot', $("#scmIn_sub"+i).val());
                    check =false;
                }
                data2.lot = $("#scmIn_sub"+i).val();
                data2.qty = $("#scmIn2_sub"+i).val();
                in_qty_sum += Number($("#scmIn2_sub"+i).val());
                pack_sum += 1;
                list.push(data2);
            }
        }

        $("#scmInDialogRightGrid").jqGrid('setCell',modal2_data.part_code,'qty', in_qty_sum);
        $("#scmInDialogRightGrid").jqGrid('setCell',modal2_data.part_code,'pack_qty', pack_sum);

        // modal2_data.sub_data.forEach(function (value, index) {
        //     if(data.part_code === value.part_code){
        //         modal2_data.sub_data.splice(index, 1);
        //     }
        // });
        var idx;
        idx = findArrayIndex(modal2_data.sub_data,function(item) {return item.part_code === data.part_code})


        if (idx !== -1 ){
            modal2_data.sub_data.splice(idx, 1);
        }

        data.list = list;
        modal2_data.sub_data.push(data);
        console.log(modal2_data.sub_data);
        $("#scmInAddDialog").dialog('close');
    }else {
        alert("아무 값도 입력이 되지 않았습니다.");
    }
}

////////////////////////////호출 함수/////////////////////////////////////



function modal2_edit(rowid) {
    var data  = {};
    modal2_data.sub_data.forEach(function(s,i){
        if (s.part_code === rowid){
            data = s;
        }
    });
    for (var i = 1 ; i <=data.list.length; i++){
        $("#scmIn_sub"+i).val(data.list[i-1].lot);
        $("#scmIn2_sub"+i).val(data.list[i-1].qty);
    }
}


function modal_make2() {

    $("#scmInAddDialog").dialog({
        modal: true,
        width: 'auto',
        height: 'auto',
        autoOpen: false,
        resizable: false,
        buttons: [
            {
                text: '저장',
                'class': 'btn btn-primary btn-minier',
                click: function () {
                    modal2_add_btn();
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
    })
}

function effectiveness1(modal_objact) { // 유효성 검사
    // if (modal_objact.part_type_code === '') {
    //     alert("구분을 선택해주세요");
    //     return false;
    // } else if (modal_objact.part_grp_code === '') {
    //     alert("그룹코드를 입력해주세요");
    //     return false;
    // } else if (modal_objact.part_grp_name === '') {
    //     alert("그룸명 입력해주세요");
    //     return false;
    // } else {
    //
    //     return true;
    // }
}