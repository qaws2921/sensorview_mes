package mes.sensorview.Mapper.mesSCM.Close;


import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesScm.Close.DTO.SCM_CLOSE;
import mes.sensorview.mesScm.Close.DTO.SCM_CLOSE_READY;
import mes.sensorview.mesScm.Close.DTO.SCM_CLOSE_SUB;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CloseMapper {

    List<SCM_CLOSE_READY> scmPartCloseGet(Page p);

    Message scmPartCloseAdd(Page p);

    List<SCM_CLOSE> scmPartCloseSumListGet(Page p);

    List<SCM_CLOSE_SUB> scmPartCloseSumListSubGet(Page p);

    Message scmPartCloseCancelDel(SCM_CLOSE sc);
}
