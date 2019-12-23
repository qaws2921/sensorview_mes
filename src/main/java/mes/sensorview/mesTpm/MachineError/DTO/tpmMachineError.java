package mes.sensorview.mesTpm.MachineError.DTO;

import lombok.Data;

@Data
public class tpmMachineError {
    private String site_code;
    private String line_code;
    private String machine_code;
    private String work_date;
    private int seq;
    private String error_name;
    private String error_type;
    private String error_result;
    private String measure_name;
    private String stop_yn;
    private int stop_time;
    private String check_user_code;
    private String check_date;
}
