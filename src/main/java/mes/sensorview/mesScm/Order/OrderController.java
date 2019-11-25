package mes.sensorview.mesScm.Order;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class OrderController {
    @RequestMapping(value = "/scmReqOrder")
    public String scmReqOrder() { return "mesScm/Purchase/scmReqOrder/scmReqOrder"; }

    @RequestMapping(value = "/scmOrder")
    public String scmOrder() { return "mesScm/Purchase/scmOrder/scmOrder"; }

    @RequestMapping(value = "/scmOrderList")
    public String scmOrderList() { return "mesScm/Purchase/scmOrderList/scmOrderList"; }
}
