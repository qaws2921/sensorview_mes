package mes.sensorview.mesScm.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_OUT_ORD;
import mes.sensorview.mesScm.InOut.DTO.SCM_OUT_ORD_SUB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class InOutRestController {

    @Autowired
    private InOutService inOutService;

    @RequestMapping(value = "/scmInAdd", method = RequestMethod.POST)
    public Message scmInAdd(HttpServletRequest req, Page p) {
        return inOutService.scmInAdd(req, p);
    }

    @RequestMapping(value = "/scmInDel", method = RequestMethod.POST)
    public Message scmInDel(HttpServletRequest req, Page p) {
        return inOutService.scmInDel(req, p);
    }

    @RequestMapping(value = "/scmInGet", method = RequestMethod.POST)
    public RESTful scmInGet(HttpServletRequest req, Page p) {
        return inOutService.scmInGet(req, p);
    }

    @RequestMapping(value = "/scmInListGet", method = RequestMethod.POST)
    public RESTful scmInListGet(HttpServletRequest req, Page p) { return inOutService.scmInListGet(req, p); }

    @RequestMapping(value = "/scmInSub1Get", method = RequestMethod.POST)
    public RESTful scmInSub1Get(HttpServletRequest req, Page p) {
        return inOutService.scmInSub1Get(req, p);
    }

    @RequestMapping(value = "/scmInSub2Get", method = RequestMethod.POST)
    public List<SCM_IN_SUB> scmInSub2Get(HttpServletRequest req, Page p) {
        return inOutService.scmInSub2Get(req, p);
    }

    @RequestMapping(value = "/scmOutGet", method = RequestMethod.POST)
    public RESTful scmOutGet(HttpServletRequest req, Page p){
        return inOutService.scmOutGet(req, p);
    }

    @RequestMapping(value = "/scmStockRetGet", method = RequestMethod.POST)
    public RESTful scmStockRetGet(HttpServletRequest req, Page p){
        return inOutService.scmStockRetGet(req, p);
    }

    @RequestMapping(value = "/scmInLineGet", method = RequestMethod.POST)
    public RESTful scmInLineGet(HttpServletRequest req, Page p){
        return inOutService.scmInLineGet(req, p);
    }

    @RequestMapping(value = "/getLine", method = RequestMethod.POST)
    public List<SYSProdLine> getLine(HttpServletRequest req, Page p) { return inOutService.getLine(req, p); }

    @RequestMapping(value = "/scmOutOrderGet", method = RequestMethod.POST)
    public RESTful scmOutOrderGet(HttpServletRequest req, Page p) {
        return inOutService.scmOutOrderGet(req, p);
    }

    @RequestMapping(value = "/scmOutOrderAdd", method = RequestMethod.POST)
    public Message scmOutOrderAdd(HttpServletRequest req, SCM_OUT_ORD soo) {
        return inOutService.scmOutOrderAdd(req, soo);
    }

    @RequestMapping(value = "/scmOutOrderSup1Get", method = RequestMethod.POST)
    public RESTful scmOutOrderSup1Get(HttpServletRequest req, Page p) {
        return inOutService.scmOutOrderSup1Get(req, p);
    }

    @RequestMapping(value = "/scmOutOrderSup2Get", method = RequestMethod.POST)
    public List<SCM_OUT_ORD_SUB> scmOutOrderSup2Get(HttpServletRequest req, Page p) {
        return inOutService.scmOutOrderSup2Get(req, p);
    }
    @RequestMapping(value = "/scmOutOrderDel", method = RequestMethod.POST)
    public Message scmOutOrderDel(HttpServletRequest req, SCM_OUT_ORD soo) {
        return inOutService.scmOutOrderDel(req, soo);
    }

}
