package mes.sensorview.mesManager.BOM;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesScm.Standard.DTO.SYS_COMMON2_CD;
import mes.sensorview.mesScm.Standard.DTO.SYS_PART_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class BOMRestController {
    @Autowired
    private BOMService bomService;

    @RequestMapping(value = "/sysPartNameGroupGet", method = RequestMethod.POST)
    public RESTful sysPartNameGroupGet(HttpServletRequest req, Page p) {
        return bomService.sysPartNameGroupGet(req, p);
    }

    @RequestMapping(value = "/sysPartNameGroupOneGet", method = RequestMethod.POST)
    public SYS_COMMON2_CD sysPartNameGroupOneGet(HttpServletRequest req, SYS_COMMON2_CD scc) {
        return bomService.sysPartNameGroupOneGet(req, scc);
    }

    @RequestMapping(value = "/sysPartNameGroupAdd", method = RequestMethod.POST)
    public Message sysPartNameGroupAdd(HttpServletRequest req, SYS_COMMON2_CD scc) {
        return bomService.sysPartNameGroupAdd(req, scc);
    }

    @RequestMapping(value = "/sysPartNameGroupDel", method = RequestMethod.POST)
    public Message sysPartNameGroupDel(HttpServletRequest req, SYS_COMMON2_CD scc) {
        return bomService.sysPartNameGroupDel(req, scc);
    }

    @RequestMapping(value = "/sysPartGet", method = RequestMethod.POST)
    public RESTful sysPartGet(HttpServletRequest req, Page p) {
        return bomService.sysPartGet(req, p);
    }

    @RequestMapping(value = "/sysPartOneGet", method = RequestMethod.POST)
    public SYS_PART_CD sysPartOneGet(HttpServletRequest req, Page p) {
        return bomService.sysPartOneGet(req, p);
    }

    @RequestMapping(value = "/sysPartAdd", method = RequestMethod.POST)
    public Message sysPartAdd(HttpServletRequest req, SYS_PART_CD spc) {
        return bomService.sysPartAdd(req, spc);
    }

    @RequestMapping(value = "/sysPartDel", method = RequestMethod.POST)
    public Message sysPartDel(HttpServletRequest req, SYS_PART_CD spc) {
        return bomService.sysPartDel(req, spc);
    }

}
