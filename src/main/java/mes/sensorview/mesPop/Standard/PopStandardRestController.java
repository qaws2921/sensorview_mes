package mes.sensorview.mesPop.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesPop.Standard.DTO.POP_BCR_FORM;
import mes.sensorview.mesPop.Standard.DTO.POP_ROUTE_CD;
import mes.sensorview.mesPop.Standard.DTO.POP_TERMINAL_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class PopStandardRestController {

    @Autowired
    private PopStandardService popStandardService;


    @RequestMapping(value = "/popBcrFormGet", method = RequestMethod.POST)
    public RESTful popBcrFormGet(HttpServletRequest req, Page p){
        return popStandardService.popBcrFormGet(req, p);
    }

    @RequestMapping(value = "/popBcrFormOneGet", method = RequestMethod.POST)
    public POP_BCR_FORM popBcrFormOneGet(HttpServletRequest req, POP_BCR_FORM pbf) {
        return popStandardService.popBcrFormOneGet(req,pbf);
    }
    @RequestMapping(value = "/popBcrFormAdd", method = RequestMethod.POST)
    public Message popBcrFormAdd(HttpServletRequest req, POP_BCR_FORM pbf) {
        return popStandardService.popBcrFormAdd(req, pbf);
    }

    @RequestMapping(value = "/popBcrFormDel", method = RequestMethod.POST)
    public Message popBcrFormDel(HttpServletRequest req, POP_BCR_FORM pbf) {
        return popStandardService.popBcrFormDel(req,pbf);
    }

    @RequestMapping(value = "/popRouteGet", method = RequestMethod.POST)
    public RESTful popRouteGet(HttpServletRequest req, Page p) {
        return popStandardService.popRouteGet(req, p);
    }

    @RequestMapping(value = "/popRouteOneGet", method = RequestMethod.POST)
    public POP_ROUTE_CD popRouteOneGet(HttpServletRequest req, POP_ROUTE_CD pr) {
        return popStandardService.popRouteOneGet(req, pr);
    }

    @RequestMapping(value = "/popRouteAdd", method = RequestMethod.POST)
    public Message popRouteAdd(HttpServletRequest req, POP_ROUTE_CD pr) {
        return popStandardService.popRouteAdd(req,pr);
    }
    @RequestMapping(value ="/popRouteDel", method = RequestMethod.POST)
    public Message popRouteDel(HttpServletRequest req, POP_ROUTE_CD pr) {
        return popStandardService.popRouteDel(req, pr);
    }


    @RequestMapping(value = "/popTerminalGet", method = RequestMethod.POST)
    public RESTful popTerminalGet(HttpServletRequest req, Page p){
        return popStandardService.popTerminalGet(req, p);
    }

    @RequestMapping(value = "/popTerminalOneGet", method = RequestMethod.POST)
    public POP_TERMINAL_CD popTerminalOneGet(HttpServletRequest req, Page p) {
        return popStandardService.popTerminalOneGet(req,p);
    }

    @RequestMapping(value = "/popTerminalAdd", method = RequestMethod.POST)
    public Message popTerminalAdd(HttpServletRequest req, POP_TERMINAL_CD ptc) {
        return popStandardService.popTerminalAdd(req, ptc);
    }

}