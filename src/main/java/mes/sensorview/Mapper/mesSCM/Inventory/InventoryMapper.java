package mes.sensorview.Mapper.mesSCM.Inventory;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesScm.Inventory.DTO.SCM_STOCK_LIST;
import mes.sensorview.mesScm.Inventory.DTO.SCM_STOCK_SUM_DAY;
import mes.sensorview.mesScm.Inventory.DTO.SCM_STOCK_SUM_MONTH;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface InventoryMapper {

    List<SCM_STOCK_LIST> scmStockListGet(Page p);

    List<SCM_STOCK_SUM_DAY> scmStockSumDayListGet(Page p);

    List<SCM_STOCK_SUM_MONTH> scmStockSumMonthListGet(Page p);
}
