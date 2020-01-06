package mes.sensorview.Mapper.mesWms.Stock;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesWms.Stock.DTO.WMS_STOCK;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface WmsStockMapper {
    List<WMS_STOCK> wmsStockListGet(Page p);

    List<WMS_STOCK> wmsStockSumDayListGet(Page p);

    List<WMS_STOCK> wmsStockSumMonthListGet(Page p);
}
