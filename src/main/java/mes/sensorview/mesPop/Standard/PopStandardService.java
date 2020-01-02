package mes.sensorview.mesPop.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesPop.Standard.MesPopMapper;
import mes.sensorview.mesPop.Standard.DTO.POP_BCR_FORM;
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
}
