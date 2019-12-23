package mes.sensorview.Mapper.Various;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.Common.Various.DTO.SYSSupp;
import mes.sensorview.mesManager.Master.DTO.SYSCommon;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_ITEM;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;
import mes.sensorview.mesTpm.Machine.DTO.tpmMachine;

import java.util.List;

public interface VariousMapper {
    List<SYSSupp> sysSuppGet(Page p);

    List<sysBPartGroup> sysBPartGroupSelectGet(Page p);

    List<sysLoc> sysLocAllGet(Page p);

    List<SYSCommon> sysCommonUnitGet(Page p);

    List<sysBPart> sysBPartModalGet(Page p);

    List<sysBPart> sysBPartAllGet(Page p);

    List<SYSCommon> sysCommonAllGet(Page p);

    List<PartType> sysPartTypeGet(Page p);

    List<SYS_QC_ITEM> qmsQcItemAllGet(Page p);

    List<tpmMachine> tpmMachineAllGet(Page p);
    List<SYSProdLine> getLine(Page p);
}
