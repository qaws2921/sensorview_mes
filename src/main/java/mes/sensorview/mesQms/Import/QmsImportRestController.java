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

    @RequestMapping(value = "/qmsRecvFileAdd", method = RequestMethod.POST)
    public Message qmsRecvFileAdd(MultipartHttpServletRequest multipartHttpServletRequest, HttpServletRequest req) {
        return qmsImportService.qmsRecvFileAdd(multipartHttpServletRequest, req);

    }
}
