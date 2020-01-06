package mes.sensorview.Mapper.mesQms.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_DIAMETER;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_ITEM;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface QmsStandardMapper {

    Message qmsQcItemDel(Page p);
    SYS_QC_ITEM qmsQcItemOneGet(SYS_QC_ITEM sysQcItem);
    List<SYS_QC_ITEM> qmsQcItemGet(Page p);
    Message qmsQcItemAdd(SYS_QC_ITEM sysQcItem);

    List<SYS_QC_DIAMETER> qmsTestStdGet(Page p);

    Message qmsTestStdAdd(SYS_QC_DIAMETER vo);

    SYS_QC_DIAMETER qmsTestStdOneGet(SYS_QC_DIAMETER vo);

    Message qmsTestStdDelete(Page p);
}
