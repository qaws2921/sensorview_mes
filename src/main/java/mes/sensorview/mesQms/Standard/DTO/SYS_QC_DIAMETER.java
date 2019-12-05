package mes.sensorview.mesQms.Standard.DTO;

import lombok.Data;

@Data
public class SYS_QC_DIAMETER {
    private String site_code;
    private String line_code;
    private String part_code;
    private String diameter1_start;
    private String diameter1_stop;
    private String diameter2_start;
    private String diameter2_stop;
    private String user_code;
    private String create_date;
    private String update_date;
    private String keyword;

    private int rownum;
    private int rownum_page;
    private int rec_count;
    private String part_grp_code;

}