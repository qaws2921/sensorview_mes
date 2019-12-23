package mes.sensorview.mesTpm.RegItem;

import mes.sensorview.Mapper.mesTpm.RegItem.RegitemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegItemService {
    @Autowired
    private RegitemMapper regitemMapper;
}
