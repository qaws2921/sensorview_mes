package mes.sensorview.Common.File.Function;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.File.DTO.Files;
import mes.sensorview.Common.File.FileUploadService;
import mes.sensorview.Common.Function.ReturnFunction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Slf4j
public class UploadFunction extends ReturnFunction {
    @Autowired
    FileUploadService fileUploadService;

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

    public Files setOneFile(Files files, HttpServletRequest req){
        Message msg = new Message();
        Files newFile = UploadSetFilePath(files.getFiles(),req);

        try {
            newFile.getFiles().transferTo(new File(newFile.getUpload_path()));
            msg = fileUploadService.setOneFile(newFile, req);
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return newFile;
    }

    private Files UploadSetFilePath(MultipartFile multipartFile, HttpServletRequest req){
        Files files = new Files();
        String idx = multipartFile.getOriginalFilename();
        String FileName = MakeFileName(idx)+"."+multipartFile.getOriginalFilename().split("\\.")[1];
        files.setKey_value(FileName);
        files.setFiles(multipartFile);
        files.setFile_size(multipartFile.getSize());
        files.setFile_volume(multipartFile.getSize() / 1024);
        files.setFile_og_name(multipartFile.getOriginalFilename());
        files.setFile_name(FileName);
        files.setUrl("uploads/etc/" + FileName);
        files.setUpload_path(req.getSession().getServletContext().getRealPath("uploads/etc") + '/' + FileName);
        return files;
    }

    private String MakeFileName(String idx){
        Date now = new Date();
        Random random = new Random();
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmss");
        String FileName = (char)((Math.random() * 26) + 65) + format.format(now) + random.nextInt(10);
        return FileName;
    }
}
