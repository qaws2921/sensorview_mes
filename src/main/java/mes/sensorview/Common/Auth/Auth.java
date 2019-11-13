package mes.sensorview.Common.Auth;

import lombok.Data;

@Data
public class Auth {
    private String menu_code;
    private String menu_name;
    private int level;
    private String parent_menu_code;
}
