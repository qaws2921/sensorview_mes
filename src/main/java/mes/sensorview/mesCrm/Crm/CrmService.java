package mes.sensorview.mesCrm.Crm;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesCrm.Crm.CrmMapper;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import mes.sensorview.mesCrm.Crm.DTO.CRM_OUT_SUB;
import mes.sensorview.mesCrm.Crm.DTO.CRM_PLAN;
import mes.sensorview.mesCrm.Crm.DTO.SYS_ASSY_CABLE;
import org.springframework.beans.factory.annotation.Autowired;
import mes.sensorview.Common.DataTransferObject.Message;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Service
public class CrmService extends ReturnFunction {
    @Autowired
    private CrmMapper crmMapper;

    public RESTful crmProdOrderGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<CRM_ORD_RECP> rows = crmMapper.crmProdOrderGet(p);
        return getListData(rows , p);
    }

    public CRM_ORD_RECP crmProdOrderOneGet(HttpServletRequest req, CRM_ORD_RECP cor) {
        cor.setSite_code(getSessionData(req).getSite_code());
        return crmMapper.crmProdOrderOneGet(cor);
    }

    public String crmRecpAdd(CRM_ORD_RECP crmOrdRecp, HttpServletRequest req) {
        // test
        Random random = new Random();
        crmOrdRecp.setOrd_no("CRM" + random.nextInt(9999));

        crmOrdRecp.setSite_code(getSessionData(req).getSite_code());
        crmOrdRecp.setUser_code(getSessionData(req).getUser_code());
        return crmMapper.crmRecpAdd(crmOrdRecp).getMessage();
    }

    public RESTful crmWorkListGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<CRM_ORD_RECP> rows = crmMapper.crmWorkListGet(p);
        return getListData(rows, p);
    }

    public CRM_ORD_RECP crmWorkListOneGet(HttpServletRequest req, CRM_ORD_RECP cor) {
        cor.setSite_code(getSessionData(req).getSite_code());
        return crmMapper.crmWorkListOneGet(cor);
    }

    public Message crmOrderRecpAdd(CRM_ORD_RECP crmOrdRecp, HttpServletRequest req) {
        crmOrdRecp.setSite_code(getSessionData(req).getSite_code());
        crmOrdRecp.setUser_code(getSessionData(req).getUser_code());
        return crmMapper.crmOrderRecpAdd(crmOrdRecp);
    }

    public RESTful crmPlanGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<CRM_PLAN> rows = crmMapper.crmPlanGet(p);
        return getListData(rows, p);
    }

    public Message crmPlanAdd(CRM_PLAN cp, HttpServletRequest req) {
        cp.setSite_code(getSessionData(req).getSite_code());
        cp.setUser_code(getSessionData(req).getUser_code());
        return crmMapper.crmPlanAdd(cp);
    }

    public RESTful crmAssyCableGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYS_ASSY_CABLE> rows = crmMapper.crmAssyCableGet(p);
        return getListData(rows, p);
    }

    public Message crmAssyCableAdd(SYS_ASSY_CABLE sac, HttpServletRequest req) {
        sac.setSite_code(getSessionData(req).getSite_code());
        sac.setUser_code(getSessionData(req).getUser_code());
        return crmMapper.crmAssyCableAdd(sac);
    }

    public Message crmAssyCableDel(SYS_ASSY_CABLE sac, HttpServletRequest req) {
        sac.setSite_code(getSessionData(req).getSite_code());
        return crmMapper.crmAssyCableDel(sac);
    }

    public RESTful crmOutListGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<CRM_OUT_SUB> rows = crmMapper.crmOutListGet(p);
        return getListData(rows , p);
    }

    public Message crmProdOrderAdd(CRM_ORD_RECP cor, HttpServletRequest req) {
        cor.setSite_code(getSessionData(req).getSite_code());
        cor.setUser_code(getSessionData(req).getUser_code());
        return crmMapper.crmProdOrderAdd(cor);
    }

    public Message crmProdOrderDel(CRM_ORD_RECP cor, HttpServletRequest req) {
        cor.setSite_code(getSessionData(req).getSite_code());
        return crmMapper.crmProdOrderDel(cor);
    }

    public Message crmWorkListAdd(CRM_ORD_RECP cor, HttpServletRequest req) {
        cor.setSite_code(getSessionData(req).getSite_code());
        cor.setUser_code(getSessionData(req).getUser_code());
        return crmMapper.crmWorkListAdd(cor);
    }

    public CRM_PLAN crmPlanOneGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return crmMapper.crmPlanOneGet(p);

    }
}
