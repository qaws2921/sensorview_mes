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
						colNames : ['부서코드','부서','라인코드','라인명','등록자','등록일'],
						colModel : [
				            {name:'dept_code',index:'dept_code',hidden:true,sortable: false,width:380},
				            {name:'dept_name',index:'dept_name',sortable: false,width:380},
				            {name:'line_code',index:'line_code',key: true ,sortable: false,width:380},
				            {name:'line_name',index:'line_name',sortable: false,width:380},
				            {name:'user_name',index:'user_name',sortable: false,width:380},
				            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false,width:380},
				        ],
				        height : 550,    
						jqGrid_top_tag:".table-responsive",
						caption: "라인정보 | MES"
					}],
					modal_name:["#addDialog"],
					modal_column : {
						dept_code:"부서를 선택해주세요", // 모달 name : '이름'
						line_code:"라인코드를 입력해주세요",	// 모달 name : '이름'
						line_name:"라인이름을 입력해주세요"	// 모달 name : '이름'
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
					readonly : ['line_code'],
					getUrl:"/sysProdLineGet",
					auUrl:"/sysProdLineAdd",
					deleteUrl:"/sysProdLineDelete",
					deleteCode:["line_code"],
					cud_check:'I',
					select_tag:[
						{tag:"#dept_select",url:"/sysDeptAllGet",valueName:"dept_code",textName:"dept_name"}	
					],
			
				}
	return object;
};	
</script>

    
        <div class="main-content-inner">
            <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                <div class="col-lg-12 ">
                    <span class="sp-title">
                        라인정보
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
                        라인정보
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
    
    <div id="addDialog" title="라인정보" style="display: none">
        <div class="profile-user-info profile-user-info-striped">
            <div class="profile-info-row">
                <div class="profile-info-name"> 부서 </div>
                <div class="profile-info-value">
                    <select name="dept_code" class="form-control modal_value"  id="dept_select">
                   		<option value="">선택안함</option>
                   	</select>
                </div>
            </div>

            <div class="profile-info-row">
                <div class="profile-info-name"> 라인코드 </div>

                <div class="profile-info-value">
                    <input type="text" name="line_code" class="form-control modal_value">
                </div>
               
            </div>

            <div class="profile-info-row">
                <div class="profile-info-name"> 라인명 </div>
                <div class="profile-info-value">
                    <input type="text" name="line_name" class="form-control modal_value">
                </div>
            </div>
            
        </div>
    </div>


