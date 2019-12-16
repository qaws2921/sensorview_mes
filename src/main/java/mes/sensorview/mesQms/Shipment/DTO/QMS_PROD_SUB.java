package mes.sensorview.mesQms.Shipment.DTO;

import lombok.Data;

@Data
public class QMS_PROD_SUB {

    private String site_code;
    private String in_no;
    private String part_code;
    private int in_qty;
    private int qc_qty;
    private int ng_qty;
    private String ng_type;
    private String ng_name;
    private String act_type;
    private String file2;
    private String file3;
    private String mrb;

    private String work_date;
    private String supp_name;
    private String part_grp_name;
    private String part_name;
    private String spec;
    private String code_name1;
    private String qc_result_name;
    private String qc_name;
    private String act_type_name;
    private String file2_name;
    private String file3_name;
    private String user_name;
    private String update_date;

    private int rownum;
    private int rownum_page;
    private int rec_count;
}
