package mes.sensorview.mesScm.Standard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class StandardController {
    @RequestMapping(value = "/sysBPartGroup")
    public String sysBPartGroup() {
        return "mesScm/Standard/sysBPartGroup/sysBPartGroup";
    }
}
