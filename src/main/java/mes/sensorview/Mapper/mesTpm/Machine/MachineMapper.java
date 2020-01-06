package mes.sensorview.Mapper.mesTpm.Machine;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesTpm.Machine.DTO.TPM_MACHINE_CD;
import mes.sensorview.mesTpm.Machine.DTO.TPM_MACHINE_PART_CD;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface MachineMapper {
    List<TPM_MACHINE_CD> tpmMCGet(Page p);
    List<TPM_MACHINE_CD> tpmMCFileGet(TPM_MACHINE_CD tmc);
    Message tpmMCAdd(TPM_MACHINE_CD tmc);

    TPM_MACHINE_CD tpmMCOneGet(TPM_MACHINE_CD tmc);

    Message tpmMCFileAdd(TPM_MACHINE_CD tmc2);

    Message tpmMCDel(TPM_MACHINE_CD tmc);

    List<TPM_MACHINE_PART_CD> tpmMCPartAllGet(Page p);

    Message tpmMCPartAdd(TPM_MACHINE_PART_CD tmpc);

    Message tpmMCPartDel(TPM_MACHINE_PART_CD tmpc);

    TPM_MACHINE_PART_CD tpmMCPartOneGet(TPM_MACHINE_PART_CD tmpc);
}
