package mes.sensorview.mesScm.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesSCM.Standard.ScmStandardMapper;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class StandardService extends ReturnFunction {
    @Autowired
    private ScmStandardMapper scmStandardMapper;

    public RESTful sysBPartGroupGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<sysBPartGroup> rows = scmStandardMapper.sysBPartGroupGet(p);
        return getListData(rows , p);
    }


    public Message sysBPartGroupAdd(HttpServletRequest req, sysBPartGroup vo) {
        vo.setSite_code(getSessionData(req).getSite_code());
        vo.setUser_code(getSessionData(req).getUser_code());
        return scmStandardMapper.sysBPartGroupAdd(vo);
    }

    public Message sysBPartGroupDelete(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        p.setKeyword(p.getKeyword());
        return scmStandardMapper.sysBPartGroupDelete(p);
    }

    public RESTful sysLocGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<sysLoc> rows = scmStandardMapper.sysLocGet(p);
        return getListData(rows , p);
    }

    public Message sysLocAdd(HttpServletRequest req, sysLoc vo) {
        vo.setSite_code(getSessionData(req).getSite_code());
        vo.setUser_code(getSessionData(req).getUser_code());
        return scmStandardMapper.sysLocAdd(vo);
    }

    public Message sysLocDelete(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        p.setKeyword(p.getKeyword());
        return scmStandardMapper.sysLocDelete(p);
    }

    public List<PartType> getPartType(HttpServletRequest req) {
        return scmStandardMapper.getPartType(getSessionData(req).getSite_code());
    }

    public sysLoc sysLocOneGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysLocOneGet(p);
    }
}
