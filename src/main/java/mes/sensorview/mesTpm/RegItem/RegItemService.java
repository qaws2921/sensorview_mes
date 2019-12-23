package mes.sensorview.mesTpm.RegItem;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesTpm.RegItem.RegitemMapper;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_REG_ITEM_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class RegItemService extends ReturnFunction {
    @Autowired
    private RegitemMapper regitemMapper;

    public RESTful tpmMachineRegItemGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<TPM_REG_ITEM_CD> rows = regitemMapper.tpmMachineRegItemGet(p);
        return getListData(rows , p);
    }
}
