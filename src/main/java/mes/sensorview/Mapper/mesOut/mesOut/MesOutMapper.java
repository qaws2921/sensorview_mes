package mes.sensorview.Mapper.mesOut.mesOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.File.DTO.Files;
import mes.sensorview.mesOut.mesOut.DTO.OUTS_IN_SUB;
import mes.sensorview.mesOut.mesOut.DTO.OUTS_OUT_BCR;
import mes.sensorview.mesOut.mesOut.DTO.OUTS_OUT_SUB;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV_SUB;

import java.util.List;

public interface    MesOutMapper {

    List<OUTS_OUT_SUB> outsOutListGet(Page p);

    List<OUTS_IN_SUB> outsInListGet(Page p);

    List<OUTS_OUT_BCR> outsInReadyGet(Page p);
}
