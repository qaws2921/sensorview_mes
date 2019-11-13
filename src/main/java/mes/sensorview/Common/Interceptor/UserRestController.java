package mes.sensorview.Common.Interceptor;

import mes.sensorview.Mapper.Authority.User.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@SessionAttributes("userData")
public class UserRestController {

    @Autowired
    private UserMapper userMapper;

    @RequestMapping("/loginAction")
    public Session loginAction(Session s, HttpServletRequest request){
        HttpSession session = request.getSession();
        Session data = userMapper.loginAction(s);
        session.setAttribute("userData",data);
        return data;
    }
}
