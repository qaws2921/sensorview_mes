package mes.sensorview.Mapper.mesPop.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesPop.Standard.DTO.POP_BCR_FORM;
import mes.sensorview.mesPop.Standard.DTO.POP_ROUTE_CD;
import mes.sensorview.mesPop.Standard.DTO.POP_TERMINAL_CD;
import mes.sensorview.mesPop.Standard.DTO.POP_TERMINAL_SUB;

import java.util.List;

public interface MesPopMapper {
    List<POP_BCR_FORM> popBcrFormGet(Page p);

    POP_BCR_FORM popBcrFormOneGet(POP_BCR_FORM pbf);

    Message popBcrFormAdd(POP_BCR_FORM pbf);

    Message popBcrFormDel(POP_BCR_FORM pbf);

    List<POP_ROUTE_CD> popRouteGet(Page p);

    POP_ROUTE_CD popRouteOneGet(POP_ROUTE_CD pr);

    Message popRouteAdd(POP_ROUTE_CD pr);

    Message popRouteDel(POP_ROUTE_CD pr);
    
    List<POP_TERMINAL_CD> popTerminalGet(Page p);

    POP_TERMINAL_CD popTerminalOneGet(Page p);

    Message popTerminalAdd(POP_TERMINAL_CD ptc);

    Message popTerminalDel(POP_TERMINAL_CD ptc);

    List<POP_TERMINAL_SUB> popTerminalSubGet(Page p);

    Message popTerminalSubAdd(POP_TERMINAL_SUB pts);

    Message popTerminalSubDel(POP_TERMINAL_SUB pts);
}
