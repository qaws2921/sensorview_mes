package mes.sensorview.mesTpm.Machine;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.File.DTO.Files;
import mes.sensorview.Common.File.Function.UploadFunction;
import mes.sensorview.Mapper.mesTpm.Machine.MachineMapper;
import mes.sensorview.mesTpm.Machine.DTO.TPM_MACHINE_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class MachineService   extends UploadFunction {
    @Autowired
    private MachineMapper machineMapper;

    public RESTful tpmMCGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<TPM_MACHINE_CD> rows = machineMapper.tpmMCGet(p);
        return getListData(rows , p);
    }

    public Message tpmMCAdd(MultipartHttpServletRequest req, TPM_MACHINE_CD tmc) {
        tmc.setSite_code(getSessionData(req).getSite_code());
        tmc.setUser_code(getSessionData(req).getUser_code());




        int check1 = Integer.parseInt(req.getParameter("check1"));
        int check2 = Integer.parseInt(req.getParameter("check2"));
        int check3 = Integer.parseInt(req.getParameter("check2"));

        Message m = machineMapper.tpmMCAdd(tmc);
        if (tmc.getKeyword().equals("I")) {
            if (m.getResult().equals("OK")){
                if (check1 == 1) {
                    tmc.setImage1(tpmMCFileAdd(tmc.getMachine_code(), req, 1));
                } else {
                    tmc.setImage1("");
                }

                if (check2 == 1) {
                    tmc.setImage2(tpmMCFileAdd(tmc.getMachine_code(), req, 2));
                } else {
                    tmc.setImage2("");
                }

                if (check3 == 1) {
                    tmc.setImage3(tpmMCFileAdd(tmc.getMachine_code(), req, 3));
                } else {
                    tmc.setImage3("");
                }

            } else {
                tmc.setImage1("");
                tmc.setImage2("");
                tmc.setImage3("");
            }
        }else {
            if (m.getResult().equals("OK")) {
                TPM_MACHINE_CD tmc2 = machineMapper.tpmMCOneGet(tmc);
                TPM_MACHINE_CD tmc3 = new TPM_MACHINE_CD();
                if (check1 == 1) {
                    tmc3.setImage1(tpmMCFileAdd(tmc2.getMachine_code(), req, 1));
                    // 삭제 메소드
                }

                if (check2 == 1) {
                    tmc3.setImage2(tpmMCFileAdd(tmc2.getMachine_code(), req, 2));
                    // 삭제 메소드
                }

                if (check3 == 1) {
                    tmc3.setImage3(tpmMCFileAdd(tmc2.getMachine_code(), req, 3));
                    // 삭제 메소드
                }


                // 삭제 키워드 메소드
                if (check1 == 1) {
                    tmc2.setImage1("");
                }
                if (check2 == 1) {
                    tmc2.setImage2("");
                }
                if (check3 == 1) {
                    tmc2.setImage3("");
                }


                if (check1 == 1) {
                    tmc2.setImage1(tmc3.getImage1());
                }
                if (check2 == 1) {
                    tmc2.setImage2(tmc3.getImage2());
                }
                if (check3 == 1) {
                    tmc2.setImage3(tmc3.getImage3());
                }
                return machineMapper.tpmMCFileAdd(tmc2);
            }else {
                return m;
            }
        }
        return machineMapper.tpmMCFileAdd(tmc);





    }

    public TPM_MACHINE_CD tpmMCOneGet(HttpServletRequest req, TPM_MACHINE_CD tmc) {
        tmc.setSite_code(getSessionData(req).getSite_code());
        return machineMapper.tpmMCOneGet(tmc);
    }
}
