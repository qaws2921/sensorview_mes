package mes.sensorview.mesPop.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesPop.Standard.DTO.POP_BCR_FORM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class PopStandardRestController {

    @Autowired
    private PopStandardService popStandardService;


    @RequestMapping(value = "/popBcrFormGet", method = RequestMethod.POST)
    public RESTful popBcrFormGet(HttpServletRequest req, Page p){
        return popStandardService.popBcrFormGet(req, p);
    }

    @RequestMapping(value = "/popBcrFormOneGet", method = RequestMethod.POST)
    public POP_BCR_FORM popBcrFormOneGet(HttpServletRequest req, POP_BCR_FORM pbf) {
        return popStandardService.popBcrFormOneGet(req,pbf);
    }
    @RequestMapping(value = "/popBcrFormAdd", method = RequestMethod.POST)
    public Message popBcrFormAdd(HttpServletRequest req, POP_BCR_FORM pbf) {
        return popStandardService.popBcrFormAdd(req, pbf);
    }

    @RequestMapping(value = "/popBcrFormDel", method = RequestMethod.POST)
    public Message popBcrFormDel(HttpServletRequest req, POP_BCR_FORM pbf) {
        return popStandardService.popBcrFormDel(req,pbf);
    }

}