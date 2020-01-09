package mes.sensorview.Mapper.mesSCM.Half;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesScm.Half.DTO.SCM_HIN;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HalfMapper {
    List<SCM_HIN> scmHinListGet(Page p);
}
