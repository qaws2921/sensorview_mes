package mes.sensorview.mesScm.Close;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesSCM.Close.CloseMapper;
import mes.sensorview.mesScm.Close.DTO.SCM_CLOSE;
import mes.sensorview.mesScm.Close.DTO.SCM_CLOSE_READY;
import mes.sensorview.mesScm.Close.DTO.SCM_CLOSE_SUB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class CloseService extends ReturnFunction {

    @Autowired
    private CloseMapper closeMapper;

    public RESTful scmPartCloseGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_CLOSE_READY> rows = closeMapper.scmPartCloseGet(p);
        return getListData(rows , p);
    }

    public Message scmPartCloseAdd(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        p.setUser_code(getSessionData(req).getUser_code());
        return closeMapper.scmPartCloseAdd(p);
    }

    public RESTful scmPartCloseSumListGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_CLOSE> rows = closeMapper.scmPartCloseSumListGet(p);
        return getListData(rows , p);
    }

    public RESTful scmPartCloseSumListSubGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_CLOSE_SUB> rows = closeMapper.scmPartCloseSumListSubGet(p);
        return getListData(rows , p);
    }

    public Message scmPartCloseCancelDel(HttpServletRequest req, SCM_CLOSE sc) {
        sc.setSite_code(getSessionData(req).getSite_code());
        return closeMapper.scmPartCloseCancelDel(sc);
    }
}
