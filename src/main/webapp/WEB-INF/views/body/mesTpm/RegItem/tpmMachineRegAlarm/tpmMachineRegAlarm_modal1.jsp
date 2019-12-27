<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<script type="text/javascript" src="/data-component/mesTpm/RegItem/tpmMachineRegAlarm/tpmMachineRegAlarm_modal1.js" charset="UTF-8"></script>
<div id="addDialog"  title="예방점검알람추가" style="display: none">
    <div class="col-lg-12">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">라인</td>
                    <td class="wt-px-150">
                        <select name="line_code" id="line_select2" class="form-control h-25 modal_send_data" onchange="select_change2(this.value);" style="width: 100%">
                            <option value="">전체</option>
                        </select>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">설비</td>
                    <td class="wt-px-150">
                        <select name="machine_code" id="machine_select2" class="form-control h-25 modal_value modal_send_data" style="width: 100%">
                        </select>
                    </td>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">사전알림(일)</td>
                    <td class="wt-px-150">
                        <input type="text" name="alarm_day" value="0" id="alarm_day" class="form-control modal_value modal_send_data" onchange="inputIntChange();">
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <div class="clearfix">
                <div class="pull-left tableTools-container">
                    <div class="dt-buttons btn-overlap btn-group">
                        <a class="dt-button btn btn-white btn-primary btn-mini btn-bold"
                           tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="add_modal1_btn()">
                            <span>
                                <i class="fa fa-plus bigger-110 blue"></i>
                                <span>저장</span>
                            </span>
                        </a>
                        <a class="dt-button btn btn-white btn-primary btn-mini btn-bold"
                           tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="">
                            <span>
                                <i class="fa fa-times bigger-110 blue"></i>
                                <span>취소</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-5 padding0" id="content1">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 t-align-c td-title padding-a-0">부서</td>
                    <td class="wt-px-150">
                        <select name="keyword" class="form-control h-25 modal_value2" id="dept_select" style="width: 100%">
                        </select>
                    </td>
                    <td>
                        <div class="dt-buttons btn-overlap btn-group">
                            <a class="dt-button btn btn-white btn-primary btn-mini btn-bold"
                               tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="modal1_get_btn(1)">
                            <span>
                                <i class="fa fa-search bigger-110 blue"></i>
                                <span>조회</span>
                            </span>
                            </a>
                        </div>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <div class="row">
                <div class="col-xs-12">
                    <table id="mes_modal1_grid1"></table>
                    <div id="mes_modal1_grid1_pager"></div>
                </div>
            </div>
        </div>

        <div class="col-lg-1 padding0 mid-arrow-r">
            <div class="dt-buttons btn-overlap btn-group">
                <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="right_modal1_btn();">
                    <span>
                        <i class="fa fa-arrow-right bigger-110 blue"></i>
                    </span>
                </a>
                <br><br>
                <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold" tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="left_modal1_btn();">
                    <span>
                        <i class="fa fa-arrow-left bigger-110 pink"></i>
                    </span>
                </a>
            </div>
        </div>

        <div class="col-lg-6 padding0" id="content2">
            <div class="row">
                <div class="col-xs-12" style="padding-top: 52px;">
                    <table id="mes_modal1_grid2"></table>
                </div>
            </div>
        </div>
    </div>
</div>