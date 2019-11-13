package mes.sensorview.Common.Function;

import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.mesManager.Master.DTO.SYSBoard;
import mes.sensorview.mesManager.Master.DTO.SYSCargo;
import mes.sensorview.mesManager.Master.DTO.SYSMsg;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public class ReturnFunction {
    public int CalcTotalPage(int records, int rows)
    {
        int result = (int)Math.ceil((double)records/(double)rows);
        return result;
    }
    public Session getSiteCode(HttpServletRequest req)
    {
        return (Session) req.getSession().getAttribute("userData");
    }

    
}
