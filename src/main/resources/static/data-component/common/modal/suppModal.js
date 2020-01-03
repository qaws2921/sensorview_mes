var suppModal_data = {
    send_data: {},
    send_data_post: {},
}



////////////////////////////시작 함수/////////////////////////////////////
function suppModal_start() {

    suppModal_make();
    suppModal_jqGrid();
    jqGridResize("#SuppSearchGrid", $('#SuppSearchGrid').closest('[class*="col-"]'));
    selectBox_suppModal();
}


////////////////////////////클릭 함수/////////////////////////////////////

function suppModal_get_btn(page) {
    suppModal_data.send_data = value_return(".suppModal_condition");
    console.log(suppModal_data);
    $("#SuppSearchGrid").setGridParam({
        url: '/suppModalGet',
        datatype: "json",
        page: page,
        postData: suppModal_data.send_data
    }).trigger("reloadGrid");
    // var data_go = {}
    // if (supp_send_data.keyword === 'supp_name'){
    //     data_go = {keyword2 : supp_send_data.keyword3,keyword:""};
    // } else {
    //     data_go = {keyword : supp_send_data.keyword3,keyword2:""};
    // }

    // $("#SuppSearchGrid").setGridParam({
    //     url: '/sysSuppGet',
    //     datatype: "json",
    //     page: page,
    //     postData: data_go,
    // }).trigger("reloadGrid");
}

function suppModal_check() {
    if ($( "#SuppSearchGrid" ).getGridParam( "selrow" )) {
        var ids = $( "#SuppSearchGrid" ).getGridParam( "selrow" );
        var data = $('#SuppSearchGrid').jqGrid('getRowData', ids);
        suppModal_bus(data.supp_code,data.supp_name);

        $("#supp-search-dialog").dialog('close');
    }else {
        alert("선택하십시오");
    }
}


function suppModal_close() {
    $("#supp-search-dialog").dialog('close');
    suppModal_close_bus();

}

////////////////////////////호출 함수/////////////////////////////////////
function selectBox_suppModal() {
    $('#gubun_select').select2();
}

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
        ],
        open: function () {
            if ($.ui && $.ui.dialog && !$.ui.dialog.prototype._allowInteractionRemapped && $(this).closest(".ui-dialog").length) {
                if ($.ui.dialog.prototype._allowInteraction) {
                    $.ui.dialog.prototype._allowInteraction = function (e) {
                        if ($(e.target).closest('.select2-drop').length) return true;

                        if (typeof ui_dialog_interaction!="undefined") {
                            return ui_dialog_interaction.apply(this, arguments);
                        } else {
                            return true;
                        }
                    };
                    $.ui.dialog.prototype._allowInteractionRemapped = true;
                }
                else {
                    $.error("You must upgrade jQuery UI or else.");
                }
            }
        },
        _allowInteraction: function (event) {
            return !!$(e.target).closest('.ui-dialog, .ui-datepicker, .select2-drop').length;
        }

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
            {name: 'supp_code', index: 'supp_code', key:true,width: 80, sortable: false},
            {name: 'supp_name', index: 'supp_name',width: 200, sortable: false},
            {name: 'supp_no', index: 'supp_no',width: 80, sortable: false},
            {name: 'emp_name', index: 'emp_name',width: 80, sortable: false},
            {name: 'address', index: 'address',width: 200, sortable: false},
        ],
        autowidth: true,
        height: 250,
        rowNum: 100,
        pager: '#SuppSearchGridPager',
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
            var data = $('#SuppSearchGrid').jqGrid('getRowData', rowid);
            suppModal_bus(data.supp_code,data.supp_name);
            $("#supp-search-dialog").dialog('close');

        }

    });
}


