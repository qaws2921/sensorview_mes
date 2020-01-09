package mes.sensorview.mesScm.Half;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HalfController {
    @RequestMapping(value = "/scmHinList")
    public String scmHinList() { return "mesScm/Half/scmHinList/scmHinList"; }
}
