package mes.sensorview.mesQms.Shipment;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.File.Function.UploadFunction;
import mes.sensorview.Mapper.mesQms.Shipment.QmsShipmentMapper;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD;
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

    public RESTful qmsProdGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_PROD> rows = qmsShipmentMapper.qmsProdGet(p);
        return getListData(rows, p);
    }

    public RESTful qmsProdSubGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_PROD_SUB> rows = qmsShipmentMapper.qmsProdSubGet(p);
        return getListData(rows, p);
    }

    public List<QMS_PROD_SUB> qmsProdSubAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return qmsShipmentMapper.qmsProdSubGet(p);
    }
}
