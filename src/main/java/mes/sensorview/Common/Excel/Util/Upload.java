package mes.sensorview.Common.Excel.Util;

import lombok.extern.slf4j.Slf4j;
import lombok.val;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.Excel.Action.ExcelFunction;
import mes.sensorview.Common.Excel.DTO.Excel;
import mes.sensorview.Mapper.Excel.ExcelMapper;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_OUT_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_REQ_ORD;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import org.apache.poi.ss.formula.functions.T;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Slf4j
public class Upload extends ExcelFunction {

    public List<sysBPart> sysBPartListData(XSSFWorkbook xssfWorkbook, XSSFSheet sheet, XSSFRow row, XSSFCell cell){
        sheet = xssfWorkbook.getSheetAt(0);
        List<sysBPart> list = new ArrayList<sysBPart>();
        try{
            for(int i=1; sheet.getLastRowNum()>i+1; i++) {
                sysBPart vo = new sysBPart();
                row = sheet.getRow(i);
                if(row == null) {
                    continue;
                }
                cell = row.getCell(0);
                vo.setPart_grp_name(cell.getStringCellValue());
                cell = row.getCell(1);
                vo.setPart_code(cell.getStringCellValue());
                cell = row.getCell(2);
                vo.setPart_name(cell.getStringCellValue());
                cell = row.getCell(3);
                vo.setLoc_name(cell.getStringCellValue());
                cell = row.getCell(4);
                vo.setSupp_name(cell.getStringCellValue());
                cell = row.getCell(5);
                vo.setSpec(cell.getStringCellValue());
                cell = row.getCell(6);
                vo.setUnit_name(cell.getStringCellValue());
                cell = row.getCell(7);
                vo.setPart_grp_code(cell.getStringCellValue());
                cell = row.getCell(8);
                vo.setI_standard_name(cell.getStringCellValue());
                cell = row.getCell(9);
                vo.setI_category_name(cell.getStringCellValue());
                cell = row.getCell(10);
                vo.setMax_qty(Integer.parseInt(cell.getStringCellValue()));
                cell = row.getCell(11);
                vo.setMin_qty(Integer.parseInt(cell.getStringCellValue()));
                cell = row.getCell(12);
                vo.setUser_name(cell.getStringCellValue());
                cell = row.getCell(13);
                vo.setUpdate_date(cell.getStringCellValue());
                list.add(vo);
            }
        }catch (Exception e){
            log.info("ERROR CODE : "+ e);
        }
        return list;
    }

    public List<sysBPart> sysBPartSetListData(XSSFWorkbook xssfWorkbook, XSSFSheet sheet, XSSFRow row, XSSFCell cell, HttpServletRequest req) {
        sheet = xssfWorkbook.getSheetAt(0);
        List<sysBPart> list = new ArrayList<sysBPart>();
        try {
            for (int i = 1; sheet.getLastRowNum() > i + 1; i++) {
                sysBPart vo = new sysBPart();
                row = sheet.getRow(i);
                if (row == null) {
                    continue;
                }
                cell = row.getCell(0);
                vo.setPart_grp_name(cell.getStringCellValue());
                cell = row.getCell(1);
                vo.setPart_code(cell.getStringCellValue() + i);
                cell = row.getCell(2);
                vo.setPart_name(cell.getStringCellValue());
                cell = row.getCell(3);
                vo.setLoc_name(cell.getStringCellValue());
                cell = row.getCell(4);
                vo.setSupp_name(cell.getStringCellValue());
                cell = row.getCell(5);
                vo.setSpec(cell.getStringCellValue());
                cell = row.getCell(6);
                vo.setUnit_name(cell.getStringCellValue());
                cell = row.getCell(7);
                vo.setPart_grp_code(cell.getStringCellValue() + i);
                cell = row.getCell(8);
                vo.setI_standard_name(cell.getStringCellValue());
                cell = row.getCell(9);
                vo.setI_category_name(cell.getStringCellValue());
                cell = row.getCell(10);
                vo.setMax_qty(Integer.parseInt(cell.getStringCellValue()));
                cell = row.getCell(11);
                vo.setMin_qty(Integer.parseInt(cell.getStringCellValue()));
                cell = row.getCell(12);
                vo.setUser_name(cell.getStringCellValue());
                cell = row.getCell(13);
                vo.setUpdate_date(cell.getStringCellValue());
                vo.setSite_code("S0001");
                vo.setUser_code("ADMIN");
                list.add(vo);
            }
        }catch (Exception e){
            log.info("ERROR CODE : " + e);
        }
        return list;
    }
}
