package mes.sensorview.mesScm.Order;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesSCM.Order.OrderMapper;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_ORDER;
import mes.sensorview.mesScm.Order.DTO.SCM_REQ_ORDER;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class OrderService extends ReturnFunction {
    @Autowired
    private OrderMapper orderMapper;

    public RESTful scmReqOrderGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_REQ_ORDER> rows = orderMapper.scmReqOrderGet(p);
        return getListData(rows , p);

    }

    public RESTful scmOrderGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_ORDER> rows = orderMapper.scmOrderGet(p);
        return getListData(rows , p);
    }

    public RESTful scmOrderListGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_IN_ORD_SUB> rows = orderMapper.scmOrderListGet(p);
        return getListData(rows , p);
    }
}
