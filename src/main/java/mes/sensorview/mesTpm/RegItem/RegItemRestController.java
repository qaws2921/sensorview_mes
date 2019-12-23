package mes.sensorview.mesTpm.RegItem;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
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
}
