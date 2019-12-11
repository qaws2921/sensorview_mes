<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type="text/javascript" src="/data-component/mesQMS/Shipment/qmsProd/qmsProd_modal2.js" charset="UTF-8"></script>
<div id="addDialog2" title="성적서등록" style="display:none">
    <div class="profile-user-info profile-user-info-striped">
        <div class="profile-info-row">
            <div class="profile-info-name wt-px-250">검사항목</div>
            <c:forEach var="num" begin="1" end="20" step="1">
                <div class="profile-info-name wt-px-75">${num}</div>
            </c:forEach>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">시리얼</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <input type="text" class="form-control">
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">Connector와 Cable의 결합 상태 확인</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">Connector Male / Female Type 구분 확인</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>

        <div class="profile-info-row">
            <div class="profile-info-name">Connector 내부 이물질 및 오염 상태 확인</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">Connector 내부 및 외부 찍힘 및 스크래치 확인</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name"> Aramid 케이블 주파수 별 패턴 확인</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">실리콘 및 우레탄 케이블 색상 확인</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">수축 튜브 결합 상태 확인</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">Aramid 케이블 보풀 발생 확인</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">케이블 찍힘 및 오염 상태 확인</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">양쪽 커넥터 끝단에서 끝단까지 길이 측정 확인</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">Return Loss</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">Insertion Loss</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
        <div class="profile-info-row">
            <div class="profile-info-name">Phase Match</div>
            <c:forEach begin="1" end="20" step="1">
                <div class="profile-info-value wt-px-75">
                    <select class="form-control">
                        <option>N/A</option>
                        <option>O</option>
                        <option>X</option>
                    </select>
                </div>
            </c:forEach>
        </div>
    </div>
</div>
