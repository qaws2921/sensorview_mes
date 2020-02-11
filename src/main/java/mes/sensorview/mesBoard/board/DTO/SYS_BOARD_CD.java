package mes.sensorview.mesBoard.board.DTO;

import lombok.Data;

@Data
public class SYS_BOARD_CD {
    private String site_code;
    private String user_code;
    private String board_code;
    private String board_en;
    private String board_kr;
    private String board_auth;
    int files;
    int file_size;
    private String use_yn;
    private String create_date;
    private String update_date;
    private int status;
}
