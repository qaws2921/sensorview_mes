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
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
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
    public void selectExcelList(HttpServletResponse response, Excel excel) {
        SXSSFWorkbook sxssfWorkbook = new SXSSFWorkbook(100);
        // Sheet Header 생성
        MakeHeader makeHeader = new MakeHeader();
        // Sheet Body 생성
        MakeBody makeBody = new MakeBody();

        // 전역변수 선언
        Row row = null;
        Cell cell = null;
        int rowNo = 0;
        int BodyRowsNo = 0;
        String menuName = null;
        String excelName = null;

        // head content [s]
        CellStyle headStyle = sxssfWorkbook.createCellStyle();
        headStyle.setBorderTop(BorderStyle.THIN);
        headStyle.setBorderBottom(BorderStyle.THIN);
        headStyle.setBorderLeft(BorderStyle.THIN);
        headStyle.setBorderRight(BorderStyle.THIN);
        headStyle.setFillForegroundColor(HSSFColor.HSSFColorPredefined.AQUA.getIndex());
        headStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        headStyle.setAlignment(HorizontalAlignment.CENTER);
        // head content [e]

        // body content [s]
        CellStyle bodyStyle = sxssfWorkbook.createCellStyle();
        bodyStyle.setBorderTop(BorderStyle.THIN);
        bodyStyle.setBorderBottom(BorderStyle.THIN);
        bodyStyle.setBorderLeft(BorderStyle.THIN);
        bodyStyle.setBorderRight(BorderStyle.THIN);
        // body content [e]

        try {
            if(excel.getName().equals("sysBPart")){
                excelName = URLEncoder.encode("자재정보","UTF-8");
                Sheet sheet = sxssfWorkbook.createSheet(excelName);
                row = sheet.createRow(rowNo++);

                int index = makeHeader.sysBPart_Header().length;
                String[] data = makeHeader.sysBPart_Header();

                for(int i=0; index > i; i++){
                    cell = row.createCell(i);
                    cell.setCellStyle(headStyle);
                    cell.setCellValue(data[i]);
                }
                List<Object> rows = makeBody.sysBPart_Body();
                log.info("size : "+rows.size());
                log.info(rows.get(1).toString());
                for (int i=0; rows.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    cell = row.createCell(i-1);
                    cell.setCellStyle(bodyStyle);
                    cell.setCellValue("" +  String.valueOf(rows.get(i - 1)));
                }
            }
            response.setHeader("Set-Cookie", "fileDownload=true; path=/");
            response.setHeader("Content-Disposition", String.format("attachment; filename=\"" + excelName +"_"+ getData() + ".xlsx\""));
            sxssfWorkbook.write(response.getOutputStream());
        } catch (Exception e) {
            response.setHeader("Set-Cookie", "fileDownload=false; path=/");
            response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
            response.setHeader("Content-Type", "text/html; charset=utf-8");

            OutputStream out = null;
            try {
                out = response.getOutputStream();
                byte[] data = new String("Excel 생성 중 에러가 발생하였습니다.").getBytes();
                out.write(data, 0, data.length);
            } catch (Exception ignore) {
                ignore.printStackTrace();
            } finally {
                if (out != null)
                    try {
                        out.close();
                    } catch (Exception ignore) {

                    }
            }

        } finally {
            try {
                sxssfWorkbook.close();
            } catch (Exception ignore) {
            }
        }

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

