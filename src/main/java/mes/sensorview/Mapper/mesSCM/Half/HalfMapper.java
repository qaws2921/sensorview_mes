package mes.sensorview.Mapper.mesSCM.Half;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesScm.Half.DTO.SCM_HIN;
import mes.sensorview.mesScm.Half.DTO.SCM_HOUT_SUB;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HalfMapper {
    List<SCM_HIN> scmHInListGet(Page p);

    List<SCM_HOUT_SUB> scmHOutListGet(Page p);
}
