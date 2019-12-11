<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type="text/javascript" src="/data-component/mesTpm/Standard/tpmMC/tpmMC_modal.js"charset="UTF-8"></script>
<div id="addDialog" title="설비정보 추가" style="display:none">
    <div class="col-lg-12 ">
        <div class="col-lg-8" style="margin-top: 35px;">
            <table class="table multi_table">
                <tbody>
                <tr>
                    <td class=" td-title t-align-c">설비코드</td>
                    <td>
                        <input type="text" class="form-control" readonly placeholder="자동생성">
                    </td>
                    <td class=" td-title t-align-c">설비명</td>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                </tr>
                <tr>
                    <td class=" td-title t-align-c">설치장소</td>
                    <td>
                        <select class="form-control main_value" id="status1_select" name="status1">
                            <option value="0">전체</option>
                        </select>
                    </td>
                    <td class=" td-title t-align-c">자산코드</td>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                </tr>
                <tr>
                    <td class=" td-title t-align-c">설치일자</td>
                    <td>
                        <select class="form-control main_value" id="partGrp_select" onchange="select_change2(this.value);" name="part_grp_code">

                        </select>
                    </td>
                    <td class=" td-title t-align-c">제작금액</td>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                </tr>
                <tr>
                    <td class=" td-title t-align-c">등급</td>
                    <td>
                        <input type="text" class="form-control">
                    </td>

                    <td class=" td-title t-align-c">중점관리</td>
                    <td>
                        <select class="form-control main_value" id="unit_select" name="unit_type">
                            <option>유</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class=" td-title t-align-c">제작업체</td>
                    <td>
                        <span class="input-icon input-icon-right">
                            <input type="text" class="form-control main_value" id="supp_name_modal" onclick="supp_btn('B');" readonly/>
                            <input type="hidden" class="form-control main_value" id="supp_code_modal" name="end_supp_code"/>
                            <i class="ace-icon fa fa-search dark" style="top: -2px;" id="SuppSearch2-Main"></i>
                        </span>
                    </td>
                    <td class=" td-title t-align-c">업체담당자</td>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                </tr>
                <tr>
                    <td class=" td-title t-align-c">설비관리자</td>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                    <td class=" td-title t-align-c">업체담당자(연락처)</td>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="row">
                <div class="col-xs-12 table-responsive">
                    <table id="SuppSearchGrid"></table>
                    <div id="SuppSearchGridPager"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="col-12 img-title">
                <div class="col-lg-12 ">
                    <span class="sp-title">img1</span>
                    <div class="dt-buttons btn-overlap btn-group filebox">
                        <label for="xlsUploads1" class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold">
                            <i class="fa fa-upload bigger-110 blue"></i>
                            파일찾기
                        </label>
                        <input type="file" id="xlsUploads1" name="files" class="upload-hidden">
                        <label class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold">
                            <span>
                                <i class="fa fa-trash bigger-110 blue"></i>
                                <span>삭제</span>
                            </span>
                        </label>
                    </div>
                    <div class="col-lg-12">
                        <div class="img-wrap" style="border: 2px solid #79afce; width: 100%; height: 150px; margin-top: 5px; margin-bottom: 5px;">
                            <div class="img-text" id="img-text1">미리보기가 표시됩니다.</div>
                            <img style="width: 50%; margin-top: 15px;" id="img1">
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 ">
                    <span class="sp-title">img2</span>
                    <div class="dt-buttons btn-overlap btn-group filebox">
                        <label for="xlsUploads2" class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold">
                            <i class="fa fa-upload bigger-110 blue"></i>
                            파일찾기
                        </label>
                        <input type="file" id="xlsUploads2" name="files" class="upload-hidden">
                        <label class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold">
                            <span>
                                <i class="fa fa-trash bigger-110 blue"></i>
                                <span>삭제</span>
                            </span>
                        </label>
                    </div>
                    <div class="col-lg-12">
                        <div class="img-wrap" style="border: 2px solid #79afce; width: 100%; height: 150px; margin-top: 5px; margin-bottom: 5px;">
                            <div class="img-text" id="img-text2">미리보기가 표시됩니다.</div>
                            <img style="width: 50%; margin-top: 15px;" id="img2">
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 ">
                    <span class="sp-title">img3</span>
                    <div class="dt-buttons btn-overlap btn-group filebox">
                        <label for="xlsUploads3" class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold">
                            <i class="fa fa-upload bigger-110 blue"></i>
                            파일찾기
                        </label>
                        <input type="file" id="xlsUploads3" name="files" class="upload-hidden">
                        <label class="dt-button buttons-copy buttons-html5 btn btn-white btn-primary btn-mini btn-bold">
                            <span>
                                <i class="fa fa-trash bigger-110 blue"></i>
                                <span>삭제</span>
                            </span>
                        </label>
                    </div>
                    <div class="col-lg-12">
                        <div class="img-wrap" style="border: 2px solid #79afce; width: 100%; height: 150px; margin-top: 5px; margin-bottom: 5px;">
                            <div class="img-text" id="img-text3">미리보기가 표시됩니다.</div>
                            <img style="width: 50%; margin-top: 15px;" id="img3" src="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    function readURL1(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img-text1').remove();
                $('#img1').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    function readURL2(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img-text2').remove();
                $('#img2').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    function readURL3(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img-text3').remove();
                $('#img3').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#xlsUploads1").change(function(){
        readURL1(this);
    });
    $("#xlsUploads2").change(function(){
        readURL2(this);
    });
    $("#xlsUploads3").change(function(){
        readURL3(this);
    });
</script>