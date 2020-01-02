package mes.sensorview.mesWms.Stock;


import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesWms.Stock.WmsStockMapper;
import mes.sensorview.mesWms.Stock.DTO.WMS_STOCK;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class WmsStockService extends ReturnFunction {
    @Autowired
    private WmsStockMapper wmsStockMapper;

    public RESTful wmsStockListGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<WMS_STOCK> rows = wmsStockMapper.wmsStockListGet(p);
        return getListData(rows, p);
    }

    public RESTful wmsStockSumDayListGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<WMS_STOCK> rows = wmsStockMapper.wmsStockSumDayListGet(p);
        return getListData(rows, p);
    }

    public RESTful wmsStockSumMonthListGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<WMS_STOCK> rows = wmsStockMapper.wmsStockSumMonthListGet(p);
        return getListData(rows, p);
    }
}
