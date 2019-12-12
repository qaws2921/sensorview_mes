package mes.sensorview.Common.File;

import mes.sensorview.Common.File.DTO.Files;
import mes.sensorview.Mapper.File.FileMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class FileUploadService{
    @Autowired
    private FileMapper fileMapper;

    public void setOneFile(Files files, HttpServletRequest req) {
        fileMapper.setOneFile(files);
    }
}
