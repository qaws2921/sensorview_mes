package mes.sensorview.mesQms.Import;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class QmsImportController {

    @RequestMapping(value = "/qmsRecv")
    public String qmsRecv() { return "mesQms/Import/qmsRecv/qmsRecv"; }

    @RequestMapping(value = "/qmsRecvList")
    public String qmsRecvList() { return  "mesQms/Import/qmsRecvList/qmsRecvList"; }

    @RequestMapping(value = "/qmsRecvErrorMan")
    public String qmsRecvErrorMan() { return "mesQms/Import/qmsRecvErrorMan/qmsRecvErrorMan"; }
}
