package mes.sensorview.mesScm.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
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

    @RequestMapping(value = "/scmInListGet", method = RequestMethod.POST)
    public RESTful scmInListGet(HttpServletRequest req, Page p) { return inOutService.scmInListGet(req, p); }
}
