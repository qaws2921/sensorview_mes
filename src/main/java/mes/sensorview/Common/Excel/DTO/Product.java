package mes.sensorview.Common.Excel.DTO;

import lombok.Data;
import org.apache.poi.ss.usermodel.Row;

@Data
public class Product {
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

    protected Product() {
    }

    public Product(String row0, String row1, String row2, String row3, String row4, String row5, String row6, String row7, String row8, String row9) {
        this.row0 = row0;
        this.row1 = row1;
        this.row2 = row2;
        this.row2 = row3;
        this.row2 = row4;
        this.row2 = row5;
        this.row2 = row6;
        this.row2 = row7;
        this.row2 = row8;
        this.row2 = row9;
    }


    public static Product from(Row row) {
        return new Product(
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