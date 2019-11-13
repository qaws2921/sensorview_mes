package mes.sensorview.mesManager.Master;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Mapper.Authority.Master.MasterMapper;
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

    /**
     * @desc : sysCommon 그룹 조회
     * @생성자 : 김종효
     * @생성일 : 2019-11-01
     * */
    @RequestMapping(value="/sysCommonGroupGet", method = RequestMethod.POST)
    public List<Parameter> sysCommonGroupGet(HttpServletRequest req){

        return masterService.sysCommonGroupGet(req);
    }

    /**
     * @desc : sysCommon 리스트 조회
     * @생성자 : 김종효
     * @생성일 : 2019-11-01
     * */
    @RequestMapping(value="/sysCommonGet", method = RequestMethod.POST)
    public RESTful sysCommonGet(HttpServletRequest req, Page p){
        return masterService.sysCommonGet(req, p);
    }

    /**
     * @desc : sysCommon 직책 조회
     * @생성자 : 김종효
     * @생성일 : 2019-11-01
     * */
    @RequestMapping(value="/sysCommonDutyGet", method = RequestMethod.POST)
    public List<SYSCommon> sysCommonDutyGet(HttpServletRequest req, Page p){
        return masterService.sysCommonDutyGet(req, p);
    }

    /**
     * @desc : sysMsg 조회
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    @RequestMapping(value="/sysMsgGet", method = RequestMethod.POST)
    public RESTful sysMsg(Page p){

        return masterService.sysMsgGet(p);
    }

    /**
     * @desc : sysMsg 저장 수정
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    @RequestMapping(value="/sysMsgAdd", method = RequestMethod.POST)
    public  Message sysMsgAdd(HttpServletRequest req,SYSMsg smv){
        return masterService.sysMsgAdd(req, smv);
    }

    /**
     * @desc : sysMsg 삭제
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    @RequestMapping(value="/sysMsgDelete", method = RequestMethod.POST)
    public Message sysMsgDelete(List<SYSMsg> checkList){
        return masterService.sysMsgDelete(checkList);
    }

    /**
     * @desc : sysBoard 페이지이동
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    

    /**
     * @desc : sysBoard 조회
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    @RequestMapping(value="/sysBoardGet", method = RequestMethod.POST)
    public RESTful sysBoardGet(Page p,HttpServletRequest req){
        return masterService.sysBoardGet(p,req);
    }

    /**
     * @desc : sysBoard 저장 수정
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    @RequestMapping(value="/sysBoardAdd", method = RequestMethod.POST)
    public Message sysBoardAdd(HttpServletRequest req, SYSBoard sbv){
        return masterService.sysBoardAdd(req, sbv);
    }

    /**
     * @desc : sysBoard 삭제
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    @RequestMapping(value="/sysBoardDelete", method = RequestMethod.POST)
    public Message sysBoardDelete(List<SYSBoard> checkList,HttpServletRequest req){
        return masterService.sysBoardDelete(checkList,req);
    }


    /**
     * @desc : sysProdLine 조회
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    @RequestMapping(value="/sysProdLineGet", method = RequestMethod.POST)
    public RESTful sysProdLineGet(Page p,HttpServletRequest req){
        return masterService.sysProdLineGet(p,req);
    }

    /**
     * @desc : sysProdLine 저장 수정
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    @RequestMapping(value="/sysProdLineAdd", method = RequestMethod.POST)
    public Message sysProdLineAdd(HttpServletRequest req, SYSProdLine spv){
        return masterService.sysProdLineAdd(req, spv);
    }

    /**
     * @desc : sysProdLine 삭제
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    @RequestMapping(value="/sysProdLineDelete")
    public Message sysProdLineDelete(List<SYSProdLine> checkList,HttpServletRequest req){
        return masterService.sysProdLineDelete(checkList,req);
    }

    /**
     * @desc : sysProdLine 조회
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    @RequestMapping(value="/sysCargoGet", method = RequestMethod.POST)
    public RESTful sysCargoGet(Page p,HttpServletRequest req){
        return masterService.sysCargoGet(p,req);
    }

    /**
     * @desc : sysProdLine 저장 수정
     * @생성자 : 김종효
     * @생성일 : 2019-11-04
     * */
    @RequestMapping(value="/sysCargoAdd", method = RequestMethod.POST)
    public  Message sysCargoAdd(HttpServletRequest req,SYSCargo scv){
        return masterService.sysCargoAdd(req, scv);
    }

    @RequestMapping(value="/sysCargoDelete", method = RequestMethod.POST)
    public Message sysCargoDelete(List<SYSCargo> checkList){
        return masterService.sysCargoDelete(checkList);
    }
}
