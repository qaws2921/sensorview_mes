package mes.sensorview.mesCrm.Crm;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesCrm.Crm.CrmMapper;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
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
        p.setRows(p.getRows()/3);
        List<CRM_PLAN> rows = crmMapper.crmPlanGet(p);
        ArrayList<CRM_PLAN> rows2 = new ArrayList<>();
        CRM_PLAN cps = null;
        int index = 0;
        for (CRM_PLAN cp: rows) {

            for (int i = 0; i<3;i++){
                cps = new CRM_PLAN();

                cps.setPlan_year(cp.getPlan_year());
                cps.setQuarter(cp.getQuarter());
                cps.setPart_code(cp.getPart_code());

                cps.setPlan_qty(cp.getPlan1_qty());
                cps.setTotal_qty(cp.getTotal_qty());
                cps.setDiff_qty(cp.getDiff_qty());
                cps.setProd_qty(cp.getProd_qty());
                cps.setProd_qty(cp.getProd_qty());
                cps.setStock_qty(cp.getStock_qty());
                cps.setProd_desc(cp.getProd_desc());
                cps.setRec_count(cp.getRec_count());
                if (index == 0){

                    cps.setMonth_plan1(cp.getMonth1_plan1());
                    cps.setMonth_plan2(cp.getMonth2_plan1());
                    cps.setMonth_plan3(cp.getMonth3_plan1());
                    cps.setPlan_name("확정");
                    index = 1;
                } else if (index == 1){
                    cps.setMonth_plan1(cp.getMonth1_plan2());
                    cps.setMonth_plan2(cp.getMonth2_plan2());
                    cps.setMonth_plan3(cp.getMonth3_plan2());
                    cps.setPlan_qty(cp.getPlan2_qty());
                    cps.setPlan_name("협의");
                    index = 2;
                } else if (index == 2){
                    cps.setMonth_plan1(cp.getMonth1_plan3());
                    cps.setMonth_plan2(cp.getMonth2_plan3());
                    cps.setMonth_plan3(cp.getMonth3_plan3());
                    cps.setPlan_qty(cp.getPlan3_qty());
                    cps.setPlan_name("예상");
                    index = 0;
                }
                rows2.add(cps);
            }
        }
        return getListData(rows2, p);
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
}
