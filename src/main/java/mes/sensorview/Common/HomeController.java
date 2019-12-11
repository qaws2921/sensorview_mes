package mes.sensorview.Common;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Function.ReturnFunction;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
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
    public String main(){
        return "main";
    }
}
