package mes.sensorview.Common.Various;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesManager.Master.DTO.SYSCommon;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class VariousRestController {

    @Autowired
    private VariousService variousService;

    @RequestMapping(value = "/sysSuppGet", method = RequestMethod.POST)
    public RESTful sysSuppGet(Page p) {
        return variousService.sysSuppGet(p);
    }


    @RequestMapping(value = "/sysBPartGroupSelectGet", method = RequestMethod.POST)
    public List<sysBPartGroup> sysBPartGroupSelectGet(Page p, HttpServletRequest req) {
        return variousService.sysBPartGroupSelectGet(p, req);

    }

    @RequestMapping(value = "/sysLocAllGet", method = RequestMethod.POST)
    public List<sysLoc> sysLocAllGet(Page p, HttpServletRequest req) {
        return variousService.sysLocAllGet(p, req);

    }

    @RequestMapping(value = "/sysCommonUnitGet", method = RequestMethod.POST)
    public List<SYSCommon> sysCommonUnitGet(Page p, HttpServletRequest req) {
        return variousService.sysCommonUnitGet(p, req);

    }

    @RequestMapping(value = "/sysBPartModalGet", method = RequestMethod.POST)
    public RESTful sysBPartModalGet(Page p, HttpServletRequest req) {
        return variousService.sysBPartModalGet(p, req);

    }

    @RequestMapping(value = "/sysBPartAllGet", method = RequestMethod.POST)
    public List<sysBPart> sysBPartAllGet(Page p, HttpServletRequest req) {
        return variousService.sysBPartAllGet(p, req);

    }

    @RequestMapping(value = "/sysCommonAllGet", method = RequestMethod.POST)
    public List<SYSCommon> sysCommonAllGet(Page p, HttpServletRequest req) {
        return variousService.sysCommonAllGet(p, req);

    }


}
