package mes.sensorview.mesQms.Shipment;


import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.File.Function.UploadFunction;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD_SUB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@Slf4j
public class QmsShipmentRestController extends UploadFunction {

    @Autowired
    private QmsShipmentService qmsShipmentService;

    @RequestMapping(value ="/qmsProdErrorManGet", method = RequestMethod.POST)
    public RESTful qmsProdErrorManGet(Page p, HttpServletRequest req) { return qmsShipmentService.qmsProdErrorManGet(p, req); }

    @RequestMapping(value = "/qmsProdGet", method = RequestMethod.POST)
    public RESTful qmsProdGet(Page p, HttpServletRequest req) {
        return qmsShipmentService.qmsProdGet(p, req);
    }
    @RequestMapping(value = "/qmsProdSubGet", method = RequestMethod.POST)
    public RESTful qmsProdSubGet(Page p, HttpServletRequest req) {
        return qmsShipmentService.qmsProdSubGet(p, req);
    }
    @RequestMapping(value = "/qmsProdSubAllGet", method = RequestMethod.POST)
    public List<QMS_PROD_SUB> qmsProdSubAllGet(Page p, HttpServletRequest req) {
        return qmsShipmentService.qmsProdSubAllGet(p, req);
    }


    @RequestMapping(value ="/qmsProdErrorManOneGet", method = RequestMethod.POST)
    public QMS_PROD_SUB qmsProdErrorManOneGet(QMS_PROD_SUB qmsProdSub, HttpServletRequest req){
        return qmsShipmentService.qmsProdErrorManOneGet(qmsProdSub, req);
    }

    @RequestMapping(value = "/qmsProdMRBGet", method = RequestMethod.POST)
    public RESTful qmsProdMRBGet(Page p, HttpServletRequest req){ return qmsShipmentService.qmsProdMRBGet(p, req); }

    @RequestMapping(value = "/qmsProdMRBAdd", method = RequestMethod.POST)
    public Message qmsProdMRBAdd(HttpServletRequest req, QMS_PROD_SUB qps) {
        return qmsShipmentService.qmsProdMRBAdd(req, qps);
    }

    @RequestMapping(value = "/qmsProdMRBCancel", method = RequestMethod.POST)
    public Message qmsProdMRBCancel(HttpServletRequest req, QMS_PROD_SUB qps) {
        return qmsShipmentService.qmsProdMRBCancel(req, qps);
    }

}
