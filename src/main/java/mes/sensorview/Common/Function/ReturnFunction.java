package mes.sensorview.Common.Function;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Auth.Auth;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Interceptor.Session;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN_SUB;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

/**
 * <javadoc>
 * 호출 시 전달 받은 매개변수로
 * 계산하여 리턴하는 함수를 모아둔 클래스.
 * @author      김재일
 * @version     1.0
 * @since       2019-11-14
 **/
@Slf4j
public class ReturnFunction {
    /**
     * jqGrid 호출 시 페이지 블록처리를 위한 계산함수.r
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
            resTful.setRecords(count);
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

    public Auth authMenu(HttpServletRequest req,ArrayList<List<Auth>> authAllSubSelect)
    {
        Auth av1 = null;
        boolean check = true;
        boolean check2 = true;

        int index = 0;
        int index2 = 0;

        while (check) { // 반복해서 체크
            while (check2) {
                if (req.getServletPath().substring(1).equals(authAllSubSelect.get(index).get(index2).getMenu_code())) { // 처음 메뉴값
                    av1 = authAllSubSelect.get(index).get(index2);
                    check2 = false;
                    check = false;
                    return av1;
                }

                if (authAllSubSelect.get(index).size() == index2 + 1) {
                    check2 = false;
                }
                ++index2;
            }
            check2 = true;
            index2 = 0;
            ++index;
        }
        return null;
    }

    public String MakeScmInCodeList(SCM_IN_SUB scmInSub)
    {
        String code_list = "";

        String part_code[] = scmInSub.getPart_code().split("\\$");
        String order_qty[] = scmInSub.getOrder_qty().split("\\$");
        String bad_qty[] = scmInSub.getBad_qty().split("\\$");
        String in_qty[] = scmInSub.getIn_qty().split("\\$");

        // part_code order, bad, in의 길이가 다 다를수 있으므로 추후 예외처리해야됨
        for(int i=0 ; i<part_code.length ; i++)
        {
           code_list += part_code[i]+"/"+order_qty[i]+"/"+bad_qty[i]+"/"+in_qty[i]+",";
        }
        // 마지막 문자 제거
        code_list = code_list.substring(0, code_list.length()-1);
        return code_list;
    }

}
