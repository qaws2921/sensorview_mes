package mes.sensorview.Common.DataTransferObject;

import lombok.Data;

@Data
public class Page {
    private int page_num;
    private int total_num;
    private int page;
    private int rows;
    private String keyword;
    private String keyword2;
    private String keyword3;
    private String keyword4;
    private String keyword5;
    private String keyword6;
    private String start_date;
    private String end_date;
    private String user_code;
    private String date;
    private String site_code;
}
