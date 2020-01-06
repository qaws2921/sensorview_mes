package mes.sensorview.Mapper.mesPop.Device;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesPop.Device.DTO.POP_PC_CD;
import mes.sensorview.mesPop.Standard.DTO.POP_TERMINAL_CD;
import mes.sensorview.mesPop.Standard.DTO.POP_TERMINAL_SUB;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MesPopDeviceMapper {

    List<POP_PC_CD> popPCGet(Page p);

    Message popPCAdd(POP_PC_CD ppc);

    Message popPCDel(POP_PC_CD ppc);

    POP_PC_CD popPCOneGet(Page p);

    List<POP_TERMINAL_CD> popTerminalGet(Page p);

    POP_TERMINAL_CD popTerminalOneGet(Page p);

    Message popTerminalAdd(POP_TERMINAL_CD ptc);

    Message popTerminalDel(POP_TERMINAL_CD ptc);

    List<POP_TERMINAL_SUB> popTerminalSubGet(Page p);

    Message popTerminalSubAdd(POP_TERMINAL_SUB pts);

    Message popTerminalSubDel(POP_TERMINAL_SUB pts);
}
