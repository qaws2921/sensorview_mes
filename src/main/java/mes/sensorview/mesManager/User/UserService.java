package mes.sensorview.mesManager.User;

import mes.sensorview.Mapper.mesManager.User.UserMapper;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.mesManager.User.DTO.SYSDept;
import mes.sensorview.mesManager.User.DTO.SYSUser;
import mes.sensorview.mesManager.User.DTO.SYSUserSupp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class UserService extends ReturnFunction {

    @Autowired
    private UserMapper userMapper;

    
    public RESTful sysDeptGet(Page p , HttpServletRequest req){
        RESTful resTful = new RESTful();
        p.setSite_code(getSessionData(req).getSite_code());

        List<SYSDept> rows = userMapper.sysDeptGet(p);
        int count=0;
        if(rows.size() != 0) {
            count = rows.get(0).getRec_count();
        }

        resTful.setTotal(CalcTotalPage(p.getPage(),count));
        resTful.setRows(rows);
        resTful.setPage(p.getPage());
        return resTful;
    }

    public Message sysDeptAdd(SYSDept sdv , HttpServletRequest req){
        sdv.setUser_code(getSessionData(req).getUser_code());
        sdv.setSite_code(getSessionData(req).getSite_code());
        return userMapper.sysDeptAdd(sdv);
    }

    public Message sysDeptDelete(Page p, HttpServletRequest req){
        p.setSite_code(getSessionData(req).getSite_code());
        p.setKeyword(p.getKeyword());
        return userMapper.sysDeptDelete(p);
    }

    public RESTful sysUserGet(Page p , HttpServletRequest req){
        int count=0;
        RESTful resTful = new RESTful();
        p.setSite_code(getSessionData(req).getSite_code());

        List<SYSUser> rows = userMapper.sysUserGet(p);
        if(rows.size() != 0) {
            count = rows.get(0).getRec_count();
        }

        resTful.setTotal(CalcTotalPage(p.getPage(),count));
        resTful.setRows(rows);
        resTful.setPage(p.getPage());
        return resTful;
    }

    public List<SYSDept> sysDeptAllGet(Page p , HttpServletRequest req){
        p.setSite_code(getSessionData(req).getSite_code());
        return userMapper.sysDeptAllGet(p);
    }

    public Message sysUserAdd(SYSUser suv , HttpServletRequest req){
        suv.setUpdate_user(getSessionData(req).getSite_code());
        suv.setSite_code(getSessionData(req).getUser_code());
        return userMapper.sysUserAdd(suv);
    }

    public Message sysUserDelete(Page p){
        p.setKeyword(p.getKeyword());
        return userMapper.sysUserDelete(p);
    }

    
    public RESTful sysUserSuppGet(Page p , HttpServletRequest req){
        int count=0;
        RESTful resTful = new RESTful();
        p.setSite_code(getSessionData(req).getSite_code());

        List<SYSUserSupp> rows = userMapper.sysUserSuppGet(p);
        if(rows.size() != 0) {
            count = rows.get(0).getRec_count();
        }

        resTful.setTotal(CalcTotalPage(p.getPage(),count));
        resTful.setRows(rows);
        resTful.setPage(p.getPage());
        return resTful;
    }

    
    public Message sysUserSuppAdd(SYSUserSupp susv , HttpServletRequest req){
        
        susv.setUpdate_user(getSessionData(req).getSite_code());
        susv.setSite_code(getSessionData(req).getUser_code());
        return userMapper.sysUserSuppAdd(susv);
    }
    
    public Message sysUserSuppDelete(Page p){
        p.setKeyword(p.getKeyword());
        return userMapper.sysUserSuppDelete(p);
    }

    public Session loginAction(Session s) {
        return userMapper.loginAction(s);
    }
}
