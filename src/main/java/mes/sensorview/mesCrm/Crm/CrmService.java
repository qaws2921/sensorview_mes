package mes.sensorview.mesCrm.Crm;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesCrm.CRM.CrmMapper;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class CrmService extends ReturnFunction {
    @Autowired
    private CrmMapper crmMapper;

    public Message crmRecpAdd(HttpServletRequest req, CRM_ORD_RECP crmOrdRecp) {
        crmOrdRecp.setSite_code(getSessionData(req).getSite_code());
        crmOrdRecp.setUser_code(getSessionData(req).getUser_code());
        return crmMapper.crmRecpAdd(crmOrdRecp);
    }
}
