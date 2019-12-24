package mes.sensorview.Common.File.Function;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.File.DTO.Files;
import mes.sensorview.Common.File.FileUploadService;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV_SUB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
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
        Files newFile = UploadSetFilePath(files.getFiles(), req);
        try {
            newFile.getFiles().transferTo(new File(newFile.getUpload_path()));
            fileUploadService.setOneFile(newFile, req);
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

    public String MakeFileName() {
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
            setDisposition(fileData.getFile_og_name(), request, response);
            file = new File(fileData.getUpload_path());
            is = new FileInputStream(file);
            os = response.getOutputStream();

            byte b[] = new byte[(int) file.length()];
            int len = 0;

            while((len = is.read(b)) > 0){
                os.write(b,0,len);
            }
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

    public Files setQmsRecvErrorManFile1(MultipartHttpServletRequest req) {
        Files files = UploadSetFilePath1(req.getFile("file3"), req);
        try {
            files.getFiles().transferTo(new File(files.getUpload_path()));
            fileUploadService.setQmsRecvErrorManFile(files, req);
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return files;
    }
    public Files setQmsRecvErrorManFile2(MultipartHttpServletRequest req) {
        Files files = UploadSetFilePath2(req.getFile("file2"), req);
        try {
            files.getFiles().transferTo(new File(files.getUpload_path()));
            fileUploadService.setQmsRecvErrorManFile(files, req);
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return files;
    }

    private Files UploadSetFilePath1(MultipartFile multipartFile, HttpServletRequest req) {
        Files files = new Files();
        String FileName = MakeFileName() + "." + multipartFile.getOriginalFilename().split("\\.")[1];
        String Key = MakeFileName();

        files.setKey_value(Key);
        files.setFiles(multipartFile);
        files.setFile_size(multipartFile.getSize());
        files.setFile_volume(multipartFile.getSize() / 1024);
        files.setFile_og_name(multipartFile.getOriginalFilename());
        files.setFile_name(FileName);
        files.setUrl("uploads/improving/" + FileName);
        files.setUpload_path(req.getSession().getServletContext().getRealPath("uploads/improving") + '/' + FileName);
        return files;
    }

    private Files UploadSetFilePath2(MultipartFile multipartFile, HttpServletRequest req) {
        Files files = new Files();
        String FileName = MakeFileName() + "." + multipartFile.getOriginalFilename().split("\\.")[1];
        String Key = MakeFileName();

        files.setKey_value(Key);
        files.setFiles(multipartFile);
        files.setFile_size(multipartFile.getSize());
        files.setFile_volume(multipartFile.getSize() / 1024);
        files.setFile_og_name(multipartFile.getOriginalFilename());
        files.setFile_name(FileName);
        files.setUrl("uploads/report/" + FileName);
        files.setUpload_path(req.getSession().getServletContext().getRealPath("uploads/report") + '/' + FileName);
        return files;
    }

    public Files AllFile(Files files, MultipartHttpServletRequest req, String Key, int i) {
        Files NewFiles = UploadSetAllFilePath(req, Key, i);
        try {
            NewFiles.getFiles().transferTo(new File(NewFiles.getUpload_path()));
            fileUploadService.setAllFile(NewFiles, req);
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        NewFiles.setKey1(files.getKey1());
        NewFiles.setKey2(files.getKey2());
        NewFiles.setKey3(files.getKey3());
        return NewFiles;
    }

    private Files UploadSetAllFilePath(MultipartHttpServletRequest req, String Key, int i) {
        Files files = new Files();
        String FileName = Key + "." + req.getFile("file"+i).getOriginalFilename().split("\\.")[1];
        files.setKey_value(Key);
        files.setFiles(req.getFile("file"+i));
        files.setFile_size(req.getFile("file"+i).getSize());
        files.setFile_volume(req.getFile("file"+i).getSize() / 1024);
        files.setFile_og_name(req.getFile("file"+i).getOriginalFilename());
        files.setFile_name(FileName);
        if(i == 2){
            files.setName("FILE2");
            files.setUrl("uploads/report/" + FileName);
            files.setUpload_path(req.getSession().getServletContext().getRealPath("uploads/report") + '/' + FileName);
        }else if(i == 3){
            files.setName("FILE3");
            files.setUrl("uploads/improving/" + FileName);
            files.setUpload_path(req.getSession().getServletContext().getRealPath("uploads/improving") + '/' + FileName);
        }
        return files;
    }
    public String tpmMCFileAdd(String code,MultipartHttpServletRequest req,int index){
        Files files = UploadSetFilePathTpmMC(req.getFile("file"+index), req,index,code);
        try {
            files.getFiles().transferTo(new File(files.getUpload_path()));
            return files.getUpload_path();
        } catch (IllegalStateException e) {
            e.printStackTrace();
            return "";
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }
    }
    private Files UploadSetFilePathTpmMC(MultipartFile multipartFile, HttpServletRequest req,int index,String code) {
        Files files = new Files();
        String FileName = MakeFileNameNew(getSessionData(req).getSite_code(),index,code) + "." + multipartFile.getOriginalFilename().split("\\.")[1];
        String Key = MakeFileName();
        files.setKey_value(Key);
        files.setFiles(multipartFile);
        files.setFile_size(multipartFile.getSize());
        files.setFile_volume(multipartFile.getSize() / 1024);
        files.setFile_og_name(multipartFile.getOriginalFilename());
        files.setFile_name(FileName);
        files.setUrl("uploads/img/" + FileName);
        files.setUpload_path(req.getSession().getServletContext().getRealPath("uploads/img") + '/' + FileName);
        return files;
    }
    public String MakeFileNameNew(String site_code,int index,String code) {
        Date now = new Date();
        Random random = new Random();
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmss");
        String FileName = site_code+"_"+code+"_"+index+"_"+ format.format(now);
        return FileName;
    }

}
