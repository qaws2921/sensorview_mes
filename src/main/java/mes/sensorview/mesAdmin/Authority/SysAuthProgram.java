package mes.sensorview.mesAdmin.Authority;

import lombok.Data;

@Data
public class SysAuthProgram {
    private String auth_code;
    private String menu_code;
    private String menu_name;
    private int level;
    private String check_get;
    private String check_add;
    private String check_edit;
    private String check_del;
    private String parent_menu_code;
    private boolean leaf;
    private boolean expanded;
}
