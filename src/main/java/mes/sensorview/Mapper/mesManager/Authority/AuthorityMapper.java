package mes.sensorview.Mapper.mesManager.Authority;

import mes.sensorview.Common.Auth.Auth;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesManager.Authority.DTO.SYSAuth;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;

import java.util.List;

public interface AuthorityMapper {
    List<SYSAuth> sysAuthGet(Page p);
    Message sysAuthAU(SYSAuth sysAuth);
    Message sysAuthDelete(Page p);
    List<Page> sysAuthAllGet(Page p);
    List<SYSAuthProgram> sysAuthProgramGet(Page p);
    Message sysAuthProgramAdd(Page p);
    List<Auth> menuAllGet();
}
