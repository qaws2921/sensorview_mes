package mes.sensorview.Common.File;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.File.Function.FileUploadFunction;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartHttpServletRequest;

@Service
public class FileUploadService extends FileUploadFunction {
    public Message uploadFiles(MultipartHttpServletRequest mtfRequest){
        return Uploader(mtfRequest);
    }
}
