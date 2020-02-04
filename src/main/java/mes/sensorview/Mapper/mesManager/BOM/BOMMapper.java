package mes.sensorview.Mapper.mesManager.BOM;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesManager.BOM.DTO.SYS_COMMON2_CD;
import mes.sensorview.mesManager.BOM.DTO.SYS_PART_CD;
import mes.sensorview.mesManager.BOM.DTO.SYS_PART_GROUP2_CD;
import mes.sensorview.mesManager.BOM.DTO.SYS_PART_NM_CD;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BOMMapper {
    List<SYS_COMMON2_CD> sysPartNameGroupGet(Page p);

    Message sysPartNameGroupAdd(SYS_COMMON2_CD scc);

    SYS_COMMON2_CD sysPartNameGroupOneGet(SYS_COMMON2_CD scc);

    Message sysPartNameGroupDel(SYS_COMMON2_CD scc);

    List<SYS_PART_CD> sysPartGet(Page p);

    SYS_PART_CD sysPartOneGet(Page p);

    Message sysPartAdd(SYS_PART_CD spc);

    Message sysPartDel(SYS_PART_CD spc);

    List<SYS_PART_GROUP2_CD> sysPartNameGroup2Get(Page p);

    SYS_PART_GROUP2_CD sysPartNameGroup2OneGet(Page p);

    Message sysPartNameGroup2Add(SYS_PART_GROUP2_CD spgc);

    Message sysPartNameGroup2Del(SYS_PART_GROUP2_CD spgc);

    List<SYS_PART_NM_CD> sysPartNameGet(Page p);

    Message sysPartNameAdd(SYS_PART_NM_CD spnc);

    SYS_PART_NM_CD sysPartNameOneGet(Page p);
}
