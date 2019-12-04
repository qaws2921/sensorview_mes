package mes.sensorview.Mapper.mesQms.Standard;

import mes.sensorview.Common.DataTransferObject.PartType;

import java.util.List;

public interface QmsStandardMapper {
    List<PartType> getSPartType(String site_code);
}
