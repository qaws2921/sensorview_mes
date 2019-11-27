package mes.sensorview.Common.Excel.Util;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Mapper.Excel.ExcelMapper;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

@Slf4j
public class MakeBody {

    List<Object> obj = null;
    public List<List<Object>> sysBPart_Body(List<sysBPart> list){
        List<List<Object>> content = new ArrayList<>();
        try{
            if(list.size()!=0){
                for(sysBPart data : list){
                    obj = new ArrayList<>();
                    obj.add(data.getPart_grp_name());
                    obj.add(data.getPart_code());
                    obj.add(data.getPart_name());
                    obj.add(data.getLoc_name());
                    obj.add(data.getSupp_name());
                    obj.add(data.getSpec());
                    obj.add(data.getUnit_name());
                    obj.add(data.getPart_grp_code());
                    obj.add(data.getI_standard_name());
                    obj.add(data.getI_category_name());
                    obj.add(data.getMax_qty());
                    obj.add(data.getMin_qty());
                    obj.add(data.getUser_name());
                    obj.add(data.getPart_code());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }
}
