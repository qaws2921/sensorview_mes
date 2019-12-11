package mes.sensorview.mesTpm.RegItem;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RegItemController {
    @RequestMapping("/tpmMachineRegItem")
    public String tpmMachineRegItem(){
        return "scmTpm/RegItem/tpmMachineRegItem/tpmMachineRegItem";
    }
    @RequestMapping("/tpmMachineRegCycle")
    public String tpmMachineRegCycle(){
        return "scmTpm/RegItem/tpmMachineRegCycle/tpmMachineRegCycle";
}
    @RequestMapping("/tpmMachineRegComp")
    public String tpmMachineRegComp(){
        return "scmTpm/RegItem/tpmMachineRegComp/tpmMachineRegComp";
    }
}
