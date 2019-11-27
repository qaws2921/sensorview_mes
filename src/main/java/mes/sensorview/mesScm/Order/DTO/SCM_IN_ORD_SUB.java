package mes.sensorview.mesScm.Order.DTO;

import lombok.Data;

@Data
public class SCM_IN_ORD_SUB {
    private String site_code;
    private String ord_no;
    private String part_code;
    private String qc_result;
    private int ord_qty;
    private int qty;

    private String work_date;
    private String supp_name;
    private String part_grp_name;
    private String part_name;
    private String spec;
    private String unit_name;
    private String status_name;
    private String user_code;
    private String user_name;
    private String create_date;
    private String update_date;

    private int rownum;
    private int rec_count;
}
