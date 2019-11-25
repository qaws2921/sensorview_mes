package mes.sensorview.Common.Excel.Action;

import java.text.SimpleDateFormat;
import java.util.Date;

public class ExcelFunction {
    public String getData(){
        Date now = new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMddss");
        String date = format.format(now);
        return date;
    }
}
