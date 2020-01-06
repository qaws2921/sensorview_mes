package mes.sensorview.Common.Various;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Various.DTO.SYSPartType;
import mes.sensorview.Common.Various.DTO.VT_PART_GROUP;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import mes.sensorview.mesManager.Master.DTO.SYSCommon;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_ITEM;
import mes.sensorview.mesScm.Standard.DTO.SYS_PART_GROUP;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;
import mes.sensorview.mesTpm.Machine.DTO.TPM_MACHINE_CD;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_MACHINE_REG;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_REG_ITEM_CD;
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
    @RequestMapping(value = "/sysPartTypeGet", method = RequestMethod.POST)
    public List<SYSPartType> sysPartTypeGet(Page p, HttpServletRequest req) {
        return variousService.sysPartTypeGet(p, req);

    }

    @RequestMapping(value = "/sysPartTypeOneGet", method = RequestMethod.POST)
    public SYSPartType sysPartTypeOneGet(Page p, HttpServletRequest req) {
        return variousService.sysPartTypeOneGet(p, req);

    }

    @RequestMapping(value = "/qmsQcItemAllGet", method = RequestMethod.POST)
    public List<SYS_QC_ITEM> qmsQcItemAllGet(Page p, HttpServletRequest req) {
        return variousService.qmsQcItemAllGet(p, req);
    }
    @RequestMapping(value = "/tpmMachineAllGet", method = RequestMethod.POST)
    public List<TPM_MACHINE_CD> tpmMachineAllGet(Page p, HttpServletRequest req) {
        return variousService.tpmMachineAllGet(p,req);
    }

    @RequestMapping(value = "/getLine", method = RequestMethod.POST)
    public List<SYSProdLine> getLine(HttpServletRequest req, Page p) { return variousService.getLine(req, p); }

    @RequestMapping(value ="/tpmMachineRegItemAllGet", method = RequestMethod.POST)
    public List<TPM_REG_ITEM_CD> tpmMachineRegItemAllGet(HttpServletRequest req, Page p) { return variousService.tpmMachineRegItemAllGet(req,p); }

    @RequestMapping(value ="/menuAuthGet", method = RequestMethod.POST)
    public SYSAuthProgram menuAuthGet(HttpServletRequest req, Page p) { return variousService.menuAuthGet(req,p); }

    @RequestMapping(value = "/crmOrderModalGet", method = RequestMethod.POST)
    public RESTful crmOrderModalGet(HttpServletRequest req,Page p) {
        return variousService.crmOrderModalGet(req,p);
    }

    @RequestMapping(value = "/suppModalGet", method = RequestMethod.POST)
    public RESTful suppModalGet(HttpServletRequest req, Page p) {
        return variousService.suppModalGet(req,p);
    }

    @RequestMapping(value = "/sysPartGroupAllGet", method = RequestMethod.POST)
    public List<SYS_PART_GROUP> sysPartGroupAllGet(HttpServletRequest req,Page p){ return variousService.sysPartGroupAllGet(req,p);}

    @RequestMapping(value ="/partGroup1", method = RequestMethod.POST)
    public List<VT_PART_GROUP> partGroup1(HttpServletRequest req, Page p) { return variousService.partGroup1(req,p); }

    @RequestMapping(value ="/partGroup2", method = RequestMethod.POST)
    public List<VT_PART_GROUP> partGroup2(HttpServletRequest req, Page p) { return variousService.partGroup2(req,p); }

    @RequestMapping(value ="/partGroup3", method = RequestMethod.POST)
    public List<VT_PART_GROUP> partGroup3(HttpServletRequest req, Page p) { return variousService.partGroup3(req,p); }
}
