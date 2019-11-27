package mes.sensorview.mesScm.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesSCM.InOut.InOutMapper;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;
import mes.sensorview.mesScm.InOut.DTO.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class InOutService extends ReturnFunction {
    @Autowired
    private InOutMapper inOutMapper;

    public Message scmInAdd(HttpServletRequest req, Page p)
    {
        p.setSite_code(getSessionData(req).getSite_code());
        p.setUser_code(getSessionData(req).getUser_code());
        return inOutMapper.scmInAdd(p);
    }

    public RESTful scmInGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_IN> rows = inOutMapper.scmInGet(p);
        return getListData(rows , p);
    }

    public RESTful scmInLineGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_IN_LINE> rows = inOutMapper.scmInLineGet(p);
        return getListData(rows , p);
    }

    public RESTful scmStockRetGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_STOCK_RET> rows = inOutMapper.scmStockRetGet(p);
        return getListData(rows , p);
    }

    public RESTful scmOutGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_OUT> rows = inOutMapper.scmOutGet(p);
        return getListData(rows , p);
    }

    public RESTful scmInListGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_IN> rows = inOutMapper.scmInListGet(p);
        return getListData(rows , p);
    }

    public RESTful scmInSub1Get(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_IN_SUB> rows = inOutMapper.scmInSub1Get(p);
        return getListData(rows , p);
    }

    public List<SCM_IN_SUB> scmInSub2Get(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return  inOutMapper.scmInSub1Get(p);
    }

    public Message scmInDel(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return  inOutMapper.scmInDel(p);
    }

    public List<SYSProdLine> getLine(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return inOutMapper.getLine(p);
    }


    public RESTful scmOutListGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_OUT_SUB> rows = inOutMapper.scmOutListGet(p);
        return getListData(rows, p);
    }

    public RESTful scmOutOrderGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_OUT_ORD> rows = inOutMapper.scmOutOrderGet(p);
        return getListData(rows , p);
    }

    public Message scmOutOrderAdd(HttpServletRequest req, SCM_OUT_ORD soo) {
        soo.setSite_code(getSessionData(req).getSite_code());
        soo.setUser_code(getSessionData(req).getUser_code());
        return inOutMapper.scmOutOrderAdd(soo);
    }

    public RESTful scmOutOrderSup1Get(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_OUT_ORD_SUB> rows = inOutMapper.scmOutOrderSup1Get(p);
        return getListData(rows , p);
    }

    public List<SCM_OUT_ORD_SUB> scmOutOrderSup2Get(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return inOutMapper.scmOutOrderSup1Get(p);
    }

    public Message scmOutOrderDel(HttpServletRequest req, SCM_OUT_ORD soo) {
        soo.setSite_code(getSessionData(req).getSite_code());
        return inOutMapper.scmOutOrderDel(soo);
    }
}
