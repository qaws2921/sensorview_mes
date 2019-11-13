package mes.sensorview.mesManager.Master;

import com.sun.org.apache.regexp.internal.RE;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.Mapper.Authority.Master.MasterMapper;
import mes.sensorview.mesManager.Master.DTO.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class MasterService extends ReturnFunction {

    @Autowired
    private MasterMapper masterMapper;

    public List<Parameter> sysCommonGroupGet(HttpServletRequest req) {
        Page p = new Page();
        Session lv = (Session) req.getSession().getAttribute("userData");
        p.setSite_code(lv.getSite_code());
        return masterMapper.sysCommonGroupGet(p);
    }
    
    public RESTful sysCommonGet(HttpServletRequest req, Page p) {
        int count=0;
        RESTful resTful = new RESTful();
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYSCommon> rows = masterMapper.sysCommonGet(p);

        if(rows.size() != 0) {
            count = rows.get(0).getRec_count();
        }

        resTful.setTotal(CalcTotalPage(p.getPage(),count));
        resTful.setRows(rows);
        resTful.setPage(p.getPage());
        return resTful;
    }
    
    public List<SYSCommon> sysCommonDutyGet(HttpServletRequest req, Page p){
        p.setSite_code(getSessionData(req).getSite_code());
        return masterMapper.sysCommonDutyGet(p);
    }

    public RESTful sysMsgGet(Page p){
        int count=0;
        RESTful resTful = new RESTful();
        List<SYSMsg> rows = masterMapper.sysMsgGet(p);

        if(rows.size() != 0) {
            count = rows.get(0).getRec_count();
        }

        resTful.setTotal(CalcTotalPage(p.getPage(),count));
        resTful.setRows(rows);
        resTful.setPage(p.getPage());
        return resTful;
    }
    
    public Message sysMsgAdd(HttpServletRequest req, SYSMsg smv){
        smv.setUser_code(getSessionData(req).getUser_code());
        return masterMapper.sysMsgAdd(smv);

    }
    //
    public Message sysMsgDelete(List<SYSMsg> checkList){
        Page p = new Page();
        p.setKeyword(deleteMsg(checkList));
        return masterMapper.sysMsgDelete(p);
    }

    //
    public RESTful sysBoardGet(Page p, HttpServletRequest req){
        int count=0;
        RESTful resTful = new RESTful();
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYSBoard> rows = masterMapper.sysBoardGet(p);
        if(rows.size() != 0) {
            count = rows.get(0).getRec_count();
        }
        resTful.setTotal(CalcTotalPage(p.getPage(),count));
        resTful.setRows(rows);
        resTful.setPage(p.getPage());
        return resTful;
    }
    
    public Message sysBoardAdd(HttpServletRequest req, SYSBoard sbv){
        sbv.setSite_code(getSessionData(req).getSite_code());
        sbv.setUser_code(getSessionData(req).getUser_code());
        return masterMapper.sysBoardAdd(sbv);
    }

    public Message sysBoardDelete(List<SYSBoard> checkList,HttpServletRequest req){
            Page p = new Page();
            p.setSite_code(getSessionData(req).getSite_code());
            p.setKeyword(deleteBoard(checkList));
        return masterMapper.sysBoardDelete(p);
    }

    public RESTful sysProdLineGet(Page p, HttpServletRequest req){
        int count=0;
        RESTful resTful = new RESTful();
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYSProdLine> rows = masterMapper.sysProdLineGet(p);

        if(rows.size() != 0) {
            count = rows.get(0).getRec_count();
        }

        resTful.setTotal(CalcTotalPage(p.getPage(),count));
        resTful.setRows(rows);
        resTful.setPage(p.getPage());
        return resTful;
    }

    public Message sysProdLineAdd(HttpServletRequest req, SYSProdLine spv){
        spv.setSite_code(getSessionData(req).getSite_code());
        spv.setUser_code(getSessionData(req).getUser_code());
        return masterMapper.sysProdLineAdd(spv);
    }

    public Message sysProdLineDelete(List<SYSProdLine> checkList, HttpServletRequest req){
        Page p = new Page();
        p.setSite_code(getSessionData(req).getSite_code());
        p.setKeyword(deleteProdLine(checkList));
        return masterMapper.sysProdLineDelete(p);
    }

    public RESTful sysCargoGet(Page p, HttpServletRequest req){
        int count=0;
        RESTful resTful = new RESTful();
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYSCargo> rows = masterMapper.sysCargoGet(p);

        if(rows.size() != 0) {
            count = rows.get(0).getRec_count();
        }

        resTful.setTotal(CalcTotalPage(p.getPage(),count));
        resTful.setRows(rows);
        resTful.setPage(p.getPage());
        return resTful;
    }

    public Message sysCargoAdd(HttpServletRequest req, SYSCargo scv){
        scv.setSite_code(getSessionData(req).getSite_code());
        scv.setUser_code(getSessionData(req).getUser_code());
        return masterMapper.sysCargoAdd(scv);
    }

    public Message sysCargoDelete(List<SYSCargo> checkList){
        Page p = new Page();
        String keyword= "";
        p.setKeyword(deleteCargo(checkList));
        return masterMapper.sysCargoDelete(p);
    }
}
