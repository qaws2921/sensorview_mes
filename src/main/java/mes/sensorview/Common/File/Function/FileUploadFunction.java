package mes.sensorview.Common.File.Function;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.File.DTO.Files;
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
public class FileUploadFunction {

    public Message Uploader(MultipartHttpServletRequest mtfRequest) {
//        List<MultipartFile> mf = mtfRequest.getFiles("report");

        String idx = null;
        Files file = UploadSetFilePath(mtfRequest,idx);
        try {
            file.getFiles().transferTo(new File(file.getFileUrl()));
        } catch (IllegalStateException e) {
            e.printStackTrace();
            getMessage(1);
        } catch (IOException e) {
            e.printStackTrace();
            getMessage(1);
        }
        return getMessage(0);
    }

    private String MakeFileName(String idx){
        Date now = new Date();
        Random random = new Random();
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
        String FileName;
        if(idx.equals("report"))
        {
            FileName = "R" + format.format(now) + random.nextInt(1000);
        }
        else if(idx.equals("improving"))
        {
            FileName = "I" + format.format(now) + random.nextInt(1000);
        }
        else
        {
            FileName = "E" + format.format(now) + random.nextInt(1000);
        }
        return FileName;
    }

    private Files UploadSetFilePath(MultipartHttpServletRequest mtfRequest, String idx){
        Files files = new Files();
        String FileName = MakeFileName(idx);
        String extension = files.getFiles().getOriginalFilename().split("\\.")[1];

        if(idx.equals("report"))
        {
            files.setFiles(mtfRequest.getFile(idx));
            files.setFileVolume(files.getFiles().getSize() / 1024);
            files.setOriginFileName(files.getFiles().getOriginalFilename());
            files.setFileName(FileName);
            files.setFileUrl("uploads/report" + FileName);
            files.setUploadPath(mtfRequest.getSession().getServletContext().getRealPath("uploads/report") + '/' + FileName);
        }
        else if(idx.equals("improving"))
        {
            files.setFiles(mtfRequest.getFile(idx));
            files.setFileVolume(files.getFiles().getSize() / 1024);
            files.setOriginFileName(files.getFiles().getOriginalFilename());
            files.setFileName(FileName);
            files.setFileUrl("uploads/improving" + FileName);
            files.setUploadPath(mtfRequest.getSession().getServletContext().getRealPath("uploads/improving") + '/' + FileName);
        }
        else
        {
            files.setFiles(mtfRequest.getFile(idx));
            files.setFileVolume(files.getFiles().getSize() / 1024);
            files.setOriginFileName(files.getFiles().getOriginalFilename());
            files.setFileName(FileName);
            files.setFileUrl("uploads/etc" + FileName);
            files.setUploadPath(mtfRequest.getSession().getServletContext().getRealPath("uploads/etc") + '/' + FileName);
        }
        return files;
    }

    private Message getMessage(int idx){
        Message msg = new Message();
        if(idx == 0){
            msg.setResult("OK");
            msg.setMessage("업로드가 완료되었습니다.");
        }else{
            msg.setResult("NG");
            msg.setMessage("업로드 실패");
        }
        return msg;
    }
}
