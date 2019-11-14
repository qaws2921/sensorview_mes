package mes.sensorview.mesManager.Master;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MasterController {

    @RequestMapping(value="/sysMsg")
    public String sysMsg(){
        return "mesManager/Master/sysMsg";
    }

    @RequestMapping(value="/sysBoard")
    public String sysBoard(){
        return "mesManager/Master/sysBoard/sysBoard";
    }

    @RequestMapping(value="/sysProdLine")
    public String sysProdLine(){
        return "mesManager/Master/sysProdLine/sysProdLine";
    }

    @RequestMapping(value="/sysCargo")
    public String sysCargo(){
        return "mesManager/Master/sysCargo/sysCargo";
    }
    @RequestMapping(value="/sysCommon")
    public String sysCommon() throws Exception{
        return "manager/MasterManegement/sysCommon.tiles1";
    }
    @RequestMapping(value="/sysSupp")
    public String sysSupp() throws Exception{
        return "manager/MasterManegement/sysSupp.tiles1";
    }
}
