package mes.sensorview.Common.Excel;

import mes.sensorview.Mapper.Auth.AuthMapper;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Service
public class ExcelService{
    @Autowired
    private AuthMapper authMapper;

    public void getExcelDown(HttpServletResponse response) {
        List<SYSAuthProgram> list = authMapper.testDbList();

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

            for (SYSAuthProgram sysAuthProgram : list) {
                row = sheet.createRow(rowNo++);
                cell = row.createCell(0);
                cell.setCellStyle(bodyStyle);
                cell.setCellValue("" + sysAuthProgram.getMenu_name());
                cell = row.createCell(1);
                cell.setCellStyle(bodyStyle);
                cell.setCellValue("" + sysAuthProgram.getParent_menu_code());
                cell = row.createCell(2);
                cell.setCellStyle(bodyStyle);
                cell.setCellValue("" + sysAuthProgram.getMenu_code());
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
}
