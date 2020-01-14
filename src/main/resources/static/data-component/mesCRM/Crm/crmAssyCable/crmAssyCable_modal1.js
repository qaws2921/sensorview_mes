////////////////////////////데이터////////////////////////////////////////
var modal_grid_data=[];

var main_data = {
    supp_check: 'A',
};

var lastsel;
var saverow = 0;

var savecol = 0;

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {

    modal_make1();
    jqGrid_modal1();

    selectBox_modal();

    jqGridResize('#mes_modal_grid',$('#mes_modal_grid').closest('[class*="col-"]'));
}


////////////////////////////클릭 함수/////////////////////////////////////
function modal_get_btn(page) {
    var data = value_return(".condition_modal");
    data.keyword = "A";

    $("#mes_modal_grid").setGridParam({
        url: '/sysPartGet',
        datatype: "json",
        page: page,
        postData: data
    }).trigger("reloadGrid");
}



function close_modal1_btn() {
    $("#addDialog").dialog('close');
}



function addupdate_btn() {
    var gu5 = String.fromCharCode(5);
    var connector_code = $("#mes_modal_grid").getGridParam('selarrrow'); // 체크된 그리드 로우
    if (connector_code.length !== 0) {
        var text = '저장하겠습니까?';
        if (confirm(text)) {

            ccn_ajax("/crmAssyCableAdd", {cable_code:main_data.part_code,connector_code:connector_code.join(gu5)}).then(function (data) {
                if (data.result === 'NG') {
                    alert(data.message);
                } else {
                        left_get_btn(1);

                }
                $("#addDialog").dialog('close');
            }).catch(function (err) {
                alert("저장실패");
            });
        }
    } else {
        alert("목록을 선택해주세요");
    }




}

////////////////////////////호출 함수/////////////////////////////////////

function modal_make1() {
    $("#addDialog").dialog({
        modal: true,
        width:'auto',
        height: 'auto',
        autoOpen:false,
        resizable: false,
        open: function () {
            if ($.ui && $.ui.dialog && !$.ui.dialog.prototype._allowInteractionRemapped && $(this).closest(".ui-dialog").length) {
                if ($.ui.dialog.prototype._allowInteraction) {
                    $.ui.dialog.prototype._allowInteraction = function (e) {
                        if ($(e.target).closest('.select2-drop').length) return true;

                        if (typeof ui_dialog_interaction != "undefined") {
                            return ui_dialog_interaction.apply(this, arguments);
                        } else {
                            return true;
                        }
                    };
                    $.ui.dialog.prototype._allowInteractionRemapped = true;
                } else {
                    $.error("You must upgrade jQuery UI or else.");
                }
            }
        }
    });
}

function jqGrid_modal1() {
    $('#mes_modal_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        caption: "조립케이블 구성 | MES",
        colNames: ['픔목','주파수','기준커넥터','품목코드','품목명', '규격'],
        colModel: [
            {name: 'part_grp_name1', index: 'part_grp_name1', sortable: false, width: 60},
            {name: 'part_grp_name2', index: 'part_grp_name2', sortable: false, width: 60},
            {name: 'part_grp_name3', index: 'part_grp_name3', sortable: false, width: 60},
            {name: 'part_code', index: 'part_code', key: true, sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
        ],

        autowidth: true,
        height: 250,
        pager: '#mes_modal_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        multiselect: true,



    });
}





function selectBox_modal() {
    ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:'A'}).then(function (value) {
        for(var i=1; i<=3;i++) {
            group_cb_modal(value,i);
        }
    })
}

function group_cb_modal(value,i) {
    $('#part_group'+i+'_2').text(value["part_group"+i]);
    ccn_ajax('/sysPartGroupAllGet',{keyword:value.part_type_code,keyword2:i}).then(function (value1) {
        $('#part_group_select'+i+'_2').empty();
        var option = null;
        var allSelect = ($("<option></option>").text("전체").val(""));
        $('#part_group_select'+i+'_2').append(allSelect);
        for(var j=0;j<value1.length;j++){
            option = $("<option></option>").text(value1[j].part_grp_name).val(value1[j].part_grp_code);
            $('#part_group_select'+i+'_2').append(option);
        }
        $('#part_group_select'+i+'_2').select2();
    });
}