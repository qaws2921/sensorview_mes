package mes.sensorview.mesQms.Import;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.File.DTO.Files;
import mes.sensorview.Common.File.Function.UploadFunction;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@Slf4j
public class QmsImportRestController extends UploadFunction {

    @Autowired
    private QmsImportService qmsImportService;

    @RequestMapping(value = "/qmsRecvGet", method = RequestMethod.POST)
    public RESTful qmsRecvGet(Page p, HttpServletRequest req) {
        return qmsImportService.qmsRecvGet(p, req);
    }
    @RequestMapping(value = "/qmsRecvSubGet", method = RequestMethod.POST)
    public RESTful qmsRecvSubGet(Page p, HttpServletRequest req) {
        return qmsImportService.qmsRecvSubGet(p, req);
    }

    @RequestMapping(value = "/qmsRecvAdd", method = RequestMethod.POST)
    public Message qmsRecvAdd(HttpServletRequest req, QMS_RECV_SUB qrs) {
        return qmsImportService.qmsRecvAdd(req, qrs);
    }

    @RequestMapping(value ="/FileUploads", method = RequestMethod.POST)
    public void FileUploads(Files files, HttpServletRequest request, HttpServletResponse response) throws IOException {
        FileDownloads(files,request,response);
    }

    @RequestMapping(value ="/qmsRecvErrorManGet", method = RequestMethod.POST)
    public RESTful qmsRecvErrorManGet(Page p,HttpServletRequest req) { return qmsImportService.qmsRecvErrorManGet(p, req); }

    @RequestMapping(value ="/qmsRecvErrorManOneGet", method = RequestMethod.POST)
    public QMS_RECV_SUB qmsRecvErrorManOneGet(QMS_RECV_SUB qmsRecvSub, HttpServletRequest req){
        return qmsImportService.qmsRecvErrorManOneGet(qmsRecvSub, req);
    }

    @RequestMapping(value = "/qmsRecvSubAllGet", method = RequestMethod.POST)
    public List<QMS_RECV_SUB> qmsRecvSubAllGet(Page p, HttpServletRequest req) {
        return qmsImportService.qmsRecvSubAllGet(p, req);
    }

    @RequestMapping(value = "/qmsRecvFileAdd", method = RequestMethod.POST)
    public Message qmsRecvFileAdd(MultipartHttpServletRequest multipartHttpServletRequest, HttpServletRequest req) {
        return qmsImportService.qmsRecvFileAdd(multipartHttpServletRequest, req);

    }

    @RequestMapping(value = "/testRecvFileAdd", method = RequestMethod.POST)
    public String testRecvFileAdd(MultipartHttpServletRequest multipartHttpServletRequest, HttpServletRequest req) {
        String in_no = multipartHttpServletRequest.getParameter("in_no");
        String part_code = multipartHttpServletRequest.getParameter("part_code");
        String act_type = multipartHttpServletRequest.getParameter("act_type");
        String file2 = multipartHttpServletRequest.getFile("file2").getOriginalFilename();
        String file3 = multipartHttpServletRequest.getFile("file3").getOriginalFilename();
        System.out.println(in_no);
        System.out.println(part_code);
        System.out.println(act_type);
        System.out.println(file2);
        System.out.println(file3);


        return "성공";

    }

    @RequestMapping(value = "/qmsRecvListGet", method = RequestMethod.POST)
    public RESTful qmsRecvListGet(Page p, HttpServletRequest req) {
        return qmsImportService.qmsRecvListGet(p, req);
    }

    @RequestMapping(value = "/qmsRecvMRBGet", method = RequestMethod.POST)
    public RESTful qmsRecvMRBGet(Page p, HttpServletRequest req) {
        return qmsImportService.qmsRecvMRBGet(p, req);
    }

    @RequestMapping(value = "/qmsRecvMRBAdd", method = RequestMethod.POST)
    public Message qmsRecvMRBAdd(HttpServletRequest req, QMS_RECV_SUB qrs) {
        return qmsImportService.qmsRecvMRBAdd(req, qrs);
    }
    @RequestMapping(value = "/qmsRecvMRBCancel", method = RequestMethod.POST)
    public Message qmsRecvMRBCancel(HttpServletRequest req, QMS_RECV_SUB qrs) {
        return qmsImportService.qmsRecvMRBCancel(req, qrs);
    }
}
