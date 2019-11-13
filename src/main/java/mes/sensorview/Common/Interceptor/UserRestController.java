package mes.sensorview.Common.Interceptor;

import mes.sensorview.Mapper.Auth.AuthMapper;
import mes.sensorview.Mapper.User.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;

@RestController
@SessionAttributes("userData")
public class UserRestController {

    @Autowired
    private UserMapper userMapper;

    @RequestMapping("/loginAction")
    public HashMap<String, Object> loginAction(Session s, HttpServletRequest request)
    {
        HttpSession session = request.getSession();
        Session data = userMapper.loginAction(s);
        HashMap<String, Object> map = new HashMap<>();
        map.put("msg", "");
        if(data.getUser_code().equals(""))
        {
            map.put("msg", "아이디나 비밀번호를 확인하세요.");
            return map;
        }
        else
            {
            session.setAttribute("userData", data);
        }
        return map;
    }
}
