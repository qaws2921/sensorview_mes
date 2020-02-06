package mes.sensorview.Mapper.mesPop.Pop;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesPop.Pop.DTO.POP_PLAN1_CD;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MesPopPopMapper {
    List<POP_PLAN1_CD> popPlan1Get(Page p);

    Message popPlan1Add(POP_PLAN1_CD pp1c);
}
