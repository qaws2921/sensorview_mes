package mes.sensorview.mesQms.Import;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.File.DTO.Files;
import mes.sensorview.Common.File.Function.UploadFunction;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesQms.Import.QmsImportMapper;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV_NG_SUM;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV_SUB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
@Slf4j
public class QmsImportService  extends UploadFunction {

    @Autowired
    private QmsImportMapper qmsImportMapper;

    public RESTful qmsRecvGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_RECV> rows = qmsImportMapper.qmsRecvGet(p);
        return getListData(rows , p);
    }

    public RESTful qmsRecvSubGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_RECV_SUB> rows = qmsImportMapper.qmsRecvSubGet(p);
        return getListData(rows , p);
    }

    public RESTful qmsRecvErrorManGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_RECV_SUB> rows =qmsImportMapper.qmsRecvErrorManGet(p);
        return getListData(rows , p);
    }

    public List<QMS_RECV_SUB> qmsRecvSubAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return qmsImportMapper.qmsRecvSubGet(p);
    }

    public QMS_RECV_SUB qmsRecvErrorManOneGet(QMS_RECV_SUB qmsRecvSub, HttpServletRequest req) {
        qmsRecvSub.setSite_code(getSessionData(req).getSite_code());
        return qmsImportMapper.qmsRecvErrorManOneGet(qmsRecvSub);
    }

    public Message qmsRecvAdd(HttpServletRequest req, QMS_RECV_SUB qrs) {
        qrs.setSite_code(getSessionData(req).getSite_code());
        qrs.setUser_code(getSessionData(req).getUser_code());
        return qmsImportMapper.qmsRecvAdd(qrs);
    }

    public Message qmsRecvFileAdd(MultipartHttpServletRequest multipartHttpServletRequest, HttpServletRequest req) {
        Message msg = new Message();
        int index = Integer.parseInt(req.getParameter("index"));
        Files files = new Files();
        Files files2 = new Files();
        QMS_RECV qr = new QMS_RECV();
        char a = (char) 5;
        char b = (char) 4;
        for (int i = 0 ; i <index;i++){
            files.setKey1(multipartHttpServletRequest.getParameter("file_in_no"+i));
            files.setKey2(multipartHttpServletRequest.getParameter("file_part_code"+i));
            files.setFiles(multipartHttpServletRequest.getFile("file"+i));
            files2 =setOneFile(files,req);
                if ( i ==0 ){
                    qr.setKeyword(files.getKey1()+b+files.getKey2()+b+files2.getKey_value());
                }else {
                    qr.setKeyword(qr.getKeyword()+a+files.getKey1()+b+files.getKey2()+b+files2.getKey_value());
                }


        }
        qr.setSite_code(getSessionData(req).getSite_code());

        return qmsImportMapper.qmsRecvFileAdd(qr);
    }

    public RESTful qmsRecvMRBGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_RECV_SUB> rows = qmsImportMapper.qmsRecvMRBGet(p);
        return getListData(rows , p);
    }

    public Message qmsRecvMRBAdd(HttpServletRequest req, QMS_RECV_SUB qrs) {
        qrs.setSite_code(getSessionData(req).getSite_code());
        return qmsImportMapper.qmsRecvMRBAdd(qrs);
    }

    public Message qmsRecvMRBCancel(HttpServletRequest req, QMS_RECV_SUB qrs) {
        qrs.setSite_code(getSessionData(req).getSite_code());
        return qmsImportMapper.qmsRecvMRBCancel(qrs);
    }

    public RESTful qmsRecvListGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<QMS_RECV_SUB> rows = qmsImportMapper.qmsRecvListGet(p);
        return getListData(rows , p);
    }

    public void qmsRecvErrorManAdd_NoneFile(Files files, MultipartHttpServletRequest req) {
        files.setSite_code(getSessionData(req).getSite_code());
        files.setUser_code(getSessionData(req).getUser_code());
        qmsImportMapper.qmsRecvErrorManAdd(files);
    }

    public void qmsRecvErrorManAdd_File2(Files files, MultipartHttpServletRequest req) {
        files.setSite_code(getSessionData(req).getSite_code());
        files.setUser_code(getSessionData(req).getUser_code());
        Files newFiles = setQmsRecvErrorManFile2(req);
        files.setKey_value(newFiles.getKey_value());
        qmsImportMapper.qmsRecvErrorManAdd2(files);
    }

    public void qmsRecvErrorManAdd_File3(Files files, MultipartHttpServletRequest req) {
        files.setSite_code(getSessionData(req).getSite_code());
        files.setUser_code(getSessionData(req).getUser_code());
        Files newFiles = setQmsRecvErrorManFile1(req);
        files.setKey_value(newFiles.getKey_value());
        qmsImportMapper.qmsRecvErrorManAdd3(files);
    }

    public void qmsRecvErrorManAdd_AllFile(Files files, MultipartHttpServletRequest req) {
        for(int i=2; 4>i; i++){
            String Key = MakeFileName();
            Files newFiles = AllFile(files, req,Key,i);
            qmsImportMapper.qmsRecvErrorManAdd_AllFile(newFiles);
        }
    }

    public List<QMS_RECV_NG_SUM> qmsRecvErrorListSumGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return qmsImportMapper.qmsRecvErrorListSumGet(p);
    }
}
