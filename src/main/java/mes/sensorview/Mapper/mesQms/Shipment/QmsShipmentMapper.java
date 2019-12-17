package mes.sensorview.Mapper.mesQms.Shipment;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.File.DTO.Files;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD_RPT;
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

    List<QMS_PROD_SUB> qmsProdListGet(Page p);

    List<QMS_PROD_RPT> qmsProdListRPTGet(Page p);

    void qmsProdErrorManAdd_NoneFile(Files files);

    void qmsProdErrorManAdd_File2(Files files);

    void qmsProdErrorManAdd_File3(Files files);

    void qmsProdErrorManAdd_AllFile(Files newFiles);
}
