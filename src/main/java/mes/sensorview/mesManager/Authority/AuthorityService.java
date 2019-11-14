package mes.sensorview.mesManager.Authority;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Auth.Auth;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesManager.Authority.AuthorityMapper;
import mes.sensorview.mesManager.Authority.DTO.SYSAuth;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
@Slf4j
public class AuthorityService extends ReturnFunction {
    
    @Autowired
    private AuthorityMapper authorityMapper;
    
    
    public RESTful sysAuthGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYSAuth> rows = authorityMapper.sysAuthGet(p);
        return getListData(rows , p);
    }
    public List<Auth> menuAllGet(){
        return authorityMapper.menuAllGet();
    }

    public Message sysAuthAU(HttpServletRequest req, SYSAuth sysAuth){
        sysAuth.setUser_code(getSessionData(req).getUser_code());
        sysAuth.setSite_code(getSessionData(req).getSite_code());
        return authorityMapper.sysAuthAU(sysAuth);
    }
    
    public Message sysAuthDelete(Page p , HttpServletRequest req){

        p.setSite_code(getSessionData(req).getSite_code());
        p.setKeyword(p.getKeyword());
        return authorityMapper.sysAuthDelete(p);
    }
    
    public List<Page> sysAuthAllGet(HttpServletRequest req) {
        Page p = new Page();
        p.setSite_code(getSessionData(req).getSite_code());
        return authorityMapper.sysAuthAllGet(p);
    }
    
    public List<SYSAuthProgram> sysAuthProgramGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYSAuthProgram> list=authorityMapper.sysAuthProgramGet(p);
        for (SYSAuthProgram sysAuthProgram : list) {
            if (sysAuthProgram.getLevel() == 1) {
                sysAuthProgram.setLeaf(false);
                sysAuthProgram.setExpanded(true);
            }else if (sysAuthProgram.getLevel() == 2) {
                sysAuthProgram.setLeaf(false);
                sysAuthProgram.setExpanded(true);
            }else {
                sysAuthProgram.setLeaf(true);
                sysAuthProgram.setExpanded(false);
            }
            sysAuthProgram.setAuth_code(p.getKeyword());
        }
        return list;
    }

    
    public Message sysAuthProgramAdd(HttpServletRequest req, List<SYSAuthProgram> checkList){
        Page p = new Page();
        p.setSite_code(getSessionData(req).getSite_code());
        p.setKeyword(checkList.get(0).getAuth_code());
        String keyword2 = "";
        int index = 0;
        for (SYSAuthProgram svl : checkList) {
            if (index == 0) {
                keyword2 = svl.getMenu_code()+"/"+svl.getCheck_get()+"/"+svl.getCheck_add()+"/"+svl.getCheck_edit()+"/"+svl.getCheck_del();
            }else{
                keyword2 = keyword2+","+svl.getMenu_code()+"/"+svl.getCheck_get()+"/"+svl.getCheck_add()+"/"+svl.getCheck_edit()+"/"+svl.getCheck_del();
            }
            ++index;
        }
        p.setKeyword2(keyword2);
        return authorityMapper.sysAuthProgramAdd(p);
    }
}
