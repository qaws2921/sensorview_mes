package mes.sensorview.mesTpm.Error;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.File.Function.UploadFunction;
import mes.sensorview.Mapper.mesTpm.Error.ErrorMapper;
import mes.sensorview.mesTpm.Error.DTO.tpmMachineError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
@Slf4j
public class MachineErrorService extends UploadFunction {

    @Autowired
    private ErrorMapper errorMapper;

    public RESTful tpmMachineErrorGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<tpmMachineError> rows = errorMapper.tpmMachineErrorGet(p);
        return getListData(rows, p);
    }

    public Message tpmMachineErrorDelete(Page p) {
        p.setKeyword(p.getKeyword());
        return errorMapper.tpmMachineErrorDelete(p);
    }
}
