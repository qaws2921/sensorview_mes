package mes.sensorview.Mapper.mesTpm.Machine;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesTpm.Machine.DTO.TPM_MACHINE_CD;

import java.util.List;

public interface MachineMapper {
    List<TPM_MACHINE_CD> tpmMCGet(Page p);
}
