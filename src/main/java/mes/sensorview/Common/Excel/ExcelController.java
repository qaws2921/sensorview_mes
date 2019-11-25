package mes.sensorview.Common.Excel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import javax.servlet.http.HttpServletResponse;

@Controller
public class ExcelController {
    @Autowired
    private ExcelService excelService;

    @RequestMapping(value = "/excelDown", method = RequestMethod.POST)
    public void ExcelDown(HttpServletResponse response){
        excelService.getExcelDown(response);
    }

    @RequestMapping(value = "/excelDownTest", method = RequestMethod.GET)
    public void excelDownTest(HttpServletResponse response){
        excelService.selectExcelList(response);
    }
}
