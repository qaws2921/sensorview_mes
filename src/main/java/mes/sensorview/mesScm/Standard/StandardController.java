package mes.sensorview.mesScm.Standard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class StandardController {
    @RequestMapping(value = "/sysBPartGroup")
    public String sysBPartGroup() {
        return "mesScm/Standard/sysBPartGroup/sysBPartGroup";
    }

    @RequestMapping(value = "/sysBPart")
    public String sysBPart() { return "mesScm/Standard/sysBPart/sysBPart"; }

    @RequestMapping(value = "/sysBPartPrice")
    public String sysBPartPrice() { return "mesScm/Standard/sysBPartPrice/sysBPartPrice"; }

    @RequestMapping(value = "/sysLoc")
    public String sysLoc() { return "mesScm/Standard/sysLoc/sysLoc"; }
}
