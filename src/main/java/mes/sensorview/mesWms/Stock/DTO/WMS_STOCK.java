package mes.sensorview.mesWms.Stock.DTO;

import lombok.Data;

@Data
public class WMS_STOCK {
    private String part_grp_name;
    private String part_code;
    private String part_name;
    private String spec;
    private String unit_name;
    private int qty;
    private int rec_count;

    private int prev_qty;
    private int in_qty;
    private int out_qty;
}
