package mes.sensorview.Mapper.mesSCM.Inventory;

import mes.sensorview.Common.DataTransferObject.Page;

import java.util.List;

public interface InventoryMapper {
    List scmStockListGet(Page p);
}
