package mes.sensorview.Mapper.mesSCM.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN;

import java.util.List;

public interface InOutMapper {
    Message scmInAdd(SCM_IN scmIn);

    List<SCM_IN> scmInListGet(Page p);
}
