package mes.sensorview.mesPop.QcCheck;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class QcCheckController {
    @RequestMapping("qmsCheck")
    public String qmsCheck(){
        return "mesPop/QcCheck/qmsCheck/qmsCheck";
    }
    @RequestMapping("qmsCheckItem")
    public String qmsCheckItem(){
        return "mesPop/QcCheck/qmsCheckItem/qmsCheckItem";
    }
    @RequestMapping("qmsCheckList")
    public String qmsCheckList(){
        return "mesPop/QcCheck/qmsCheckList/qmsCheckList";
    }
    @RequestMapping("qmsCheckStd")
    public String qmsCheckStd(){
        return "mesPop/QcCheck/qmsCheckStd/qmsCheckStd";
    }
}
