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
    private String pack_qty;
    private String max_qty;
    private String min_qty;
    private String qc_level;
    private String user_code;
    private String create_date;
    private String update_date;
}
