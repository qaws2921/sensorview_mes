package mes.sensorview.mesScm.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesSCM.InOut.InOutMapper;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN_LINE;
import mes.sensorview.mesScm.InOut.DTO.SCM_OUT;
import mes.sensorview.mesScm.InOut.DTO.SCM_STOCK_RET;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class InOutService extends ReturnFunction {
    @Autowired
    private InOutMapper inOutMapper;

    public Message scmInAdd(HttpServletRequest req, SCM_IN scmIn)
    {
        scmIn.setSite_code(getSessionData(req).getSite_code());
        scmIn.setUser_code(getSessionData(req).getUser_code());
        return inOutMapper.scmInAdd(scmIn);
    }

    public RESTful scmInGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_IN> rows = inOutMapper.scmInGet(p);
        return getListData(rows , p);
    }

    public RESTful scmInList(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_IN> rows = inOutMapper.scmInList(p);
        return getListData(rows , p);
    }

    public RESTful scmInLineList(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_IN_LINE> rows = inOutMapper.scmInLineList(p);
        return getListData(rows , p);
    }

    public RESTful scmStockRetList(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_STOCK_RET> rows = inOutMapper.scmStockRetList(p);
        return getListData(rows , p);
    }

    public RESTful scmOutList(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_OUT> rows = inOutMapper.scmOutList(p);
        return getListData(rows , p);
    }
}
