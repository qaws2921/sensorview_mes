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
						colNames : ['부서코드','부서명','사용유무','등록자','등록일'],
						colModel : [
				            {name:'dept_code',index:'dept_code',key: true ,sortable: false,width:380},
				            {name:'dept_name',index:'dept_name',sortable: false,width:380},
				            {name:'use_yn',index:'use_yn',sortable: false,width:380},
				            {name:'user_name',index:'user_name',sortable: false,width:380},
				            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false,width:380},
				        ],
				        height : 550,    
						jqGrid_top_tag:".table-responsive",
						caption: "부서관리 | MES"
					}],
					modal_name:["#addDialog"],
					modal_column : {
						dept_code:"부서코드를 입력해주세요", // 모달 name : '이름'
						dept_name:"부서명를 입력해주세요",	// 모달 name : '이름'
						use_yn:"사용유무를 선택해주세요"	// 모달 name : '이름'
					},
					modal_class:".modal_value",
					modal_size:[{
						modal: true, 
						maxWidth:500,
					      maxHeight: 350,
					      width: 500,
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
					readonly : ['dept_code'],
					getUrl:"/sysDeptGet",
					auUrl:"/sysDeptAdd",
					deleteUrl:"/sysDeptDelete",
					deleteCode:["dept_code"],
					cud_check:'I',
			
				}
	return object;
};	
</script>


    
        <div class="main-content-inner">
            <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                <div class="col-lg-12 ">
                    <span class="sp-title">
                        부서관리
                        <small class="sp-small">
                            <i class="ace-icon fa fa-angle-double-right"></i>
                            Manufacturing Execution System
                        </small>
                    </span>
                    <span style="float: right">
                        관리자
                        <i class="ace-icon fa fa-angle-double-right"></i>
              사용자관리
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        부서관리
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
    
    <div id="addDialog" title="부서관리" style="display: none">
        <div class="profile-user-info profile-user-info-striped">
            <div class="profile-info-row">
                <div class="profile-info-name"> 부서코드 </div>
                <div class="profile-info-value">
                    <input type="text" name="dept_code" class="form-control modal_value">
                </div>
            </div>

            <div class="profile-info-row">
                <div class="profile-info-name"> 부서명 </div>

                <div class="profile-info-value">
                    <input type="text" name="dept_name" class="form-control modal_value">
                </div>
            </div>
            <div class="profile-info-row">
                <div class="profile-info-name"> 사용유무 </div>

                <div class="profile-info-value">
                    <select name="use_yn" class="form-control modal_value">
                          		<option>Y</option>
                          		<option>N</option>
                    </select>
                </div>
            </div>
        </div>
    </div>


