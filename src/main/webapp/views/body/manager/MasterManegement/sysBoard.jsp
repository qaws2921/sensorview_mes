<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<script type="text/javascript" src="/mes/common/page_event_common.js" charset="UTF-8"></script>
<script type="text/javascript" src="/mes/common/basic_pom.js" charset="UTF-8"></script>

<script type="text/javascript">
function object_send() {
	var object = {
        	page_event:page_event1,
			jqGrid_object :[ {
                        jqGrid_function:jqGrid_basic,
						main_name : '#mes_grid',
						page_name : '#mes_grid_pager',
						colNames:['게시판코드','영문명','한글','권한','권한코드','최대파일','파일크기(MB)','사용유무','등록자','등록일'],
				        colModel:[
				            {name:'board_code',index:'board_code',key: true ,sortable: false,width:170},
				            {name:'board_en',index:'board_en',sortable: false,width:170},
				            {name:'board_kr',index:'board_kr',sortable: false,width:170},
				            {name:'board_auth_name',index:'board_auth_name',sortable: false,width:170},
				            {name:'board_auth',index:'board_auth',sortable: false,hidden:true, width:170},
				            {name:'files',index:'files',sortable: false,width:170},
				            {name:'file_size',index:'file_size',sortable: false,width:170},
				            {name:'use_yn',index:'use_yn',sortable: false,width:170},
				            {name:'user_name',index:'user_name',sortable: false,width:170},
				            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false,width:170}
				        ],
				        height : 550,    
						jqGrid_top_tag:".table-responsive",
						caption: "게시판관리 | MES"
					}],
					modal_name:["#addDialog"],
					modal_column : {
						board_code:"게시판코드를 입력해주세요", // 모달 name : '이름'
						board_en:"영문명을 입력해주세요", // 모달 name : '이름'
						board_kr:"한글명을 입력해주세요", // 모달 name : '이름'
						board_auth:"권한을 선택해주세요", // 모달 name : '이름'
						files:"최대파일수를 입력해주세요", // 모달 name : '이름'
						file_size:"최대파일크기를 입력해주세요", // 모달 name : '이름'
						use_yn:"사용유무를 선택해주세요"
						
						
					},
					modal_class:".modal_value",
					modal_size:[{
						 width: 'auto',
					      height: 'auto',
					      autoOpen: false,
					      resizable:false,
					      buttons: [
				                {
				                    text: "저장",
				                    'id'	: "addUdate_btn",
				                    "class" : "btn btn-primary btn-minier",
				                    click: function() {
				                        
				                    }
				                },
				                {
				                    text: "취소",
				                    "class" : "btn btn-minier",
				                    click: function() {
				                        $( this ).dialog( "close" );
				                    }
				                }
				            ]
					}],
					readonly : ['board_code'],
					getUrl:"/sysBoardGet",
					auUrl:"/sysBoardAdd",
					deleteUrl:"/sysBoardDelete",
					deleteCode:["board_code"],
					cud_check:'I',
			
				}
	return object;
};	
</script>

    
        <div class="main-content-inner">
            <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                <div class="col-lg-12 ">
                    <span class="sp-title">
                        게시판관리
                        <small class="sp-small">
                            <i class="ace-icon fa fa-angle-double-right"></i>
                            Manufacturing Execution System
                        </small>
                    </span>
                    <span style="float: right">
                        관리자
                        <i class="ace-icon fa fa-angle-double-right"></i>
              마스터관리
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        게시판관리
                    </span>
                </div>
            </div>

            <div class="page-content">
                <div class="clearfix">
                    <div class="pull-left tableTools-container">
                        <div class="dt-buttons btn-overlap btn-group">
                            <a  id="get_btn" class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
                                <span>
                                    <i class="fa fa-search bigger-110 blue"></i>
                                    <span>조회</span>
                                </span>
                            </a>
                            <a id="add_btn" class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" id="showDialog">
                                <span><i class="fa fa-plus bigger-110 blue"></i>
                                    <span>등록</span>
                                </span>
                            </a>
                            <a id="delete_btn" class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="">
                                <span>
                                    <i class="fa fa-trash bigger-110 blue"></i>
                                    <span>삭제</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 table-responsive">
                        <table id="mes_grid"></table>
                        <div id="mes_grid_pager"></div>
                    </div>
                </div>
            </div>
        </div>
    
    <div id="addDialog" title="게시판관리" style="display: none">
        <div class="profile-user-info profile-user-info-striped">
            <div class="profile-info-row">
                <div class="profile-info-name"> 게시판코드 </div>
                <div class="profile-info-value">
                    <input type="text" name="board_code" class="form-control modal_value">
                </div>
            </div>

            <div class="profile-info-row">
                <div class="profile-info-name"> 영문명 </div>

                <div class="profile-info-value">
                    <input type="text" name="board_en" class="form-control modal_value">
                </div>
               
            </div>

            <div class="profile-info-row">
                <div class="profile-info-name"> 한글명 </div>
                <div class="profile-info-value">
                    <input type="text" name="board_kr" class="form-control modal_value">
                </div>
            </div>
            <div class="profile-info-row">
                <div class="profile-info-name"> 권한 </div>
                <div class="profile-info-value">
                    <select name="board_auth" class="form-control modal_value">
                   		<option value="">선택안함</option>
                   		<option value="1">당사</option>
                   		<option value="2">전체</option>
                   	</select>
                </div>
            </div>
            <div class="profile-info-row">
                <div class="profile-info-name"> 최대파일수 </div>
                <div class="profile-info-value">
                    <input type="text" name="files" class="form-control modal_value">
                </div>
            </div>
            <div class="profile-info-row">
                <div class="profile-info-name"> 최대파일크기(MB) </div>
                <div class="profile-info-value">
                    <input type="text" name="file_size" class="form-control modal_value">
                </div>
            </div>
           <div class="profile-info-row">
                <div class="profile-info-name"> 사용유무 </div>
                <div class="profile-info-value">
                     <select name="use_yn" class="form-control modal_value">
                   		<option value="">선택안함</option>
                   		<option value="Y">Y</option>
                   		<option value="N">N</option>
                   	</select>
                </div>
            </div>
        </div>
    </div>


