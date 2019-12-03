package mes.sensorview.Mapper.mesCrm.CRM;


import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;

import java.util.List;

public interface CrmMapper {

    List<CRM_ORD_RECP> crmProdOrderGet(Page p);

    CRM_ORD_RECP crmProdOrderOneGet(CRM_ORD_RECP cor);

    Message crmRecpAdd(CRM_ORD_RECP crmOrdRecp);
}
