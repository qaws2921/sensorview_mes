package mes.sensorview.mesScm.InOut.DTO;

import lombok.Data;

@Data
public class SCM_IN_SUB_ORD {
    private String ord_no;
    private String part_code;
    private int in_qty;
    private String part_name;
    private String spec;
    private String spec_all;
    private String unit_name;
    private String supp_code;
    private String supp_name;
    private int ord_qty;
    private int qty;
    private String work_date;
    private String result_check;
    private int rownum;
    private int rownum_page;
    private int rec_count;
}
