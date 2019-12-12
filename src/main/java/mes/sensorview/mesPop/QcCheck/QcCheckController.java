package mes.sensorview.mesPop.QcCheck;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class QcCheckController {
    @RequestMapping("popCheck")
    public String popCheck(){
        return "mesPop/QcCheck/popCheck/popCheck";
    }
    @RequestMapping("popCheckItem")
    public String popCheckItem(){
        return "mesPop/QcCheck/popCheckItem/popCheckItem";
    }
    @RequestMapping("popCheckList")
    public String popCheckList(){
        return "mesPop/QcCheck/popCheckList/popCheckList";
    }
    @RequestMapping("popCheckStd")
    public String popCheckStd(){
        return "mesPop/QcCheck/popCheckStd/popCheckStd";
    }
}
