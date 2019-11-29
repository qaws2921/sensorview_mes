<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<script type="text/javascript" src="/data-component/common/page_event_common.js" charset="UTF-8"></script>
<script type="text/javascript" src="/data-component/common/basic_pom.js" charset="UTF-8"></script>

<script type="text/javascript">

function object_send() {
	var object = {
        	page_event:page_event1,
			jqGrid_object :[ {
                        jqGrid_function:jqGrid_basic,
						main_name : '#mes_grid',
						page_name : '#mes_grid_pager',
					 	colNames:['메세지코드','메세지명1','메세지명2','메세지명3','메세지명4','등록자','등록일'],
				        colModel:[
				            {name:'msg_code',index:'msg_code',key: true,sortable: false,width:220 },
				            {name:'msg_name1',index:'msg_name1',sortable: false,width:220},
				            {name:'msg_name2',index:'msg_name2',sortable: false,width:220},
				            {name:'msg_name3',index:'msg_name3',sortable: false,width:220},
				            {name:'msg_name4',index:'msg_name4',sortable: false,width:220},
				            {name:'user_name',index:'user_name',sortable: false,width:220},
				            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false,width:220},
				        ],
				        height : 550,    
						jqGrid_top_tag:".table-responsive",
						caption: "메세지관리 | MES"
					}],
					modal_name:["#addDialog"],
					modal_column : {
						msg_code:"메세지코드를 입력해주세요", // 모달 name : '이름'
						msg_name1:"메세지명1을 입력해주세요",	// 모달 name : '이름'
						
					},
					modal_class:".modal_value",
					modal_size:[{
						modal: true,  
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
					readonly : ['msg_code'],
					getUrl:"/sysMsgGet",
					auUrl:"/sysMsgAdd",
					deleteUrl:"/sysMsgDelete",
					deleteCode:["msg_code"],
					cud_check:'I',
			
				}
	return object;
};	
</script>

    
        <div class="main-content-inner">
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
    
    <div id="addDialog" title="메세지관리" style="display: none">
        <div class="profile-user-info profile-user-info-striped">
            <div class="profile-info-row">
                <div class="profile-info-name"> 메세지코드 </div>
                <div class="profile-info-value">
                    <input type="text" name="msg_code" class="form-control modal_value">
                </div>
            </div>

            <div class="profile-info-row">
                <div class="profile-info-name"> 메세지명1 </div>

                <div class="profile-info-value">
                    <input type="text" name="msg_name1" class="form-control modal_value">
                </div>
               
            </div>

            <div class="profile-info-row">
                <div class="profile-info-name"> 메세지명2 </div>
                <div class="profile-info-value">
                    <input type="text" name="msg_name2" class="form-control modal_value">
                </div>
            </div>
            <div class="profile-info-row">
                <div class="profile-info-name"> 메세지명3 </div>
                <div class="profile-info-value">
                    <input type="text" name="msg_name3" class="form-control modal_value">
                </div>
            </div>
            <div class="profile-info-row">
                <div class="profile-info-name"> 메세지명4 </div>
                <div class="profile-info-value">
                    <input type="text" name="msg_name4" class="form-control modal_value">
                </div>
            </div>
        </div>
    </div>


