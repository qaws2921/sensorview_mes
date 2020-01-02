package mes.sensorview.mesPop.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
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


    @RequestMapping(value = "/popBcrFormDel", method = RequestMethod.POST)
    public Message popBcrFormDel(HttpServletRequest req, POP_BCR_FORM pbf) {
        return popStandardService.popBcrFormDel(req,pbf);
    }

}