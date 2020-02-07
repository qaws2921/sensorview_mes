package mes.sensorview.Mapper.mesPop.Pop;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesPop.Pop.DTO.POP_PLAN1_CD;
import mes.sensorview.mesPop.Pop.DTO.POP_PLAN2_CD;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MesPopPopMapper {
    List<POP_PLAN1_CD> popPlan1Get(Page p);

    Message popPlan1Add(POP_PLAN1_CD pp1c);

    Message popPlan2Add2(Page p);

    List<POP_PLAN2_CD> popPlan2Get(Page p);

    POP_PLAN1_CD popPlan1OneGet(POP_PLAN1_CD pp1c);

    Message popPlan1Del(POP_PLAN1_CD pp1c);

    Message popPlan2Add(POP_PLAN2_CD ppc);

    List<POP_PLAN2_CD> popPlan2Get2(Page p);
}
