package mes.sensorview.Mapper.User;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.mesManager.User.DTO.SYSDept;
import mes.sensorview.mesManager.User.DTO.SYSUser;
import mes.sensorview.mesManager.User.DTO.SYSUserSupp;

import java.util.List;

public interface UserMapper {
    Session loginAction(Session session);

    List<SYSDept> sysDeptGet(Page p);

    Message sysDeptAdd(SYSDept sdv);

    List<SYSUser> sysUserGet(Page p);

    List<SYSDept> sysDeptAllGet(Page p);

    Message sysUserAdd(SYSUser suv);

    List<SYSUserSupp> sysUserSuppGet(Page p);

    Message sysUserSuppAdd(SYSUserSupp susv);
}
