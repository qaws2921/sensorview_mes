<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<script type="text/javascript" src="/data-component/common/page_event_common.js" charset="UTF-8"></script>
<script type="text/javascript" src="/data-component/common/basic_pom.js" charset="UTF-8"></script>

<script type="text/javascript">

function object_send() {
	var object = {
        	page_event:page_event2,
			jqGrid_object :[ {
                        jqGrid_function:jqGrid_basic2,
						main_name : '#mes_grid',
					
						colNames : ['권한그룹코드','권한그룹명'],
						colModel : [
				            {name:'auth_code',index:'auth_code',key: true ,sortable: false,hidden:true},
				            {name:'auth_name',index:'auth_name',align: 'center',sortable: false},
				            
				        ],
				        height : 550,    
						jqGrid_top_tag:".test11",
						url:"/sysAuthAllGet",
						caption: "권한그룹별 프로그램관리 | MES"
					},
					{
                        jqGrid_function:jqGrid_basic3,
						main_name : '#mes_grid2',
						
						colNames : ['권한','부모','레벨','메뉴코드','메뉴','조회','추가','수정','삭제'],
						colModel : [
				            {name:'auth_code',index:'auth_code' ,sortable: false,hidden:true,width:380},
				            {name:'parent_menu_code',index:'parent_menu_code' ,sortable: false,hidden:true,width:380},
				            {name:'level',index:'level' ,sortable: false,hidden:true,width:380},
				            {name:'menu_code',index:'menu_code',key: true,hidden:true ,sortable: false,width:380},
				            {name:'menu_name',index:'menu_name',formatter:cell,sortable: false,width:500},
				            {name:'check_get',index:'check_get',sortable: false,align: 'center',width:380,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false}
				            
				            },
				            {name:'check_add',index:'check_add',sortable: false,align: 'center',width:380,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false}
				           
				            },
				            
				            {name:'check_edit',index:'check_edit',sortable: false,align: 'center',width:380,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false}
				            
				            },
				            
				            {name:'check_del',index:'check_del',sortable: false,align: 'center',width:380,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false}
				            
				            },
				            
				        ],
				        height : 550,    
						jqGrid_top_tag:".test12",
						caption: "권한그룹별 프로그램관리 | MES"
					}],
					getUrl:"/sysAuthProgramGet",
					addUrl:"/sysAuthProgramAdd",
					condition_objact:{},
					condition_class:".keyword",
					select_tag:[{tag:"#code_group",url:"/menuAllGet",valueName:"menu_code",textName:"menu_name"},{tag:"#site_group",url:null,valueName:null,textName:null}],
					condition_column: {
						keyword:"권한그룹명을 선택해주세요"
					}			
	}
	return object;
};	
</script>

    
        <div class="main-content-inner">
            <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                <div class="col-lg-12 ">
                    <span class="sp-title">
                        권한그룹별 프로그램관리
                        <small class="sp-small">
                            <i class="ace-icon fa fa-angle-double-right"></i>
                            Manufacturing Execution System
                        </small>
                    </span>
                    <span style="float: right">
                        관리자
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        권한관리
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        권한그룹별 프로그램관리
                    </span>
                </div>
            </div>

            <div class="page-content">
			<div class="col-lg-12 padding0">
                <div class="row">
                    <div class="col-md-4">
                        <table class="table wt-100">
                            <tbody>
                            <tr>
                                <td class="wt-px-100 t-align-c td-title padding-a-0">사이트조회</td>
                                <td class="wt-px-200">
                                    <select name="" class="form-control" id="site_group">

                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="col-md-8">
                        <table class="table wt-100">
                            <tbody>
                            <tr>
                                <td class="wt-px-100 t-align-c td-title padding-a-0">업무조회</td>
                                <td class="wt-px-200">
                                    <select name="keyword2" class="form-control keyword" id="code_group">

                                    </select>
                                </td>
                                <td class="t-align-c wt-px-50">
                                    <a id="add_btn" class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" id="showDialog">
                                <span><i class="fa fa-plus bigger-110 blue"></i>
                                    <span>저장</span>
                                </span>
                                    </a>
                                </td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12 table-responsive">
                        <div class="row">
		                 <div class="col-md-4 test11">
		                    <table id="mes_grid"></table>
		        			
		                 </div>
		                 <div class="col-md-8">
		                 	
		                     <div class="test12">
		                         <table id="mes_grid2"></table>
		                         
		                         <span class="oi oi-person"></span>
		                     </div>
		                 </div>
		             </div>
                    </div>
                </div>
            </div>
        </div>



