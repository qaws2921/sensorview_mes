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
    public  String deleteMsg(List<SYSMsg> checkList)
    {
        String keyword = "";
        for (int i = 0; i < checkList.size(); i++) {
            if (i == 0) {
                keyword = checkList.get(i).getMsg_code();
            }else {
                keyword = keyword+","+ checkList.get(i).getMsg_code();
            }
        }
        return keyword;
    }
    // 게싶ㄴ
    public  String deleteBoard(List<SYSBoard> checkList)
    {
        String keyword = "";
        for (int i = 0; i < checkList.size(); i++) {
            if (i == 0) {
                keyword = checkList.get(i).getBoard_code();
            }else {
                keyword = keyword+","+ checkList.get(i).getBoard_code();
            }
        }
        return keyword;
    }
    public  String deleteProdLine(List<SYSProdLine> checkList)
    {
        String keyword = "";
        for (int i = 0; i < checkList.size(); i++) {
            if (i == 0) {
                keyword = checkList.get(i).getLine_code();
            }else {
                keyword = keyword+","+ checkList.get(i).getLine_code();
            }
        }
        return keyword;
    }
    public  String deleteCargo(List<SYSCargo> checkList)
    {
        String keyword = "";
        for (int i = 0; i < checkList.size(); i++) {
            if (i == 0) {
                keyword = checkList.get(i).getCargo_code();
            }else {
                keyword = keyword+","+ checkList.get(i).getCargo_code();
            }
        }
        return keyword;
    }
}
