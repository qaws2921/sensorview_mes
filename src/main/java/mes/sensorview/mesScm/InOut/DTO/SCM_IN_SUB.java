package mes.sensorview.mesScm.InOut.DTO;

import lombok.Data;

@Data
public class SCM_IN_SUB {
    private String site_code;
    private String in_no;
    private String part_code;
    private String order_qty;
    private String bad_qty;
    private String in_qty;
}
