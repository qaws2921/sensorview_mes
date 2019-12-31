package mes.sensorview.mesWms.InOut.DTO;

import lombok.Data;

@Data
public class WMS_IN_SUB {
    private String site_code;
    private String in_no;
    private String part_code;
    private int in_qty;
    private String part_grp_name;
    private String part_name;
    private String spec;
    private String unit_name;
    private String work_date;
    private String user_name;
    private String update_date;
    private int rownum;
    private int rownum_page;
    private int rec_count;
}
