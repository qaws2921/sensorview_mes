package mes.sensorview.mesPop.Pop;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesPop.Pop.MesPopPopMapper;
import mes.sensorview.mesPop.Pop.DTO.POP_PLAN1_CD;
import mes.sensorview.mesPop.Pop.DTO.POP_PLAN2_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class PopService extends ReturnFunction {
    @Autowired
    private MesPopPopMapper mesPopPopMapper;

    public RESTful popPlan1Get(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<POP_PLAN1_CD> rows = mesPopPopMapper.popPlan1Get(p);
        return getListData(rows, p);
    }

    public Message popPlan1Add(HttpServletRequest req, POP_PLAN1_CD pp1c) {
        pp1c.setSite_code(getSessionData(req).getSite_code());
        pp1c.setUser_code(getSessionData(req).getUser_code());
        return mesPopPopMapper.popPlan1Add(pp1c);
    }

    public Message popPlan2Add2(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        p.setUser_code(getSessionData(req).getUser_code());
        return mesPopPopMapper.popPlan2Add2(p);
    }

    public RESTful popPlan2Get(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<POP_PLAN2_CD> rows = mesPopPopMapper.popPlan2Get(p);
        return getListData(rows, p);
    }
}
