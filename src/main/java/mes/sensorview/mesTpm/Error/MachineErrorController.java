package mes.sensorview.mesTpm.Error;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MachineErrorController {
    @RequestMapping("/tpmMachineError")
    public String tpmMachineError(){
        return "scmTpm/Error/tpmMachineError/tpmMachineError";
    }
}
