<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<%@ include file="/WEB-INF/views/components/header.jsp" %>
<html>
<body class="no-skin">
<%@ include file="/WEB-INF/views/components/header.jsp" %>
<%@ include file="/WEB-INF/views/components/navbar/top-nav.jsp" %>
<%@ include file="/WEB-INF/views/components/navbar/mid-nav.jsp" %>
<div class="main-container ace-save-state" id="main-container">
    <%@ include file="/WEB-INF/views/components/navbar/left-nav.jsp" %>
    <div class="main-content">
        <jsp:include page="/WEB-INF/views/body/${uri.dep1}/${uri.dep2}/${uri.dep3}/${uri.dep4}.jsp" />
    </div>
</div>
<%@ include file="/WEB-INF/views/components/footer.jsp" %>

</body>
</html>