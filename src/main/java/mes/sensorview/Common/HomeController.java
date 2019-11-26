package mes.sensorview.Common;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN_SUB;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
public class HomeController extends ReturnFunction {

    @RequestMapping("/login")
    public String home()
    {

        SCM_IN_SUB scmInSub = new SCM_IN_SUB();
        scmInSub.setBad_qty("0$1$2$3$4");
        scmInSub.setIn_qty("9$8$7$6$5");
        scmInSub.setOrder_qty("0$0$0$0$0");
        scmInSub.setPart_code("A$B$C$D$E");
        log.info(MakeScmInCodeList(scmInSub));
        return "login";
}


    @RequestMapping(value="/")
    public String main(){
        return "main";
    }
}
