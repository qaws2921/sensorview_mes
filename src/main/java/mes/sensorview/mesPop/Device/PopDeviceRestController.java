package mes.sensorview.mesPop.Device;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesPop.Device.DTO.POP_PC_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class PopDeviceRestController {
    @Autowired
    private PopDeviceService popDeviceService;

    @RequestMapping(value = "/popPCGet", method = RequestMethod.POST)
    public RESTful popPCGet(HttpServletRequest req, Page p){
        return popDeviceService.popPCGet(req, p);
    }

    @RequestMapping(value = "/popPCOneGet", method = RequestMethod.POST)
    public POP_PC_CD popPCOneGet(HttpServletRequest req, Page p){
        return popDeviceService.popPCOneGet(req, p);
    }

    @RequestMapping(value = "/popPCAdd", method = RequestMethod.POST)
    public Message popPCAdd(HttpServletRequest req, POP_PC_CD ppc) {
        return popDeviceService.popPCAdd(req, ppc);
    }

    @RequestMapping(value = "/popPCDel", method = RequestMethod.POST)
    public Message popPCDel(HttpServletRequest req, POP_PC_CD ppc) {
        return popDeviceService.popPCDel(req,ppc);
    }
}
