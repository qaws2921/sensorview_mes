var part_gu = 'N';

var colNames_part = ['','구분','t1','t2','t3','품목코드','품목명','규격'];

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
    grid_head_change_part();
    $("#partSearchGrid").setGridParam({
        url: '/sysPartGet',
        datatype: "json",
        page: page,
        postData: part_send_data,
    }).trigger("reloadGrid");
}

function partModal_check() {
    if ($( "#partSearchGrid" ).getGridParam( "selrow" )) {
        var ids = $( "#partSearchGrid" ).getGridParam( "selrow" );
        var data = $('#partSearchGrid').jqGrid('getRowData', ids);
        partModal_bus(data.part_code);
        $("#part-search-dialog").dialog('close');


    }else {
        alert("선택하십시오");
    }
}




function partModal_close() {
    $("#part-search-dialog").dialog('close');
    suppModal_close_bus();

}


function select_change_part(value) {
    ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:value}).then(function (value) {
        for(var i=1; i<=3;i++) {
            group_cb_part(value,i);
            grid_head_value_change_part(value);

            if(part_gu === 'Y'){
                grid_head_change_part();
                part_gu = 'N';
            }

        }

    });
}






////////////////////////////호출 함수/////////////////////////////////////
function partSelectBox() {
    part_type_select_ajax("#part_type_select_part", "/sysPartTypeGet", "part_type_code", "part_type_name",{keyword:''}).then(function (data) {
        ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:data[0].part_type_code}).then(function (value) {
            for(var i=1; i<=3;i++) {
                group_cb_part(value,i);
                grid_head_value_change_part(value);
                grid_head_change_part();
            }
        })
    });

}


function grid_head_change_part() {
    $.jgrid.gridUnload('#partSearchGrid');
    partModal_jqGrid();
    jqGridResize2('#partSearchGrid', $('#partSearchGrid').closest('[class*="col-"]'));
    jqgridPagerIcons();
}

function grid_head_value_change_part(value) {
    colNames_part[2] = value.part_group1;
    colNames_part[3] = value.part_group2;
    colNames_part[4] = value.part_group3;
}

function group_cb_part(value,i) {
    $('#part_group'+i+'_part').text(value["part_group"+i]);
    ccn_ajax('/sysPartGroupAllGet',{keyword:value.part_type_code,keyword2:i}).then(function (value1) {
        $('#part_group_select'+i+'_part').empty();
        var option = null;
        var allSelect = ($("<option></option>").text("전체").val(""));
        $('#part_group_select'+i+'_part').append(allSelect);
        for(var j=0;j<value1.length;j++){
            option = $("<option></option>").text(value1[j].part_grp_name).val(value1[j].part_grp_code);
            $('#part_group_select'+i+'_part').append(option);
        }
        $('#part_group_select'+i+'_part').select2();
    });
}


function partModal_make() {
    $("#part-search-dialog").dialog({
        autoOpen:false,
        modal: true,
        minWidth:1100,
        height: 'auto',
        resizable: false,
        buttons: [
            {
                "class": "hide",
            }
        ]

    });

}



function partModal_jqGrid() {
    $('#partSearchGrid').jqGrid({
        datatype: "local",
        // 다중 select
        mtype: 'POST',
        // 타이틀
        caption: "품목조회 | MES",
        colNames: colNames_part,
        colModel: [
            {name:'radio',index:'radio',align:"center",width:30 ,sortable: false, formatter: function (cellValue, option) {
                    return '<input type="radio" name="radio_' + option.gid + '" onclick="return false;"/>';
            }},
            {name: 'part_type_name', index: 'part_type_name', sortable: false, width: 60},
            {name: 'part_grp_name1', index: 'part_grp_name1', sortable: false, width: 60},
            {name: 'part_grp_name2', index: 'part_grp_name2', sortable: false, width: 60},
            {name: 'part_grp_name3', index: 'part_grp_name3', sortable: false, width: 60},
            {name: 'part_code', index: 'part_code', key:true, sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
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




