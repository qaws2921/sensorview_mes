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
import java.io.IOException;
import java.util.List;

@Controller
@Slf4j
public class ExcelController {
    @Autowired
    private ExcelService excelService;

    @RequestMapping(value = "/excel_download")
    public void excel_download(HttpServletResponse response, Excel excel) throws IOException {
        excelService.selectExcelList(response, excel);
    }
}
