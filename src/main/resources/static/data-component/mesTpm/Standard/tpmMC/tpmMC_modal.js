////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    suppModal_jqGrid();
}

////////////////////////////클릭 함수/////////////////////////////////////
function addUdate_btn() {
    var modal_objact = value_return(".modal_value");
    if (effectiveness1(modal_objact)) {
        var text = '저장하겠습니까?';
        if (main_data.check === "U") {
            text = '수정하겠습니까?';
        }
        if (confirm(text)) {

            modal_objact.keyword = main_data.check;

            ccn_ajax("/sysBPartGroupAdd", modal_objact).then(function (data) {
                if (data.result === 'NG') {
                    alert(data.message);
                } else {
                    if (main_data.check === "I") {
                        get_btn(1);
                    } else {
                        get_btn_post($("#mes_grid").getGridParam('page'));
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
function modal_make1() {

    $("#addDialog").dialog({
        modal: true,
        width: '800',
        height: 'auto',
        autoOpen: false,
        resizable: false,
        buttons: [
            {
                text: '저장',
                'class': 'btn btn-primary btn-minier',
                click: function () {
                    addUdate_btn();
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
    if (modal_objact.part_type_code === '') {
        alert("구분을 선택해주세요");
        return false;
    } else if (modal_objact.part_grp_code === '') {
        alert("그룹코드를 입력해주세요");
        return false;
    } else if (modal_objact.part_grp_name === '') {
        alert("그룸명 입력해주세요");
        return false;
    } else {

        return true;
    }
}


function suppModal_jqGrid() {
    $('#SuppSearchGrid').jqGrid({
        // data url
        url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
        // method type
        mtype: "GET",
        // return data type
        datatype: "jsonp",
        colNames: ['업체코드','업체명','사업자번호','대표','주소'],
        colModel: [
            {name: 'OrderID', index: 'supp_code', key:true, sortable: false},
            {name: 'OrderID', index: 'supp_name', sortable: false},
            {name: 'OrderID', index: 'supp_no', sortable: false},
            {name: 'OrderID', index: 'emp_name', sortable: false},
            {name: 'OrderID', index: 'address', sortable: false}
        ],
        width : "465",
        rowNum: 100,
        rowList:[100,200,300,500,1000],
        jsonReader: {cell:""},
        viewrecords: true
    });
}
