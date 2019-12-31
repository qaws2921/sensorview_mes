package mes.sensorview.Mapper.mesWms.InOut;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesWms.InOut.DTO.WMS_IN_SUB;
import mes.sensorview.mesWms.InOut.DTO.WMS_OUT_ORD;
import mes.sensorview.mesWms.InOut.DTO.WMS_OUT_ORD_SUB;
import mes.sensorview.mesWms.InOut.DTO.WMS_OUT_SUB;

import java.util.List;

public interface WmsInOutMapper {

    List<WMS_IN_SUB> wmsInListGet(Page p);

    List<WMS_OUT_SUB> wmsOutListGet(Page p);

    List<WMS_OUT_ORD_SUB> wmsOutReadyGet(Page p);

    List<WMS_OUT_ORD> wmsOutOrderGet(Page p);

    List<WMS_OUT_ORD_SUB> wmsOutOrderSubGet(Page p);
}
