package mes.sensorview.Mapper.Auth;

import mes.sensorview.Common.Auth.AuthDTO;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.mesAdmin.Authority.SysAuthProgram;

import java.util.List;

public interface Auth {
    List<AuthDTO> authSubSelect(Session lv);
    SysAuthProgram menuAuth(Page p);
    List<AuthDTO> authMainSelect(Session lv);
}
