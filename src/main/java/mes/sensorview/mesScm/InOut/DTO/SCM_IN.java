package mes.sensorview.mesScm.InOut.DTO;

import lombok.Data;

@Data
public class SCM_IN {
    private String site_code;
    private String in_no;
    private String work_date;
    private String supp_code;
    private String status;
    private String user_code;
    private String close_yn;
    private String remark;
    private String create_date;
    private String update_date;
}
