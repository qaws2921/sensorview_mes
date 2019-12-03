package mes.sensorview.mesQms.Standard;

import mes.sensorview.Mapper.mesQms.Standard.QmsStandardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QmsStandardService {

    @Autowired
    private QmsStandardMapper qmsStandardMapper;
}
