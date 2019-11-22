package mes.sensorview.Common.Excel.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.apache.poi.ss.usermodel.Row;

@Data
@AllArgsConstructor
public class Excel {
    private String row0;
    private String row1;
    private String row2;
    private String row3;
    private String row4;
    private String row5;
    private String row6;
    private String row7;
    private String row8;
    private String row9;

    public Excel(Row row) {
        this(
                row.getCell(0).getStringCellValue(),
                row.getCell(1).getStringCellValue(),
                row.getCell(2).getStringCellValue(),
                row.getCell(3).getStringCellValue(),
                row.getCell(4).getStringCellValue(),
                row.getCell(5).getStringCellValue(),
                row.getCell(6).getStringCellValue(),
                row.getCell(7).getStringCellValue(),
                row.getCell(8).getStringCellValue(),
                row.getCell(9).getStringCellValue()
        );
    }
}
