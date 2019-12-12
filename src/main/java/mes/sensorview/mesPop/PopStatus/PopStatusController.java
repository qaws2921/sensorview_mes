package mes.sensorview.mesPop.PopStatus;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PopStatusController {
    @RequestMapping("popProdRange")
    public String popProdRange(){
        return "mesPop/PopStatus/popProdRange/popProdRange";
    }
    @RequestMapping("popProdList1")
    public String popProdList1(){
        return "mesPop/PopStatus/popProdList1/popProdList1";
    }

}
