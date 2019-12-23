package mes.sensorview.mesTpm.Machine;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class MachineRestController {
    @Autowired
    private MachineService machineService;

    @RequestMapping(value = "/tpmMCGet", method = RequestMethod.POST)
    public RESTful tpmMCGet(HttpServletRequest req, Page p) {
        return machineService.tpmMCGet(req, p);
    }

}
