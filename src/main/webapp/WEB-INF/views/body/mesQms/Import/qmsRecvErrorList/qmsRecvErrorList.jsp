<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page session="false" %>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', '불량율');

        data.addRows([
            [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
            [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
            [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
            [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
            [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
            [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
            [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
            [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
            [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
            [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
            [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
            [66, 70], [67, 72], [68, 75], [69, 80]
        ]);

        var options = {
            hAxis: {
                title: '기간'
            },
            vAxis: {
                title: '수입검사\n불량현황'
            }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);
    }

</script>
<script type="text/javascript" src="/data-component/mesQMS/Import/qmsRecvErrorList/qmsRecvErrorList.js" charset="UTF-8"></script>

<div class="main-content-inner">
    <div class="page-content">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">조회기간</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="start_date" id="datepicker"
                                   class="form-control h-25 condition_main" readonly>
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="t-align-c" style="width:25px !important;">
                        ~
                    </td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="end_date" id="datepicker2"
                                   class="form-control h-25 condition_main" readonly>
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">업체</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="supp_name" class="form-control h-25 condition_main"
                                   id="supp_name_main" onclick="supp_btn('A');" readonly>
                            <input type="hidden" name="keyword" class="form-control h-25 condition_main"
                                   id="supp_code_main">
                            <i class="ace-icon fa fa-search dark" style="top: -2px;" id="SuppSearch"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">조회구분</td>
                    <td class="wt-px-200">
                        <select id="gubun_select" class="form-control h-25">
                            <option>주별</option>
                            <option>월별</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="clearfix">
            <div class="pull-left tableTools-container">
                <div class="dt-buttons btn-overlap btn-group">
                    <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="">
                        <span><i class="fa fa-search bigger-110 blue"></i>
                            <span>조회</span>
                        </span>
                    </a>
                    <a class="dt-button buttons-collection buttons-colvis btn btn-white btn-primary btn-mini btn-bold"
                       tabindex="0" aria-controls="dynamic-table" data-original-title="" title="" onclick="">
                        <span><i class="fa fa-download bigger-110 blue"></i>
                            <span>저장</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 table-responsive">
                <div class="row">
                    <div class="col-md-8">
                        <table id="mes_grid"></table>
                        <div id="mes_grid_pager"></div>
                    </div>
                    <div class="col-md-4">
                        <table id="mes_grid2"></table>
                    </div>
                </div>
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-xs-12">
                <div id="chart_div" style="border:1px solid black;"></div>
            </div>
        </div>
    </div>
</div>

<%@include file="/WEB-INF/views/body/common/modal/supp_modal.jsp" %>


