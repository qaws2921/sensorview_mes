package mes.sensorview.mesManager.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {

	@RequestMapping(value="/sysDept")
	public String sysDept(){
		return "mesManager/User/sysDept";
	}


	@RequestMapping(value="/sysUser")
	public String sysUser(){
		return "mesManager/User/sysUser";
	}
	

	@RequestMapping(value="/sysUserSupp")
	public String sysUserSupp(){
		return "mesManager/User/sysUserSupp";
	}

}
