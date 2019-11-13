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
						 colNames:['구분코드','구분','창고코드','창고명','수량관리','활성','등록자','등록일'],
					        colModel:[
					            {name:'cargo_grp_code',index:'cargo_grp_code',sortable: false,hidden:true},
					            {name:'cargo_grp_name',index:'cargo_grp_name',sortable: false},
					            {name:'cargo_code',index:'cargo_code',key: true ,sortable: false},
					            {name:'cargo_name',index:'cargo_name',sortable: false},
					            {name:'qty_yn',index:'qty_yn',sortable: false},
					            {name:'use_yn',index:'use_yn',sortable: false},
					            {name:'user_name',index:'user_name',sortable: false},	
					            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false},
					        ],
				        height : 450,    
						jqGrid_top_tag:".table-responsive",
						caption: "창고관리 | MES"
					}],
					modal_name:["#addDialog"],
					modal_column : {
						cargo_grp_code:"창고를 선택해주세요", // 모달 name : '이름'
						cargo_code:"창고코드를 입력해주세요",	// 모달 name : '이름'
						cargo_name:"창고이름을 입력해주세요",	// 모달 name : '이름'
						qty_yn:"수량유무를 선택해주세요",	// 모달 name : '이름'
						use_yn:"사용유무를 선택해주세요",	// 모달 name : '이름'
						
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
					readonly : ['cargo_code'],
					getUrl:"/sysCargoGet",
					auUrl:"/sysCargoAdd",
					deleteUrl:"/sysCargoDelete",
					deleteCode:["cargo_code"],
					cud_check:'I',
					condition_objact:{},
					
					
					
					select_tag:[
						{tag:"#cargo_select"}
						
						],
					condition_class:".keyword",
					condition_column: {
						keyword:"창고를 선택해주세요"
					},
					main_value_class:[".condition_main",".column_main",".column_text"],
					
				
					
				}
	return object;
};	

</script>

    
        <div class="main-content-inner">
            <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                <div class="col-lg-12 ">
                    <span class="sp-title">
                        창고관리
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
                        창고관리
                    </span>
                </div>
            </div>

            <div class="page-content">
			  <div class="col-lg-12 padding0">
                    <table class="table wt-100">
                        <tbody>
                        <tr>
                            <td class="wt-px-100 t-align-c td-title padding-a-0">조회구분</td>
                            <td>
                                <select name="keyword" class="form-control wt-px-125 keyword condition_main" id="cargo_select" >
                                    <option value="">선택안함</option>
                                    <option value="B">자제창고</option>
                                    <option value="S">제품창고</option>
                                </select>               
                            </td>
                            
                        </tr>
                        </tbody>
                    </table>
                </div>
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
    
    <div id="addDialog" title="창고관리" style="display: none">
        <div class="profile-user-info profile-user-info-striped">
            <div class="profile-info-row">
                <div class="profile-info-name"> 구분 </div>
                <div class="profile-info-value">
                    <input type="text" name="cargo_grp_name" class="form-control modal_value column_text" readonly="readonly">
                    <input type="hidden" name="cargo_grp_code" class="form-control modal_value column_main">
                </div>
            </div>

            <div class="profile-info-row">
                <div class="profile-info-name"> 창고코드 </div>

                <div class="profile-info-value">
                    <input type="text" name="cargo_code" class="form-control modal_value">
                </div>
                
            </div>
            <div class="profile-info-row">
                <div class="profile-info-name"> 창고명 </div>
                <div class="profile-info-value">
                    <input type="text" name="cargo_name" class="form-control modal_value">
                </div>
            </div>
            <div class="profile-info-row">
                <div class="profile-info-name"> 수량관리 </div>
                <div class="profile-info-value">
                    <select name="qty_yn" class="form-control modal_value">
                   		<option value="">선택안함</option>
                   		<option>Y</option>
                   		<option>N</option>
                   	</select>
                </div>
            </div>
            <div class="profile-info-row">
                <div class="profile-info-name"> 사용유무 </div>
                <div class="profile-info-value">
                    <select name="use_yn" class="form-control modal_value">
                   		<option value="">선택안함</option>
                   		<option>Y</option>
                   		<option>N</option>
                   	</select>
                </div>
            </div>
            
        </div>
    </div>


