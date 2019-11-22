package mes.sensorview.Common.Various;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class VariousRestController {

    @Autowired
    private VariousService variousService;

    @RequestMapping(value = "/sysSuppGet", method = RequestMethod.POST)
    public RESTful sysSuppGet(Page p) {
        return variousService.sysSuppGet(p);
    }


    @RequestMapping(value = "/sysBPartGroupSelectGet", method = RequestMethod.POST)
    public List<sysBPartGroup> sysBPartGroupSelectGet(Page p, HttpServletRequest req) {
        return variousService.sysBPartGroupSelectGet(p, req);

    }
}
