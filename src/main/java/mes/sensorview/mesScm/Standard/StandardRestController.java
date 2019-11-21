package mes.sensorview.mesScm.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class StandardRestController {
    @Autowired
    private StandardService standardService;

    @RequestMapping(value = "/getPartType", method = RequestMethod.POST)
    public List<PartType> getPartType(HttpServletRequest req) {
        return standardService.getPartType(req);
    }

    @RequestMapping(value = "/sysBPartGroupGet", method = RequestMethod.POST)
    public RESTful sysBPartGroupGet(HttpServletRequest req, Page p) {
        return standardService.sysBPartGroupGet(req, p);
    }

    @RequestMapping(value = "/sysBPartGroupAdd", method = RequestMethod.POST)
    public Message sysProdLineAdd(HttpServletRequest req, sysBPartGroup vo) {
        return standardService.sysBPartGroupAdd(req, vo);
    }

    @RequestMapping(value = "/sysBPartGroupDelete")
    public Message sysProdLineDelete(Page p, HttpServletRequest req) {
        return standardService.sysBPartGroupDelete(p, req);

    }

    @RequestMapping(value = "/sysLocGet", method = RequestMethod.POST)
    public RESTful sysLocGet(HttpServletRequest req, Page p) {
        return standardService.sysLocGet(req, p);
    }

    @RequestMapping(value = "/sysLocOneGet", method = RequestMethod.POST)
    public sysLoc sysLocOneGet(HttpServletRequest req, Page p) {
        return standardService.sysLocOneGet(req, p);
    }

    @RequestMapping(value = "/sysLocAdd", method = RequestMethod.POST)
    public Message sysLocAdd(HttpServletRequest req, sysLoc vo) {
        return standardService.sysLocAdd(req, vo);
    }

    @RequestMapping(value = "/sysLocDelete")
    public Message sysLocDelete(Page p, HttpServletRequest req) {
        return standardService.sysLocDelete(p, req);

    }
}
