package mes.sensorview.mesWms.InOut.DTO;

import lombok.Data;

@Data
public class WMS_OUT_ORD_SUB {
    private String site_code;
    private String req_no;
    private String part_code;
    private int ord_qty;
    private int comp_qty;
    private int ready_qty;
    private int req_qty;
    private int qty;
    private String part_grp_name;
    private String part_name;
    private String spec;
    private String unit_name;
    private String work_date;
    private String user_name;
    private String supp_code;
    private String supp_name;
    private String update_date;
    private String ord_no;
    private int rownum;
    private int rownum_page;
    private int rec_count;

}
