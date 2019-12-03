package mes.sensorview.mesQms.Standard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QmsStandardRestController {

    @Autowired
    private QmsStandardService standardService;
}
