var path = window.location.pathname.split("/").slice(1);
var array =
    [
        // 관리자
        {code:"sysAuth", title:'관리자',sub:'권한관리',name:'권한그룹관리'},
        {code:"sysAuthProgram", title:'관리자',sub:'권한관리',name:'권한그룹별 프로그램관리'},
        {code:"sysDept", title:'관리자',sub:'사용자관리',name:'부서관리'},
        {code:"sysUser", title:'관리자',sub:'사용자관리',name:'사용자관리'},
        {code:"sysUserSupp", title:'관리자',sub:'사용자관리',name:'협력사접속관리'},
        {code:"sysCommon", title:'관리자',sub:'마스터관리',name:'공통코드관리'},
        {code:"sysMsg", title:'관리자',sub:'마스터관리',name:'메세지관리'},
        {code:"sysBoard", title:'관리자',sub:'마스터관리',name:'게시판관리'},
        {code:"sysSupp", title:'관리자',sub:'마스터관리',name:'업체코드관리'},
        {code:"sysProdLine", title:'관리자',sub:'마스터관리',name:'라인정보'},
        {code:"sysCargo", title:'관리자',sub:'마스터관리',name:'창고관리'},
        {code:"sysERate", title:'관리자',sub:'마스터관리',name:'환율관리'},
        {code:"sysPassword", title:'관리자',sub:'마스터관리',name:'비밀번호변경'},
        {code:"sysFavority", title:'관리자',sub:'마스터관리',name:'사용자화면설정'},
        {code:"sysBOM", title:'관리자',sub:'마스터관리',name:'BOM관라'},
        {code:"sysBOMList", title:'관리자',sub:'마스터관리',name:'BOM현황'},

        // 자재관리
        {code:"sysBPartGroup", title:'자재관리',sub:'기준정보',name:'자재그룹관리'},
        {code:"sysBPart", title:'자재관리',sub:'기준정보',name:'자재정보관리'},
        {code:"sysLoc", title:'자재관리',sub:'기준정보',name:'로케이션관리'},
        {code:"sysBPartPrice", title:'자재관리',sub:'기준정보',name:'자재단가관리'},
        {code:"scmReqOrder", title:'자재관리',sub:'구매관리',name:'구매요청현황'},
        {code:"scmOrder", title:'자재관리',sub:'구매관리',name:'발주등록'},
        {code:"scmOrderList", title:'자재관리',sub:'구매관리',name:'발주현황'},
        {code:"scmIn", title:'자재관리',sub:'자재입출고',name:'입고등록'},
        {code:"scmInList", title:'자재관리',sub:'자재입출고',name:'입고현황'},
        {code:"scmInLineList", title:'자재관리',sub:'자재입출고',name:'재입고현황'},
        {code:"scmOutOrder", title:'자재관리',sub:'자재입출고',name:'출고요청'},
        {code:"scmOutList", title:'자재관리',sub:'자재입출고',name:'출고현황'},
        {code:"scmStockRetList", title:'자재관리',sub:'자재입출고',name:'자재반출현황'},
        {code:"scmStockList", title:'자재관리',sub:'재고관리',name:'재고현황'},
        {code:"scmStockSumDay", title:'자재관리',sub:'재고관리',name:'자재 일원장'},
        {code:"scmStockSumMonth", title:'자재관리',sub:'재고관리',name:'자재 월원장'},
        {code:"scmStockRevList", title:'자재관리',sub:'재고관리',name:'재고조정현황'},
        {code:"scmBPartClose", title:'자재관리',sub:'매입마감',name:'마감진행'},
        {code:"scmBPartClose", title:'자재관리',sub:'매입마감',name:'마감진행'},
        {code:"scmBPartCloseSumList", title:'자재관리',sub:'매입마감',name:'마감현황'},
        {code:"scmBPartCloseCancel", title:'자재관리',sub:'자재입출고',name:'마감취소'},

        //영업관리
        {code:"crmOrderRecp", title:'영업관리',sub:'영업관리',name:'수주정보관리'},
        {code:"crmPlan", title:'영업관리',sub:'영업관리',name:'계획관리'},
        {code:"crmWorkList", title:'영업관리',sub:'영업관리',name:'실적현황'},
        {code:"crmProdOrder", title:'영업관리',sub:'영업관리',name:'구매 생산지시'},

        //품질관리
        {code:"qmsTestItem", title:'품질관리',sub:'기준정보',name:'검사항목관리'},
        {code:"qmsTestStd", title:'품질관리',sub:'기준정보',name:'외경검사기준'},
        {code:"qmsErrorType", title:'품질관리',sub:'기준정보',name:'공정별불량유형관리'},
        {code:"qmsRecv", title:'품질관리',sub:'수입검사',name:'수입검사진행'},
        
    ];
$(function() {
	wrapWindowByMask2();
	setTimeout(function() {closeWindowByMask()  }, 300);
	// 엑티브 메뉴 nav
    for(var i=0; array.length > i; i++){
        if(array[i].code == path){
            $('#sub-t-1').text(array[i].name);
            $('#sub-t-2').text(array[i].title);
            $('#sub-t-3').text(array[i].sub);
            $('#sub-t-4').text(array[i].name);
        }
    }
});



function logout() {
    if (confirm("로그아웃 하시겠습니까?")){
        location.href="logout";
    }
}


function wrapWindowByMask2() {
    //화면의 높이와 너비를 구한다.
    var maskHeight = $(document).height();
    var maskHeight2 = maskHeight/2;
//      var maskWidth = $(document).width();
    var maskWidth = window.document.body.clientWidth;
    var maskWidth2 = maskWidth/2;

    var mask = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
    var loadingImg = '';

    loadingImg += "<div id='loadingImg' style='position:absolute; left:"+ (maskWidth2-45) +"px;top:40%; display:none; z-index:10000;'>";
    loadingImg += " <img src='/ui-component/imagesNew/loding/loding1.gif' style='max-width: 50px; max-height: 50px;'/>";
    loadingImg += "</div>";

    //화면에 레이어 추가
    $('body')
        .append(mask)
        .append(loadingImg)

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#mask').css({
        'width' : maskWidth
        , 'height': maskHeight
        , 'opacity' : '0.3'
    });

    //마스크 표시
    $('#mask').show();

    //로딩중 이미지 표시
    $('#loadingImg').show();
}

function closeWindowByMask() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').remove();
}
