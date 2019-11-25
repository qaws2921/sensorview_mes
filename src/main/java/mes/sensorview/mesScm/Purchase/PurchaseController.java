package mes.sensorview.mesScm.Purchase;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PurchaseController {

    @RequestMapping(value = "/scmOrder")
    public String scmOrder() { return "mesScm/Purchase/scmOrder/scmOrder"; }
}
