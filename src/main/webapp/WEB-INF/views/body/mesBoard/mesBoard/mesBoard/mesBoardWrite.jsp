<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt_rt" %>
<jsp:useBean id="toDay" class="java.util.Date"/>
<link rel="stylesheet" href="/ui-component/board/style.css"/>
<link rel="stylesheet" href="/ui-component/board/common.css"/>
<link rel="stylesheet" href="/ui-component/board/main.css"/>
<link rel="stylesheet" href="/ui-component/board/sub.css"/>
<link rel="stylesheet" href="/ui-component/board/board.css"/>
<link rel="stylesheet" href="/ui-component/board/form.css"/>
<script type="text/javascript" src="/ui-component/board/ckeditor/ckeditor.js"></script>
<!-- ###실제컨텐츠영역 -->
<script>
    $(window).load(function () {
        $('#sub-t-1').text('게시글 작성');
        $('#sub-t-2').text('홈');
        $('#sub-t-3').text('게시판');
        $('#sub-t-4').text('${boardData.board_kr}');

        $("input[name=file]").each(function(i, item){
            $(this).attr('id','file_'+i).attr('name','file_'+i);
        });
    });
    function sizeChk(idx){
        var id = $(idx).attr('id');
        var baseSize = parseInt(${boardData.file_size}) * 1024 * 1024;
        var fileSize = idx.files[0].size;
        var maxSize  = baseSize / 1024 / 1024;

        if(baseSize < fileSize){
            alert('파일 용량은 최대 '+maxSize+'MB를 초과할 수 없습니다.');
            $('#'+id).val("");
            return false;
        }
    }
</script>

<div class="page-content">
    <div class="con1">
        <form name="formFrm8" action="addData" method="POST" enctype="multipart/form-data">
            <table class="form_table">
                <tbody>
                <tr>
                    <th>분류</th>
                    <td>
                        <select name="category" id="category" class="w-100">
                            <option value='as'>문의사항</option>
                            <option value='ad'>건의사항</option>
                            <option value='aa'>알림</option>
                            <option value='ac'>정보</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td><input name="subject" type='text' class='input'></td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td><textarea class="textarea" rows="10" name="description" id="description"></textarea></td>
                </tr>
                <script>
                    CKEDITOR.replace('description', {
                        'height': '400'
                    });
                    CKEDITOR.on('dialogDefinition', function (e) {
                        var dialogName = e.data.name;
                        var dialogDefinition = e.data.definition;
                        switch (dialogName) {
                            case 'image':
                                // dialogDefinition.removeContents('info');
                                dialogDefinition.removeContents('Link');
                                dialogDefinition.removeContents('advanced');
                                break;
                        }
                    });
                </script>
                </tbody>
                <tbody class="file-area">
                <tr class="file-tr">
                    <th>첨부파일</th>
                    <td><input name="file" id="file" type='file' class='input' onchange="return sizeChk(this)"></td>
                </tr>
                </tbody>
            </table>


            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td height="5"></td>
                </tr>
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
<script>
    var i;
    var file_num = ${boardData.files};
    var orgn = $('.file-tr').clone();
    $('.file-tr').remove();

    $(function () {
        if (parseInt(file_num) > 0) {
            for (i = 1; i <= file_num; i++) {
                orgn.attr('class', 'file-tr' + i);
                var clones = orgn.clone();
                $('.file-area').append(clones);
            }
        }
    })
</script>
