package mes.sensorview.mesScm.InOut;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class InOutController {

    @RequestMapping(value = "/scmIn")
    public String scmIn(){
        return "mesScm/InOut/scmIn/scmIn";
    }
}
