package mes.sensorview.Mapper.mesSCM.Order;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_ORDER;
import mes.sensorview.mesScm.Order.DTO.SCM_REQ_ORDER;

import java.util.List;

public interface OrderMapper {
    List<SCM_ORDER> scmOrderGet(Page p);

    List<SCM_REQ_ORDER> scmReqOrderGet(Page p);

    List<SCM_IN_ORD_SUB> scmOrderListGet(Page p);
}
