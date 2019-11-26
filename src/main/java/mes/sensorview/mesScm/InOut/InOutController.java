package mes.sensorview.mesScm.InOut;

import mes.sensorview.Common.DataTransferObject.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class InOutController {

    @RequestMapping(value = "/scmIn")
    public String scmIn() {
        return "mesScm/InOut/scmIn/scmIn";
    }

    @RequestMapping(value = "/scmInList")
    public String scmInList() {
        return "mesScm/InOut/scmInList/scmInList";
    }

    @RequestMapping(value = "/scmInLineList")
    public String scmInLineList() { return "mesScm/InOut/scmInLineList/scmInLineList"; }

    @RequestMapping(value = "/scmOut")
    public String scmOut() {
        return "mesScm/InOut/scmOut/scmOut";
    }

    @RequestMapping(value = "/scmOutList")
    public String scmOutList() {
        return "mesScm/InOut/scmOutList/scmOutList";
    }

    @RequestMapping(value = "/scmOutOrder")
    public String scmOutOrder() {
        return "mesScm/InOut/scmOutOrder/scmOutOrder";
    }

    @RequestMapping(value = "/scmStockRet")
    public String scmStockRet() {
        return "mesScm/InOut/scmStockRet/scmStockRet";
    }

    @RequestMapping(value = "/scmStockRetList")
    public String scmStockRetList() {
        return "mesScm/InOut/scmStockRetList/scmStockRetList";
    }


}
