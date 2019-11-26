package mes.sensorview.mesScm.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesSCM.InOut.InOutMapper;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

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
        return inOutMapper.scmInGet(p);
    }
}
