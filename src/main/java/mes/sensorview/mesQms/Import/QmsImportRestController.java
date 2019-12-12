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


    @RequestMapping(value ="/qmsRecvErrorManGet", method = RequestMethod.POST)
    public RESTful qmsRecvErrorManGet(Page p,HttpServletRequest req) { return qmsImportService.qmsRecvErrorManGet(p, req); }

    @RequestMapping(value = "/qmsRecvSubAllGet", method = RequestMethod.POST)
    public List<QMS_RECV_SUB> qmsRecvSubAllGet(Page p, HttpServletRequest req) {
        return qmsImportService.qmsRecvSubAllGet(p, req);
    }

    @RequestMapping(value = "/test_file", method = RequestMethod.POST)
    public Message test_file(MultipartHttpServletRequest multipartHttpServletRequest, HttpServletRequest req) {
        Message msg = new Message();
        int index = Integer.parseInt(req.getParameter("index"));
        Files files = new Files();
        for (int i = 0 ; i <index;i++){
            files.setKey1(multipartHttpServletRequest.getParameter("file_in_no"+i));
            files.setKey2(multipartHttpServletRequest.getParameter("file_part_code"+i));
            files.setFiles(multipartHttpServletRequest.getFile("file"+i));
            msg = setOneFile(files,req);
        }
        return msg;
    }
}
