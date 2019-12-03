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
    public String crmRecpAdd(@Valid CRM_ORD_RECP crmOrdRecp, BindingResult errors, HttpServletRequest req){
        String msg = null;
        if(errors.hasErrors()){
            for (ObjectError objectError : errors.getAllErrors()) {
                msg = objectError.getDefaultMessage() + "를 입력하세요.";
            }
            return msg;
        }else{
            return "검증완료";
//            return crmService.crmRecpAdd(crmOrdRecp, req);
        }
    }

    @RequestMapping(value = "/crmWorkListGet", method = RequestMethod.POST)
    public RESTful crmWorkListGet(HttpServletRequest req, Page p) { return crmService.crmWorkListGet(req, p); }

    @RequestMapping(value = "/crmWorkListOneGet", method = RequestMethod.POST)
    public CRM_ORD_RECP crmWorkListOneGet(HttpServletRequest req, CRM_ORD_RECP cor) {
        return crmService.crmWorkListOneGet(req, cor);
    }
}
