package mes.sensorview.mesScm.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesScm.Standard.DTO.*;
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

    @RequestMapping(value = "/sysBPartGroupOneGet", method = RequestMethod.POST)
    public sysBPartGroup sysBPartGroupOneGet(HttpServletRequest req, Page p) {
        System.out.println(p.getKeyword());
        return standardService.sysBPartGroupOneGet(req, p);
    }

    @RequestMapping(value = "/sysBPartGroupAdd", method = RequestMethod.POST)
    public Message sysProdLineAdd(HttpServletRequest req, sysBPartGroup vo) {

        return standardService.sysBPartGroupAdd(req, vo);
    }

    @RequestMapping(value = "/sysBPartGroupDelete", method = RequestMethod.POST)
    public Message sysProdLineDelete(Page p, HttpServletRequest req) {
        return standardService.sysBPartGroupDelete(p, req);

    }


    @RequestMapping(value = "/sysLocGet", method = RequestMethod.POST)
    public RESTful sysLocGet(HttpServletRequest req, Page p) {
        return standardService.sysLocGet(req, p);
    }

    @RequestMapping(value = "/sysLocAll2Get", method = RequestMethod.POST)
    public List<sysLoc> sysLocAllGet(HttpServletRequest req, Page p) {
        return standardService.sysLocAllGet(req, p);
    }

    @RequestMapping(value = "/sysLocOneGet", method = RequestMethod.POST)
    public sysLoc sysLocOneGet(HttpServletRequest req, Page p) {
        return standardService.sysLocOneGet(req, p);
    }

    @RequestMapping(value = "/sysLocAdd", method = RequestMethod.POST)
    public Message sysLocAdd(HttpServletRequest req, sysLoc vo) {
        return standardService.sysLocAdd(req, vo);
    }

    @RequestMapping(value = "/sysLocDelete", method = RequestMethod.POST)
    public Message sysLocDelete(Page p, HttpServletRequest req) {
        return standardService.sysLocDelete(p, req);

    }
    @RequestMapping(value = "/sysBPartAdd", method = RequestMethod.POST)
    public Message sysBPartAdd(HttpServletRequest req, sysBPart vo) {
        return standardService.sysBPartAdd(req, vo);
    }

    @RequestMapping(value = "/sysBPartGet", method = RequestMethod.POST)
    public RESTful sysBPartGet(HttpServletRequest req, Page p) {
        return standardService.sysBPartGet(req, p);
    }

    @RequestMapping(value = "/sysBPartOneGet", method = RequestMethod.POST)
    public sysBPart sysBPartOneGet(HttpServletRequest req, Page p) {
        return standardService.sysBPartOneGet(req, p);
    }
    @RequestMapping(value = "/sysBPartDelete", method = RequestMethod.POST)
    public Message sysBPartDelete(Page p, HttpServletRequest req) {
        return standardService.sysBPartDelete(p, req);

    }

    @RequestMapping(value = "/sysPartGroupGet", method = RequestMethod.POST)
    public RESTful sysPartGroupGet(HttpServletRequest req, Page p) {
        return standardService.sysPartGroupGet(req, p);
    }

    @RequestMapping(value = "/sysPartGroupOneGet", method = RequestMethod.POST)
    public SYS_PART_GROUP sysPartGroupOneGet(HttpServletRequest req, SYS_PART_GROUP spg) {
        return standardService.sysPartGroupOneGet(req, spg);
    }

    @RequestMapping(value = "/sysPartGroupAdd", method = RequestMethod.POST)
    public Message sysPartGroupAdd(HttpServletRequest req, SYS_PART_GROUP spg) {
        return standardService.sysPartGroupAdd(req, spg);
    }

    @RequestMapping(value = "/sysPartGroupDel", method = RequestMethod.POST)
    public Message sysPartGroupDel(HttpServletRequest req, SYS_PART_GROUP spg) {
        return standardService.sysPartGroupDel(req, spg);
    }


    @RequestMapping(value = "/sysPartSuppGet", method = RequestMethod.POST)
    public RESTful sysPartSuppGet(HttpServletRequest req, Page p) {
        return standardService.sysPartSuppGet(req, p);
    }

    @RequestMapping(value = "/sysPartGet", method = RequestMethod.POST)
    public RESTful sysPartGet(HttpServletRequest req, Page p) {
        return standardService.sysPartGet(req, p);
    }

    @RequestMapping(value = "/sysPartOneGet", method = RequestMethod.POST)
    public SYS_PART_CD sysPartOneGet(HttpServletRequest req, Page p) {
        return standardService.sysPartOneGet(req, p);
    }

    @RequestMapping(value = "/sysPartAdd", method = RequestMethod.POST)
    public Message sysPartAdd(HttpServletRequest req, SYS_PART_CD spc) {
        return standardService.sysPartAdd(req, spc);
    }

    @RequestMapping(value = "/sysPartDel", method = RequestMethod.POST)
    public Message sysPartDel(HttpServletRequest req, SYS_PART_CD spc) {
        return standardService.sysPartDel(req, spc);
    }

    @RequestMapping(value = "/sysPartPriceGet", method = RequestMethod.POST)
    public RESTful sysPartPriceGet(HttpServletRequest req, Page p) {
        return standardService.sysPartPriceGet(req, p);
    }
    @RequestMapping(value = "/sysPartPriceOneGet", method = RequestMethod.POST)
    public SYS_PART_PRICE sysPartPriceOneGet(HttpServletRequest req, SYS_PART_PRICE spp) {
        return standardService.sysPartPriceOneGet(req, spp);
    }
    @RequestMapping(value = "/sysPartPriceAdd", method = RequestMethod.POST)
    public Message sysPartPriceAdd(HttpServletRequest req, SYS_PART_PRICE spp) {
        return standardService.sysPartPriceAdd(req, spp);
    }

    @RequestMapping(value = "/sysPartPriceDel", method = RequestMethod.POST)
    public Message sysPartPriceDel(HttpServletRequest req, SYS_PART_PRICE spp) {
        return standardService.sysPartPriceDel(req, spp);
    }

    @RequestMapping(value = "/sysPartNameGroupGet", method = RequestMethod.POST)
    public RESTful sysPartNameGroupGet(HttpServletRequest req, Page p) {
        return standardService.sysPartNameGroupGet(req, p);
    }

    @RequestMapping(value = "/sysPartNameGroupOneGet", method = RequestMethod.POST)
    public SYS_COMMON2_CD sysPartNameGroupOneGet(HttpServletRequest req, SYS_COMMON2_CD scc) {
        return standardService.sysPartNameGroupOneGet(req, scc);
    }

    @RequestMapping(value = "/sysPartNameGroupAdd", method = RequestMethod.POST)
    public Message sysPartNameGroupAdd(HttpServletRequest req, SYS_COMMON2_CD scc) {
        return standardService.sysPartNameGroupAdd(req, scc);
    }

    @RequestMapping(value = "/sysPartNameGroupDel", method = RequestMethod.POST)
    public Message sysPartNameGroupDel(HttpServletRequest req, SYS_COMMON2_CD scc) {
        return standardService.sysPartNameGroupDel(req, scc);
    }

    @RequestMapping(value = "/sysCommon2AllGet", method = RequestMethod.POST)
    public List<SYS_COMMON2_CD> sysCommon2AllGet(HttpServletRequest req, Page p) {
        return standardService.sysCommon2AllGet(req, p);
    }


}
