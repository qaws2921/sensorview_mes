package mes.sensorview.Mapper.mesCrm.CRM;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;

public interface CrmMapper {
    Message crmRecpAdd(CRM_ORD_RECP crmOrdRecp);
}
