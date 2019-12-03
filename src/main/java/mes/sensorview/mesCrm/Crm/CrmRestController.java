package mes.sensorview.mesCrm.Crm;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@Slf4j
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

    @RequestMapping(value = "/crmRecpAdd", method = RequestMethod.POST)
    public String crmRecpAdd(@Valid CRM_ORD_RECP crmOrdRecp, BindingResult errors){
        String msg = null;
        if(errors.hasErrors()){
            for (ObjectError objectError : errors.getAllErrors()) {
                msg = objectError.getDefaultMessage();
            }
            return msg;
        }else{
            return crmService.crmRecpAdd(crmOrdRecp);
        }
    }
}
