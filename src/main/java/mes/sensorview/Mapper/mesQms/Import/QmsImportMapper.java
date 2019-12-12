package mes.sensorview.Mapper.mesQms.Import;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV_SUB;

import java.util.List;

public interface QmsImportMapper {
    List<QMS_RECV> qmsRecvGet(Page p);

    List<QMS_RECV_SUB> qmsRecvSubGet(Page p);

    List<QMS_RECV_SUB> qmsRecvErrorManGet(Page p);

    Message qmsRecvAdd(QMS_RECV_SUB qrs);
}
