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

    @Override
    public String toString() {
        return "sysBPart" +
                "[" +
                "site_code=" + site_code + ", part_grp_code=" + part_grp_code + ", " +
                "part_code=" + part_code + ", part_name=" + part_name + ", " +
                "cargo_code=" + cargo_code + ", loc_code=" + loc_code + ", " +
                "supp_code=" + supp_code + ", spec=" + spec + ", " +
                "unit_code=" + unit_code + ", " + "pack_qty=" + pack_qty + ", " +
                "max_qty=" + max_qty + ", " + "min_qty=" + min_qty + ", " +
                "qc_level=" + qc_level + ", " + "user_code=" + user_code + ", " +
                "create_date=" + create_date + ", " + "update_date=" + update_date + ", " +
                "part_grp_name=" + part_grp_name + ", " + "supp_name=" + supp_name + ", " +
                "user_name=" + user_name + ", " + "unit_name=" + unit_name + ", " +
                "loc_name=" + loc_name +
                "]";
    }
}
