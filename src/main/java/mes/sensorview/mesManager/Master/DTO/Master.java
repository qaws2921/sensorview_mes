package mes.sensorview.mesManager.Master.DTO;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class Master extends SYSCommon {
    private String group_code;
    private String group_name;
    private String site_code;
    private int page_num;
    private int total_num;
    private double page;
    private double rows;
    private String keyword;
}
