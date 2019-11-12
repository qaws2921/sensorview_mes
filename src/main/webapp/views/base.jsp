<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<tiles:insertAttribute name="header"/>
<html>
<tiles:insertAttribute name="body"/>
<tiles:insertAttribute name="footer"/>
</html>