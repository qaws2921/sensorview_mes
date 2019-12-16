package mes.sensorview.mesQms.Shipment;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.File.Function.UploadFunction;
import mes.sensorview.Mapper.mesQms.Shipment.QmsShipmentMapper;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD_SUB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class QmsShipmentService extends UploadFunction {

    @Autowired
    private QmsShipmentMapper qmsShipmentMapper;

    public RESTful qmsProdErrorManGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_PROD_SUB> rows = qmsShipmentMapper.qmsProdErrorManGet(p);
        return getListData(rows, p);
    }

    public QMS_PROD_SUB qmsProdErrorManOneGet(QMS_PROD_SUB qmsProdSub, HttpServletRequest req) {
        qmsProdSub.setSite_code(getSessionData(req).getSite_code());
        return qmsShipmentMapper.qmsProdErrorManOneGet(qmsProdSub);
    }

    public RESTful qmsProdMRBGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_PROD_SUB> rows = qmsShipmentMapper.qmsProdMRBGet(p);
        return getListData(rows, p);
    }

    public Message qmsProdMRBAdd(HttpServletRequest req, QMS_PROD_SUB qps) {
        qps.setSite_code(getSessionData(req).getSite_code());
        return qmsShipmentMapper.qmsProdMRBAdd(qps);
    }

    public Message qmsProdMRBCancel(HttpServletRequest req, QMS_PROD_SUB qps) {
        qps.setSite_code(getSessionData(req).getSite_code());
        return qmsShipmentMapper.qmsProdMRBCancel(qps);
    }
}
