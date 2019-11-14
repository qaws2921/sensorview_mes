package mes.sensorview.Common.Interceptor;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Auth.Auth;
import mes.sensorview.Common.Auth.AuthService;
import mes.sensorview.Common.Function.ReturnFunction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
public class Handler extends HandlerInterceptorAdapter {

    @Autowired
    private AuthService authService;

    /**
     * @DESC : 로그인 세션 확인 preHandle
     * @생성자 : 김재일
     * @생성일 : 2019-11-06
     **/
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
        log.info(request.getServletPath());

        HttpSession session = request.getSession();
        Session userData = (Session) session.getAttribute("userData");


        try {
            if (ObjectUtils.isEmpty(userData) ) {
                response.setContentType("text/html; charset=UTF-8");
                PrintWriter out = response.getWriter();
                out.println("<script>alert(' 회원데이터가 존재하지않습니다.\\n 로그인페이지로 이동합니다.'); location.href='/login';</script>");
                out.flush();
                return false;
            }else if("XMLHttpRequest".equals(request.getHeader("X-Requested-With")) ){
                log.info("비동기 통신");
                session.setMaxInactiveInterval(1 * 20);
            }else if(request.getServletPath().equals("/favicon.ico") || request.getServletPath().equals("/error")) {
                log.info("에러");
            }else {
                session.setMaxInactiveInterval(1 * 20);
                if (request.getServletPath().equals("/") || request.getServletPath().equals("/loginAction") ) { // left 메뉴가 없을시
                    authService.model_menu_setting(request);
                } else {
                    log.info("페이지이동");
                    ArrayList<List<Auth>> authAllSubSelect = (ArrayList<List<Auth>>) authService.authAllSubSelect(request); // 권한에 맞는 전체 리스트
                    ReturnFunction returnFunction = new ReturnFunction();

                    request.setAttribute("allSub_list", authAllSubSelect);
                    Auth av1 = returnFunction.authMenu(request,authAllSubSelect);
                    String under_name = av1.getParent_menu_code();
                    authService.model_menu_setting(request, request.getServletPath().substring(1), under_name.substring(0, under_name.length() - 1), under_name);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return true;
    }

    @Override
    public void afterConcurrentHandlingStarted(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        log.info("afterConcurrentHandlingStarted call......");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }

}
