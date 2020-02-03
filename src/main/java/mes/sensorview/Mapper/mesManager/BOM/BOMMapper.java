package mes.sensorview.Mapper.mesManager.BOM;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesScm.Standard.DTO.SYS_COMMON2_CD;
import mes.sensorview.mesScm.Standard.DTO.SYS_PART_CD;
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
}
