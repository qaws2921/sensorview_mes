package mes.sensorview.Common.Excel;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Excel.DTO.Excel;
import mes.sensorview.Common.Excel.Util.MakeBody;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
@Slf4j
public class ExcelController {
    @Autowired
    private ExcelService excelService;

    @RequestMapping(value = "/excelDownTest", method = RequestMethod.POST)
    public void excelDownTest(HttpServletResponse response, Excel excel){
        excelService.selectExcelList(response, excel);
    }

    @RequestMapping(value = "/ExcelDownLoad")
    public void scmIn_ExcelDownLoad(HttpServletResponse response, Excel excel){
        MakeBody makeBody = new MakeBody();
        List<Object> data = makeBody.sysBPart_Body();
        log.info("=========== "+data.get(0));
        excelService.selectExcelList(response, excel);
    }
}
