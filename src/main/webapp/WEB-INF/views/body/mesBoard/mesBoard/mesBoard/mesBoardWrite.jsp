<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt_rt"%>
<jsp:useBean id="toDay" class="java.util.Date" />
<script type="text/javascript" src="/ui-component/board/ckeditor/ckeditor.js"></script>
<!-- ###실제컨텐츠영역 -->
<div class="contents_in">
    <script>
        $(window).load(function(){
            var category = $('#CATEGORY option:selected').val();
            var notices = ["공지사항", "긴급공지"];
            var itnews = ["국내보도", "해외보도", "정보/자료"];
            var tobenews = ["알림","소식"];
            var promotion = ["인증","특허","기술"];
            var recurite = ["연구원 채용","개발자 채용","상반기 채용","하반기 채용"];
            sub_lnb($(".sub_lnb"),3,0);  //서브 메뉴값(1차,2차) - 값은 0부터 시작

            $('.here_link').empty();
            $('.path').empty();
            $('.title').empty();
            $('.here_link').html('관리');
            $('.path').html('게시글작성');
            $('.title').html('');
            $('.community_m').addClass('left_linktop');

            var target = document.getElementById("SUB_TITLE");

            if(category == 'notices') var more = notices;
            else if(category == 'itnews') var more = itnews;
            else if(category == 'tobenews') var more = tobenews;
            else if(category == 'promotion') var more = promotion;
            else if(category == 'recurite') var more = recurite;

            target.options.length = 0;

            for (total in more) {
                var opt = document.createElement("option");
                opt.value = more[total];
                opt.innerHTML = more[total];
                target.appendChild(opt);
            }
        });
    </script>
    <div class="con1">
        <p class="dep_title">게시글 작성</p>
        <form name="formFrm8" action="addData" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="REG_DATE" value="<fmt:formatDate value="${toDay}" pattern="yyyy-MM-dd" />"/>
            <table class="form_table">
                <tbody>
                <tr>
                    <th>분류</th>
                    <td>
                            <select name="CATEGORY" id="CATEGORY" style="width: 100%;" onchange="categoryChange(this)">
                                <option value='1'>공지사항</option>
                                <option value='itnews'>It News</option>
                                <option value='tobenews'>투비 News</option>
                                <option value='promotion'>홍보자료</option>
                                <option value='recurite'>채용정보</option>
                            </select>
                    </td>
                </tr>
                <tr>
                    <th>서브 타이틀</th>
                    <td>
                        <select name="SUB_TITLE" id="SUB_TITLE" style="width: 100%;">
                            <option>카테고리를 선택하세요.</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td><input name="TITLE" type='text' class='input'title='text'></td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td><textarea class="textarea" rows="10" name="CONTENT" id="CONTENT"></textarea></td>
                </tr>
                <script>
                    CKEDITOR.replace('CONTENT',{
                        'height' : '400'
                    });
                    CKEDITOR.on('dialogDefinition', function (e) {
                        var dialogName = e.data.name;
                        var dialogDefinition = e.data.definition;

                        switch (dialogName) {
                            case 'image':
                                //dialogDefinition.removeContents('info');
                                dialogDefinition.removeContents('Link');
                                dialogDefinition.removeContents('advanced');
                                break;
                        }
                    });
                </script>
                <tr>
                    <th>첨부파일</th>
                    <td><input name="FILES" type='file' class='input'title='text'></td>
                </tr>


                </tbody>
            </table>


            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr><td height="5"></td></tr>
                <tr>
                    <td align="center">
                        <table>
                            <tr>
                                <td>
                                    <input type="submit" border="0" value="확인" class="btn_style">
                                    <input type="button" border="0" value="취소" class="btn_style2" onclick="history.go(-1);">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </form>
    </div>

    <!-- 게시물 시작 -->

    <!-- 페이징 -->
</div>
</div>
<!--//실제컨텐츠영역-->
</div>
</div>
<!--//Contents -->
<script>
    function categoryChange(category) {
        var notices = ["공지사항", "긴급공지"];
        var itnews = ["국내보도", "해외보도", "정보/자료"];
        var tobenews = ["알림","소식"];
        var promotion = ["인증","특허","기술"];
        var recurite = ["연구원 채용","개발자 채용","상반기 채용","하반기 채용"];

        var target = document.getElementById("SUB_TITLE");

        if(category.value == 'notices') var more = notices;
        else if(category.value == 'itnews') var more = itnews;
        else if(category.value == 'tobenews') var more = tobenews;
        else if(category.value == 'promotion') var more = promotion;
        else if(category.value == 'recurite') var more = recurite;

        target.options.length = 0;

        for (total in more) {
            var opt = document.createElement("option");
            opt.value = more[total];
            opt.innerHTML = more[total];
            target.appendChild(opt);
        }
    }
</script>