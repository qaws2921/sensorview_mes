package mes.sensorview.mesOut.mesOut;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class OutsOutController {

    @RequestMapping(value = "/outsOutList")
    public String outsOutList() { return "mesOut/mesOut/outsOutList/outsOutList"; }

    @RequestMapping(value = "/outsInList")
    public String outsInList() { return "mesOut/mesOut/outsInList/outsInList"; }
}
