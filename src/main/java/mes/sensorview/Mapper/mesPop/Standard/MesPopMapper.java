package mes.sensorview.Mapper.mesPop.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesPop.Standard.DTO.POP_BCR_FORM;

import java.util.List;

public interface MesPopMapper {
    List<POP_BCR_FORM> popBcrFormGet(Page p);

    POP_BCR_FORM popBcrFormOneGet(POP_BCR_FORM pbf);

    Message popBcrFormAdd(POP_BCR_FORM pbf);
}
