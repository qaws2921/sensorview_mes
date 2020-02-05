var part_gu = 'N';

////////////////////////////시작 함수/////////////////////////////////////
function partModal_start() {
    partModal_make();
    partModal_jqGrid();
    partSelectBox();
    jqGridResize("#partSearchGrid", $('#partSearchGrid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////

function partModal_get_btn(page) {
    var part_send_data = value_return(".part_condition");
    $("#partSearchGrid").setGridParam({
        url: '/sysPartNameGet',
        datatype: "json",
        page: page,
        postData: part_send_data,
    }).trigger("reloadGrid");
}

function partModal_check() {
    if ($( "#partSearchGrid" ).getGridParam( "selrow" )) {
        var ids = $( "#partSearchGrid" ).getGridParam( "selrow" );
        var data = $('#partSearchGrid').jqGrid('getRowData', ids);
        partModal_bus(data.part_code,data.part_name);
        $("#part-search-dialog").dialog('close');


    }else {
        alert("선택하십시오");
    }
}

function partModal_close() {
    $("#part-search-dialog").dialog('close');
    suppModal_close_bus();

}

function select_change1(value) {
    part_type_select_ajax("#part_group_select_modal", "/sysPartGroupAllGet", "part_grp_code", "part_grp_name",{keyword:value}).then(function (data2){
        part_type_select_ajax('#part_prod_select_modal', "/sysPartGroup2AllGet","part_grp_code2" ,"part_grp_name2",{keyword:value, keyword2:data2[0].part_grp_code})
    }).catch(function (err){
        $('#part_group_select').empty();
        $('#part_prod_select').empty();
    });
}
function select_change2(value) {
    part_type_select_ajax('#part_prod_select_modal', "/sysPartGroup2AllGet","part_grp_code2" ,"part_grp_name2",{keyword:$('#part_type_select').val(), keyword2:value}).catch(function (err){
        $('#part_prod_select').empty();
    });
}



////////////////////////////호출 함수/////////////////////////////////////
function partSelectBox() {
    part_type_select_ajax("#part_type_select_modal", "/sysPartTypeGet", "part_type_code", "part_type_name",{keyword:''}).then(function (data) {
        part_type_select_ajax("#part_group_select_modal", "/sysPartGroupAllGet", "part_grp_code", "part_grp_name",{keyword:data[0].part_type_code}).then(function (data2){
            part_type_select_ajax('#part_prod_select_modal', "/sysPartGroup2AllGet","part_grp_code2" ,"part_grp_name2",{keyword:data[0].part_type_code, keyword2:data2[0].part_grp_code})
        });
    }).catch(function (err){
        $('#part_group_select').empty();
        $('#part_prod_select').empty();
    });
}


function partModal_make() {
    $("#part-search-dialog").dialog({
        autoOpen:false,
        modal: true,
        minWidth:1100,
        height: 'auto',
        resizable: false,
    });

}



function partModal_jqGrid() {
    $('#partSearchGrid').jqGrid({
        datatype: "local",
        // 다중 select
        mtype: 'POST',
        // 타이틀
        caption: "품목조회 | MES",
        colNames: ['','코드','명칭','Center Wire(Ø)','주파수(GHz)','제품유형','품목군','제품군'],
        colModel: [
            {name:'radio',index:'radio',align:"center",width:30 ,sortable: false, formatter: function (cellValue, option) {
                    return '<input type="radio" name="radio_' + option.gid + '" onclick="return false;"/>';
            }},
            {name: 'part_code', index: 'part_code',key:true, sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'center_wire', index: 'center_wire', sortable: false, width: 60},
            {name: 'frequency', index: 'frequency', sortable: false, width: 60},
            {name: 'part_type_name', index: 'part_type_name', sortable: false, width: 60},
            {name: 'part_grp_name1', index: 'part_grp_name1', sortable: false, width: 60},
            {name: 'part_grp_name2', index: 'part_grp_name2', sortable: false, width: 60}
        ],
        autowidth: true,
        height: 250,
        rowNum: 100,
        pager: '#partSearchGridPager',
        jsonReader: {cell:""},
        rowList: [100, 200, 300, 400],
        viewrecords: true,
        beforeSelectRow: function (rowid, e) {
            var radio = $(e.target).closest('tr').find('input[type="radio"]');
            $('input[name="radio_SuppSearchGrid"]').removeAttr("checked").trigger('change');
            radio.prop('checked', true).trigger('change');
            return true; // allow row selection
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            partModal_check();
        }
    });
}




