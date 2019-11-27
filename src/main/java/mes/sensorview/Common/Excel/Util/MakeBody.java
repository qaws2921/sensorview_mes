package mes.sensorview.Common.Excel.Util;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import java.util.ArrayList;
import java.util.List;

/** *
 * <pre>
 *     MakeBody
 *     셀 데이터를 생성하는 클래스
 * </pre>
 * @author 김재일
 * @since 2019-11-27
 * @version 1.0
 * **/
@Slf4j
public class MakeBody {
    // 전역변수 선언
    List<Object> obj = null;

    // sysBPart 데이터 생성 함수
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
                    obj.add(data.getUpdate_date());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }
}
