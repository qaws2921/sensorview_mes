package mes.sensorview.mesPop.Standard;

import mes.sensorview.Mapper.mesPop.Standard.MesPopMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PopStandardService {
    @Autowired
    private MesPopMapper mesPopMapper;
}
