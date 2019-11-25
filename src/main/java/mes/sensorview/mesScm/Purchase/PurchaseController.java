package mes.sensorview.mesScm.Purchase;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PurchaseController {

    @RequestMapping(value = "/scmReqOrder")
    public String scmReqOrder() { return "mesScm/Purchase/scmReqOrder/scmReqOrder"; }

    @RequestMapping(value = "/scmOrder")
    public String scmOrder() { return "mesScm/Purchase/scmOrder/scmOrder"; }

    @RequestMapping(value = "/scmOrderList")
    public String scmOrderList() { return "mesScm/Purchase/scmOrderList/scmOrderList"; }
}
