package mes.sensorview.Common.Excel.Util;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Mapper.Excel.ExcelMapper;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

@Slf4j
public class MakeBody {

    @Autowired
    private ExcelMapper excelMapper;
    public List<Object> sysBPart_Body(){
        List<Object> obj = null;
        List<sysBPart> list = excelMapper.testDbList();
        log.info("d"+list.size());
        log.info("msg : "+list.get(0));
        log.info("msg : "+list.get(1));
        if(list.size()!=0){
            for(sysBPart data : list){
                obj = new ArrayList<>();
                obj.add(data.getPart_code());
                obj.add(data.getPart_code());
                obj.add(data.getPart_code());
                obj.add(data.getPart_code());
                obj.add(data.getPart_code());
                obj.add(data.getPart_code());
                obj.add(data.getPart_code());
            }
        }else{
            try {
                obj = new ArrayList<>();
                obj.add("목록 생성 실패");
                log.info("목록 생성 실패");
            }catch (Exception e){
                log.info("error code : "+ e);
            }
        }
        return obj;
    }
}
