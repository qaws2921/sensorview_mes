package mes.sensorview.mesQms.Standard;

import mes.sensorview.Common.DataTransferObject.PartType;
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

    @RequestMapping(value = "/getSPartType", method = RequestMethod.POST)
    public List<PartType> getSPartType(HttpServletRequest req) { return qmsStandardService.getSPartType(req); }


}
