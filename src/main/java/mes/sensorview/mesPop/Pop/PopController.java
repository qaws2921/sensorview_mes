package mes.sensorview.mesPop.Pop;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PopController {
    @RequestMapping("popPlan")
    public String popPlan(){
        return "mesPop/Pop/popPlan/popPlan";
    }
    @RequestMapping("popProdPlan")
    public String popProdPlan(){
        return "mesPop/Pop/popProdPlan/popProdPlan";
    }
    @RequestMapping("popProdPlanManual")
    public String popProdPlanManual(){
        return "mesPop/Pop/popProdPlanManual/popProdPlanManual";
    }
}
