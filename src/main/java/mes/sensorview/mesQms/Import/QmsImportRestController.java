package mes.sensorview.mesQms.Import;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV_SUB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class QmsImportRestController {

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

    @RequestMapping(value ="/qmsRecvErrorManGet", method = RequestMethod.POST)
    public RESTful qmsRecvErrorManGet(Page p,HttpServletRequest req) { return qmsImportService.qmsRecvErrorManGet(p, req); }

    @RequestMapping(value = "/qmsRecvSubAllGet", method = RequestMethod.POST)
    public List<QMS_RECV_SUB> qmsRecvSubAllGet(Page p, HttpServletRequest req) {
        return qmsImportService.qmsRecvSubAllGet(p, req);
    }

    @RequestMapping(value = "/test_file", method = RequestMethod.POST)
    public String test_file(MultipartHttpServletRequest mre, HttpServletRequest req) {
        int index = Integer.parseInt(req.getParameter("index"));
        for (int i = 0 ; i <index;i++){
            String in_no = req.getParameter("file_in_no"+i); // jsp text name mapping
            String part_code = req.getParameter("file_part_code"+i); // jsp text name mapping
            MultipartFile mf = mre.getFile("file"+i);

            System.out.println(in_no);
            System.out.println(part_code);
            System.out.println(mf);

        }


        return "성공";
    }
}
