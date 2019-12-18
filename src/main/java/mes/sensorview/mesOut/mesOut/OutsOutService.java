package mes.sensorview.mesOut.mesOut;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesOut.mesOut.MesOutMapper;
import mes.sensorview.mesOut.mesOut.DTO.OUTS_IN_SUB;
import mes.sensorview.mesOut.mesOut.DTO.OUTS_OUT_BCR;
import mes.sensorview.mesOut.mesOut.DTO.OUTS_OUT_SUB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class OutsOutService extends ReturnFunction {
    @Autowired
    private MesOutMapper mesOutMapper;

    public RESTful outsOutListGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<OUTS_OUT_SUB> rows = mesOutMapper.outsOutListGet(p);
        return getListData(rows , p);
    }

    public RESTful outsInListGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<OUTS_IN_SUB> rows = mesOutMapper.outsInListGet(p);
        return getListData(rows , p);
    }

    public RESTful outsInReadyGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<OUTS_OUT_BCR> rows = mesOutMapper.outsInReadyGet(p);
        return getListData(rows , p);
    }
}
