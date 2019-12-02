package mes.sensorview.mesScm.Inventory;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesSCM.Inventory.InventoryMapper;
import mes.sensorview.mesScm.Inventory.DTO.SCM_STOCK_LIST;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class InventoryService extends ReturnFunction {

    @Autowired
    private InventoryMapper inventoryMapper;

    public RESTful scmStockListGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SCM_STOCK_LIST> rows = inventoryMapper.scmStockListGet(p);
        return getListData(rows, p);
    }
}
