package mes.sensorview.Mapper.mesSCM.Order;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_REQ_ORD;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OrderMapper {
    List<SCM_IN_ORD> scmOrderGet(Page p);
    List<SCM_REQ_ORD> scmReqOrderGet(Page p);
    List<SCM_IN_ORD_SUB> scmOrderListGet(Page p);
    Message scmOrderAdd(SCM_IN_ORD sio);
    Message scmOrderDel(SCM_IN_ORD sio);

    List<SCM_IN_ORD_SUB> scmOrderSub1Get(Page p);

    Message scmReqOrderAdd(SCM_REQ_ORD sro);
}
