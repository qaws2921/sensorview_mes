package mes.sensorview.mesTpm.RegItem;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_MACHINE_REG;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_REG_ITEM_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class RegItemRestController {
    @Autowired
    private RegItemService regItemService;

    @RequestMapping(value = "/tpmMachineRegItemGet", method = RequestMethod.POST)
    public RESTful tpmMachineRegItemGet(HttpServletRequest req, Page p) {
        return regItemService.tpmMachineRegItemGet(req, p);
    }
    @RequestMapping(value = "/tpmMachineRegItemOneGet", method = RequestMethod.POST)
    public TPM_REG_ITEM_CD tpmMachineRegItemOneGet(HttpServletRequest req, Page p) {
        return regItemService.tpmMachineRegItemOneGet(req, p);
    }

    @RequestMapping(value = "/tpmMachineRegItemAdd", method = RequestMethod.POST)
    public Message tpmMachineRegItemAdd(HttpServletRequest req, TPM_REG_ITEM_CD tric) {

        return regItemService.tpmMachineRegItemAdd(req, tric);
    }
    @RequestMapping(value = "/tpmMachineRegItemDel", method = RequestMethod.POST)
    public Message tpmMachineRegItemDel(TPM_REG_ITEM_CD tric, HttpServletRequest req) {
        return regItemService.tpmMachineRegItemDel(tric, req);

    }

    @RequestMapping(value = "/tpmMachineRegGet", method = RequestMethod.POST)
    public RESTful tpmMachineRegGet(HttpServletRequest req, Page p) {
        return regItemService.tpmMachineRegGet(req,p);
    }

    @RequestMapping(value = "/tpmMachineRegDel", method = RequestMethod.POST)
    public Message tpmMachineRegDel(TPM_MACHINE_REG tmr, HttpServletRequest req) {
        return regItemService.tpmMachineRegDel(tmr, req);
    }

    @RequestMapping(value = "/tpmMachineRegAdd", method = RequestMethod.POST)
    public Message tpmMachineRegAdd(HttpServletRequest req, TPM_MACHINE_REG tmr) {
        return regItemService.tpmMachineRegAdd(req,tmr);
    }

    @RequestMapping(value = "/tpmMachineRegOneGet", method = RequestMethod.POST)
    public TPM_MACHINE_REG tpmMachineRegOneGet(HttpServletRequest req, Page p){
        return regItemService.tpmMachineRegOneGet(req,p);
    }
}
