package mes.sensorview.mesTpm.RegItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegItemRestController {
    @Autowired
    private RegItemService regItemService;
}
