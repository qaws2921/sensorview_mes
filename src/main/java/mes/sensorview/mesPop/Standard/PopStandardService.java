package mes.sensorview.mesPop.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesPop.Standard.MesPopMapper;
import mes.sensorview.mesPop.Standard.DTO.POP_BCR_FORM;
import mes.sensorview.mesPop.Standard.DTO.POP_ROUTE_CD;
import mes.sensorview.mesPop.Standard.DTO.POP_TERMINAL_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class PopStandardService extends ReturnFunction {
    @Autowired
    private MesPopMapper mesPopMapper;

    public RESTful popBcrFormGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<POP_BCR_FORM> rows = mesPopMapper.popBcrFormGet(p);
        return getListData(rows, p);
    }

    public POP_BCR_FORM popBcrFormOneGet(HttpServletRequest req, POP_BCR_FORM pbf) {
        pbf.setSite_code(getSessionData(req).getSite_code());
        return mesPopMapper.popBcrFormOneGet(pbf);
    }

    public Message popBcrFormAdd(HttpServletRequest req, POP_BCR_FORM pbf) {
        pbf.setSite_code(getSessionData(req).getSite_code());
        pbf.setUser_code(getSessionData(req).getUser_code());
        return mesPopMapper.popBcrFormAdd(pbf);
    }

    public Message popBcrFormDel(HttpServletRequest req, POP_BCR_FORM pbf) {
        pbf.setSite_code(getSessionData(req).getSite_code());
        return mesPopMapper.popBcrFormDel(pbf);
    }

    public RESTful popRouteGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<POP_ROUTE_CD> rows = mesPopMapper.popRouteGet(p);
        return getListData(rows,p);
    }

    public POP_ROUTE_CD popRouteOneGet(HttpServletRequest req, POP_ROUTE_CD pr) {
        pr.setSite_code(getSessionData(req).getSite_code());
        return mesPopMapper.popRouteOneGet(pr);
    }

    public Message popRouteAdd(HttpServletRequest req, POP_ROUTE_CD pr) {
        pr.setSite_code(getSessionData(req).getSite_code());
        pr.setUser_code(getSessionData(req).getUser_code());
        return mesPopMapper.popRouteAdd(pr);
    }

    public RESTful popTerminalGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<POP_TERMINAL_CD> rows = mesPopMapper.popTerminalGet(p);
        return getListData(rows, p);
    }

    public POP_TERMINAL_CD popTerminalOneGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return mesPopMapper.popTerminalOneGet(p);
    }

    public Message popTerminalAdd(HttpServletRequest req, POP_TERMINAL_CD ptc) {
        ptc.setSite_code(getSessionData(req).getSite_code());
        ptc.setUser_code(getSessionData(req).getUser_code());
        return mesPopMapper.popTerminalAdd(ptc);
    }
}
