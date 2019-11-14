package mes.sensorview.Common.Function;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.mesManager.Master.DTO.SYSBoard;
import mes.sensorview.mesManager.Master.DTO.SYSCargo;
import mes.sensorview.mesManager.Master.DTO.SYSMsg;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Field;
import java.util.List;

public class ReturnFunction {
    public int CalcTotalPage(int records, int rows)
    {
        int result = (int)Math.ceil((double)records/(double)rows);
        return result;
    }
    public Session getSessionData(HttpServletRequest req)
    {
        return (Session) req.getSession().getAttribute("userData");
    }

    public RESTful resTfulReurn(List<?> rows , Page p)
    {
        int count=0;
        RESTful resTful = new RESTful();
        try{
            if(rows.size() != 0) {
                for (Field field : rows.get(0).getClass().getDeclaredFields()){
                    field.setAccessible(true);
                    if (field.getName().equals("rec_count")){
                        count = (int) field.get(rows.get(0));
                    }
                }
            }

            resTful.setTotal(CalcTotalPage(p.getPage(),count));
            resTful.setRows(rows);
            resTful.setPage(p.getPage());
            return resTful;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
