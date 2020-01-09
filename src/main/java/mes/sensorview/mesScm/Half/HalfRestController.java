package mes.sensorview.mesScm.Half;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class HalfRestController {

    @Autowired
    private HalfService halfService;

    @RequestMapping(value = "/scmHinListGet", method = RequestMethod.POST)
    public RESTful scmHinListGet(HttpServletRequest req, Page p){ return halfService.scmHinListGet(req,p);}
}
