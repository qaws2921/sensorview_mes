package mes.sensorview.mesPop.Pop;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesPop.Pop.DTO.POP_PLAN1_CD;
import mes.sensorview.mesPop.Pop.DTO.POP_PLAN2_CD;
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

    @RequestMapping(value ="/popPlan2Add2", method = RequestMethod.POST)
    public Message popPlan2Add2(HttpServletRequest req, Page p) {
        return popService.popPlan2Add2(req, p);
    }

    @RequestMapping(value = "/popPlan2Get", method = RequestMethod.POST)
    public RESTful popPlan2Get(HttpServletRequest req, Page p) {
        return popService.popPlan2Get(req, p);
    }


    @RequestMapping(value ="/popPlan2Add", method = RequestMethod.POST)
    public Message popPlan2Add(HttpServletRequest req, POP_PLAN2_CD ppc) {
        return popService.popPlan2Add(req, ppc);
    }
}
