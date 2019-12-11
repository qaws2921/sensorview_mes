<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<script type="text/javascript" src="/data-component/mesTpm/RegItem/tpmMachineRegCycle/tpmMachineRegCycle_modal1.js" charset="UTF-8"></script>
<div id="addDialog" title="예방점검주기설정 추가" style="display:none">
    <div class="col-lg-12">
        <div class="col-lg-6 padding0" id="content1">
            <div class="profile-user-info profile-user-info-striped">
                <div class="profile-info-row">
                    <div class="profile-info-name">라인</div>
                    <div class="profile-info-value">
                        <select class="form-control">
                            <option>압출</option>
                            <option>테핑</option>
                        </select>
                    </div>
                </div>
                <div class="profile-info-row">
                    <div class="profile-info-name">설비명</div>
                    <div class="profile-info-value">
                        <select class="form-control">
                            <option>1호기</option>
                            <option>2호기</option>
                        </select>
                    </div>
                </div>
                <div class="profile-info-row">
                    <div class="profile-info-name">점검항목</div>
                    <div class="profile-info-value">
                        <select class="form-control">
                            <option>선택</option>
                        </select>
                    </div>
                </div>
                <div class="profile-info-row">
                    <div class="profile-info-name">반복구분</div>
                    <div class="profile-info-value">
                        <select class="form-control">
                            <option>주마다</option>
                            <option>매일</option>
                        </select>
                    </div>
                </div>
                <div class="profile-info-row">
                    <div class="profile-info-name">반복횟수</div>
                    <div class="profile-info-value">
                       <input type="text" class="form-control">
                    </div>
                </div>
                <div class="profile-info-row">
                    <div class="profile-info-name">시작일</div>
                    <div class="profile-info-value">
                        <input type="text" value="2019-12-11" class="form-control">
                    </div>
                </div>
                <div class="profile-info-row">
                    <div class="profile-info-name">사용유무</div>
                    <div class="profile-info-value">
                        <select class="form-control">
                            <option>Y</option>
                            <option>N</option>
                        </select>
                    </div>
                </div>
                <div class="profile-info-row">
                    <div class="profile-info-name">사전알림(일)</div>
                    <div class="profile-info-value">
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6 padding0" id="content2">
            <div class="clearfix">
                <div class="pull-left tableTools-container">
                    <div class="dt-buttons btn-overlap btn-group">
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" title="" onclick="">
                            <span>
                                <i class="fa fa-plus bigger-110 blue"></i>
                                <span>수신자 추가</span>
                            </span>
                        </a>
                        <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" id="close_btn" onclick="">
                            <span>
                            	 <i class="fa fa-trash bigger-110 blue"></i>
                                <span>수신자 삭제</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <table id="mes_modal_grid"></table>
        </div>
    </div>
</div>