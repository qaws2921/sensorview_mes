package mes.sensorview.mesManager.User;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.User.UserMapper;
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
        sdv.setUser_code(getSessionData(req).getSite_code());
        sdv.setSite_code(getSessionData(req).getUser_code());
        return userMapper.sysDeptAdd(sdv);
    }

    public Message sysDeptDelete(List<SYSDept> checkList, HttpServletRequest req){
        
        Page p = new Page();
        String keyword= "";
        for (int i = 0; i < checkList.size(); i++) {
            if (i == 0) {
                keyword = checkList.get(i).getDept_code();
            }else {
                keyword = keyword+","+ checkList.get(i).getDept_code();
            }
        }
        p.setSite_code(getSessionData(req).getSite_code());
        p.setKeyword(keyword);
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

    public Message sysUserDelete(List<SYSUser> checkList){
        Page p = new Page();
        String keyword = "";
        int index = 0;
        for (SYSUser list : checkList) {
            System.out.println(list.getUser_code());
            if (index == 0) {
                keyword = list.getUser_code();
            }else{
                keyword = keyword+","+list.getUser_code();
            }
            ++index;
        }

        p.setKeyword(keyword);
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
    
    public Message sysUserSuppDelete(List<SYSUserSupp> checkList){
        Page p = new Page();
        String keyword = "";
        int index = 0;
        for (SYSUserSupp list : checkList) {
            System.out.println(list.getUser_code());
            if (index == 0) {
                keyword = list.getUser_code();
            }else{
                keyword = keyword+","+list.getUser_code();
            }
            ++index;
        }

        p.setKeyword(keyword);
        return userMapper.sysUserSuppDelete(p);
    }
}
