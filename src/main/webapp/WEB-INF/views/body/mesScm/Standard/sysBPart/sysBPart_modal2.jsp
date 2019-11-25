<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<script type="text/javascript" src="/data-component/mesSCM/Standard/sysBPart/sysBPart_modal2.js"
        charset="UTF-8"></script>
<script src="http://malsup.github.com/jquery.form.js"></script>
<script>
    $(function(){
        var fileTarget = $('.filebox .upload-hidden');
        fileTarget.on('change', function(){
            if(window.FileReader){
                var filename = $(this)[0].files[0].name;
            } else {
                var filename = $(this).val().split('/').pop().split('\\').pop();
            }
            $(this).siblings('.upload-name').val(filename);
        });
    });
    function checkFileType(filePath) {
        var fileFormat = filePath.split(".");
        if (fileFormat.indexOf("xlsx") > -1) {
            return true;
        } else {
            return false;
        }
    }

    function check() {
        var file = $("#excelUploads").val();
        if (file == "" || file == null) {
            alert("파일을 선택해주세요.");
            return false;
        } else if (!checkFileType(file)) {
            alert("엑셀 파일만 업로드 가능합니다.");
            return false;
        }

        if (confirm("업로드 하시겠습니까?")) {
            var options = {
                success : function(data) {
                    alert("모든 데이터가 업로드 되었습니다.");

                },
                type : "POST"
            };
            $("#excelUploadForm").ajaxSubmit(options);

        }
    }

</script>
<div id="uploadDialog" title="자재품목 엑셀업로드" >
    <div class="col-lg-12">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title">
                        찾아보기
                    </td>
                    <form id="excelUploadForm" name="excelUploadForm" enctype="multipart/form-data" method="post" action= "/poiCheck">
                        <td class="filebox wt-50">
                            <input class="upload-name" value="파일선택" disabled="disabled">
                            <label for="excelUploads" class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold">
                                파일찾기
                            </label>
                            <input type="file" id="excelUploads" name="excelfile" class="upload-hidden">
                        </td>
                    </form>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <div class="clearfix">
                <div class="pull-left tableTools-container">
                    <div class="dt-buttons btn-overlap btn-group">
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" title="" onclick="check()">
                                            <span>
                                                <i class="fa fa-search bigger-110 blue"></i>
                                                <span>가져오기</span>
                                            </span>
                        </a>
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold"
                           title="" onclick="">
                                            <span>
                                                <i class="fa fa-check bigger-110 blue"></i>
                                                <span>적용</span>
                                            </span>
                        </a>
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold"
                           id="close_btn2" onclick="">
                                            <span>
                                                <i class="fa fa-times bigger-110 blue"></i>
                                                <span>목록으로</span>
                                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <table id="modal2_grid"></table>
                    <div id="modal2_grid_pager"></div>
                </div>
            </div>
        </div>
    </div>
</div>