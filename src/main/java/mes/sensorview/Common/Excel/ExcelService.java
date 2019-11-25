package mes.sensorview.Common.Excel;

import mes.sensorview.Mapper.Auth.AuthMapper;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import org.apache.ibatis.session.ResultContext;
import org.apache.ibatis.session.ResultHandler;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

@Service
public class ExcelService{
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

        // 메모리에 100개의 행을 유지합니다. 행의 수가 넘으면 디스크에 적습니다.
        Workbook workbook = new HSSFWorkbook();
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
            response.setHeader("Content-Disposition", String.format("attachment; filename=\"test.xls\""));
            workbook.write(response.getOutputStream());


        } catch(Exception e) {
            response.setHeader("Set-Cookie", "fileDownload=false; path=/");
            response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
            response.setHeader("Content-Type","text/html; charset=utf-8");

            OutputStream out = null;
            try {
                out = response.getOutputStream();
                byte[] data = new String("fail..").getBytes();
                out.write(data, 0, data.length);
            } catch(Exception ignore) {
                ignore.printStackTrace();
            } finally {
                if(out != null)
                    try {
                    out.close();
                }
                catch(Exception ignore) {

                }
            }

        } finally {
            try {
                workbook.close();
            }
            catch(Exception ignore) {
            }
        }

    }
}
