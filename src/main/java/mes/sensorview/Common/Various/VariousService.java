package mes.sensorview.Common.Various;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Common.Various.DTO.SYSSupp;
import mes.sensorview.Mapper.Various.VariousMapper;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import mes.sensorview.mesManager.Master.DTO.SYSCommon;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_ITEM;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;
import mes.sensorview.mesTpm.Machine.DTO.TPM_MACHINE_CD;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_MACHINE_REG;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_REG_ITEM_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class VariousService extends ReturnFunction {

    @Autowired
    private VariousMapper variousMapper;

    public RESTful sysSuppGet(Page p) {
        List<SYSSupp> rows = variousMapper.sysSuppGet(p);
        return getListData(rows , p);
    }

    public List<sysBPartGroup> sysBPartGroupSelectGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysBPartGroupSelectGet(p);
    }

    public List<sysLoc> sysLocAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysLocAllGet(p);
    }

    public List<SYSCommon> sysCommonUnitGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysCommonUnitGet(p);
    }

    public RESTful sysBPartModalGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<sysBPart> rows = variousMapper.sysBPartModalGet(p);
        return getListData(rows , p);
    }


    public List<sysBPart> sysBPartAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysBPartAllGet(p);
    }

    public List<SYSCommon> sysCommonAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysCommonAllGet(p);
    }

    public List<PartType> sysPartTypeGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        if (p.getKeyword() == null){
            p.setKeyword("");
        }
        return variousMapper.sysPartTypeGet(p);
    }

    public List<SYS_QC_ITEM> qmsQcItemAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.qmsQcItemAllGet(p);
    }

    public List<TPM_MACHINE_CD> tpmMachineAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.tpmMachineAllGet(p);
    }
    public List<SYSProdLine> getLine(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.getLine(p);
    }

    public List<TPM_REG_ITEM_CD> tpmMachineRegItemAllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.tpmMachineRegItemAllGet(p);
    }

    public SYSAuthProgram menuAuthGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        p.setUser_code(getSessionData(req).getUser_code());
        return variousMapper.menuAuthGet(p);
    }

    public RESTful crmOrderModalGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<CRM_ORD_RECP> rows = variousMapper.crmOrderModalGet(p);
        return getListData(rows , p);
    }
}
