package mes.sensorview.mesQms.Standard;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class QmsStandardRestController {

    @Autowired
    private QmsStandardService qmsStandardService;

    @RequestMapping(value = "/qmsBPartGroupGet", method = RequestMethod.POST)
    public List<sysBPartGroup> qmsBPartGroupGet(Page p, HttpServletRequest req){
        return qmsStandardService.qmsBPartGroupGet(p,req);
    }




}
