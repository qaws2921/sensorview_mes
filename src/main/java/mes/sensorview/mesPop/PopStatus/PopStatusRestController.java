package mes.sensorview.mesPop.PopStatus;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesPop.PopStatus.DTO.POP_PLAN_ORD_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class PopStatusRestController {
    @Autowired
    private PopStatusService popStatusService;

    @RequestMapping(value = "/popPlanOrderGet", method = RequestMethod.POST)
    public RESTful popPlanOrderGet(HttpServletRequest req, Page p) { return popStatusService.popPlanOrderGet(req,p);}

    @RequestMapping(value = "/popPlanOrderOrd", method = RequestMethod.POST)
    public List<POP_PLAN_ORD_CD> popPlanOrderOrd(HttpServletRequest req, Page p) { return popStatusService.popPlanOrderOrd(req, p); }
}
