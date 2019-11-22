package mes.sensorview.Mapper.mesSCM.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;
import java.util.List;

public interface ScmStandardMapper {
    List<sysBPartGroup> sysBPartGroupGet(Page p);
    Message sysBPartGroupDelete(Page p);
    Message sysBPartGroupAdd(sysBPartGroup vo);
    List<sysLoc> sysLocGet(Page p);
    Message sysLocAdd(sysLoc vo);
    Message sysLocDelete(Page p);
    List<PartType> getPartType(String site_code);

    sysLoc sysLocOneGet(Page p);

    sysBPartGroup sysBPartGroupOneGet(Page p);

    List<sysBPart> sysBPartGet(Page p);
    Message sysBPartDelete(Page p);
    sysBPart sysBPartOneGet(Page p);

    Message sysBPartAdd(sysBPart vo);
}
