package mes.sensorview.mesQms.Standard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class QmsStandardController {

    @RequestMapping(value = "/qmsTestItem")
    public String qmsTestItem() { return "mesQms/Standard/qmsTestItem/qmsTestItem"; }
}
