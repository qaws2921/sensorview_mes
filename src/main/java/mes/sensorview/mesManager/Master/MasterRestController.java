package mes.sensorview.mesManager.Master;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesManager.Master.DTO.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class MasterRestController {

    @Autowired
    private MasterService masterService;

    @RequestMapping(value="/getCommonGroup", method = RequestMethod.POST)
    public List<SYSCommon> getCommonGroup(HttpServletRequest req, Page p){
        return masterService.getCommonGroup(req, p);
    }

    @RequestMapping(value="/sysCommonGet", method = RequestMethod.POST)
    public RESTful sysCommonGet(HttpServletRequest req, Page p){
        return masterService.sysCommonGet(req, p);
    }


    @RequestMapping(value="/sysCommonDutyGet", method = RequestMethod.POST)
    public List<SYSCommon> sysCommonDutyGet(HttpServletRequest req, Page p){
        return masterService.sysCommonDutyGet(req, p);
    }


    @RequestMapping(value="/sysMsgGet", method = RequestMethod.POST)
    public RESTful sysMsg(Page p){
        return masterService.sysMsgGet(p);
    }


    @RequestMapping(value="/sysMsgAdd", method = RequestMethod.POST)
    public  Message sysMsgAdd(HttpServletRequest req,SYSMsg smv){
        return masterService.sysMsgAdd(req, smv);
    }


    @RequestMapping(value="/sysMsgDelete", method = RequestMethod.POST)
    public Message sysMsgDelete(Page p){
        return masterService.sysMsgDelete(p);
    }


    


    @RequestMapping(value="/sysBoardGet", method = RequestMethod.POST)
    public RESTful sysBoardGet(Page p,HttpServletRequest req){
        return masterService.sysBoardGet(p,req);
    }


    @RequestMapping(value="/sysBoardAdd", method = RequestMethod.POST)
    public Message sysBoardAdd(HttpServletRequest req, SYSBoard sbv){
        return masterService.sysBoardAdd(req, sbv);
    }


    @RequestMapping(value="/sysBoardDelete", method = RequestMethod.POST)
    public Message sysBoardDelete(Page p,HttpServletRequest req){
        return masterService.sysBoardDelete(p,req);
    }



    @RequestMapping(value="/sysProdLineGet", method = RequestMethod.POST)
    public RESTful sysProdLineGet(Page p,HttpServletRequest req){
        return masterService.sysProdLineGet(p,req);
    }


    @RequestMapping(value="/sysProdLineAdd", method = RequestMethod.POST)
    public Message sysProdLineAdd(HttpServletRequest req, SYSProdLine spv){
        return masterService.sysProdLineAdd(req, spv);
    }


    @RequestMapping(value="/sysProdLineDelete")
    public Message sysProdLineDelete(Page p,HttpServletRequest req){
        return masterService.sysProdLineDelete(p,req);
    }


    @RequestMapping(value="/sysCargoGet", method = RequestMethod.POST)
    public RESTful sysCargoGet(Page p,HttpServletRequest req){
        return masterService.sysCargoGet(p,req);
    }

    @RequestMapping(value="/sysCargoBAllGet", method = RequestMethod.POST)
    public List<SYSCargo> sysCargoBAllGet(HttpServletRequest req,Page p){
        return masterService.sysCargoBAllGet(req,p);
    }

    @RequestMapping(value="/sysCargoAdd", method = RequestMethod.POST)
    public  Message sysCargoAdd(HttpServletRequest req,SYSCargo scv){
        return masterService.sysCargoAdd(req, scv);
    }

    @RequestMapping(value="/sysCargoDelete", method = RequestMethod.POST)
    public Message sysCargoDelete(Page p){
        return masterService.sysCargoDelete(p);
    }
}
