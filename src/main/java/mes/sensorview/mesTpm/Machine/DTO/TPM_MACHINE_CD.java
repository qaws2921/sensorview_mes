package mes.sensorview.mesTpm.Machine.DTO;

import lombok.Data;

@Data
public class TPM_MACHINE_CD {
    private String site_code;
    private String machine_code;
    private String machine_name;
    private String line_code;
    private String line_name;
    private String loc_code;
    private String install_date;
    private int install_amount;
    private String level;
    private String focus_yn;
    private String install_corp_name;
    private String corp_user_name;
    private String corp_tel_no;
    private String machine_manager;
    private int image1;
    private int image2;
    private int image3;
    private String user_code;
    private String user_name;
    private String create_date;
    private String update_date;

    private int rec_count;
    private int rownum;
    private int rownum_page;
    private String keyword;
}
