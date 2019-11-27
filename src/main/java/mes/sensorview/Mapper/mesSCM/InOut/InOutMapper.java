package mes.sensorview.Mapper.mesSCM.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;
import mes.sensorview.mesScm.InOut.DTO.*;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD_SUB;

import java.util.List;

public interface InOutMapper {
    Message scmInAdd(Page p);
    List<SCM_IN> scmInGet(Page p);
    List<SCM_OUT> scmOutGet(Page p);
    List<SCM_IN_LINE> scmInLineGet(Page p);
    List<SCM_STOCK_RET> scmStockRetGet(Page p);

    List<SCM_IN_SUB> scmInListGet(Page p);

    List<SYSProdLine> getLine(Page p);

    RESTful scmOutListGet(Page p);
}
