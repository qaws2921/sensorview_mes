<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="sidebar" class="sidebar responsive ace-save-state">
    <script type="text/javascript">
        $(function() {
            var tagName = $('.menu-text1').text();
            var name = "#mid-nav " + tagName;
            var tag = $("#mid-nav").find(tagName);

            if(tag.selector == name){
                $("#mid-nav").removeClass('active');
                $("."+tagName).addClass('active');
            }
        });
    </script>
    <script type="text/javascript">
        try{ace.settings.loadState('main-container')}catch(e){}
        try{ace.settings.loadState('sidebar')}catch(e){}
    </script>
    <ul class="nav nav-list">
        <li class="">
            <a href="javascript:void(0)">
                <i class="menu-icon fa fa-tachometer"></i>
                <span class="menu-text1">${left_list[0][0].menu_name }</span>
            </a>

            <b class="arrow"></b>
        </li>
        <c:forEach var="mainLeft_list" items="${left_list[0] }">
            <li class="${top_active == mainLeft_list.menu_code ? 'active open' : ''}">
                <c:if test="${mainLeft_list.level != 1 }">
                    <a href="javascript:void(0)" class="dropdown-toggle">
                        <i class="menu-icon fa fa-cog"></i>
                        <span class="menu-text"> ${mainLeft_list.menu_name} </span>

                        <b class="arrow fa fa-angle-down"></b>
                    </a>
                    <b class="arrow"></b>

                    <ul class="submenu">
                        <c:forEach var="subLeft_list" items="${left_list[1]}">
                            <c:if test="${mainLeft_list.menu_code == subLeft_list.parent_menu_code }">
                                <li class="${subLeft_list.menu_code } ${under_active == subLeft_list.menu_code ? 'active' : ''}" >
                                    <a href="${subLeft_list.menu_code }">${subLeft_list.menu_name }</a>
                                    <b class="arrow"></b>
                                </li>
                            </c:if>
                        </c:forEach>
                    </ul>
                </c:if>
            </li>
        </c:forEach>
    </ul>
</div>