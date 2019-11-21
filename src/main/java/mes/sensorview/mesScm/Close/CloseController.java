package mes.sensorview.mesScm.Close;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CloseController {

    @RequestMapping(value = "/scmBPartClose")
    public String scmBPartClose() { return "mesScm/Close/scmBPartClose/scmBPartClose"; }
}
