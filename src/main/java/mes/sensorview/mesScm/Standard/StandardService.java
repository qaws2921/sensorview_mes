package mes.sensorview.mesScm.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesSCM.Standard.ScmStandardMapper;
import mes.sensorview.mesScm.Standard.DTO.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class StandardService extends ReturnFunction {
    @Autowired
    private ScmStandardMapper scmStandardMapper;

    public RESTful sysBPartGroupGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<sysBPartGroup> rows = scmStandardMapper.sysBPartGroupGet(p);
        return getListData(rows , p);
    }


    public Message sysBPartGroupAdd(HttpServletRequest req, sysBPartGroup vo) {
        vo.setSite_code(getSessionData(req).getSite_code());
        vo.setUser_code(getSessionData(req).getUser_code());
        return scmStandardMapper.sysBPartGroupAdd(vo);
    }

    public Message sysBPartGroupDelete(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysBPartGroupDelete(p);
    }

    public RESTful sysLocGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<sysLoc> rows = scmStandardMapper.sysLocGet(p);
        return getListData(rows , p);
    }

    public Message sysLocAdd(HttpServletRequest req, sysLoc vo) {
        vo.setSite_code(getSessionData(req).getSite_code());
        vo.setUser_code(getSessionData(req).getUser_code());
        return scmStandardMapper.sysLocAdd(vo);
    }

    public Message sysLocDelete(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        p.setKeyword(p.getKeyword());
        return scmStandardMapper.sysLocDelete(p);
    }

    public List<PartType> getPartType(HttpServletRequest req) {
        return scmStandardMapper.getPartType(getSessionData(req).getSite_code());
    }

    public sysLoc sysLocOneGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysLocOneGet(p);
    }

    public sysBPartGroup sysBPartGroupOneGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysBPartGroupOneGet(p);
    }

    public RESTful sysBPartGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<sysBPart> rows = scmStandardMapper.sysBPartGet(p);
        return getListData(rows , p);
    }

    public sysBPart sysBPartOneGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        sysBPart rows = scmStandardMapper.sysBPartOneGet(p);
        return rows;
    }

    public Message sysBPartDelete(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysBPartDelete(p);
    }

    public Message sysBPartAdd(HttpServletRequest req, sysBPart vo) {
        vo.setSite_code(getSessionData(req).getSite_code());
        vo.setUser_code(getSessionData(req).getUser_code());
        return scmStandardMapper.sysBPartAdd(vo);
    }

    public List<sysLoc> sysLocAllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysLocGet(p);
    }

    public RESTful sysPartGroupGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYS_PART_GROUP> rows = scmStandardMapper.sysPartGroupGet(p);
        return getListData(rows , p);
    }

    public SYS_PART_GROUP sysPartGroupOneGet(HttpServletRequest req, SYS_PART_GROUP spg) {
        spg.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysPartGroupOneGet(spg);
    }

    public Message sysPartGroupAdd(HttpServletRequest req, SYS_PART_GROUP spg) {
        spg.setSite_code(getSessionData(req).getSite_code());
        spg.setUser_code(getSessionData(req).getUser_code());
        return scmStandardMapper.sysPartGroupAdd(spg);
    }

    public Message sysPartGroupDel(HttpServletRequest req, SYS_PART_GROUP spg) {
        spg.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysPartGroupDel(spg);
    }

    public RESTful sysPartSuppGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYS_PART_CD> rows = scmStandardMapper.sysPartSuppGet(p);
        return getListData(rows , p);
    }

    public RESTful sysPartPriceGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYS_PART_PRICE> rows = scmStandardMapper.sysPartPriceGet(p);
        return getListData(rows , p);
    }

    public Message sysPartPriceAdd(HttpServletRequest req, SYS_PART_PRICE spp) {
        spp.setSite_code(getSessionData(req).getSite_code());
        spp.setUser_code(getSessionData(req).getUser_code());
        return scmStandardMapper.sysPartPriceAdd(spp);
    }

    public Message sysPartPriceDel(HttpServletRequest req, SYS_PART_PRICE spp) {
        spp.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysPartPriceDel(spp);
    }

    public SYS_PART_PRICE sysPartPriceOneGet(HttpServletRequest req, SYS_PART_PRICE spp) {
        spp.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysPartPriceOneGet(spp);
    }



    public List<SYS_COMMON2_CD> sysCommon2AllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysCommon2AllGet(p);

    }

    public Message sysPartNameGroupSubAdd(HttpServletRequest req, SYS_COMMON2_CD scc) {
        scc.setSite_code(getSessionData(req).getSite_code());
        scc.setUser_code(getSessionData(req).getUser_code());
        return scmStandardMapper.sysPartNameGroupSubAdd(scc);
    }

    public SYS_COMMON2_CD sysPartNameGroupSubOneGet(HttpServletRequest req, SYS_COMMON2_CD scc) {
        scc.setSite_code(getSessionData(req).getSite_code());
        return scmStandardMapper.sysPartNameGroupSubOneGet(scc);
    }
}
