package mes.sensorview.Mapper.Various;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.Various.DTO.SYSSupp;

import java.util.List;

public interface VariousMapper {
    List<SYSSupp> sysSuppGet(Page p);
}
