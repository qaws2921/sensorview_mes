package mes.sensorview.mesTpm.Machine;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesTpm.Machine.DTO.TPM_MACHINE_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;

@RestController
public class MachineRestController {
    @Autowired
    private MachineService machineService;

    @RequestMapping(value = "/tpmMCGet", method = RequestMethod.POST)
    public RESTful tpmMCGet(HttpServletRequest req, Page p) {
        return machineService.tpmMCGet(req, p);
    }

    @RequestMapping(value = "/tpmMCAdd", method = RequestMethod.POST)
    public Message tpmMCAdd(MultipartHttpServletRequest req, TPM_MACHINE_CD tmc) {
       return machineService.tpmMCAdd(req, tmc);
    }

    @RequestMapping(value = "/tpmMCOneGet", method = RequestMethod.POST)
    public TPM_MACHINE_CD tpmMCOneGet(HttpServletRequest req, TPM_MACHINE_CD tmc) {
        return machineService.tpmMCOneGet(req, tmc);
    }

}
