////////////////////////////시작 함수/////////////////////////////////////
function suppModal_start() {

    suppModal_make();
    suppModal_jqGrid();

    jqGridResize("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////

function suppModal_get_btn(page) {
    var supp_send_data = value_return(".suppModal_condition");
    var data_go = {}
    if (supp_send_data.keyword === 'supp_name'){
        data_go = {keyword2 : supp_send_data.keyword3,keyword:""};
    } else {
        data_go = {keyword : supp_send_data.keyword3,keyword2:""};
    }


    console.log(data_go);

    $("#SuppSearchGrid").setGridParam({
        url: '/sysSuppGet',
        datatype: "json",
        page: page,
        postData: data_go,
    }).trigger("reloadGrid");
}

function suppModal_check() {
    if ($( "#SuppSearchGrid" ).getGridParam( "selrow" )) {
        var ids = $( "#SuppSearchGrid" ).getGridParam( "selrow" );
        var data = $('#SuppSearchGrid').jqGrid('getRowData', ids);
        console.log(data.supp_code,data.supp_name);
        suppModal_bus(data.supp_code,data.supp_name);

        $("#supp-search-dialog").dialog('close');
    }else {
        alert("선택하십시오");
    }
}


function suppModal_close() {
    $("#supp-search-dialog").dialog('close');


}

////////////////////////////호출 함수/////////////////////////////////////



function suppModal_make() {
    $("#supp-search-dialog").dialog({
        autoOpen:false,
        modal: true,
        minWidth:900,
        height: 'auto',
        resizable: false,
        buttons: [
            {
                "class": "hide",
            }
        ]

    });

}

function suppModal_jqGrid() {
    $('#SuppSearchGrid').jqGrid({
        datatype: "local",
        // 다중 select
        mtype: 'POST',
        // 타이틀
        caption: "업체조회 | MES",
        colNames: ['','업체코드','업체명','사업자번호','대표','주소'],
        colModel: [
            {name:'radio',index:'radio',align:"center",width:30 ,sortable: false, formatter: function (cellValue, option) {
                    return '<input type="radio" name="radio_' + option.gid + '" onclick="return false;"/>';
            }},
            {name: 'supp_code', index: 'supp_code', key:true,width: 80},
            {name: 'supp_name', index: 'supp_name',width: 80},
            {name: 'supp_no', index: 'supp_no',width: 200},
            {name: 'emp_name', index: 'emp_name',width: 80},
            {name: 'address', index: 'address',width: 200},
        ],
        // 페이지 수 보기 (1 / 100) = true
        // 높이 : 450px
        autowidth: true,
        height: 250,
        // 디폴트 조회 개수 : 100
        rowNum: 100,
        pager: '#SuppSearchGridPager',
        jsonReader: {cell:""},
        rowList: [100, 200, 300, 400],
        viewrecords: true,
        beforeSelectRow: function (rowid, e) {
            console.log("시작");
            var radio = $(e.target).closest('tr').find('input[type="radio"]');
            $('input[name="radio_SuppSearchGrid"]').removeAttr("checked").trigger('change');

            radio.prop('checked', true).trigger('change');
            console.log("끝");
            return true; // allow row selection
        },
        // 단위 별 조회 개수
        // pager 세팅
        // jqGrid load 시 실행 함수 = setTimeout
        // setTimeout함수는 함수 뒤 시간이 지나면 호출됨. 현재 : 0 (1000 = 1초)
        // 호출되는 함수는 pager icon 함수
        loadComplete : function() {

        }

    });
}
/////////////////////////////////////////지울거////////////////////////////////

