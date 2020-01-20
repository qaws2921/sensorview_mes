package mes.sensorview.Mapper.Excel;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.Excel.DTO.Excel;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import mes.sensorview.mesOut.mesOut.DTO.OUTS_IN_SUB;
import mes.sensorview.mesOut.mesOut.DTO.OUTS_OUT_BCR;
import mes.sensorview.mesOut.mesOut.DTO.OUTS_OUT_SUB;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV_SUB;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD_SUB;
import mes.sensorview.mesScm.Half.DTO.SCM_HIN;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_OUT_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_REIN_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_STOCK_RET_SUB;
import mes.sensorview.mesScm.Inventory.DTO.SCM_STOCK_LIST;
import mes.sensorview.mesScm.Inventory.DTO.SCM_STOCK_SUM_DAY;
import mes.sensorview.mesScm.Inventory.DTO.SCM_STOCK_SUM_MONTH;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_REQ_ORD;
import mes.sensorview.mesScm.Standard.DTO.SYS_PART_PRICE;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import mes.sensorview.mesTpm.Error.DTO.tpmMachineError;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ExcelMapper {
    List<sysBPart> testDbList();
    List<SCM_REQ_ORD> scmReqOrderDbList(Excel excel);
    List<SCM_IN_ORD_SUB> scmOrderListDbList(Excel excel);
    List<SCM_IN_SUB> scmInListDbList(Excel excel);
    List<SCM_OUT_SUB> scmOutListDbList(Excel excel);
    void sysBPartSetListData(sysBPart vo);

    List<SCM_STOCK_RET_SUB> scmStockRetListDbList(Excel excel);

    List<SCM_REIN_SUB> scmInLineListDbList(Excel excel);

    List<SCM_STOCK_LIST> scmStockListDbList(Excel excel);

    List<SCM_STOCK_SUM_DAY> scmStockSumDayListDbList(Excel excel);

    List<SCM_STOCK_SUM_MONTH> scmStockSumMonthListDbList(Excel excel);

    List<CRM_ORD_RECP> crmWorkListDbList(Excel excel);

    List<QMS_RECV_SUB> qmsRecvDbList(Excel excel);

    List<QMS_PROD_SUB> qmsProdDbList(Excel excel);

    List<OUTS_OUT_SUB> outsOutDbList(Excel excel);

    List<OUTS_IN_SUB> outsInDbList(Excel excel);

    List<OUTS_OUT_BCR> outsInReadyDbList(Excel excel);

    List<tpmMachineError> tpmMachineErrorDbList(Excel excel);

    List<SCM_HIN> scmHInListDbList(Excel excel);

    List<SYS_PART_PRICE> sysPartPriceDbList(Excel excel);
}
