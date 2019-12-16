package mes.sensorview.Common.File;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.File.DTO.Files;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.File.FileMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;

@Service
public class FileUploadService extends ReturnFunction {
    @Autowired
    private FileMapper fileMapper;

    public Message setOneFile(Files files, HttpServletRequest req) {
        files.setSite_code(getSessionData(req).getSite_code());
        files.setUser_code(getSessionData(req).getUser_code());
        return fileMapper.setOneFile(files);
    }

    public Files FileDownloads(Files files) {
        return fileMapper.FileDownloads(files);
    }

    public void setQmsRecvErrorManFile(Files files, MultipartHttpServletRequest req) {
        files.setSite_code(getSessionData(req).getSite_code());
        files.setUser_code(getSessionData(req).getUser_code());
        fileMapper.setOneFile(files);
    }

    public void setAllFile(Files files, MultipartHttpServletRequest req) {
        files.setSite_code(getSessionData(req).getSite_code());
        files.setUser_code(getSessionData(req).getUser_code());
        fileMapper.setOneFile(files);
    }
}
