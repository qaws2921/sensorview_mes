package mes.sensorview.Mapper.mesTpm.RegItem;


import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_REG_ITEM_CD;

import java.util.List;

public interface RegitemMapper {

    List<TPM_REG_ITEM_CD> tpmMachineRegItemGet(Page p);

    TPM_REG_ITEM_CD tpmMachineRegItemOneGet(Page p);

    Message tpmMachineRegItemAdd(TPM_REG_ITEM_CD tric);

    Message tpmMachineRegItemDel(TPM_REG_ITEM_CD tric);
}
