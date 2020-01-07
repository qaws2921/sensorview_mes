var modal3_data = {
    part_code: '',
    sub_data: []
}


////////////////////////////시작 함수/////////////////////////////////////
function modal_start3() {

    modal_make3();
    modal3_jqGrid();
    datepickerInput_modal3();
    jqGridResize("#modal3Grid", $('#modal3Grid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////

function modal3_get_btn(page) {
    var modal3_send_data = value_return(".modal3_condition");
    modal3_send_data.start_date = modal3_send_data.start_date.replace(/\-/g, '');
    modal3_send_data.end_date = modal3_send_data.end_date.replace(/\-/g, '');

    modal3_send_data.keyword2 = '0';
    modal3_send_data.keyword3 = modal3_data.part_code;
    $("#modal3Grid").setGridParam({
        url: '/scmOrderListGet',
        datatype: "json",
        page: page,
        postData: crm_send_data,
    }).trigger("reloadGrid");
}




function modal3_close() {
    $("#addDialog3").dialog('close');
    suppModal_close_bus();

}


function modal3_modal_open(rowid) {
    modal3_data.part_code = rowid;

    $("#supp_name_modal3").val($("#supp_name_modal").val());
    $("#supp_code_modal3").val($("#supp_code_modal").val());

    datepicker_makes("#modal3_datepicker", -1);
    datepicker_makes("#modal3_datepicker2", 0);

    $("#addDialog3").dialog('open');
    jqGridResize2("#modal3Grid", $('#modal3Grid').closest('[class*="col-"]'));
}

////////////////////////////호출 함수/////////////////////////////////////




function modal_make3() {
    $("#addDialog3").dialog({
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

function modal3_jqGrid() {
    $('#modal3Grid').jqGrid({
        datatype: "local",
        // 다중 select
        mtype: 'POST',
        // 타이틀
        caption: "업체조회 | MES",
        colNames: ['발주일자', '발주번호', '업체명', '품번', '품명', '규격', '단위', '상태', '발주수량', '입고수량', '미입고', '등록자', '등록일시'],
        colModel: [
            {name: 'work_date', index: 'work_date', sortable: false, width: 60, formatter: formmatterDate2},
            {name: 'ord_no', index: 'ord_no', sortable: false, width: 80},
            {name: 'supp_name', index: 'supp_name', sortable: false, width: 60},
            {name: 'part_code', index: 'part_code', sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
            {name: 'unit_name', index: 'unit_name', sortable: false, width: 40},
            {name: 'status_name', index: 'status_name', sortable: false, width: 40},
            {name: 'ord_qty', index: 'ord_qty', sortable: false, width: 60},
            {name: 'qty', index: 'qty', sortable: false, width: 60},
            {name: 'not_qty', index: 'not_qty', sortable: false, width: 60},
            {name: 'user_name', index: 'user_code', sortable: false, width: 60},
            {name: 'update_date', index: 'update_date', sortable: false, width: 90, formatter: formmatterDate}
        ],
        autowidth: true,
        height: 250,
        rowNum: 100,
        pager: '#modal3GridPager',
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
            crmModal_check();

        }

    });
}

function datepickerInput_modal3() {
    datepicker_makes("#modal3_datepicker", -1);
    datepicker_makes("#modal3_datepicker2", 0);
}


