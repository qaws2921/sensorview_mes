/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: []
};

var colNames = ['구분','t1','t2','t3','품목코드','품목명','보관로케이션','업체명','규격','단위','L/T','검사기준','검사구분','재고최대','재고최소','등록자','수정일']

////////////////////////////시작 함수//////////////////////////////////

$(document).ready(function () {
    selectBox();
    //jqGrid_main();
    //jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    //jqgridPagerIcons();

});

////////////////////////////클릭 함수//////////////////////////////////
function select_change1(value) {
    ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:value}).then(function (value) {
        for(var i=1; i<=3;i++) {
            group_cb(value,i);
        }
        tttt(value);

    });




}



////////////////////////////호출 함수//////////////////////////////////



function tttt(value) {
    colNames[1] = value.part_group1;
    colNames[2] = value.part_group2;
    colNames[3] = value.part_group3;

    $.jgrid.gridUnload('#mes_grid');
    jqGrid_main();
    jqGridResize('#mes_grid', $('#mes_grid').closest('[class*="col-"]'));
    jqgridPagerIcons();
}

function group_cb(value,i) {
    $('#part_group'+i).text(value["part_group"+i]);
    ccn_ajax('/sysPartGroupAllGet',{keyword:value.part_type_code,keyword2:i}).then(function (value1) {
        console.log(value1)
        $('#part_group_select'+i).empty();
        var option = null;
        for(var j=0;j<value1.length;j++){
            option = $("<option></option>").text(value1[j].part_grp_name).val(value1[j].part_grp_code);
            $('#part_group_select'+i).append(option);
        }
        $('#part_group_select'+i).select2();
    });
}

function selectBox() {
    part_type_select_ajax("#part_type_select", "/sysPartTypeGet", "part_type_code", "part_type_name",{keyword:''}).then(function (data) {
        ccn_ajax('/sysPartTypeOneGet',{keyword:'',keyword2:data[0].part_type_code}).then(function (value) {
            console.log(value);
            for(var i=1; i<=3;i++) {
                group_cb(value,i);
            }

            tttt(value);

        })
    });
}

function jqGrid_main() {
    $('#mes_grid').jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: colNames,
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
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', sortable: false, width: 60},
            {name: '', index: '', width: 60, sortable: false, formatter: formmatterDate,},
        ],
        caption: "품목정보 | MES",
        autowidth: true,
        height: 550,
        pager: '#mes_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 500, 1000],
        viewrecords: true,
        multiselect: true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid);
        }
    }).navGrid('#mes_grid_pager', {search: false, add: false, edit: false, del: false});
}