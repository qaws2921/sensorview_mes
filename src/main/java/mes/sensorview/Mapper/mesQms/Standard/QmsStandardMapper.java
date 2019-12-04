package mes.sensorview.Mapper.mesQms.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_DIAMETER;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_ITEM;

import java.util.List;

public interface QmsStandardMapper {

    Message getQcItemDel(Page p);
    SYS_QC_ITEM qmsQcItemOneGet(SYS_QC_ITEM sysQcItem);
    RESTful qmsQcItemGet(Page p);
    Message getQcItemAdd(SYS_QC_ITEM sysQcItem);

    List<SYS_QC_DIAMETER> qmsTestStdGet(Page p);
}
