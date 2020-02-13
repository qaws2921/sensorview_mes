<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt_rt"%>
<!-- ###실제컨텐츠영역 -->
<div class="contents_in">
    <script>
        $(window).load(function(){
            sub_lnb($(".sub_lnb"),3,0);  //서브 메뉴값(1차,2차) - 값은 0부터 시작
            $('.here_link').empty();
            $('.path').empty();
            $('.title').empty();

            $('.here_link').html('커뮤니티');
            $('.path').html('게시글');
            $('.title').html('');
            $('.${InfoData.CATEGORY}').addClass('left_linktop');
            if(${InfoData == null}){
                alert("삭제되었거나 존재하지않는 게시글입니다.");
                location.href = "/";
            }
        });
    </script>
    <table class="bbs_view">
        <tbody>
        <tr>
            <th class="subject" colspan="2">제목 : [${InfoData.SUB_TITLE}] ${InfoData.TITLE}</th>
        </tr>
        <tr>
            <td class="view_detail" colspan="2">작성자 : ${InfoData.WRITER}&nbsp;&nbsp;
                <span style="float: right;">
                    <c:if test="${InfoData.MOD_DATE eq null}">
                        작성일 : ${InfoData.REG_DATE}
                    </c:if>
                    <c:if test="${InfoData.MOD_DATE ne null}">
                        수정일 : ${InfoData.MOD_DATE}
                    </c:if>
                    &nbsp;
                    조회수 : ${InfoData.HITS}
                </span>
            </td>
        </tr>
        <tr>
            <th><img name=wiz_target_resize style="margin-top: 3px; vertical-align: top; display: inline-block;" src="https://directsend.co.kr/images/common/icon_bigfile.png" /> 첨부파일</th>
            <c:if test="${InfoData.FILE_NAME eq ''}">
                <td>첨부된 파일이 없습니다.</td>
            </c:if>
            <c:if test="${InfoData.FILE_NAME ne ''}">
                <td>
                    <a target="_blank" rel="noreferrer noopener" href="${InfoData.FILE_URL}" download>${InfoData.FILE_NAME}</a>
                    <span style="color: #e6716b; margin-left: 3px;">${InfoData.FILE_VOL}KB</span>
                </td>
            </c:if>
        </tr>
        <tr>
            <td class="view_content" colspan="2">
                <div style='width:100%;height:0px;' id='wiz_get_table_width'>
                    <img border='0' name='wiz_target_resize' width='0' height='0'alt='' /></div>
                <div>
                    <p>
                        ${InfoData.CONTENT}
                    </p>
                </div>
            </td>
        </tr>
        <tr>
            <th width="23%">이전글</th>
            <c:if test="${prev eq null}">
                <td>이전글이 존재하지않습니다.</td>
            </c:if>
            <c:if test="${prev ne null}">
                <td><a href='/info?idx=${prev.ID}&seq=${prev.SEQ}&div=${prev.CATEGORY}'>[${prev.SUB_TITLE}] ${prev.TITLE}</a></td>
            </c:if>
        </tr>
        <tr>
            <th>다음글</th>
            <c:if test="${next eq null}">
                <td>다음글이 존재하지않습니다.</td>
            </c:if>
            <c:if test="${next ne null}">
                <td><a href='/info?idx=${next.ID}&seq=${next.SEQ}&div=${next.CATEGORY}'>[${next.SUB_TITLE}] ${next.TITLE}</a></td>
            </c:if>
        </tr>
        </tbody>
    </table>
    <br>
    <div class="bbs_btn align_right">
        <c:if test="${userData.ID eq 'TOBESYSTEM'}">
            <a href='/mod?idx=${InfoData.ID}' class='btn_w'>수정</a>
            <a href='#' class='btn_w' onclick="return del('${InfoData.ID}');">삭제</a>
        </c:if>
        <a href='#' class='btn_w' onclick="window.history.go(-1); return false;">돌아가기</a>
    </div>
</div>
</div>
<!--//실제컨텐츠영역-->
</div>
</div>
<!--//Contents -->
<script>
    function del(idx){
        if (confirm("게시글을 삭제하시겠습니까?") == true){
            $.post("/del?idx=" + idx, function(result){
                if(result == 1){
                    alert("삭제되었습니다.");
                    window.history.go(-2);
                }else{
                    alert("알 수 없는 오류가 발생하였습니다.");
                    window.history.go(-1);
                }
            });
        }
    }
</script>