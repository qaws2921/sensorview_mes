package mes.sensorview.mesManager.BOM;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BOMController {
    @RequestMapping(value = "/sysPartNameGroup")
    public String sysPartNameGroup() { return "mesManager/BOM/sysPartNameGroup/sysPartNameGroup"; }

}
