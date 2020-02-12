package mes.sensorview.mesScm.Order;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesSCM.Order.OrderMapper;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_REQ_ORD;
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
        List<SCM_REQ_ORD> rows = orderMapper.scmReqOrderGet(p);
        return getListData(rows, p);
    }

    public RESTful scmOrderGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_IN_ORD> rows = orderMapper.scmOrderGet(p);
        return getListData(rows, p);
    }

    public RESTful scmOrderListGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_IN_ORD_SUB> rows = orderMapper.scmOrderListGet(p);
        return getListData(rows, p);
    }

    public Message scmOrderAdd(HttpServletRequest req, SCM_IN_ORD sio) {
        sio.setSite_code(getSessionData(req).getSite_code());
        sio.setUser_code(getSessionData(req).getUser_code());
        return orderMapper.scmOrderAdd(sio);
    }

    public Message scmOrderDel(HttpServletRequest req, SCM_IN_ORD sio) {
        sio.setSite_code(getSessionData(req).getSite_code());
        return orderMapper.scmOrderDel(sio);
    }


    public RESTful scmOrderSub1Get(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_IN_ORD_SUB> rows = orderMapper.scmOrderSub1Get(p);
        return getListData(rows, p);
    }

    public List<SCM_IN_ORD_SUB> scmOrderSub2Get(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return orderMapper.scmOrderSub1Get(p);
    }

    public Message scmReqOrderAdd(HttpServletRequest req, SCM_REQ_ORD sro) {
        sro.setSite_code(getSessionData(req).getSite_code());
        sro.setUser_code(getSessionData(req).getUser_code());
        return  orderMapper.scmReqOrderAdd(sro);
    }

    public Message scmOrderAdd2(HttpServletRequest req, SCM_IN_ORD sio) {
        sio.setSite_code(getSessionData(req).getSite_code());
        sio.setUser_code(getSessionData(req).getUser_code());
        return orderMapper.scmOrderAdd2(sio);
    }
}
