package mes.sensorview.mesWms.InOut;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class WmsInOutRestController {
    @Autowired
    private WmsInOutService wmsInOutService;

    @RequestMapping(value="/wmsInListGet" , method = RequestMethod.POST)
    public RESTful wmsInListGet(HttpServletRequest req, Page p){
        return wmsInOutService.wmsInListGet(req, p);
    }

    @RequestMapping(value="/wmsOutListGet" , method = RequestMethod.POST)
    public RESTful wmsOutListGet(HttpServletRequest req, Page p){
        return wmsInOutService.wmsOutListGet(req, p);
    }

    @RequestMapping(value="/wmsOutReadyGet" , method = RequestMethod.POST)
    public RESTful wmsOutReadyGet(HttpServletRequest req, Page p){
        return wmsInOutService.wmsOutReadyGet(req, p);
    }

    @RequestMapping(value="/wmsOutOrderGet" , method = RequestMethod.POST)
    public RESTful wmsOutOrderGet(HttpServletRequest req, Page p){
        return wmsInOutService.wmsOutOrderGet(req, p);
    }

    @RequestMapping(value="/wmsOutOrderSubGet" , method = RequestMethod.POST)
    public RESTful wmsOutOrderSubGet(HttpServletRequest req, Page p){
        return wmsInOutService.wmsOutOrderSubGet(req, p);
    }
}
