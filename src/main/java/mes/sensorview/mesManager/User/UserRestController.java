package mes.sensorview.mesManager.User;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesManager.User.DTO.SYSDept;
import mes.sensorview.mesManager.User.DTO.SYSUser;
import mes.sensorview.mesManager.User.DTO.SYSUserSupp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class UserRestController {

    @Autowired
    private UserService userService;


    @RequestMapping(value="/sysDeptGet" , method = RequestMethod.POST)
    public RESTful sysDeptGet(Page p , HttpServletRequest req){
        return userService.sysDeptGet(p, req);
    }

    @RequestMapping(value="/sysDeptAllGet" , method = RequestMethod.POST)
    public List<SYSDept> sysDeptAllGet(Page p , HttpServletRequest req){
        return userService.sysDeptAllGet(p,req);
    }

    @RequestMapping(value="/sysDeptAdd" , method = RequestMethod.POST)
    public  Message sysDeptAdd(SYSDept sdv , HttpServletRequest req){
        return userService.sysDeptAdd(sdv, req);
    }

    @RequestMapping(value="/sysDeptDelete" , method = RequestMethod.POST)
    public Message sysDeptDelete(Page p){
        return userService.sysDeptDelete(p);
    }


    @RequestMapping(value="/sysUserGet" , method = RequestMethod.POST)
    public RESTful sysUserGet(Page p , HttpServletRequest req){
        return userService.sysUserGet(p, req);
    }

    @RequestMapping(value="/sysUserAdd" , method = RequestMethod.POST)
    public Message sysUserAdd(SYSUser suv , HttpServletRequest req){
        return userService.sysUserAdd(suv, req);
    }

    @RequestMapping(value="/sysUserDelete" , method = RequestMethod.POST)
    public  Message sysUserDelete(Page p){
        return userService.sysUserDelete(p);
    }

    @RequestMapping(value="/sysUserSuppGet" , method = RequestMethod.POST)
    public RESTful sysUserSuppGet(Page p , HttpServletRequest req){
        return userService.sysUserSuppGet(p, req);
    }

    @RequestMapping(value="/sysUserSuppAdd" , method = RequestMethod.POST)
    public  Message sysUserSuppAdd(SYSUserSupp susv , HttpServletRequest req){
        return userService.sysUserSuppAdd(susv, req);
    }

    @RequestMapping(value="/sysUserSuppDelete" , method = RequestMethod.POST)
    public  Message sysUserSuppDelete(Page p){
        return userService.sysUserSuppDelete(p);
    }

}
