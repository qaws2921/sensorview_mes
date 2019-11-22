package mes.sensorview.Common.Various;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Common.Various.DTO.SYSSupp;
import mes.sensorview.Mapper.Various.VariousMapper;
import mes.sensorview.mesManager.Master.DTO.SYSCommon;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class VariousService extends ReturnFunction {

    @Autowired
    private VariousMapper variousMapper;

    public RESTful sysSuppGet(Page p) {
        List<SYSSupp> rows = variousMapper.sysSuppGet(p);
        return getListData(rows , p);
    }

    public List<sysBPartGroup> sysBPartGroupSelectGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysBPartGroupSelectGet(p);
    }

    public List<sysLoc> sysLocAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysLocAllGet(p);
    }

    public List<SYSCommon> sysCommonUnitGet(Page p, HttpServletRequest req) {
        //p.setSite_code(getSessionData(req).getSite_code());
        return null;
    }
}
