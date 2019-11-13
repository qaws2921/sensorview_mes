package mes.sensorview.Mapper.Auth;

import mes.sensorview.Common.Auth.Auth;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.mesManager.Authority.SysAuthProgram;

import java.util.List;

public interface AuthMapper {
    List<Auth> authSubSelect(Session session);
    SysAuthProgram menuAuth(Page p);
    List<Auth> authMainSelect(Session session);
}
