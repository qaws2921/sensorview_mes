<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<script type="text/javascript" src="<c:url value='/static'/>vendor/mes/admin/user/sysDept/sysDept.js" charset="UTF-8"></script>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>


<!-- 정적 레프트 메뉴 -->
<div class="body-wrap">
	<nav id="global-menu">
		<div class="vendor-info clearfix">
			<h3 class="name">관리자</h3>
		</div>
		<ul class="nav flex-column">
			<li class="nav-item bor-bm">
				<a class="nav-link ba-color-999 auth menuMainA ${top_active == 'auth' ? 'top-active' : ''}" href="javascript:void(0)">기준정보	<i class="fas fa-angle-down down-icon"></i>	</a>
				<ul class="file-tree">
					<li>
						<a class="sysAuth ${under_active == 'sysAuth' ? 'under-active' : ''}" href="sysAuth.do">자재그룹 관리</a>
					</li>
					<li>
						<a class="sysAuthProgram ${under_active == 'sysAuthProgram' ? 'under-active' : ''}" href="sysAuthProgram">자재정보 관리</a>
					</li>
					<li>
						<a class="sysAuthProgram ${under_active == 'sysAuthProgram' ? 'under-active' : ''}" href="sysAuthProgram">자재단가 관리</a>
					</li>
					<li>
						<a class="sysAuthProgram ${under_active == 'sysAuthProgram' ? 'under-active' : ''}" href="sysAuthProgram">로케이션 관리</a>
					</li>
				</ul>
			</li>
			<li class="nav-item bor-bm">
				<a class="nav-link ba-color-999 auth menuMainA ${top_active == 'user' ? 'top-active' : ''}" href="javascript:void(0)">입/출고관리<i class="fas fa-angle-down down-icon"></i></a>
				<ul class="file-tree">
					<li>
						<a class="sysDept ${under_active == 'sysDept' ? 'under-active' : ''}" href="sysDept.do">입고등록</a>
					</li>
					<li>
						<a class="sysAuthProgra ${under_active == 'sysAuthProgra' ? 'under-active' : ''}" href="javascript:void(0)">입고현황</a>
					</li>
					<li>
						<a class="sysUserSupp ${under_active == 'sysUserSupp' ? 'under-active' : ''}" href="sysUserSupp">출고요청</a>
					</li>
					<li>
						<a class="sysUserSupp ${under_active == 'sysUserSupp' ? 'under-active' : ''}" href="sysUserSupp">출고처리</a>
					</li>
					<li>
						<a class="sysUserSupp ${under_active == 'sysUserSupp' ? 'under-active' : ''}" href="sysUserSupp">출고현황</a>
					</li>
					<li>
						<a class="sysUserSupp ${under_active == 'sysUserSupp' ? 'under-active' : ''}" href="sysUserSupp">자재반출</a>
					</li>
					<li>
						<a class="sysUserSupp ${under_active == 'sysUserSupp' ? 'under-active' : ''}" href="sysUserSupp">자재반출현황</a>
					</li>
				</ul>
			</li>
			<li class="nav-item bor-bm">
				<a class="nav-link ba-color-999 auth menuMainA ${top_active == 'master' ? 'top-active' : ''}" href="javascript:void(0)">재고관리 <i class="fas fa-angle-down down-icon"></i></a>
				<ul class="file-tree">
					<li>
						<a class="sysCommon ${under_active == 'sysCommon' ? 'under-active' : ''}" href="sysCommon">재고현황</a>
					</li>
					<li>
						<a class="sysPartGroup ${under_active == 'sysPartGroup' ? 'under-active' : ''}" href="sysPartGroup">자재 일원장</a>
					</li>
					<li>
						<a class="sysMsg ${under_active == 'sysMsg' ? 'under-active' : ''}" href="sysMsg">자재 월원장</a>
					</li>
					<li>
						<a class="sysBoard ${under_active == 'sysBoard' ? 'under-active' : ''}" href="sysBoard">재고조정</a>
					</li>
					<li>
						<a class="sysAuthProgra" href="javascript:void(0)">재고조정현황</a>
					</li>
				</ul>
			</li>
			<li class="nav-item bor-bm">
				<a class="nav-link ba-color-999 auth menuMainA" href="javascript:void(0)">매입마감	<i class="fas fa-angle-down down-icon"></i></a>
				<ul class="file-tree">
					<li>
						<a class="sysAut" href="javascript:void(0)">마감진행</a>
					</li>
					<li>
						<a class="sysAuthProgra" href="javascript:void(0)">마감현황</a>
					</li>
					<li>
						<a class="sysAuthProgra" href="javascript:void(0)">마감취소</a>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
<!-- 정적 레프트 메뉴 -->
	
	
	
	<div id="wrap" class="order-list clearfix">
	    <div class="title-row clearfix">
	        <div class="page-header">
	            <h2>자재정보 관리</h2>
	        </div>
	        <ul class="breadcrumb">
	            <li><a href="/vendor/dashboard">scm</a></li>
	            <li class="active"><a href="/vendor/order/order_goods_list">기준정보</a></li>
	            <li class="active"><a href="/vendor/order/order_goods_list">자재정보 관리</a></li>
	        </ul>
	    </div>
	
	    <form id="listFrm" method="get" action="/vendor/order/order_goods_list">
	        <div class="filter-box clearfix">
	            <div class="filter-text-left">
	                <a class="btn btn-search" role='button' href="#" style="width:100px;">조회</a>
	                <a class="btn btn-search add-btn" role='button' href="javascript:void(0)" style="width:100px;">추가</a>
	                <a class="btn btn-search" role='button' href="#" style="width:100px;">삭제</a>
	
	            </div>
	            <div class="filter-text-right">
	                <a class="btn btn-excel" role='button' href="javascript:excelDown()">Excel Download</a>
	            </div>
	        </div>
	    </form>
	
	    <div class="table-responsive clearfix">
	        <table id="mes_grid"></table>
	        <div id="mes_grid_pager"></div>
	    </div>
	</div>
</div>


</body>
</html>