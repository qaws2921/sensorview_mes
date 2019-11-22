package mes.sensorview.Mapper.Various;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.Various.DTO.SYSSupp;
import mes.sensorview.mesManager.Master.DTO.SYSCommon;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;

import java.util.List;

public interface VariousMapper {
    List<SYSSupp> sysSuppGet(Page p);

    List<sysBPartGroup> sysBPartGroupSelectGet(Page p);

    List<sysLoc> sysLocAllGet(Page p);

    List<SYSCommon> sysCommonUnitGet(Page p);
}
