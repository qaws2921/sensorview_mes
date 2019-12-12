package mes.sensorview.mesQms.Import.DTO;

import lombok.Data;

@Data
public class QMS_RECV_SUB {
    private String site_code;
    private String in_no;
    private String part_code;
    private String qc_result;
    private int in_qty;
    private int qc_qty;
    private int ng_qty;
    private String ng_type;
    private String ng_name;
    private String act_type;
    private int file1;
    private int file2;
    private int file3;
    private String mrb;
    private String part_grp_name;
    private String part_name;
    private String spec;
    private String unit_name;
    private String work_date;
    private String remark;
    private String supp_code;
    private String supp_name;
    private String qc_level_name;
    private int rownum;
    private int rownum_page;
    private int rec_count;
    private String keyword;

    private String update_date;
    private String user_name;
    private String user_code;
    private String code_name1;
    private String qc_result_name;
    private String ng_type_name;
    private String act_type_name;
    private String file1_name;
    private String file2_name;
    private String file3_name;
    private String qc_name;
}
