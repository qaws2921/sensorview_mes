package mes.sensorview.mesPop.QcProd;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class QcProdController {
    @RequestMapping("/popProd")
    public String popProd(){
        return "mesPop/QcProd/popProd/popProd";
    }
    @RequestMapping("/popProdErrorList")
    public String popProdErrorList(){
        return "mesPop/QcProd/popProdErrorList/popProdErrorList";
    }
    @RequestMapping("/popProdHistory")
    public String popProdHistory(){
        return "mesPop/QcProd/popProdHistory/popProdHistory";
    }
    @RequestMapping("/popProdList")
    public String popProdList(){
        return "mesPop/QcProd/popProdList/popProdList";
    }
    @RequestMapping("/popProdSPC")
    public String popProdSPC(){
        return "mesPop/QcProd/popProdSPC/popProdSPC";
    }
    @RequestMapping("/popProdStd")
    public String popProdStd(){
        return "mesPop/QcProd/popProdStd/popProdStd";
    }
}
