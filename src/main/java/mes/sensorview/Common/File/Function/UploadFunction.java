package mes.sensorview.Common.File.Function;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.File.DTO.Files;
import mes.sensorview.Common.File.FileUploadService;
import mes.sensorview.Common.Function.ReturnFunction;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

@Slf4j
public class UploadFunction extends ReturnFunction {
    @Autowired
    FileUploadService fileUploadService;

    public Files setOneFile(Files files, HttpServletRequest req) {
        Message msg = new Message();
        Files newFile = UploadSetFilePath(files.getFiles(), req);
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

    private Files UploadSetFilePath(MultipartFile multipartFile, HttpServletRequest req) {
        Files files = new Files();
        String FileName = MakeFileName() + "." + multipartFile.getOriginalFilename().split("\\.")[1];
        String Key = MakeFileName();

        files.setKey_value(Key);
        files.setFiles(multipartFile);
        files.setFile_size(multipartFile.getSize());
        files.setFile_volume(multipartFile.getSize() / 1024);
        files.setFile_og_name(multipartFile.getOriginalFilename());
        files.setFile_name(FileName);
        files.setUrl("uploads/etc/" + FileName);
        files.setUpload_path(req.getSession().getServletContext().getRealPath("uploads/etc") + '/' + FileName);
        return files;
    }

    private String MakeFileName() {
        Date now = new Date();
        Random random = new Random();
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmss");
        String FileName = (char) ((Math.random() * 26) + 65) + format.format(now) + random.nextInt(10);
        return FileName;
    }

    public void FileDownloads(Files files, HttpServletRequest request, HttpServletResponse response)throws IOException{
        Files fileData = fileUploadService.FileDownloads(files);
        File file = null;
        InputStream is = null;
        OutputStream os = null;
        String mime = "application/x-msdownload";
        response.setContentType(mime);
        try {
            setDisposition(fileData.getFile_name(), request, response);
            log.info("here1");
            file = new File(fileData.getUpload_path());
            is = new FileInputStream(file);
            os = response.getOutputStream();

            byte b[] = new byte[(int) file.length()];
            int len = 0;

            while((len = is.read(b)) > 0){
                os.write(b,0,len);
                log.info("here2");
            }
            log.info("here3");
            is.close();
            os.close();
        } catch (Exception e) {
            log.info("error code : " + e);
            e.printStackTrace();
        }
    }
    private void setDisposition(String filename, HttpServletRequest request, HttpServletResponse response) throws Exception {
        String browser = getBrowser(request);
        String dispositionPrefix = "attachment; filename=";
        String encodedFilename = null;

        if (browser.equals("MSIE")) {
            encodedFilename = URLEncoder.encode(filename, "UTF-8").replaceAll(
                    "\\+", "%20");
        } else if (browser.equals("Firefox")) {
            encodedFilename = "\""
                    + new String(filename.getBytes("UTF-8"), "8859_1") + "\"";
        } else if (browser.equals("Opera")) {
            encodedFilename = "\""
                    + new String(filename.getBytes("UTF-8"), "8859_1") + "\"";
        } else if (browser.equals("Chrome")) {
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < filename.length(); i++) {
                char c = filename.charAt(i);
                if (c > '~') {
                    sb.append(URLEncoder.encode("" + c, "UTF-8"));
                } else {
                    sb.append(c);
                }
            }
            encodedFilename = sb.toString();
        } else {
            throw new IOException("Not supported browser");
        }
        response.setHeader("Content-Disposition", dispositionPrefix
                + encodedFilename);

        if ("Opera".equals(browser)) {
            response.setContentType("application/octet-stream;charset=UTF-8");
        }
    }
    private String getBrowser(HttpServletRequest request) {
        String header = request.getHeader("User-Agent");
        if (header.indexOf("MSIE") > -1) {
            return "MSIE";
        } else if (header.indexOf("Chrome") > -1) {
            return "Chrome";
        } else if (header.indexOf("Opera") > -1) {
            return "Opera";
        } else if (header.indexOf("Firefox") > -1) {
            return "Firefox";
        } else if (header.indexOf("Mozilla") > -1) {
            if (header.indexOf("Firefox") > -1) {
                return "Firefox";
            }else{
                return "MSIE";
            }
        }
        return "MSIE";
    }
}
