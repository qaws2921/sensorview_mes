package mes.sensorview.mesCrm.Crm;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class CrmRestController {
    @Autowired
    private CrmService crmService;

    @RequestMapping(value = "/crmRecpAdd", method = RequestMethod.POST)
    public Message crmRecpAdd(HttpServletRequest req, CRM_ORD_RECP crmOrdRecp) {
        return crmService.crmRecpAdd(req, crmOrdRecp);
    }
}
