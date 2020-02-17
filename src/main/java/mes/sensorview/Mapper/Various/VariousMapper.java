package mes.sensorview.Mapper.Various;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.Various.DTO.SYSPartType;
import mes.sensorview.Common.Various.DTO.SYSSupp;
import mes.sensorview.Common.Various.DTO.VT_PART_GROUP;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import mes.sensorview.mesCrm.Crm.DTO.SYS_ASSY_CABLE;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import mes.sensorview.mesManager.BOM.DTO.SYS_COMMON2_CD;
import mes.sensorview.mesManager.BOM.DTO.SYS_PART_GROUP2_CD;
import mes.sensorview.mesManager.BOM.DTO.SYS_PART_NM_CD;
import mes.sensorview.mesManager.Master.DTO.SYSCargo;
import mes.sensorview.mesManager.Master.DTO.SYSCommon;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;
import mes.sensorview.mesPop.Standard.DTO.POP_LINE_USER_CD;
import mes.sensorview.mesPop.Standard.DTO.POP_ROUTE_CD;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_ITEM;
import mes.sensorview.mesScm.Standard.DTO.SYS_PART_GROUP;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;
import mes.sensorview.mesTpm.Machine.DTO.TPM_MACHINE_CD;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_REG_ITEM_CD;
import mes.sensorview.mesWms.Stock.DTO.WMS_STOCK_TOTAL;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
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

    List<SYS_PART_GROUP> sysPartGroupAllGet(Page p);

    List<VT_PART_GROUP> partGroup1(Page p);

    List<VT_PART_GROUP> partGroup2(Page p);

    List<VT_PART_GROUP> partGroup3(Page p);

    List<SYS_ASSY_CABLE> crmAssyCableAllGet(Page p);

    List<SYS_PART_GROUP2_CD> sysPartGroup2AllGet(Page p);

    List<SYS_COMMON2_CD> sysPartNameGroupAllGet(Page p);

    List<POP_ROUTE_CD> popRouteGroupAllGet(Page p);

    List<SYS_PART_NM_CD> sysPartNameAllGet(Page p);

    List<SYSProdLine> sysProdLineAllGet(Page p);

    List<POP_LINE_USER_CD> popLineUserAllGet(Page p);

    List<SYSCommon> sysCommonBoardGet(Page p);

    WMS_STOCK_TOTAL wmsStockTotalOneGet(Page p);
}
