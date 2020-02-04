<%--
  Created by IntelliJ IDEA.
  User: jerrypig
  Date: 2020-01-13
  Time: 08:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<div class="page-header">
    <img src="http://rndinfo.com/wp-content/uploads/MES-main-banner.jpg" class="center-block"/>
</div>
<div class="page-content">
    <div class="row center-block">
        <div class="col-xs-12">
            <!-- PAGE CONTENT BEGINS -->
            <div class="tabbable">
                <ul class="nav nav-tabs padding-18 tab-size-bigger" id="myTab">
                    <li class="active">
                        <a data-toggle="tab" href="#faq-tab-1" aria-expanded="true">
                            <i class="blue ace-icon fa fa-tachometer bigger-120"></i>
                            공지사항
                        </a>
                    </li>

                    <li class="">
                        <a data-toggle="tab" href="#faq-tab-2" aria-expanded="false">
                            <i class="green ace-icon fa fa-tachometer bigger-120"></i>
                            게시판1
                        </a>
                    </li>

                    <li class="">
                        <a data-toggle="tab" href="#faq-tab-3" aria-expanded="false">
                            <i class="orange ace-icon fa fa-tachometer bigger-120"></i>
                            게시판2
                        </a>
                    </li>
                </ul>

                <div class="tab-content no-border padding-24">
                    <div id="faq-tab-1" class="tab-pane fade active in">
                        <h4 class="blue">
                            <i class="ace-icon fa fa-bullhorn bigger-110"></i>
                            알립니다
                        </h4>

                        <div class="space-8"></div>

                        <div id="faq-list-1" class="panel-group accordion-style1 accordion-style2">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-1-1" data-parent="#faq-list-1" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-chevron-left pull-right" data-icon-hide="ace-icon fa fa-chevron-down" data-icon-show="ace-icon fa fa-chevron-left"></i>
                                        <i class="ace-icon fa fa-bullhorn bigger-130"></i>
                                        &nbsp; 공지사항 1
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-1-1">
                                    <div class="panel-body">
                                        &nbsp; 공지사항 내용
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-1-2" data-parent="#faq-list-1" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-chevron-left pull-right" data-icon-hide="ace-icon fa fa-chevron-down" data-icon-show="ace-icon fa fa-chevron-left"></i>
                                        <i class="ace-icon fa fa-bullhorn"></i>
                                        &nbsp; 공지사항 2
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-1-2">
                                    <div class="panel-body">
                                        &nbsp; 공지사항 내용
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-1-3" data-parent="#faq-list-1" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-chevron-left pull-right" data-icon-hide="ace-icon fa fa-chevron-down" data-icon-show="ace-icon fa fa-chevron-left"></i>
                                        <i class="ace-icon fa fa-bullhorn"></i>
                                        &nbsp; 공지사항 2
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-1-3">
                                    <div class="panel-body">
                                        &nbsp; 공지사항 내용
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-1-4" data-parent="#faq-list-1" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-chevron-left pull-right" data-icon-hide="ace-icon fa fa-chevron-down" data-icon-show="ace-icon fa fa-chevron-left"></i>
                                        <i class="ace-icon fa fa-bullhorn"></i>
                                        &nbsp; 공지사항 2
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-1-4">
                                    <div class="panel-body">
                                        &nbsp; 공지사항 내용
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-1-5" data-parent="#faq-list-1" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-chevron-left pull-right" data-icon-hide="ace-icon fa fa-chevron-down" data-icon-show="ace-icon fa fa-chevron-left"></i>
                                        <i class="ace-icon fa fa-bullhorn"></i>
                                        &nbsp; 공지사항 2
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-1-5">
                                    <div class="panel-body">
                                        &nbsp; 공지사항 내용
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="faq-tab-2" class="tab-pane fade">
                        <h4 class="blue">
                            <i class="green ace-icon fa fa-user bigger-110"></i>
                            Account Questions
                        </h4>

                        <div class="space-8"></div>

                        <div id="faq-list-2" class="panel-group accordion-style1 accordion-style2">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-2-1" data-parent="#faq-list-2" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-chevron-right smaller-80" data-icon-hide="ace-icon fa fa-chevron-down align-top" data-icon-show="ace-icon fa fa-chevron-right"></i>&nbsp;
                                        Enim eiusmod high life accusamus terry richardson?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-2-1">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-2-2" data-parent="#faq-list-2" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-chevron-right smaller-80" data-icon-hide="ace-icon fa fa-chevron-down align-top" data-icon-show="ace-icon fa fa-chevron-right"></i>&nbsp;
                                        Single-origin coffee nulla assumenda shoreditch et?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-2-2">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-2-3" data-parent="#faq-list-2" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-chevron-right middle smaller-80" data-icon-hide="ace-icon fa fa-chevron-down align-top" data-icon-show="ace-icon fa fa-chevron-right"></i>&nbsp;
                                        Sunt aliqua put a bird on it squid?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-2-3">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-2-4" data-parent="#faq-list-2" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-chevron-right smaller-80" data-icon-hide="ace-icon fa fa-chevron-down align-top" data-icon-show="ace-icon fa fa-chevron-right"></i>&nbsp;
                                        Brunch 3 wolf moon tempor sunt aliqua put?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-2-4">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="faq-tab-3" class="tab-pane fade">
                        <h4 class="blue">
                            <i class="orange ace-icon fa fa-credit-card bigger-110"></i>
                            Payment Questions
                        </h4>

                        <div class="space-8"></div>

                        <div id="faq-list-3" class="panel-group accordion-style1 accordion-style2">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-3-1" data-parent="#faq-list-3" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-plus smaller-80" data-icon-hide="ace-icon fa fa-minus" data-icon-show="ace-icon fa fa-plus"></i>&nbsp;
                                        Enim eiusmod high life accusamus terry richardson?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-3-1">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-3-2" data-parent="#faq-list-3" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-plus smaller-80" data-icon-hide="ace-icon fa fa-minus" data-icon-show="ace-icon fa fa-plus"></i>&nbsp;
                                        Single-origin coffee nulla assumenda shoreditch et?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-3-2">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-3-3" data-parent="#faq-list-3" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-plus smaller-80" data-icon-hide="ace-icon fa fa-minus" data-icon-show="ace-icon fa fa-plus"></i>&nbsp;
                                        Sunt aliqua put a bird on it squid?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-3-3">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-3-4" data-parent="#faq-list-3" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-plus smaller-80" data-icon-hide="ace-icon fa fa-minus" data-icon-show="ace-icon fa fa-plus"></i>&nbsp;
                                        Brunch 3 wolf moon tempor sunt aliqua put?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-3-4">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="faq-tab-4" class="tab-pane fade">
                        <h4 class="blue">
                            <i class="purple ace-icon fa fa-magic bigger-110"></i>
                            Miscellaneous Questions
                        </h4>

                        <div class="space-8"></div>

                        <div id="faq-list-4" class="panel-group accordion-style1 accordion-style2">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-4-1" data-parent="#faq-list-4" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-hand-o-right" data-icon-hide="ace-icon fa fa-hand-o-down" data-icon-show="ace-icon fa fa-hand-o-right"></i>&nbsp;
                                        Enim eiusmod high life accusamus terry richardson?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-4-1">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-4-2" data-parent="#faq-list-4" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-frown-o bigger-120" data-icon-hide="ace-icon fa fa-smile-o" data-icon-show="ace-icon fa fa-frown-o"></i>&nbsp;
                                        Single-origin coffee nulla assumenda shoreditch et?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-4-2">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-4-3" data-parent="#faq-list-4" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-plus smaller-80" data-icon-hide="ace-icon fa fa-minus" data-icon-show="ace-icon fa fa-plus"></i>&nbsp;
                                        Sunt aliqua put a bird on it squid?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-4-3">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a href="#faq-4-4" data-parent="#faq-list-4" data-toggle="collapse" class="accordion-toggle collapsed">
                                        <i class="ace-icon fa fa-plus smaller-80" data-icon-hide="ace-icon fa fa-minus" data-icon-show="ace-icon fa fa-plus"></i>&nbsp;
                                        Brunch 3 wolf moon tempor sunt aliqua put?
                                    </a>
                                </div>

                                <div class="panel-collapse collapse" id="faq-4-4">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- PAGE CONTENT ENDS -->
        </div><!-- /.col -->
        <div class="col-xs-12">
            <form action="/testFile" method="post" enctype="Multipart/form-data">
                <table>
                    <td>
                        <input type="file" name="testFile">
                    </td>
                    <td>
                        <button type="submit" >전송</button>
                    </td>
                    <td>
                        <a class="btn" href="uploads/1.txt" download>다운로드</a>
                    </td>
                </table>
            </form>
        </div>
    </div><!-- /.row -->
</div>
</body>
</html>
