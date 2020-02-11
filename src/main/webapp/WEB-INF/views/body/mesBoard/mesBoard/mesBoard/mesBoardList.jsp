<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<html>
<head>
    <link rel="stylesheet" href="/ui-component/board/style.css" />
    <link rel="stylesheet" href="/ui-component/board/common.css" />
    <link rel="stylesheet" href="/ui-component/board/main.css" />
    <link rel="stylesheet" href="/ui-component/board/sub.css" />
    <link rel="stylesheet" href="/ui-component/board/board.css" />
</head>
<body>
<div class="page-content">
    <script>
        $(window).load(function(){
            $.ajax({
                url: 'getNM?idx=${board_code}',
                type: 'GET',
                async: true,
                dataType: "json",
                error: function (e) {
                    if(e.status == 200){
                        $('#sub-t-1').text(e.responseText);
                        $('#sub-t-4').text(e.responseText);
                    }
                }
            });
        });
    </script>
    <div class="bbs_search">
        <form name="sfrm" action="list${pageMaker.makeSearch(idx)}" method="get">
            <input type="hidden" name="category" class="h_cg" value="">
            <table width="0%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="select_area">
                        <select name="searchType" class="select_search" title="검색조건을 선택하세요" />
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                            <option value="all">제목+내용</option>
                        </select>
                    </td>
                    <td style="padding-right:5px;"><input name="keyword" type="text" class="search_input" placeholder="검색어를 입력하세요" size="35" value="${pageMaker.keyword}"/></td>
                    <td><input type="submit" value="검색" align="absmiddle" title="검색" class="btn_b_s" /></td>
                </tr>
            </table>
        </form>
    </div>
    <!-- 게시물 시작 -->
    <table class="bbs_con" summary="게시물 목록을 보여줍니다.">
        <caption class="blind">게시물 목록</caption>
        <thead>
        <tr>
            <th width="10%" class="m_none">번호</th>
            <th>제목</th>
            <th width="10%" class="m_none">작성자</th>
            <th width="20%" class="m_date">작성일</th>
            <th width="10%" class="m_none">조회</th>
        </tr>
        </thead>
        <tbody>
        <c:if test="${ListData eq null}">
            <td colspan="5">조회된 데이터가 존재하지않습니다.</td>
        </c:if>
        <c:if test="${pageMaker.totalCount eq 0 }">
            <tr align='center'>
                <td colspan="5">데이터가 존재하지않습니다.</td>
            </tr>
        </c:if>

        <c:forEach items="${ListData}" var="data">
            <tr class="tr-hover" onclick='location.href="info?idx=${data.ID}&seq=${data.SEQ}&div=${data.CATEGORY}"' style='cursor: pointer;'>
                <td class="m_none">${data.ID}</td>
                <td class="left"><span style="color:#1453a1">[${data.SUB_TITLE}]</span> ${data.TITLE}</td>
                <td class="m_none">${data.WRITER}</td>
                <td class="m_date">${data.REG_DATE}</td>
                <td class="m_none">${data.HITS}</td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
    <!-- 게시물 끝 -->

    <div class='page_num'>
        ${pageMaker._pagination("list") }
    </div>
    <div class="bbs_btn align_right">
        <a class='btn_w' id="write">글쓰기</a>
    </div>
    <script>
        $('#write').click(
            function(){
                $('#values').submit();
            }
        );
    </script>
</div>
<form id="values" action="/bd_writeForm" method="POST">
    <input type="hidden" value="${board_code}" name="board_code">
    <input type="hidden" value="${sessionScope.userData.site_code}" name="site_code">
    <input type="hidden" value="${sessionScope.userData.user_code}" name="user_code">
</form>
</body>
</html>
