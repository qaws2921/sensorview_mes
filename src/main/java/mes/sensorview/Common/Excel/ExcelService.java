package mes.sensorview.Common.Excel;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Excel.Action.ExcelFunction;
import mes.sensorview.Common.Excel.DTO.Excel;
import mes.sensorview.Common.Excel.Util.ExcelRead;
import mes.sensorview.Common.Excel.Util.ExcelReadOption;
import mes.sensorview.Common.Excel.Util.MakeBody;
import mes.sensorview.Common.Excel.Util.MakeHeader;
import mes.sensorview.Mapper.Auth.AuthMapper;
import mes.sensorview.Mapper.Excel.ExcelMapper;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import org.apache.ibatis.session.ResultContext;
import org.apache.ibatis.session.ResultHandler;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class ExcelService extends ExcelFunction {
    @Autowired
    private ExcelMapper excelMapper;

    @Transactional
    public void selectExcelList(HttpServletResponse response, Excel excel) throws IOException {
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
            if(excel.getName().equals("sysBPart")){
                List<sysBPart> list = excelMapper.testDbList();
                List<List<Object>> rows = makeBody.sysBPart_Body(list);
                excelName = URLEncoder.encode("자재정보","UTF-8");
                Sheet sheet = sxssfWorkbook.createSheet(excelName);
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
    public CellStyle setBodyStyle(SXSSFWorkbook sxssfWorkbook){
        CellStyle bodyStyle = sxssfWorkbook.createCellStyle();
        bodyStyle.setBorderTop(BorderStyle.THIN);
        bodyStyle.setBorderBottom(BorderStyle.THIN);
        bodyStyle.setBorderLeft(BorderStyle.THIN);
        bodyStyle.setBorderRight(BorderStyle.THIN);
        bodyStyle.setAlignment(HorizontalAlignment.CENTER);
        return bodyStyle;
    }

    public void excelUpload(File destFile) throws Exception {
        ExcelReadOption excelReadOption = new ExcelReadOption();
        excelReadOption.setFilePath(destFile.getAbsolutePath());
        excelReadOption.setOutputColumns("A", "B", "C", "D", "E", "F");
        excelReadOption.setStartRow(2);


        List<Map<String, String>> excelContent = ExcelRead.read(excelReadOption);

        for (Map<String, String> article : excelContent) {
            System.out.println(article.get("A"));
            System.out.println(article.get("B"));
            System.out.println(article.get("C"));
            System.out.println(article.get("D"));
            System.out.println(article.get("E"));
            System.out.println(article.get("F"));

        }
    }
}

