package mes.sensorview.mesQms.Standard;

import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesQms.Standard.QmsStandardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class QmsStandardService extends ReturnFunction {

    @Autowired
    private QmsStandardMapper qmsStandardMapper;

    public List<PartType> getSPartType(HttpServletRequest req) {
        return qmsStandardMapper.getSPartType(getSessionData(req).getSite_code());
    }
}
