package mes.sensorview.mesScm.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class InOutRestController {

    @Autowired
    private InOutService inOutService;

    @RequestMapping(value = "/scmInAdd", method = RequestMethod.POST)
    public Message scmInAdd(HttpServletRequest req, SCM_IN scmIn) {
        return inOutService.scmInAdd(req, scmIn);
    }

    @RequestMapping(value = "/scmInGet", method = RequestMethod.POST)
    public RESTful scmInGet(HttpServletRequest req, Page p) {

        return inOutService.scmInGet(req, p);
    }

    @RequestMapping(value = "/scmInList", method = RequestMethod.POST)
    public RESTful scmInList(HttpServletRequest req, Page p){
        return inOutService.scmInList(req, p);
    }

    @RequestMapping(value = "/scmOutList", method = RequestMethod.POST)
    public RESTful scmOutList(HttpServletRequest req, Page p){
        return inOutService.scmOutList(req, p);
    }

    @RequestMapping(value = "/scmStockRetList", method = RequestMethod.POST)
    public RESTful scmStockRetList(HttpServletRequest req, Page p){
        return inOutService.scmStockRetList(req, p);
    }

    @RequestMapping(value = "/scmInLineList", method = RequestMethod.POST)
    public RESTful scmInLineList(HttpServletRequest req, Page p){
        return inOutService.scmInLineList(req, p);
    }
}
