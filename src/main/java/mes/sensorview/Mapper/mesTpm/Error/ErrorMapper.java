package mes.sensorview.Mapper.mesTpm.Error;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesTpm.Error.DTO.tpmMachineError;

import java.util.List;

public interface ErrorMapper {
    List<tpmMachineError> tpmMachineErrorGet(Page p);

    Message tpmMachineErrorDelete(Page p);
}
