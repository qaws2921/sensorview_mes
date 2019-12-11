package mes.sensorview.Common.File.Function;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.File.DTO.Files;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Slf4j
public class UploadFunction {
    public void setFile(MultipartHttpServletRequest multipartHttpServletRequest, Files files){
        List<MultipartFile> multipartFiles = multipartHttpServletRequest.getFiles("files");

        if(multipartFiles.size() == 1){

        }else {
            for (int i = 0; multipartFiles.size() > i; i++) {
//            try {
//                file.getFiles().transferTo(new File(file.getUpload_path()));
//            } catch (IllegalStateException e) {
//                e.printStackTrace();
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
            }
        }
    }
}
