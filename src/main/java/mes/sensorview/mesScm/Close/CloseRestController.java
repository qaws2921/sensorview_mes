package mes.sensorview.mesScm.Close;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesScm.Close.DTO.SCM_CLOSE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class CloseRestController {

    @Autowired
    private CloseService closeService;

    @RequestMapping(value = "/scmPartCloseGet", method = RequestMethod.POST)
    public RESTful scmPartCloseGet(Page p, HttpServletRequest req) { return closeService.scmPartCloseGet(p,req); }

    @RequestMapping(value="/scmPartCloseAdd", method = RequestMethod.POST)
    public Message scmPartCloseAdd(HttpServletRequest req, Page p) {
        return closeService.scmPartCloseAdd(req, p);
    }

    @RequestMapping(value = "/scmPartCloseSumListGet", method = RequestMethod.POST)
    public RESTful scmPartCloseSumListGet(Page p, HttpServletRequest req) { return closeService.scmPartCloseSumListGet(p,req); }

    @RequestMapping(value = "/scmPartCloseSumListSubGet", method = RequestMethod.POST)
    public RESTful scmPartCloseSumListSubGet(Page p, HttpServletRequest req) { return closeService.scmPartCloseSumListSubGet(p,req); }

    @RequestMapping(value="/scmPartCloseCancelDel", method = RequestMethod.POST)
    public Message scmPartCloseCancelDel(HttpServletRequest req, SCM_CLOSE sc) {
        return closeService.scmPartCloseCancelDel(req, sc);
    }
}
