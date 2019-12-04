package mes.sensorview.mesQms.Standard;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesQms.Standard.QmsStandardMapper;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class QmsStandardService extends ReturnFunction {

    @Autowired
    private QmsStandardMapper qmsStandardMapper;

    public List<sysBPartGroup> qmsBPartGroupGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return qmsStandardMapper.qmsBPartGroupGet(p);
    }
}
