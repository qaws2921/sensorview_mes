package mes.sensorview.mesPop.QcProd;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class QcProdController {
    @RequestMapping("/qmsProd")
    public String qmsProd(){
        return "mesPop/QcProd/qmsProd/qmsProd";
    }
    @RequestMapping("/qmsProdErrorList")
    public String qmsProdErrorList(){
        return "mesPop/QcProd/qmsProdErrorList/qmsProdErrorList";
    }
    @RequestMapping("/qmsProdHistory")
    public String qmsProdHistory(){
        return "mesPop/QcProd/qmsProdHistory/qmsProdHistory";
    }
    @RequestMapping("/qmsProdList")
    public String qmsProdList(){
        return "mesPop/QcProd/qmsProdList/qmsProdList";
    }
    @RequestMapping("/qmsProdSPC")
    public String qmsProdSPC(){
        return "mesPop/QcProd/qmsProdSPC/qmsProdSPC";
    }
    @RequestMapping("/qmsProdStd")
    public String qmsProdStd(){
        return "mesPop/QcProd/qmsProdStd/qmsProdStd";
    }
}
