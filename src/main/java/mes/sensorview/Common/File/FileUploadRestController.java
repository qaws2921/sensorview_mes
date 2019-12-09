package mes.sensorview.Common.File;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.File.DTO.Files;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
public class FileUploadRestController {
    @Autowired
    private FileUploadService fileUploadService;

    @RequestMapping(value = "/uploadFiles" , method = RequestMethod.POST)
    public Message uploadFiles(MultipartHttpServletRequest mtfRequest){
        return fileUploadService.uploadFiles(mtfRequest);
    }
}
