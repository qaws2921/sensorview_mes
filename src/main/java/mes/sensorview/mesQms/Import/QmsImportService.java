package mes.sensorview.mesQms.Import;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesQms.Import.QmsImportMapper;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV_SUB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class QmsImportService  extends ReturnFunction {

    @Autowired
    private QmsImportMapper qmsImportMapper;

    public RESTful qmsRecvGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_RECV> rows = qmsImportMapper.qmsRecvGet(p);
        return getListData(rows , p);
    }

    public RESTful qmsRecvSubGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_RECV_SUB> rows = qmsImportMapper.qmsRecvSubGet(p);
        return getListData(rows , p);
    }

    public RESTful qmsRecvErrorManGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_RECV_SUB> rows =qmsImportMapper.qmsRecvErrorManGet(p);
        return getListData(rows , p);
    }

    public List<QMS_RECV_SUB> qmsRecvSubAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return qmsImportMapper.qmsRecvSubGet(p);
    }
}
