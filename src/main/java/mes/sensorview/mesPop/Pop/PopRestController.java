package mes.sensorview.mesPop.Pop;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesPop.Pop.DTO.POP_PLAN1_CD;
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

    @RequestMapping(value = "/popPlan1Add", method = RequestMethod.POST)
    public Message popPlan1Add(HttpServletRequest req, POP_PLAN1_CD pp1c) { return popService.popPlan1Add(req, pp1c); }
}
