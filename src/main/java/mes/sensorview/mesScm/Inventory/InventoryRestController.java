package mes.sensorview.mesScm.Inventory;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class InventoryRestController {

    @Autowired
    private InventoryService inventoryService;

    @RequestMapping(value = "/scmStockListGet", method = RequestMethod.POST)
    public RESTful scmStockListGet(HttpServletRequest req, Page p) { return inventoryService.scmStockListGet(req, p); }
}
