package mes.sensorview.Mapper.mesManager.User;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.mesManager.User.DTO.SYSDept;
import mes.sensorview.mesManager.User.DTO.SYSUser;
import mes.sensorview.mesManager.User.DTO.SYSUserSupp;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserMapper {
    Session loginAction(Session session);
    List<SYSDept> sysDeptGet(Page p);
    Message sysDeptAdd(SYSDept sdv);
    List<SYSUser> sysUserGet(Page p);
    List<SYSDept> sysDeptAllGet(Page p);
    Message sysUserAdd(SYSUser suv);
    List<SYSUserSupp> sysUserSuppGet(Page p);
    Message sysUserSuppAdd(SYSUserSupp susv);
    Message sysUserDelete(Page p);
    Message sysDeptDelete(Page p);
    Message sysUserSuppDelete(Page p);
    SYSUser sysUserOneGet(SYSUser su);

    SYSDept sysDeptOneGet(Page p);

    SYSUserSupp sysUserSuppOneGet(Page p);
}
