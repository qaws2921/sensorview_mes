/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: [],
    auth:{}
};
////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));

    modal_start1();
    selectBox();
    authcheck();
    jqgridPagerIcons();
});


////////////////////////////클릭 함수//////////////////////////////////

function add_btn() {
    if (main_data.auth.check_add !="N") {

        main_data.check = 'I';
        $('#mes_modal1_grid1').jqGrid("clearGridData");




        $("#addDialog").dialog('open');


        jqGridResize2("#mes_modal1_grid1", $('#mes_modal1_grid1').closest('[class*="col-"]'));


    } else {
        alert("추가권한이 없습니다,");
    }
}


function select_main_change1(value) {
    part_type_select_ajax("#part_group2_select", "/sysPartGroup2AllGet", "part_grp_code2", "part_grp_name2",{keyword:'B', keyword2:value}).then(function (data2) {
        part_type_select_ajax("#part_name_select", "/sysPartNameAllGet", "part_code", "part_name",{keyword:'B', keyword2:value, keyword3:data2[0].part_grp_code2}).then(function (data3) {
            if (data3.length !== 0){
                $("#route_name_main").val(data3[0].route_name);
                $("#route_code_main").val(data3[0].route_code);
            } else {
                $("#route_name_main").val("");
                $("#route_code_main").val("");
            }

        }).catch(function (err) {
            $("#part_name_select").empty();
            $("#route_name_main").val("");
            $("#route_code_main").val("");
        });
    }).catch(function (err) {
        $("#part_group2_select").empty();
        $("#part_name_select").empty();
        $("#route_name_main").val("");
        $("#route_code_main").val("");
    });
}

function select_main_change2(value) {
    part_type_select_ajax("#part_name_select", "/sysPartNameAllGet", "part_code", "part_name",{keyword:'B', keyword2:$("#part_group1_select").val(), keyword3:value}).then(function (data3) {
        if (data3.length !== 0){
            $("#route_name_main").val(data3[0].route_name);
            $("#route_code_main").val(data3[0].route_code);
        } else {
            $("#route_name_main").val("");
            $("#route_code_main").val("");
        }

    }).catch(function (err) {
        $("#part_name_select").empty();
        $("#route_name_main").val("");
        $("#route_code_main").val("");
    });
}


function select_main_change3(value) {
    ccn_ajax("/sysPartNameOneGet", {keyword:value}).then(function (data) {
        if (data !== null){
            $("#route_name_main").val(data.route_name);
            $("#route_code_main").val(data.route_code);
        } else {
            $("#route_name_main").val("");
            $("#route_code_main").val("");
        }
    });
}

////////////////////////////호출 함수//////////////////////////////////
function authcheck() {
    ccn_ajax("/menuAuthGet", {keyword: "sysSPart"}).then(function (data) {
        main_data.auth = data;
    });
}



function selectBox() {
    part_type_select_ajax("#part_group1_select", "/sysPartGroupAllGet", "part_grp_code", "part_grp_name",{keyword:'B'}).then(function (data) {
        part_type_select_ajax("#part_group2_select", "/sysPartGroup2AllGet", "part_grp_code2", "part_grp_name2",{keyword:'B', keyword2:data[0].part_grp_code}).then(function (data2) {
            part_type_select_ajax("#part_name_select", "/sysPartNameAllGet", "part_code", "part_name",{keyword:'B', keyword2:data[0].part_grp_code, keyword3:data2[0].part_grp_code2}).then(function (data3) {
                if (data3.length !== 0){
                    $("#route_name_main").val(data3[0].route_name);
                    $("#route_code_main").val(data3[0].route_code);
                } else {
                    $("#route_name_main").val("");
                    $("#route_code_main").val("");
                }

            }).catch(function (err) {
                $("#part_name_select").empty();
                $("#route_name_main").val("");
                $("#route_code_main").val("");
            });
        }).catch(function (err) {
            $("#part_group2_select").empty();
            $("#part_name_select").empty();
            $("#route_name_main").val("");
            $("#route_code_main").val("");
        });
    });

}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['코드','품명','공정구분','생산구분','용도','제품유형','품목군','제품군','등록자','등록일자','비고'],
        colModel: [
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60}
        ],
        caption: "제품 등록 | MES",
        autowidth: true,
        height: 570,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],

        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
            update_btn(data);

        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}

