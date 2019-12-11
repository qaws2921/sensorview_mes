package mes.sensorview.Common.Interceptor;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Auth.Auth;
import mes.sensorview.Common.Auth.AuthService;
import mes.sensorview.Common.Function.ReturnFunction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

/**
 * <javadoc>
 * Handler 세팅
 * @author      김재일
 * @version     1.0
 * @since       2019-11-14
 **/
@Slf4j
@Component
public class Handler extends HandlerInterceptorAdapter {

    @Autowired
    private AuthService authService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
        HttpSession session = request.getSession();

        Session lv = new Session();
        lv.setUser_code("ADMIN");
        lv.setUser_name("관리자");
        lv.setSite_code("S0001");
        lv.setDept_code("D1000");
        lv.setDuty_code("1000");

        request.getSession().setAttribute("userData", lv);
        Session userData = (Session) session.getAttribute("userData");
        try {
            if (ObjectUtils.isEmpty(userData) ) {
                response.setContentType("text/html; charset=UTF-8");
                PrintWriter out = response.getWriter();
                out.println("<script>alert(' 회원데이터가 존재하지않습니다.\\n 로그인페이지로 이동합니다.'); location.href='/login';</script>");
                out.flush();
                return false;
            }else if("XMLHttpRequest".equals(request.getHeader("X-Requested-With")) ){
                session.setMaxInactiveInterval(30 * 60);
            }else if(request.getServletPath().equals("/favicon.ico") || request.getServletPath().equals("/error")) {
            }else {
                session.setMaxInactiveInterval(30 * 60);
                if (request.getServletPath().equals("/") || request.getServletPath().equals("/loginAction") ) { // left 메뉴가 없을시
                    authService.model_menu_setting(request);
                } else {
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
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }

}
