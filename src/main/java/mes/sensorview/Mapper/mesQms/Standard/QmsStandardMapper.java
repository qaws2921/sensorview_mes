package mes.sensorview.Mapper.mesQms.Standard;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;

import java.util.List;

public interface QmsStandardMapper {
    List<sysBPartGroup> qmsBPartGroupGet(Page p);
}
