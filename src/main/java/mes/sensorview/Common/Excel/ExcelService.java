package mes.sensorview.Common.Excel;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Excel.Action.ExcelFunction;
import mes.sensorview.Common.Excel.DTO.Excel;
import mes.sensorview.Common.Excel.Util.MakeBody;
import mes.sensorview.Common.Excel.Util.MakeHeader;
import mes.sensorview.Mapper.Excel.ExcelMapper;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_OUT_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_REQ_ORD;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.List;

/** *
 * <pre>
 *     ExcelService
 *     엑셀 업로드, 다운로드를 처리하는 서비스 클래스
 * </pre>
 * @author 김재일
 * @since 2019-11-27
 * @version 1.0
 * @see mes.sensorview.Common.Excel.Action.ExcelFunction
 * **/
@Service
@Slf4j
public class ExcelService extends ExcelFunction {
    @Autowired
    private ExcelMapper excelMapper;

    /** *
     * <pre>
     *     엑셀 시트 생성 함수
     *     전달받은 파라미터를 응용하여 데이터 시트를 생성한다.
     * </pre>
     * @param response      SXSSFWorkBook
     * @param excel         파라미터 DTO
     * @throws IOException
     * **/
    @Transactional
    public void ExcelDownload(HttpServletRequest req, HttpServletResponse response, Excel excel) throws IOException {
        // 생성자 선언
        SXSSFWorkbook sxssfWorkbook = new SXSSFWorkbook(100);
        MakeHeader makeHeader = new MakeHeader();
        MakeBody makeBody = new MakeBody();

        // 전역변수 선언
        Row row = null;
        Cell cell = null;
        String excelName = null;
        int rowNo = 0;
        int i = 0;
        int v = 0;

        try {
            // 파라미터 데이터로 해당 로직 처리
            if(excel.getName().equals("sysBPart")) {
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("자재정보");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("자재정보", "UTF-8");

                // DataTransfer [s]
                List<sysBPart> list = excelMapper.testDbList();
                List<List<Object>> rows = makeBody.sysBPart_Body(list);
                int index = makeHeader.sysBPart_Header().length;
                String[] data = makeHeader.sysBPart_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short) 512);
                for (i = 0; index > i; i++) {
                    sheet.setColumnWidth((short) i, (short) 7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i = 0; list.size() > i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v = 0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmReqOrder")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("구매요청현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("구매요청현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_REQ_ORD> list = excelMapper.scmReqOrderDbList(excel);
                List<List<Object>> rows = makeBody.scmReqOrder_Body(list);
                int index = makeHeader.scmReqOrder_Header().length;
                String[] data = makeHeader.scmReqOrder_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmOrderList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("발주현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("발주현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_IN_ORD_SUB> list = excelMapper.scmOrderListDbList(excel);
                List<List<Object>> rows = makeBody.scmOrderList_Body(list);
                int index = makeHeader.scmOrderList_Header().length;
                String[] data = makeHeader.scmOrderList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmInList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("입고현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("입고현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_IN_SUB> list = excelMapper.scmInListDbList(excel);
                List<List<Object>> rows = makeBody.scmInList_Body(list);
                int index = makeHeader.scmInList_Header().length;
                String[] data = makeHeader.scmInList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmOutList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("출고현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("출고현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_OUT_SUB> list = excelMapper.scmOutListDbList(excel);
                List<List<Object>> rows = makeBody.scmOutList_Body(list);
                int index = makeHeader.scmOutList_Header().length;
                String[] data = makeHeader.scmOutList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }
            response(response,sxssfWorkbook,excelName,"ok",null);
        } catch (Exception e) {
            response(response,sxssfWorkbook,excelName,"fail",null);
        } finally {
            try {
                sxssfWorkbook.close();
            } catch (Exception ignore) {
            }
        }
    }


}

