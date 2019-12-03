////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    selectBoxmodal();

}

////////////////////////////클릭 함수/////////////////////////////////////
function select_change1(value) {
    select_makes_sub("#partGrp_select","/sysBPartGroupSelectGet","part_grp_code","part_grp_name",{keyword:value},"Y");
}


////////////////////////////호출 함수/////////////////////////////////////
function selectBoxmodal() {
    select_makes2("#gubun_select", "/getPartType", "part_type_code", "part_type_name").then(function (data) {
        select_makes_sub("#partGrp_select","/sysBPartGroupSelectGet","part_grp_code","part_grp_name",{keyword:data},"Y");
    });

}


function modal_make1() {

    $("#addDialog").dialog({
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

