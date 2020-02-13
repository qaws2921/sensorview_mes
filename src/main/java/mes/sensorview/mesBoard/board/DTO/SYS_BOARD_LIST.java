package mes.sensorview.mesBoard.board.DTO;

import lombok.Data;

@Data
public class SYS_BOARD_LIST {
    private String site_code;
    private String user_code;
    private String board_code;
    private String board_idx;
    private String subject;
    private String description;
    private int read_count;
    private String create_date;
    private String update_date;

    private int seq;
    private String user_name;
    private int reply_cnt;
    private int file_cnt;
}
