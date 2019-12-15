package mes.sensorview.mesQms.Shipment;


import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.File.Function.UploadFunction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@Slf4j
public class QmsShipmentRestController extends UploadFunction {

    @Autowired
    private QmsShipmentService qmsShipmentService;

    @RequestMapping(value ="/qmsProdErrorManGet", method = RequestMethod.POST)
    public RESTful qmsProdErrorManGet(Page p, HttpServletRequest req) { return qmsShipmentService.qmsProdErrorManGet(p, req); }
}
