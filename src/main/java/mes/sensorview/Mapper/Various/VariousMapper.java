package mes.sensorview.Mapper.Various;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.Various.DTO.SYSPartType;
import mes.sensorview.Common.Various.DTO.SYSSupp;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import mes.sensorview.mesManager.Master.DTO.SYSCommon;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_ITEM;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;
import mes.sensorview.mesTpm.Machine.DTO.TPM_MACHINE_CD;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_REG_ITEM_CD;

import java.util.List;

public interface VariousMapper {
    List<SYSSupp> sysSuppGet(Page p);

    List<sysBPartGroup> sysBPartGroupSelectGet(Page p);

    List<sysLoc> sysLocAllGet(Page p);

    List<SYSCommon> sysCommonUnitGet(Page p);

    List<sysBPart> sysBPartModalGet(Page p);

    List<sysBPart> sysBPartAllGet(Page p);

    List<SYSCommon> sysCommonAllGet(Page p);

    List<SYSPartType> sysPartTypeGet(Page p);

    List<SYS_QC_ITEM> qmsQcItemAllGet(Page p);

    List<TPM_MACHINE_CD> tpmMachineAllGet(Page p);
    List<SYSProdLine> getLine(Page p);

    List<TPM_REG_ITEM_CD> tpmMachineRegItemAllGet(Page p);

    SYSAuthProgram menuAuthGet(Page p);

    List<CRM_ORD_RECP> crmOrderModalGet(Page p);

    List<SYSSupp> suppModalGet(Page p);

    SYSPartType sysPartTypeOneGet(Page p);
}
