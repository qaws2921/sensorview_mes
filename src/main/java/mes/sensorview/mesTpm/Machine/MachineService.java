package mes.sensorview.mesTpm.Machine;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.File.Function.UploadFunction;
import mes.sensorview.Mapper.mesTpm.Machine.MachineMapper;
import mes.sensorview.mesTpm.Machine.DTO.TPM_MACHINE_CD;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_REG_ITEM_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class MachineService   extends UploadFunction {
    @Autowired
    private MachineMapper machineMapper;

    public RESTful tpmMCGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<TPM_MACHINE_CD> rows = machineMapper.tpmMCGet(p);
        return getListData(rows , p);
    }
}
