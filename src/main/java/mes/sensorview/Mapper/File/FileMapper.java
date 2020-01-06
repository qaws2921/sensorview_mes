package mes.sensorview.Mapper.File;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.File.DTO.Files;
import org.springframework.stereotype.Repository;

@Repository
public interface FileMapper {
    Message setOneFile(Files files);

    Files FileDownloads(Files files);
}
