package mes.sensorview.mesQms.Shipment;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.File.DTO.Files;
import mes.sensorview.Common.File.Function.UploadFunction;
import mes.sensorview.Mapper.mesQms.Shipment.QmsShipmentMapper;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD_NG_SUM;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD_RPT;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD_SUB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartHttpServletRequest;

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

    public Message qmsProdAdd(HttpServletRequest req, QMS_PROD_SUB qps) {
        qps.setSite_code(getSessionData(req).getSite_code());
        qps.setUser_code(getSessionData(req).getUser_code());
        return qmsShipmentMapper.qmsProdAdd(qps);
    }

    public RESTful qmsProdListGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_PROD_SUB> rows = qmsShipmentMapper.qmsProdListGet(p);
        return getListData(rows, p);
    }

    public List<QMS_PROD_RPT> qmsProdListRPTGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return qmsShipmentMapper.qmsProdListRPTGet(p);
    }
    public void qmsProdErrorManAdd_NoneFile(Files files, MultipartHttpServletRequest req) {
        files.setSite_code(getSessionData(req).getSite_code());
        files.setUser_code(getSessionData(req).getUser_code());
        qmsShipmentMapper.qmsProdErrorManAdd_NoneFile(files);
    }

    public void qmsProdErrorManAdd_File2(Files files, MultipartHttpServletRequest req) {
        files.setSite_code(getSessionData(req).getSite_code());
        files.setUser_code(getSessionData(req).getUser_code());
        Files newFiles = setQmsRecvErrorManFile2(req);
        files.setKey_value(newFiles.getKey_value());
        qmsShipmentMapper.qmsProdErrorManAdd_File2(files);
    }

    public void qmsProdErrorManAdd_File3(Files files, MultipartHttpServletRequest req) {
        files.setSite_code(getSessionData(req).getSite_code());
        files.setUser_code(getSessionData(req).getUser_code());
        Files newFiles = setQmsRecvErrorManFile1(req);
        files.setKey_value(newFiles.getKey_value());
        qmsShipmentMapper.qmsProdErrorManAdd_File3(files);
    }

    public void qmsProdErrorManAdd_AllFile(Files files, MultipartHttpServletRequest req) {
        for(int i=2; 4>i; i++){
            String Key = MakeFileName();
            Files newFiles = AllFile(files, req,Key,i);
            qmsShipmentMapper.qmsProdErrorManAdd_AllFile(newFiles);
        }
    }

    public List<QMS_PROD_NG_SUM> qmsProdErrorListSumGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return qmsShipmentMapper.qmsProdErrorListSumGet(p);
    }
}
