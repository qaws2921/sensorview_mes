package mes.sensorview.mesScm.Standard.DTO;

import lombok.Data;

@Data
public class sysBPart {
    private String site_code;
    private String part_grp_code;
    private String part_code;
    private String part_name;
    private String cargo_code;
    private String loc_code;
    private String supp_code;
    private String spec;
    private String unit_code;
    private int pack_qty;
    private int max_qty;
    private int min_qty;
    private int qc_level;
    private String user_code;
    private String create_date;
    private String update_date;
    private String part_grp_name;
    private String supp_name;
    private String user_name;
    private String unit_name;
    private String loc_name;
    private int rownum;
    private int rec_count;
    private String keyword;
    private String i_standard;
    private String i_standard_name;
    private String i_category;
    private String i_category_name;
}
