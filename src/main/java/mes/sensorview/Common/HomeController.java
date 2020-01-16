package mes.sensorview.Common;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Function.ReturnFunction;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@Controller
@Slf4j
public class HomeController extends ReturnFunction {

    @RequestMapping("/login")
    public String home()
    {
        log.info("ASC ll = "+(char) 4);
        String data = "a/b/c/,d/e&f/g/h/,i/j&k/n/m/,l/o";
        MakeCodeList(data);
        return "login";
    }

    @RequestMapping(value="/")
    public String index(){
        return "index";
    }

    @RequestMapping("/logout")
    public String logout(HttpServletRequest req, HttpServletResponse res)
    {
        req.getSession().invalidate();
        Cookie[] cookies = req.getCookies();
        if (cookies != null) {
            for (Cookie c : cookies) {
                if (c.getName().equals("userData")) {
                    c.setValue(null);
                    c.setMaxAge(0);
                    res.addCookie(c);
                    break;
                }
            }
        }


        return "logout";
    }
}
