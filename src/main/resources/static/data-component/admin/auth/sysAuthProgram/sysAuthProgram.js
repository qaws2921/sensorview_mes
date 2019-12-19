/**
 * various.js 와 연동
 */

////////////////////////////데이터/////////////////////////////////////

var main_data = {
    check: 'I',
    send_data: {},
    send_data_post: {},
    readonly: ['auth_code']
};

////////////////////////////시작 함수/////////////////////////////////////

$(document).ready(function () {
    jqGrid_main(); // main 그리드 생성
    jqGridResize("#mes_grid" , $('#mes_grid').closest('[class*="col-"]')); //그리드 리 사이즈
    jqGridResize("#mes_grid2" , $('#mes_grid2').closest('[class*="col-"]')); //그리드 리 사이즈

    selectBox();
    /*----모달----*/
    jqgridPagerIcons(); // 그리드 아이콘 설정 맨 하단으로

});


////////////////////////////클릭 함수/////////////////////////////////////
// 조회 버튼
function get_btn() {
    main_data.send_data_post = main_data.send_data; // 수정 삭제시 다시 조회하기 위한 데이터저장

    $("#mes_grid2").setGridParam({ // 그리드 조회
        url: '/sysAuthProgramGet',
        datatype: "json",
        postData: main_data.send_data
    }).trigger("reloadGrid");
}

// 수정 삭제 시 호출 하는 조회
function get_btn_post() {
    $("#mes_grid2").setGridParam({ // 그리드 조회
        url: '/sysAuthProgramGet',
        datatype: "json",
        postData: main_data.send_data_post
    }).trigger("reloadGrid");
}


function main_select_change(e) {
    if (main_data.send_data.keyword == null || main_data.send_data.keyword == "" ) {
        alert("권한명을 선택해주세요");
    }else {
        main_data.send_data.keyword2 = e.value;
        get_btn();
    }


}


function check_add_btn(object) {
    if (main_data.send_data.keyword == null) {
        alert("권한그룹명을 선택해주세요");
    } else {
        if (confirm("저장하겠습니까?")) {
            var ids2 = $("#mes_grid2").getRowData();
            $.ajax({
                url: "/sysAuthProgramAdd",
                data: JSON.stringify(ids2),
                type: 'POST',
                async: true,
                contentType: 'application/json',
                dataType: "json",
                success: function (data) {
                    if (data.result === 'NG') {
                        alert(data.message);
                    } else {
                        get_btn_post();
                    }
                },
                error: function () {
                    alert("저장실패");
                }
            });

        }
    }
}

////////////////////////////호출 함수/////////////////////////////////////
function selectBox() {
    select_makes("#code_group", "/menuAllGet", "menu_code", "menu_name");

}



function jqGrid_main() {
    $("#mes_grid").jqGrid({
        url: "/sysAuthAllGet",
        datatype: "JSON",
        mtype: 'POST',
        colNames: ['권한그룹코드', '권한그룹명'],
        colModel: [
            {name: 'auth_code', index: 'auth_code', key: true, sortable: false, hidden: true},
            {name: 'auth_name', index: 'auth_name', align: 'center', sortable: false},
        ],
        caption: "권한그룹별 프로그램관리 | MES",
        autowidth: true,
        height: 550,
        jsonReader: {cell: ""},
        viewrecords: true,
        onCellSelect: function (rowid, iRow, iCol, e) { // jqGrid 더블 클릭시 실행
            main_data.send_data = value_return(".condition_main");
            main_data.send_data.keyword = rowid;
            get_btn();
        },
    });

    $("#mes_grid2").jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames: ['권한', '부모', '레벨', '메뉴코드', '메뉴', '조회', '추가', '수정', '삭제'],
        colModel: [
            {name: 'auth_code', index: 'auth_code', sortable: false, hidden: true, width: 380},
            {
                name: 'parent_menu_code',
                index: 'parent_menu_code',
                sortable: false,
                hidden: true,
                width: 380
            },
            {name: 'level', index: 'level', sortable: false, hidden: true, width: 380},
            {name: 'menu_code', index: 'menu_code', key: true, hidden: true, sortable: false, width: 380},
            {name: 'menu_name', index: 'menu_name', formatter: cell, sortable: false, width: 500},
            {
                name: 'check_get',
                index: 'check_get',
                sortable: false,
                align: 'center',
                width: 380,
                formatter: 'checkbox',
                edittype: "checkbox",
                editoptions: {value: 'Y:N', defaultValue: 'N'},
                formatoptions: {disabled: false}

            },
            {
                name: 'check_add',
                index: 'check_add',
                sortable: false,
                align: 'center',
                width: 380,
                formatter: 'checkbox',
                edittype: "checkbox",
                editoptions: {value: 'Y:N', defaultValue: 'N'},
                formatoptions: {disabled: false}

            },

            {
                name: 'check_edit',
                index: 'check_edit',
                sortable: false,
                align: 'center',
                width: 380,
                formatter: 'checkbox',
                edittype: "checkbox",
                editoptions: {value: 'Y:N', defaultValue: 'N'},
                formatoptions: {disabled: false}

            },

            {
                name: 'check_del',
                index: 'check_del',
                sortable: false,
                align: 'center',
                width: 380,
                formatter: 'checkbox',
                edittype: "checkbox",
                editoptions: {value: 'Y:N', defaultValue: 'N'},
                formatoptions: {disabled: false}

            },

        ],
        caption: "권한그룹별 프로그램관리 | MES",
        autowidth: true,
        height: 550,
        jsonReader: {cell: ""},
        viewrecords: true,


    });
}


function cell(cellvalue, options, rowObject) {
    if (rowObject.menu_name === '게시판') {
        if (rowObject.level === 1) {
            return '<img src="/images/icon/folder.png" style="max-width: 17px;" />' + cellvalue;
        } else if (rowObject.level === 2) {
            return "           " + '<img src="/images/icon/File.png" style="max-width: 17px;" />' + cellvalue;
        }

    } else {
        if (rowObject.level === 1) {
            return '<img src="/ui-component/assets/images/icon/folder.png" style="max-width: 17px;" />' + cellvalue;
        } else if (rowObject.level === 2) {
            return '	<img src="/ui-component/assets/images/icon/folder.png" style="max-width: 17px;" />' + cellvalue;
        } else if (rowObject.level === 3) {
            return '		<img src="/ui-component/assets/images/icon/File.png" style="max-width: 17px;" />' + cellvalue;
        }
    }
}
