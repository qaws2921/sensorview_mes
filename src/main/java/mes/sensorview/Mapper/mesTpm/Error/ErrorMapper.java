package mes.sensorview.Mapper.mesTpm.Error;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesTpm.Error.DTO.tpmMachineError;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ErrorMapper {
    List<tpmMachineError> tpmMachineErrorGet(Page p);

    Message tpmMachineErrorDelete(Page p);

    Message tpmMachineErrorAdd(tpmMachineError tme);

    tpmMachineError tpmMachineErrorOneGet(Page p);
}
