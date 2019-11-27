package mes.sensorview.Mapper.mesSCM.Order;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_REQ_ORD;

import java.util.List;

public interface OrderMapper {
    List<SCM_IN_ORD> scmOrderGet(Page p);
    List<SCM_REQ_ORD> scmReqOrderGet(Page p);
    List<SCM_IN_ORD_SUB> scmOrderListGet(Page p);
    Message scmOrderAdd(Page p);
    Message scmOrderDel(Page p);
    List<SCM_IN_ORD_SUB> scmOrderSubGet(Page p);
}
