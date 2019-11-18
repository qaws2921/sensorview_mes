function modal_start1() {
    modal_make1();
}

function modal_make1() {

    $("#addDialog").dialog({
        modal:true,
        width:'auto',
        height:'auto',
        autoOpen: false,
        resizable: false,
        buttons: [
            {
                text: '저장',
                'class': 'btn btn-primary btn-minier',
                click: function() {
                    $(this).dialog('close');
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