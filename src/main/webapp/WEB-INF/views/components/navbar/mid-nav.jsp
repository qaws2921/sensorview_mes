<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="navbar" class="navbar navbar-default ace-save-state">
    <div class="navbar-container ace-save-state" id="navbar-container">
        <button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
            <span class="sr-only">사이드 메뉴</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <div class="col-lg-2">
            <a href="/static" class="navbar-brand">

                <img src="/ui-component/imagesNew/logo/logo.png" width="180px">
            </a>
        </div>
        <div class="col-lg-10">
            <a href="/login" class="navbar-brand top_m">
                <i class="fa fa-user"></i> ${sessionScope.userData.user_name}님 반갑습니다.
                <br>
                <button type="button" class="btn btn-minier btn-dark">정보수정</button>
                <button type="button" class="btn btn-minier btn-dark">로그아웃</button>
            </a>
        </div>
    </div>
</div>

<%-- 상단 아이콘 메뉴 --%>
<div id="sidebar" class="sidebar h-sidebar navbar-collapse collapse ace-save-state" data-sidebar="true"
     data-sidebar-scroll="true" data-sidebar-hover="true">
    <ul class="nav nav-list of-hidden">
        <li class="hover">
            <a href="/">
                <i class="menu-icon fa fa-tachometer"></i>
                <span class="menu-text"> MES </span>
            </a>
            <b class="arrow"></b>
        </li>
        <c:set var="doneLoop" value="false"/>
        <c:set var="doneLoop2" value="false"/>
        <c:forEach var="main_list" items="${main_list}" varStatus="starus">
            <c:set var="doneLoop" value="false"/>
            <c:set var="doneLoop3" value="true"/>
            <li id="mid-nav" class="hover <c:out value="${main_list.menu_name}"/>">
                <c:forEach var="under_list2" items="${allSub_list[starus.index]}">
                    <c:if test="${doneLoop != true}">
                        <c:if test="${under_list2.level == 2 }">
                            <c:set var="doneLoop3" value="false"/>
                        </c:if>
                        <c:if test="${doneLoop3 != true}">
                            <c:if test="${under_list2.level == 3 }">
                                <a href='<c:out value="${under_list2.menu_code}"/>'>
                                    <i class="menu-icon fa fa-cog"></i>
                                    <span class="menu-text2"><c:out value="${main_list.menu_name}"/></span>
                                </a>
                                <b class="arrow"></b>
                                <c:set var="doneLoop" value="true"/>
                            </c:if>
                        </c:if>
                    </c:if>
                </c:forEach>
            </li>
        </c:forEach>
    </ul>
</div>