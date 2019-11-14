package mes.sensorview.Common.Function;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Field;
import java.util.List;

/**
 * <javadoc>
 * 호출 시 전달 받은 매개변수로
 * 계산하여 리턴하는 함수를 모아둔 클래스.
 * @author      김재일
 * @version     1.0
 * @since       2019-11-14
**/
public class ReturnFunction {
    /**
     * jqGrid 호출 시 페이지 블록처리를 위한 계산함수.
     * @param   records
     * @param   rows
     **/
    public int CalcTotalPage(int records, int rows)
    {
        return (int)Math.ceil((double)records/(double)rows);
    }
    /**
     * Session에서 유저 데이터를 수집하기 위한 함수.
     * @param   req
     * @see     javax.servlet.http.HttpServletRequest
     **/
    public Session getSessionData(HttpServletRequest req)
    {
        return (Session) req.getSession().getAttribute("userData");
    }
    /**
     * ListData를 조회하는 함수.
     * @param   rows
     * @param   p
     * @see     java.util.List
     * @see     mes.sensorview.Common.DataTransferObject.Page
     **/
    public RESTful getListData(List<?> rows , Page p)
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

            resTful.setTotal(CalcTotalPage(count,p.getRows()));
            resTful.setRows(rows);
            resTful.setPage(p.getPage());
            return resTful;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    /**
     * 권한그룹별 프로그램 등록
     * @param   req
     * @param   checkList
     * @see     javax.servlet.http.HttpServletRequest
     * @see     java.util.List
     * @see     mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram
     **/
    public Page setProgram(HttpServletRequest req, List<SYSAuthProgram> checkList)
    {
        Page p = new Page();
        p.setSite_code(getSessionData(req).getSite_code());
        p.setKeyword(checkList.get(0).getAuth_code());

        String keyword2 = "";
        int index = 0;
        for (SYSAuthProgram svl : checkList) {
            if (index == 0) {
                keyword2 = svl.getMenu_code()+"/"+svl.getCheck_get()+"/"+svl.getCheck_add()+"/"+svl.getCheck_edit()+"/"+svl.getCheck_del();
            }else{
                keyword2 = keyword2+","+svl.getMenu_code()+"/"+svl.getCheck_get()+"/"+svl.getCheck_add()+"/"+svl.getCheck_edit()+"/"+svl.getCheck_del();
            }
            ++index;
        }
        p.setKeyword2(keyword2);
        return p;
    }

}
