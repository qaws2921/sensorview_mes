package mes.sensorview.Mapper.mesSCM.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;
import mes.sensorview.mesScm.InOut.DTO.*;

import java.util.List;

public interface InOutMapper {
    Message scmInAdd(Page p);
    List<SCM_IN> scmInGet(Page p);
    List<SCM_OUT> scmOutGet(Page p);
    List<SCM_IN_LINE> scmInLineGet(Page p);
    List<SCM_STOCK_RET> scmStockRetGet(Page p);

    List<SCM_IN> scmInListGet(Page p);

    List<SYSProdLine> getLine(Page p);

    List<SCM_IN_SUB> scmInSub1Get(Page p);

    Message scmInDel(Page p);

    List<SCM_OUT_ORD> scmOutOrderGet(Page p);
}
