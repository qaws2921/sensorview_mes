package mes.sensorview.mesCrm.Crm;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
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

    @RequestMapping(value = "/crmProdOrderGet", method = RequestMethod.POST)
    public RESTful crmProdOrderGet(HttpServletRequest req, Page p) {
        return crmService.crmProdOrderGet(req, p);
    }

    @RequestMapping(value = "/crmProdOrderOneGet", method = RequestMethod.POST)
    public CRM_ORD_RECP crmProdOrderOneGet(HttpServletRequest req, CRM_ORD_RECP cor) {
        return crmService.crmProdOrderOneGet(req, cor);
    }
}
