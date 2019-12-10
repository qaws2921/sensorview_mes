package mes.sensorview.mesQms.Import;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class QmsImportController {

    @RequestMapping(value = "/qmsRecv")
    public String qmsTestItem() { return "mesQms/Import/qmsRecv/qmsRecv"; }
}
