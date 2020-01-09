package mes.sensorview.mesScm.Half;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesSCM.Half.HalfMapper;
import mes.sensorview.mesScm.Half.DTO.SCM_HIN;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class HalfService extends ReturnFunction {
    @Autowired
    private HalfMapper halfMapper;

    public RESTful scmHInListGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_HIN> rows = halfMapper.scmHInListGet(p);
        return getListData(rows, p);
    }
}
