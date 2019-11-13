package mes.sensorview.Common.Auth;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.Function.AuthFunction;
import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.Mapper.Auth.AuthMapper;
import mes.sensorview.mesManager.Authority.SysAuthProgram;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Service
public class AuthService extends AuthFunction{

    @Autowired
    private AuthMapper authMapper;

    public List<Auth> authMainSelect(HttpServletRequest req) {
        Session session = (Session) req.getSession().getAttribute("userData");
        return authMapper.authMainSelect(session);
    }

    /**
     * @desc : 왼쪽 메뉴 조회 상위 하위 분류 (keyword: 최상위 메뉴)
     * @생성자 : 김종효
     * @생성일 : 2019-10-16
     * */
    public List<?> authSubSelect(HttpServletRequest req, String keyword) {
        Session session = (Session) req.getSession().getAttribute("userData");
        session.setKeyword(keyword);
        List<Auth> avList =  authMapper.authSubSelect(session);
        return gb_list(avList);
    }

    /**
     * @desc : 최상단의 하위 메뉴 조회
     * @생성자 : 김종효
     * @생성일 : 2019-10-16
     * */
    public List<?> authAllSubSelect(HttpServletRequest req) {
        Session session = (Session) req.getSession().getAttribute("userData");
        List<Auth> avList = authMapper.authMainSelect(session);
        ArrayList<List<Auth>> allSubList = new ArrayList<>();
        ArrayList<List<Auth>> allSubList2 = new ArrayList<>();

        for (Auth Auth : avList) {
            session.setKeyword(Auth.getMenu_code());
            allSubList.add(authMapper.authSubSelect(session));
            allSubList2.add(authMapper.authSubSelect(session));
        }
        return  authAllSubSelect(allSubList,allSubList2);
    }



    /**
     * @desc : 권한 별 메뉴  구성
     * @생성자 : 김종효
     * @생성일 : 2019-10-21
     * */
    public void model_menu_setting(HttpServletRequest req, String page_name, String top_menu_name, String under_name) {
        req.setAttribute("page_name",page_name);
        req.setAttribute("top_active",under_name);
        req.setAttribute("under_active",page_name);
        req.setAttribute("main_list",authMainSelect(req));
        req.setAttribute("left_list",authSubSelect(req, top_menu_name));
        req.setAttribute("bestTop_name",top_menu_name);
    }

    /**
     * @desc : 권한 별 메뉴  구성
     * @생성자 : 김종효
     * @생성일 : 2019-10-21
     * */
    public void model_menu_setting(HttpServletRequest req){
        req.setAttribute("main_list",authMainSelect(req));
        req.setAttribute("allSub_list",authAllSubSelect(req));
    }

    public SysAuthProgram menuAuth(HttpServletRequest req, Page p){
        Session session = (Session) req.getSession().getAttribute("userData");
        p.setUser_code(session.getUser_code());
        p.setSite_code(session.getSite_code());
        return authMapper.menuAuth(p);
    }

}
