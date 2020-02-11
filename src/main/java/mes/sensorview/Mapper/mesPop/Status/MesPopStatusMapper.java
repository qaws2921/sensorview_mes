package mes.sensorview.Mapper.mesPop.Status;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesPop.PopStatus.DTO.POP_PLAN_ORD_CD;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MesPopStatusMapper {
    List<POP_PLAN_ORD_CD> popPlanOrderGet(Page p);

    List<POP_PLAN_ORD_CD> popPlanOrderOrd(Page p);
}
