package mes.sensorview.Common.Auth;

import mes.sensorview.Mapper.Auth.Auth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private Auth auth;
}
