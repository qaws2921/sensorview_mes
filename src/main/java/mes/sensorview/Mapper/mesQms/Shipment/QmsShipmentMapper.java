package mes.sensorview.Mapper.mesQms.Shipment;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD_SUB;

import java.util.List;

public interface QmsShipmentMapper {
    List<QMS_PROD_SUB> qmsProdErrorManGet(Page p);

    List<QMS_PROD> qmsProdGet(Page p);

    List<QMS_PROD_SUB> qmsProdSubGet(Page p);
}
