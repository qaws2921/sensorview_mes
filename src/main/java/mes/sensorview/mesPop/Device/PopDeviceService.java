package mes.sensorview.mesPop.Device;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesPop.Device.MesPopDeviceMapper;
import mes.sensorview.mesPop.Device.DTO.POP_PC_CD;
import mes.sensorview.mesPop.Standard.DTO.POP_BCR_FORM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class PopDeviceService extends ReturnFunction {
    @Autowired
    private MesPopDeviceMapper mesPopDeviceMapper;

    public RESTful popPCGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<POP_PC_CD> rows = mesPopDeviceMapper.popPCGet(p);
        return getListData(rows, p);
    }

    public Message popPCAdd(HttpServletRequest req, POP_PC_CD ppc) {
        ppc.setSite_code(getSessionData(req).getSite_code());
        ppc.setUser_code(getSessionData(req).getUser_code());
        return mesPopDeviceMapper.popPCAdd(ppc);
    }

    public Message popPCDel(HttpServletRequest req, POP_PC_CD ppc) {
        ppc.setSite_code(getSessionData(req).getSite_code());
        return mesPopDeviceMapper.popPCDel(ppc);
    }

    public POP_PC_CD popPCOneGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return  mesPopDeviceMapper.popPCOneGet(p);
    }
}
