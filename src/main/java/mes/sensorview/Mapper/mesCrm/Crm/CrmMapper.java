package mes.sensorview.Mapper.mesCrm.Crm;


import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import mes.sensorview.mesCrm.Crm.DTO.CRM_OUT_SUB;
import mes.sensorview.mesCrm.Crm.DTO.CRM_PLAN;
import mes.sensorview.mesCrm.Crm.DTO.SYS_ASSY_CABLE;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CrmMapper {

    List<CRM_ORD_RECP> crmProdOrderGet(Page p);

    CRM_ORD_RECP crmProdOrderOneGet(CRM_ORD_RECP cor);

    Message crmRecpAdd(CRM_ORD_RECP crmOrdRecp);

    List<CRM_ORD_RECP> crmWorkListGet(Page p);

    CRM_ORD_RECP crmWorkListOneGet(CRM_ORD_RECP cor);

    Message crmOrderRecpAdd(CRM_ORD_RECP crmOrdRecp);

    List<CRM_PLAN> crmPlanGet(Page p);

    Message crmPlanAdd(CRM_PLAN cp);

    List<SYS_ASSY_CABLE> crmAssyCableGet(Page p);

    Message crmAssyCableAdd(SYS_ASSY_CABLE sac);

    Message crmAssyCableDel(SYS_ASSY_CABLE sac);

    List<CRM_OUT_SUB> crmOutListGet(Page p);
}
