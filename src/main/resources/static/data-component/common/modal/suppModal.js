////////////////////////////시작 함수/////////////////////////////////////
function suppModal_start() {

    suppModal_make();
    suppModal_jqGrid();
    jqgridPagerIcons();
    jqGridResize("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////

function suppModal_get_btn(page) {
    var supp_send_data = value_return(".suppModal_condition");
    console.log(supp_send_data);

    $("#SuppSearchGrid").setGridParam({
        datatype: "local",
        page: page,
        data: suppGrid_data
    }).trigger("reloadGrid");
}

function suppModal_check() {
    if ($( "#SuppSearchGrid" ).getGridParam( "selrow" )) {
        var ids = $( "#SuppSearchGrid" ).getGridParam( "selrow" );
        var data = $('#SuppSearchGrid').jqGrid('getRowData', ids);
        console.log(data.supp_code,data.supp_name);
        suppModal_bus(data.supp_code,data.supp_name);

        $("#SuppSearchGrid").dialog('close');
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
        width: 'auto',
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

        // 타이틀
        caption: "업체조회 | MES",
        colNames: ['','업체코드','업체명','사업자번호','대표','주소'],
        colModel: [
            {name:'radio',index:'radio',align:"center",width:30 ,sortable: false, formatter: function (cellValue, option) {
                    return '<input type="radio" name="radio_' + option.gid + '" onclick="return false;"/>';
            }},
            {name: 'supp_code', index: 'supp_code',width: 80},
            {name: 'supp_name', index: 'supp_name',width: 80},
            {name: 'supp_num', index: 'supp_num',width: 200},
            {name: 'ceo', index: 'ceo',width: 80},
            {name: 'address', index: 'address',width: 200},
        ],
        // 페이지 수 보기 (1 / 100) = true
        // 높이 : 450px
        width: 800,
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

var suppGrid_data =
    [
        {supp_code:"S0001",supp_name:"협력사1",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0002",supp_name:"협력사2",supp_num:"1482-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0003",supp_name:"협력사3",supp_num:"1522-20925429",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0004",supp_name:"협력사4",supp_num:"1582-21925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0005",supp_name:"협력사5",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0006",supp_name:"협력사6",supp_num:"1582-22135829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0007",supp_name:"협력사7",supp_num:"1582-20885829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0008",supp_name:"협력사8",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0009",supp_name:"협력사9",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0010",supp_name:"협력사10",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0011",supp_name:"협력사11",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0012",supp_name:"협력사12",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0013",supp_name:"협력사13",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0014",supp_name:"협력사14",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0015",supp_name:"협력사15",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0016",supp_name:"협력사16",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0017",supp_name:"협력사17",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
        {supp_code:"S0018",supp_name:"협력사18",supp_num:"1582-20925829",ceo:"KIM",address:"서울특별시 강남구"},
    ];
