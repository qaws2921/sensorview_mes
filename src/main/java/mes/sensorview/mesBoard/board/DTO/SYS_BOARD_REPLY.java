package mes.sensorview.mesBoard.board.DTO;

import lombok.Data;

@Data
public class SYS_BOARD_REPLY {
    private String site_code;
    private String board_code;
    private String board_idx;
    private String reply_idx;
    private String reply_desc;
}
