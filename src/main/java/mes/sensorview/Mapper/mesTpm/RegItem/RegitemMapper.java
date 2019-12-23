package mes.sensorview.Mapper.mesTpm.RegItem;


import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_REG_ITEM_CD;

import java.util.List;

public interface RegitemMapper {

    List<TPM_REG_ITEM_CD> tpmMachineRegItemGet(Page p);
}
