package mes.sensorview.Mapper.mesSCM.Standard;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.PartType;
import mes.sensorview.mesScm.Standard.DTO.*;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
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

    List<SYS_PART_GROUP> sysPartGroupGet(Page p);

    SYS_PART_GROUP sysPartGroupOneGet(SYS_PART_GROUP spg);

    Message sysPartGroupAdd(SYS_PART_GROUP spg);

    Message sysPartGroupDel(SYS_PART_GROUP spg);

    List<SYS_PART_CD> sysPartGet(Page p);

    SYS_PART_CD sysPartOneGet(Page p);

    Message sysPartAdd(SYS_PART_CD spc);

    Message sysPartDel(SYS_PART_CD spc);

    List<SYS_PART_CD> sysPartSuppGet(Page p);

    List<SYS_PART_PRICE> sysPartPriceGet(Page p);

    Message sysPartPriceAdd(SYS_PART_PRICE spp);

    Message sysPartPriceDel(SYS_PART_PRICE spp);

    SYS_PART_PRICE sysPartPriceOneGet(SYS_PART_PRICE spp);

    List<SYS_COMMON2_CD> sysPartNameGroupGet(Page p);

    SYS_COMMON2_CD sysPartNameGroupOneGet(SYS_COMMON2_CD scc);

    Message sysPartNameGroupAdd(SYS_COMMON2_CD scc);

    Message sysPartNameGroupDel(SYS_COMMON2_CD scc);

    List<SYS_COMMON2_CD> sysCommon2AllGet(Page p);
}
