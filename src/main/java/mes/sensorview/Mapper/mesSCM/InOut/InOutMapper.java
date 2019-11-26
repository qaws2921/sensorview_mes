package mes.sensorview.Mapper.mesSCM.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN_LINE;
import mes.sensorview.mesScm.InOut.DTO.SCM_OUT;
import mes.sensorview.mesScm.InOut.DTO.SCM_STOCK_RET;

import java.util.List;

public interface InOutMapper {
    Message scmInAdd(SCM_IN scmIn);
    List<SCM_IN> scmInGet(Page p);
    List<SCM_OUT> scmOutGet(Page p);
    List<SCM_IN_LINE> scmInLineGet(Page p);
    List<SCM_STOCK_RET> scmStockRetGet(Page p);
}
