package mes.sensorview.Mapper.File;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.File.DTO.Files;

public interface FileMapper {
    Message setOneFile(Files files);
}
