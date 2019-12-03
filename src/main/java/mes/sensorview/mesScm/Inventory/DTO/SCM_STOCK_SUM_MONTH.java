package mes.sensorview.mesScm.Inventory.DTO;

import lombok.Data;

@Data
public class SCM_STOCK_SUM_MONTH {

    private String part_grp_name;
    private String part_code;
    private String part_name;
    private String spec;
    private String unit_name;
    private int prev_qty;
    private int in_qty;
    private int out_qty;
    private int qty;
    private int rec_count;
}
