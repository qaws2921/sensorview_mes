package mes.sensorview.mesScm.Order;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class OrderRestController {

    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/scmReqOrderGet", method = RequestMethod.POST)
    public RESTful scmReqOrderGet(HttpServletRequest req, Page p){
        return orderService.scmReqOrderGet(req, p);
    }

    @RequestMapping(value = "/scmOrderGet", method = RequestMethod.POST)
    public RESTful scmOrderGet(HttpServletRequest req, Page p){
        return orderService.scmOrderGet(req, p);
    }

    @RequestMapping(value = "/scmOrderListGet", method = RequestMethod.POST)
    public RESTful scmOrderListGet(HttpServletRequest req, Page p) { return orderService.scmOrderListGet(req, p); }
}
