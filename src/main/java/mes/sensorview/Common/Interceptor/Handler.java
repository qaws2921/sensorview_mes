package mes.sensorview.Common.Interceptor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;

@Slf4j
@Component
public class Handler extends HandlerInterceptorAdapter {
    /**
     * @DESC : 로그인 세션 확인 preHandle
     * @생성자 : 김재일
     * @생성일 : 2019-11-06
     **/
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();
        Session userData = (Session) session.getAttribute("userData");

        if (ObjectUtils.isEmpty(userData)) {
            response.setContentType("text/html; charset=UTF-8");
            PrintWriter out = response.getWriter();
            out.println("<script>alert(' 회원데이터가 존재하지않습니다.\\n 로그인페이지로 이동합니다.'); location.href='/login';</script>");
            out.flush();
            return false;
        } else {
            log.info("유저코드 : " + userData.getUser_code());
            log.info("사이트코드 : " + userData.getSite_code());
            session.setMaxInactiveInterval(30 * 60);
            return true;
        }
    }

    @Override
    public void afterConcurrentHandlingStarted(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();
        Session userData = (Session) session.getAttribute("userData");
        if (ObjectUtils.isEmpty(userData)) {
            response.setContentType("text/html; charset=UTF-8");
            PrintWriter out = response.getWriter();
            out.println("<script>alert(' 회원데이터가 존재하지않습니다.\\n 로그인페이지로 이동합니다.'); location.href='/login';</script>");
            out.flush();
        } else {
            session.setMaxInactiveInterval(30 * 60);
        }
    }


    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
