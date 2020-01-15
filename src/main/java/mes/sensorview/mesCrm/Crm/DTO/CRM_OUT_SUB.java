package mes.sensorview.mesCrm.Crm.DTO;

import lombok.Data;

@Data
public class CRM_OUT_SUB {
    private String site_code;
    private String out_no;
    private String part_code;
    private int qty;
    private String part_name;
    private String spec;
    private String unit_name;
    private String work_date;
    private String user_name;
    private String supp_code;
    private String supp_name;

    private int price;
    private String update_date;
    private int rownum;
    private int rownum_page;
    private int rec_count;
}
