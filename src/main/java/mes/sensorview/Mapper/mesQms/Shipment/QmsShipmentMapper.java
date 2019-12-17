package mes.sensorview.Mapper.mesQms.Shipment;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD_SUB;

import java.util.List;

public interface QmsShipmentMapper {
    List<QMS_PROD_SUB> qmsProdErrorManGet(Page p);

    List<QMS_PROD> qmsProdGet(Page p);

    List<QMS_PROD_SUB> qmsProdSubGet(Page p);

    QMS_PROD_SUB qmsProdErrorManOneGet(QMS_PROD_SUB qmsProdSub);

    List<QMS_PROD_SUB> qmsProdMRBGet(Page p);

    Message qmsProdMRBAdd(QMS_PROD_SUB qps);

    Message qmsProdMRBCancel(QMS_PROD_SUB qps);

    Message qmsProdAdd(QMS_PROD_SUB qps);
}
