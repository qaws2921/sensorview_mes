package mes.sensorview.mesQms.Standard;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesQms.Standard.QmsStandardMapper;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_DIAMETER;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_ITEM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
@Slf4j
public class QmsStandardService extends ReturnFunction {

    @Autowired
    private QmsStandardMapper qmsStandardMapper;

    public Message qmsQcItemAdd(HttpServletRequest req, SYS_QC_ITEM sysQcItem) {
        sysQcItem.setSite_code(getSessionData(req).getSite_code());
        sysQcItem.setUser_code(getSessionData(req).getUser_code());
        return qmsStandardMapper.getQcItemAdd(sysQcItem);
    }
    public RESTful qmsQcItemGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYS_QC_ITEM> rows = qmsStandardMapper.qmsQcItemGet(p);
        return getListData(rows , p);
    }
    public SYS_QC_ITEM qmsQcItemOneGet(SYS_QC_ITEM sysQcItem, HttpServletRequest req) {
        sysQcItem.setSite_code(getSessionData(req).getSite_code());
        return qmsStandardMapper.qmsQcItemOneGet(sysQcItem);
    }

    public Message qmsQcItemDel(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        p.setUser_code(getSessionData(req).getUser_code());
        return qmsStandardMapper.getQcItemDel(p);
    }

    public RESTful qmsTestStdGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYS_QC_DIAMETER> rows = qmsStandardMapper.qmsTestStdGet(p);
        return getListData(rows, p);
    }

    public Message qmsTestStdAdd(HttpServletRequest req, SYS_QC_DIAMETER vo) {
        vo.setSite_code(getSessionData(req).getSite_code());
        vo.setUser_code(getSessionData(req).getUser_code());
        return qmsStandardMapper.qmsTestStdAdd(vo);
    }
}
