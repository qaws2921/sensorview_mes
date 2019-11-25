package mes.sensorview.Common.Excel;

import mes.sensorview.Common.Excel.Action.ExcelFunction;
import mes.sensorview.Common.Excel.Util.ExcelRead;
import mes.sensorview.Common.Excel.Util.ExcelReadOption;
import mes.sensorview.Mapper.Auth.AuthMapper;
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
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class ExcelService extends ExcelFunction {
    @Autowired
    private AuthMapper authMapper;

    public void getExcelDown(HttpServletResponse response) {
        List<sysBPart> list = authMapper.testDbList();

        try {
            Row row = null;
            Cell cell = null;
            int rowNo = 0;

            Workbook workbook = new HSSFWorkbook();
            Sheet sheet = workbook.createSheet("메뉴정보");

            CellStyle headStyle = workbook.createCellStyle();
            headStyle.setBorderTop(BorderStyle.THIN);
            headStyle.setBorderBottom(BorderStyle.THIN);
            headStyle.setBorderLeft(BorderStyle.THIN);
            headStyle.setBorderRight(BorderStyle.THIN);

            headStyle.setFillForegroundColor(HSSFColor.HSSFColorPredefined.AQUA.getIndex());
            headStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            headStyle.setAlignment(HorizontalAlignment.CENTER);

            CellStyle bodyStyle = workbook.createCellStyle();

            bodyStyle.setBorderTop(BorderStyle.THIN);
            bodyStyle.setBorderBottom(BorderStyle.THIN);
            bodyStyle.setBorderLeft(BorderStyle.THIN);
            bodyStyle.setBorderRight(BorderStyle.THIN);

            // 헤더 생성
            row = sheet.createRow(rowNo++);
            cell = row.createCell(0);
            cell.setCellStyle(headStyle);
            cell.setCellValue("메뉴이름");

            cell = row.createCell(1);
            cell.setCellStyle(headStyle);
            cell.setCellValue("메뉴코드");

            cell = row.createCell(2);
            cell.setCellStyle(headStyle);
            cell.setCellValue("메뉴코드");

            for (sysBPart sysBPart : list) {
                row = sheet.createRow(rowNo++);
                cell = row.createCell(0);
                cell.setCellStyle(bodyStyle);
                cell.setCellValue("" + sysBPart.getSite_code());
                cell = row.createCell(1);
                cell.setCellStyle(bodyStyle);
                cell.setCellValue("" + sysBPart.getPart_name());
                cell = row.createCell(2);
                cell.setCellStyle(bodyStyle);
                cell.setCellValue("" + sysBPart.getPart_code());
            }

            // 컨텐츠 타입과 파일명 지정
            response.setContentType("ms-vnd/excel;");
            response.setHeader("Content-Disposition", "attachment;filename=sheet.xls");

            // 엑셀 출력
            workbook.write(response.getOutputStream());
            workbook.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Transactional
    public void selectExcelList(HttpServletResponse response) {
        SXSSFWorkbook workbook = new SXSSFWorkbook(100);
        Sheet sheet = workbook.createSheet("메뉴정보");

        List<sysBPart> list = authMapper.testDbList();

        try {
            Row row = null;
            Cell cell = null;
            int rowNo = 0;

            CellStyle headStyle = workbook.createCellStyle();
            headStyle.setBorderTop(BorderStyle.THIN);
            headStyle.setBorderBottom(BorderStyle.THIN);
            headStyle.setBorderLeft(BorderStyle.THIN);
            headStyle.setBorderRight(BorderStyle.THIN);

            headStyle.setFillForegroundColor(HSSFColor.HSSFColorPredefined.AQUA.getIndex());
            headStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            headStyle.setAlignment(HorizontalAlignment.CENTER);

            CellStyle bodyStyle = workbook.createCellStyle();

            bodyStyle.setBorderTop(BorderStyle.THIN);
            bodyStyle.setBorderBottom(BorderStyle.THIN);
            bodyStyle.setBorderLeft(BorderStyle.THIN);
            bodyStyle.setBorderRight(BorderStyle.THIN);

            // 헤더 생성
            row = sheet.createRow(rowNo++);
            cell = row.createCell(0);
            cell.setCellStyle(headStyle);
            cell.setCellValue("메뉴이름");

            cell = row.createCell(1);
            cell.setCellStyle(headStyle);
            cell.setCellValue("메뉴코드");

            cell = row.createCell(2);
            cell.setCellStyle(headStyle);
            cell.setCellValue("메뉴코드");

            for (sysBPart sysBPart : list) {
                row = sheet.createRow(rowNo++);
                cell = row.createCell(0);
                cell.setCellStyle(bodyStyle);
                cell.setCellValue("" + sysBPart.getSite_code());
                cell = row.createCell(1);
                cell.setCellStyle(bodyStyle);
                cell.setCellValue("" + sysBPart.getPart_name());
                cell = row.createCell(2);
                cell.setCellStyle(bodyStyle);
                cell.setCellValue("" + sysBPart.getPart_code());
            }

            response.setHeader("Set-Cookie", "fileDownload=true; path=/");
            response.setHeader("Content-Disposition", String.format("attachment; filename=\"BPart_" + getData() + ".xlsx\""));
            workbook.write(response.getOutputStream());


        } catch (Exception e) {
            response.setHeader("Set-Cookie", "fileDownload=false; path=/");
            response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
            response.setHeader("Content-Type", "text/html; charset=utf-8");

            OutputStream out = null;
            try {
                out = response.getOutputStream();
                byte[] data = new String("fail..").getBytes();
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
                workbook.close();
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
