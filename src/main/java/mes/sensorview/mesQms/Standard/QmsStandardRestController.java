package mes.sensorview.mesQms.Standard;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Vaild.ValidFunction;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_ITEM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

@RestController
@Slf4j
public class QmsStandardRestController extends ValidFunction {

    @Autowired
    private QmsStandardService qmsStandardService;

    @RequestMapping(value = "/getSPartType", method = RequestMethod.POST)
    public List<PartType> getSPartType(HttpServletRequest req) {
        return qmsStandardService.getSPartType(req);
    }

    @RequestMapping(value = "/qmsQcItemAdd")
    public Message qmsQcItemAdd(@Valid SYS_QC_ITEM sysQcItem, BindingResult errors, HttpServletRequest req)
    {
        if(ValidData(errors).getResult().equals("OK")){
            return qmsStandardService.qmsQcItemAdd(req, sysQcItem);
        }else{
            return ValidData(errors);
        }
    }

    @RequestMapping(value = "/qmsQcItemGet", method = RequestMethod.POST)
    public RESTful qmsQcItemGet(Page p, HttpServletRequest req) {
        return qmsStandardService.qmsQcItemGet(p, req);
    }

    @RequestMapping(value = "/qmsQcItemOneGet", method = RequestMethod.POST)
    public SYS_QC_ITEM qmsQcItemOneGet(SYS_QC_ITEM sysQcItem, HttpServletRequest req) {
        return qmsStandardService.qmsQcItemOneGet(sysQcItem, req);
    }

    @RequestMapping(value = "/qmsQcItemDel", method = RequestMethod.POST)
    public Message qmsQcItemDel(Page p, HttpServletRequest req) {
        return qmsStandardService.qmsQcItemDel(p, req);
    }
}
