package mes.sensorview.Common.Excel.Action;

import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ExcelFunction {
    SXSSFWorkbook sxssfWorkbook = new SXSSFWorkbook(100);
    public String getData(){
        Date now = new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMddss");
        String date = format.format(now);
        return date;
    }
}
