package mes.sensorview.Mapper.Auth;

import mes.sensorview.Common.Auth.Auth;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AuthMapper {

    List<Auth> authSubSelect(Session session);
    SYSAuthProgram menuAuth(Page p);
    List<Auth> authMainSelect(Session session);
}
