package mes.sensorview.mesScm.Order.DTO;

import lombok.Data;

@Data
public class scmReqOrder {
    private String site_code;
    private String req_no;
    private String ord_no;
    private String work_date;
    private String part_code;
    private String qty;
    private String user_code;
    private String out_no;
    private String create_date;
    private String update_date;
}
