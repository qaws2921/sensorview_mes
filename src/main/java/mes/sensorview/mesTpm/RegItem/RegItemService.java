package mes.sensorview.mesTpm.RegItem;

import mes.sensorview.Common.DataTransferObject.Message;
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

    public TPM_REG_ITEM_CD tpmMachineRegItemOneGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return regitemMapper.tpmMachineRegItemOneGet(p);
    }

    public Message tpmMachineRegItemAdd(HttpServletRequest req, TPM_REG_ITEM_CD tric) {
        tric.setSite_code(getSessionData(req).getSite_code());
        tric.setUser_code(getSessionData(req).getUser_code());
        return regitemMapper.tpmMachineRegItemAdd(tric);
    }

    public Message tpmMachineRegItemDel(TPM_REG_ITEM_CD tric, HttpServletRequest req) {
        tric.setSite_code(getSessionData(req).getSite_code());
        return regitemMapper.tpmMachineRegItemDel(tric);
    }
}
