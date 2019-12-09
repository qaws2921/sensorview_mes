package mes.sensorview.Common.File.DTO;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class Files {
    private String OriginFileName;
    private String fileName;
    private byte fileSize;
    private long fileVolume;
    private String uploadPath;
    private String fileUrl;
    private MultipartFile files;
}
