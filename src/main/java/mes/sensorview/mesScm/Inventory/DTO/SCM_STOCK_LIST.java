package mes.sensorview.mesScm.Inventory.DTO;

import lombok.Data;

@Data
public class SCM_STOCK_LIST {
    private String part_type_name;
    private String part_grp_name;
    private String part_name;
    private String spec;
    private String unit_name;
    private int min_qty;
    private int max_qty;
    private int qty;
    private int rec_count;

    private String supp_name;
}
