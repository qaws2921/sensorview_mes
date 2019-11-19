package mes.sensorview.Mapper.mesSCM.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN;

public interface InOutMapper {
    Message scmInAdd(SCM_IN scmIn);
}
