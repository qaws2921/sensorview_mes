/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////


var main_data = {

    send_data: {},
    part_code:''
};


////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    jqGridResize('#mes_grid2', $('#mes_grid2').closest('[class*="col-"]'));
    selectBox();
    modal_start1();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

function get_btn(page) {
    main_data.send_data = value_return(".condition_main");
    main_data.send_data.keyword = "A";

    $('#mes_grid2').jqGrid('clearGridData');
    $('#mes_grid2').jqGrid("resetSelection");
    main_data.part_code ='';
    $("#mes_grid").setGridParam({
        url: '/sysPartGet',
        datatype: "json",
        page: page,
        postData: main_data.send_data
    }).trigger("reloadGrid");
}



function left_get_btn(page) {
    $("#mes_grid2").setGridParam({
        url: '/crmAssyCableGet',
        datatype: "json",
        page: page,
        postData: {keyword:main_data.part_code}
    }).trigger("reloadGrid");
}

function add_btn() {
    if (typeof main_data.part_code !== "undefined" && main_data.part_code !=='') {
        $('#mes_modal_grid').jqGrid('clearGridData');
        $('#mes_modal_grid').jqGrid("resetSelection");
        $("#part_group_select1_2 option:eq(0)").prop("selected", true).trigger("change");
        $("#part_group_select2_2 option:eq(0)").prop("selected", true).trigger("change");
        $("#part_group_select3_2 option:eq(0)").prop("selected", true).trigger("change");
        $("#addDialog").dialog('open');
        jqGridResize2("#mes_modal_grid", $('#mes_modal_grid').closest('[class*="col-"]'));
    }else {
        alert("품목을 선택해주세요");
    }
}



function delete_btn() {
    var gu5 = String.fromCharCode(5);
    var ids = $("#mes_grid2").getGridParam('selarrrow'); // 체크된 그리드 로우
    if (ids.length === 0) {
        alert("삭제하는 데이터를 선택해주세요");
    } else {
        if (confirm("삭제하겠습니까?")) {
            wrapWindowByMask2();
            ccn_ajax("/crmAssyCableDel", {cable_code:main_data.part_code,connector_code: ids.join(gu5)}).then(function (data) {
                if (data.result === 'NG') {
                    alert(data.message);
                } else {
                    left_get_btn(1);
                }
                closeWindowByMask();
            }).catch(function (err) {
                closeWindowByMask();
                console.error(err); // Error 출력
            });
        }
    }
}

////////////////////////////호출 함수//////////////////////////////////
function selectBox() {
    ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:'A'}).then(function (value) {
        for(var i=1; i<=3;i++) {
            group_cb(value,i);
        }
    })
}

function group_cb(value,i) {
    $('#part_group'+i).text(value["part_group"+i]);
    ccn_ajax('/sysPartGroupAllGet',{keyword:value.part_type_code,keyword2:i}).then(function (value1) {
        $('#part_group_select'+i).empty();
        var option = null;
        var allSelect = ($("<option></option>").text("전체").val(""));
        $('#part_group_select'+i).append(allSelect);
        for(var j=0;j<value1.length;j++){
            option = $("<option></option>").text(value1[j].part_grp_name).val(value1[j].part_grp_code);
            $('#part_group_select'+i).append(option);
        }
        $('#part_group_select'+i).select2();
    });
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        // mtype: 'POST',
        colNames: ['픔목','주파수','기준커넥터','품목코드','품목명', '규격'],
        colModel: [
            {name: 'part_grp_name1', index: 'part_grp_name1', sortable: false, width: 60},
            {name: 'part_grp_name2', index: 'part_grp_name2', sortable: false, width: 60},
            {name: 'part_grp_name3', index: 'part_grp_name3', sortable: false, width: 60},
            {name: 'part_code', index: 'part_code', key: true, sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
        ],
        caption: "조립케이블 구성 | MES",
        autowidth: true,
        height: 520,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        onCellSelect: function (rowid, icol, cellcontent, e) {
            main_data.part_code = rowid;
            left_get_btn(1);

        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});

    $('#mes_grid2').jqGrid({
        datatype: "local",
        mtype: 'POST',
        // mtype: 'POST',
        colNames: ['픔목','주파수','기준커넥터','품목코드','품목명', '규격'],
        colModel: [
            {name: 'part_grp_name1', index: 'part_grp_name1', sortable: false, width: 60},
            {name: 'part_grp_name2', index: 'part_grp_name2', sortable: false, width: 60},
            {name: 'part_grp_name3', index: 'part_grp_name3', sortable: false, width: 60},
            {name: 'part_code', index: 'part_code', key: true, sortable: false, width: 60},
            {name: 'part_name', index: 'part_name', sortable: false, width: 60},
            {name: 'spec', index: 'spec', sortable: false, width: 60},
        ],
        caption: "조립케이블 구성 | MES",
        autowidth: true,
        height: 520,
        pager: '#mes_grid2_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        multiselect: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
        }
    }).navGrid('#mes_grid2_pager', {search: false, add: false, edit: false, del: false});
}
