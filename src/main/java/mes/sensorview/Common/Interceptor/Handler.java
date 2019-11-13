package mes.sensorview.Common.Interceptor;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Auth.Auth;
import mes.sensorview.Common.Auth.AuthService;
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
        String ajax = "";
        if ("XMLHttpRequest".equals(request.getHeader("X-Requested-With"))) {
            ajax = "ajax";
            log.info(ajax);
        }

        try {
            if (ObjectUtils.isEmpty(userData) || ajax.equals("ajax")) {
                response.setContentType("text/html; charset=UTF-8");
                PrintWriter out = response.getWriter();
                out.println("<script>alert(' 회원데이터가 존재하지않습니다.\\n 로그인페이지로 이동합니다.'); location.href='/login';</script>");
                out.flush();
                return false;
            } else {
                session.setMaxInactiveInterval(30 * 60);
                /**
                 * @desc : 권한별 멘뉴 구성
                 * @생성자 : 김종효
                 * @생성일 : 2019-10-21
                 * */
                if (request.getServletPath().equals("/") || request.getServletPath().equals("/loginAction") || request.getServletPath().equals("/error")) { // left 메뉴가 없을시
                    authService.model_menu_setting(request);
                } else {
                    log.info("sssss");
                    ArrayList<List<Auth>> authAllSubSelect = (ArrayList<List<Auth>>) authService.authAllSubSelect(request); // 권한에 맞는 전체 리스트
                    request.setAttribute("allSub_list", authAllSubSelect);
                    Auth av1 = null;
                    boolean check = true;
                    boolean check2 = true;

                    int index = 0;
                    int index2 = 0;

                    while (check) { // 반복해서 체크
                        while (check2) {
                            if (request.getServletPath().substring(1).equals(authAllSubSelect.get(index).get(index2).getMenu_code())) { // 처음 메뉴값
                                av1 = authAllSubSelect.get(index).get(index2);
                                check2 = false;
                                check = false;
                            }

                            if (authAllSubSelect.get(index).size() == index2 + 1) {
                                check2 = false;
                            }
                            ++index2;
                        }
                        check2 = true;
                        index2 = 0;
                        ++index;
                    }
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
