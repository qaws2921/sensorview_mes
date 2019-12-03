package mes.sensorview.mesCrm.Crm;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesCrm.Crm.CrmMapper;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import org.springframework.beans.factory.annotation.Autowired;
import mes.sensorview.Common.DataTransferObject.Message;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
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
}
