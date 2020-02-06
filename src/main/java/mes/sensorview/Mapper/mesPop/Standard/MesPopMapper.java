package mes.sensorview.Mapper.mesPop.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesPop.Standard.DTO.POP_BCR_FORM;
import mes.sensorview.mesPop.Standard.DTO.POP_LINE_USER_CD;
import mes.sensorview.mesPop.Standard.DTO.POP_ROUTE_CD;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MesPopMapper {
    List<POP_BCR_FORM> popBcrFormGet(Page p);

    POP_BCR_FORM popBcrFormOneGet(POP_BCR_FORM pbf);

    Message popBcrFormAdd(POP_BCR_FORM pbf);

    Message popBcrFormDel(POP_BCR_FORM pbf);

    List<POP_ROUTE_CD> popRouteGet(Page p);

    POP_ROUTE_CD popRouteOneGet(POP_ROUTE_CD pr);

    Message popRouteAdd(POP_ROUTE_CD pr);

    Message popRouteDel(POP_ROUTE_CD pr);


    List<POP_LINE_USER_CD> popLineUserGet(Page p);

    Message popLineUserAdd(POP_LINE_USER_CD pluc);

    Message popLineUserDel(POP_LINE_USER_CD pluc);
}
