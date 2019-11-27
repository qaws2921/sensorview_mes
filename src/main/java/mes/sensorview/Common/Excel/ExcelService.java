package mes.sensorview.Common.Excel;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Excel.Action.ExcelFunction;
import mes.sensorview.Common.Excel.DTO.Excel;
import mes.sensorview.Common.Excel.Util.MakeBody;
import mes.sensorview.Common.Excel.Util.MakeHeader;
import mes.sensorview.Mapper.Excel.ExcelMapper;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
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
    public void ExcelDownload(HttpServletResponse response, Excel excel) throws IOException {
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
            if(excel.getName().equals("sysBPart")){
                Sheet sheet = sxssfWorkbook.createSheet("자재정보");
                excelName = URLEncoder.encode("자재정보","UTF-8");
                List<sysBPart> list = excelMapper.testDbList();
                List<List<Object>> rows = makeBody.sysBPart_Body(list);
                int index = makeHeader.sysBPart_Header().length;
                String[] data = makeHeader.sysBPart_Header();

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
                for (i=1; list.size() + 1>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i - 1).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i - 1).get(v)));
                    }
                }
            }
            response(response,sxssfWorkbook,excelName,0,null);
        } catch (Exception e) {
            response(response,sxssfWorkbook,excelName,1,null);
            try {
                response(response,sxssfWorkbook,excelName,2,null);
            } catch (Exception ignore) {
                ignore.printStackTrace();
            } finally {
                response(response,sxssfWorkbook,excelName,3,null);
            }
        } finally {
            try {
                sxssfWorkbook.close();
            } catch (Exception ignore) {
            }
        }
    }

    /** *
     * <pre>
     *     output 세팅
     *     excel 확장자 및 파일 이름 설정한다.
     * </pre>
     * @param response          HttpServlet
     * @param sxssfWorkbook     SXSSFWorkBook
     * @param excelName         엑셀 파일 이름
     * @param result            실행 구분자
     * @param out               OutputStream
     * **/
    public void response(HttpServletResponse response, SXSSFWorkbook sxssfWorkbook,String excelName, int result, OutputStream out)throws IOException{
        if(result == 0){
            response.setContentType("ms-vnd/excel");
            response.setHeader("Set-Cookie", "fileDownload=true; path=/");
            response.setHeader("Content-Disposition", "attachment;filename="+excelName+"_"+getData()+".xlsx");
            sxssfWorkbook.write(response.getOutputStream());
            sxssfWorkbook.close();
        }else if(result == 1){
            response.setHeader("Set-Cookie", "fileDownload=false; path=/");
            response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            out = null;
        }else if(result == 2){
            out = response.getOutputStream();
            byte[] data = new String("Excel 생성 중 에러가 발생하였습니다.").getBytes();
            out.write(data, 0, data.length);
        }else if(result == 3){
            if (out != null)
                try {
                    out.close();
                }
            catch (Exception ignore) {

            }
        }
    }

    /** *
     * <pre>
     *     Header Cell 스타일 세팅
     *     생성된 Excel Header 부분 스타일을 지정한다.
     * </pre>
     * @param sxssfWorkbook     SXSSFWorkBook
     * **/
    public CellStyle setHeadStyle(SXSSFWorkbook sxssfWorkbook){
        CellStyle headStyle = sxssfWorkbook.createCellStyle();
        headStyle.setBorderTop(BorderStyle.THIN);
        headStyle.setBorderBottom(BorderStyle.THIN);
        headStyle.setBorderLeft(BorderStyle.THIN);
        headStyle.setBorderRight(BorderStyle.THIN);
        headStyle.setFillForegroundColor(HSSFColor.HSSFColorPredefined.LIME.getIndex());
        headStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        headStyle.setAlignment(HorizontalAlignment.CENTER);
        headStyle.setVerticalAlignment(VerticalAlignment.CENTER);
        return headStyle;
    }

    /** *
     * <pre>
     *     Body Cell 스타일 세팅
     *     생성된 Excel Header 부분 스타일을 지정한다.
     * </pre>
     * @param sxssfWorkbook     SXSSFWorkBook
     * **/
    public CellStyle setBodyStyle(SXSSFWorkbook sxssfWorkbook){
        CellStyle bodyStyle = sxssfWorkbook.createCellStyle();
        bodyStyle.setBorderTop(BorderStyle.THIN);
        bodyStyle.setBorderBottom(BorderStyle.THIN);
        bodyStyle.setBorderLeft(BorderStyle.THIN);
        bodyStyle.setBorderRight(BorderStyle.THIN);
        bodyStyle.setAlignment(HorizontalAlignment.CENTER);
        return bodyStyle;
    }
}

