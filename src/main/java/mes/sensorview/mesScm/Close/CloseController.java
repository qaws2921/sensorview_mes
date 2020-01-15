package mes.sensorview.mesScm.Close;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CloseController {

    @RequestMapping(value = "/scmPartClose")
    public String scmBPartClose() { return "mesScm/Close/scmPartClose/scmPartClose"; }
}
