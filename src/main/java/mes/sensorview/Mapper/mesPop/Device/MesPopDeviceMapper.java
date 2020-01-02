package mes.sensorview.Mapper.mesPop.Device;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesPop.Device.DTO.POP_PC_CD;
import mes.sensorview.mesPop.Standard.DTO.POP_BCR_FORM;

import java.util.List;

public interface MesPopDeviceMapper {

    List<POP_PC_CD> popPCGet(Page p);

    Message popPCAdd(POP_PC_CD ppc);

    Message popPCDel(POP_PC_CD ppc);

    POP_PC_CD popPCOneGet(Page p);
}
