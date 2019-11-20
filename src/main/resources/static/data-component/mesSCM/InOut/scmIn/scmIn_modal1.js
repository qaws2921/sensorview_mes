var lastsel;

////////////////////////////시작 함수/////////////////////////////////////
function modal_start1() {
    modal_make1();
    datepickerInput_modal1();
    jqGrid_modal1();
    jqGridResize("#scmInDialogLeftGrid", $('#scmInDialogLeftGrid').closest('[class*="col-"]'));
    jqGridResize("#scmInDialogRightGrid", $('#scmInDialogRightGrid').closest('[class*="col-"]'));

}


////////////////////////////클릭 함수/////////////////////////////////////
function get_modal1_btn(page) {
    $("#scmInDialogLeftGrid").setGridParam({
        datatype: "local",
        page: page,
        data: bottomGrid_data2
    }).trigger("reloadGrid");
}


function right_modal1_btn() {
    var ids = $("#scmInDialogLeftGrid").getGridParam('selarrrow').slice();

    var ids2 = $("#scmInDialogRightGrid").jqGrid("getDataIDs");
    var overlap =[];

    if (ids2.length != 0){
        ids.forEach(function (idsfor,s) {
            ids2.forEach(function(ids2for){
                if(idsfor === ids2for){
                    ids.splice(s,1,'');
                    overlap.push(idsfor);
                }
            });
        });
    }

    var list = [];
    ids.forEach(function (idsfor) {
        if (idsfor !== ''){
            list.push($ ( "#scmInDialogLeftGrid") .getRowData (idsfor));
        }
    });

    callback(function () {
        if (overlap.length !== 0){
            alert(overlap.join(", ")+" 중복");
        }
        ids2 =  $("#scmInDialogRightGrid").getRowData();
        ids2 =  ids2.concat(list);
        $("#scmInDialogRightGrid").setGridParam({
            datatype: "local",
            data: ids2
        }).trigger("reloadGrid");

        $('#scmInDialogLeftGrid').jqGrid("resetSelection");
    });
}


function left_modal1_btn() {
    var ids2 = $("#scmInDialogRightGrid").getGridParam('selarrrow').slice();
    for (var i =0; i<ids2.length;i++) {
        $('#scmInDialogRightGrid').jqGrid('delRowData', ids2[i]);
    }
    $('#scmInDialogRightGrid').jqGrid("resetSelection");
}

function addUdate_btn() {

}

////////////////////////////호출 함수/////////////////////////////////////

function jqGrid_modal1() {
    $("#scmInDialogLeftGrid").jqGrid({

           datatype: "local",
           // 다중 select
           multiselect: true,
           // 타이틀
           caption: "입고등록 | MES",
           colNames: ['품목그룹','품번','품명','규격','단위','포장수량','검사등급'],
           colModel: [
               {name: 'part_group_code', index: 'part_group_code'},
               {name: 'part_code', key: true, index: 'part_code'},
               {name: 'part_name', index: 'part_name'},
               {name: 'standard', index: 'standard'},
               {name: 'unit', index: 'unit'},
               {name: 'pty', index: 'pty'},
               {name: 'grade', index: 'grade'},
           ],
           // 페이지 수 보기 (1 / 100) = true
           // 높이 : 450px
        autowidth: true,
           height: 300,
           // 디폴트 조회 개수 : 100
           rowNum: 100,
           // 단위 별 조회 개수
           rowList:[100,200,300,500,1000],
           // pager 세팅
           pager: "#scmInDialogLeftGridPager",
           // jqGrid load 시 실행 함수 = setTimeout
           // setTimeout함수는 함수 뒤 시간이 지나면 호출됨. 현재 : 0 (1000 = 1초)
           // 호출되는 함수는 pager icon 함수

       });

       $("#scmInDialogRightGrid").jqGrid({

           datatype: "local",
           // 다중 select
           multiselect: true,
           // 타이틀
           caption: "입고등록 | MES",
           colNames: ['품목그룹','품번','품명','규격','단위','검사등급','입고수량','불량수량'],
           colModel: [
               {name: 'part_group_code', index: 'part_group_code', width: 60},
               {name: 'part_code', key: true, index: 'part_code', width: 60},
               {name: 'part_name', index: 'part_name', width: 60},
               {name: 'standard', index: 'standard', width: 60},
               {name: 'unit', index: 'unit', width: 60},
               {name: 'grade', index: 'grade', width: 60},
               {name: 'in_pty', index: 'in_pty', width: 60,editable:true,
                   editoptions: {

                       dataEvents: [
                           {
                               type: 'focusout',
                               fn: function (e) {

                                   if ($("#"+lastsel+"_in_pty").val()){
                                       if (isNaN($("#"+lastsel+"_in_pty").val())){


                                           $("#"+lastsel+"_in_pty").focus();
                                           return false;
                                       }
                                   }


                                    if ($("#"+lastsel+"_in_pty").val() && $("#"+lastsel+"_bad_pty").val()){

                                        $("#scmInDialogRightGrid").jqGrid('saveRow', lastsel,false,'clientArray');
                                    }
                               }
                           }

                       ]
                   }
               },
               {name: 'bad_pty', index: 'bad_pty', width: 60,editable:true,
                   editoptions: {

                       dataEvents: [
                           {
                               type: 'focusout',
                               fn: function (e) {



                                   if ($("#"+lastsel+"_bad_pty").val()){
                                       if (isNaN($("#"+lastsel+"_bad_pty").val())){
                                           
                                           $("#"+lastsel+"_bad_pty").focus();
                                           return false;
                                       }
                                   }
                                   if ($("#"+lastsel+"_in_pty").val() && $("#"+lastsel+"_bad_pty").val()){

                                       $("#scmInDialogRightGrid").jqGrid('saveRow', lastsel,false,'clientArray');
                                   }
                               }
                           }

                       ]
                   }
               },
           ],
           // 페이지 수 보기 (1 / 100) = true
           // 높이 : 450px
           autowidth: true,
           height: 340,
           // 디폴트 조회 개수 : 100
           rowNum: 100,
           // 단위 별 조회 개수
           rowList:[100,200,300,500,1000],
           // pager 세팅
           // jqGrid load 시 실행 함수 = setTimeout
           // setTimeout함수는 함수 뒤 시간이 지나면 호출됨. 현재 : 0 (1000 = 1초)
           // 호출되는 함수는 pager icon 함수
           beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
               var $myGrid = $(this),
                   i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                   cm = $myGrid.jqGrid('getGridParam', 'colModel');
               return (cm[i].name === 'cb');
           },
           onCellSelect: function(rowid,icol,cellcontent,e){


               if ($("#"+lastsel+"_in_pty").val()){
                   if (isNaN($("#"+lastsel+"_in_pty").val())){
                       alert("입고 수량은 숫자만 가능합니다.");
                       return false;
                   }
               }

               if ($("#"+lastsel+"_bad_pty").val()){
                   if (isNaN($("#"+lastsel+"_bad_pty").val())){
                       alert("불량 수량은 숫자만 가능합니다.");
                       return false;
                   }
               }

               if (rowid && rowid!==lastsel){
                   $('#scmInDialogRightGrid').jqGrid('saveRow',lastsel,false,'clientArray');
                   $('#scmInDialogRightGrid').jqGrid('editRow',rowid,true);
                   lastsel=rowid;
               }
           }
       });

}


function modal_make1() {
    $("#scmIn-add-dialog").dialog({
        modal: true,
        width: 'auto',
        height: 'auto',
        autoOpen: false,
        resizable: false,
    });
}

function datepickerInput_modal1() {
    datepicker_makes("#datepicker3",0);

}

// 지울거

var bottomGrid_data2 =
           [
               {part_group_code:'P0001',part_code:'PC0001',part_name:'품목1',standard:'기준1',unit:'60*60',pty:1,grade:'검사'},
               {part_group_code:'P0001',part_code:'PC0002',part_name:'품목2',standard:'기준2',unit:'60*60',pty:1,grade:'검사'},
               {part_group_code:'P0001',part_code:'PC0003',part_name:'품목3',standard:'기준3',unit:'60*60',pty:1,grade:'무검사'},
               {part_group_code:'P0001',part_code:'PC0004',part_name:'품목4',standard:'기준4',unit:'60*60',pty:1,grade:'검사'},
               {part_group_code:'P0001',part_code:'PC0005',part_name:'품목5',standard:'기준5',unit:'60*60',pty:1,grade:'무검사'},
               {part_group_code:'P0001',part_code:'PC0006',part_name:'품목6',standard:'기준6',unit:'60*60',pty:1,grade:'무검사'},
               {part_group_code:'P0001',part_code:'PC0007',part_name:'품목7',standard:'기준7',unit:'60*60',pty:1,grade:'검사'},
               {part_group_code:'P0001',part_code:'PC0008',part_name:'품목8',standard:'기준8',unit:'60*60',pty:1,grade:'검사'},
               {part_group_code:'P0001',part_code:'PC0009',part_name:'품목9',standard:'기준9',unit:'60*60',pty:1,grade:'검사'},
           ];