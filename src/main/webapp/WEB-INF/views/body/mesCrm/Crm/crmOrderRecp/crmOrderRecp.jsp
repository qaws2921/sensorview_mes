<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="main-content-inner">
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <div class="col-lg-12 ">
            <span class="sp-title">
            	수주정보관리
            	<small class="sp-small"><i class="ace-icon fa fa-angle-double-right"></i>
            	Manufacturing Execution System
            	</small>
            </span>
            <span style="float: right">
            	영업관리
            	<i class="ace-icon fa fa-angle-double-right"></i>
             	영업관리
                <i class="ace-icon fa fa-angle-double-right"></i>
                <b>수주정보관리</b>
           </span>
        </div>
    </div>

    <div class="page-content">
        <div class="col-lg-12 padding0">
            <table class="table wt-100">
                <tbody>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">수주번호</td>
                    <td class="wt-px-200">
                       <input type="text" class="form-control">
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">진행상태</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>출하</option>
                            <option>생산완료</option>
                            <option>생산중</option>
                            <option>대기</option>
                        </select>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">진행여부</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>접수</option>
                            <option>취소</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">접수일</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="start_date" id="datepicker"
                                   class="form-control h-25 condition_main">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>

                    <td class="wt-px-100 td-title t-align-c padding-a-0">납기일</td>
                    <td class="wt-px-200">
                        <div class="input-icon input-icon-right">
                            <input type="text" name="end_date" id="datepicker2"
                                   class="form-control h-25 condition_main">
                            <i class="ace-icon fa fa-calendar dark" style="top: -2px;"></i>
                        </div>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">수주처</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control"/>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">제품구분</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>완제품</option>
                            <option>상품</option>
                        </select>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">품목구분</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>전체</option>
                        </select>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">End User</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control"/>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">
                        단품<input type="radio">
                    </td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>제품1</option>
                            <option>제품2</option>
                        </select>
                    </td>
                    <td colspan="4"></td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">
                        조립<input type="radio">
                    </td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control">
                    </td>
                    <td class="wt-px-100">
                        <select class="form-control">
                            <option>제품1</option>
                            <option>제품2</option>
                        </select>
                    </td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control">
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">개별길이(M)</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control">
                    </td>
                </tr>
                </tbody>
            </table>

            <table class="table wt-100" style="margin-top:10px;">
                <tbody>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">단위</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>단위1</option>
                            <option>단위2</option>
                        </select>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">수량</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control">
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0"></td>
                    <td class="wt-px-200"></td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">옵션</td>
                    <td colspan="5" class="t-align-c">
                      <input type="checkbox">고객성적서,
                      <input type="checkbox">슬리브,
                      <input type="checkbox">고객라벨,
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">비고</td>
                    <td colspan="5" class="t-align-c">
                        <input type="text" class="form-control">
                    </td>
                </tr>
                </tbody>
            </table>

            <table class="table wt-100" style="margin-top:30px;">
                <tbody>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">영업구분</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>국내</option>
                            <option>해외</option>
                        </select>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">담당자</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control">
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">배송방법</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>택배</option>
                            <option>직접배송</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">판매구분</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>판매</option>
                            <option>샘플</option>
                        </select>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">유/무상</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>유상</option>
                            <option>무상</option>
                        </select>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">배송업체</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>대한통운</option>
                            <option>택배사1</option>
                            <option>택배사2</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">생산</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>외부</option>
                        </select>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">샘플용도</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control">
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">배송비부담</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>당사</option>
                            <option>착불</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">통화단위</td>
                    <td class="wt-px-200">
                        <select class="form-control">
                            <option>KRW</option>
                            <option>EN</option>
                        </select>
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">단가</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control">
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">합계</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control" readonly>
                    </td>
                </tr>
                </tbody>
            </table>

            <table class="table wt-100" style="margin-top:30px;">
                <tbody>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">발주번호</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control">
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">결재방법</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control">
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">담당자</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control">
                    </td>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">연락처</td>
                    <td class="wt-px-200">
                        <input type="text" class="form-control">
                    </td>
                </tr>
                <tr>
                    <td class="wt-px-100 td-title t-align-c padding-a-0">배송지</td>
                    <td colspan="3">
                        <input type="text" class="form-control">
                    </td>

                </tr>
                </tbody>
            </table>

        </div>

        <div class="clearfix">
            <div class="pull-left tableTools-container">
                <div class="dt-buttons btn-overlap btn-group">

                    <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" title=""
                       onclick="">
                            <span><i class="fa fa-plus bigger-110 blue"></i>
                            <span>저장</span>
                            </span>
                    </a>
                    <a class="dt-button buttons-csv buttons-html5 btn btn-white btn-primary btn-mini btn-bold" title=""
                       onclick="">
                            <span><i class="fa fa-times bigger-110 blue"></i>
                            <span>닫기</span>
                            </span>
                    </a>
                </div>
            </div>
        </div>


    </div>
</div>