package mes.sensorview.mesScm.InOut.DTO;

import lombok.Data;

@Data
public class SCM_OUT_ORD {
    private String site_code;
    private String ord_no;
    private String work_date;
    private String cargo_code_to;
    private String status;
    private String user_code;
    private String out_no;
    private String create_date;
    private String update_date;
}
