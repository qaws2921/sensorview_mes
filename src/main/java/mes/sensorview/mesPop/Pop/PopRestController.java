package mes.sensorview.mesPop.Pop;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class PopRestController {
    @Autowired
    private PopService popService;

    @RequestMapping(value = "/popPlan1Get", method = RequestMethod.POST)
    public RESTful popPlan1Get(HttpServletRequest req, Page p) {
        return popService.popPlan1Get(req, p);
    }

    @RequestMapping(value ="/popPlan2Add2", method = RequestMethod.POST)
    public Message popPlan2Add2(HttpServletRequest req, Page p) {
        return popService.popPlan2Add2(req, p);
    }
}
