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
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYSDept> rows = userMapper.sysDeptGet(p);
        return getListData(rows , p);
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
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYSUser> rows = userMapper.sysUserGet(p);
        return getListData(rows , p);
    }

    public List<SYSDept> sysDeptAllGet(Page p , HttpServletRequest req){
        p.setSite_code(getSessionData(req).getSite_code());
        return userMapper.sysDeptAllGet(p);
    }

    public Message sysUserAdd(SYSUser suv , HttpServletRequest req){
        suv.setUpdate_user(getSessionData(req).getUser_code());
        suv.setSite_code(getSessionData(req).getSite_code());
        return userMapper.sysUserAdd(suv);
    }

    public Message sysUserDelete(Page p){
        p.setKeyword(p.getKeyword());
        return userMapper.sysUserDelete(p);
    }

    
    public RESTful sysUserSuppGet(Page p , HttpServletRequest req){
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYSUserSupp> rows = userMapper.sysUserSuppGet(p);
        return getListData(rows , p);
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

    public SYSUser sysUserOneGet(HttpServletRequest req, SYSUser su) {
        su.setSite_code(getSessionData(req).getSite_code());
        return userMapper.sysUserOneGet(su);
    }

    public SYSDept sysDeptOneGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return userMapper.sysDeptOneGet(p);
    }

    public SYSUserSupp sysUserSuppOneGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return userMapper.sysUserSuppOneGet(p);
    }
}
