package mes.sensorview.Mapper.Excel;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.Excel.DTO.Excel;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_OUT_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_REIN_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_STOCK_RET_SUB;
import mes.sensorview.mesScm.Inventory.DTO.SCM_STOCK_LIST;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_REQ_ORD;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import java.util.List;

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
}
