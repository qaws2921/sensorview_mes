package mes.sensorview.Mapper.mesBoard.mesBoard;

import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_CD;
import org.springframework.stereotype.Repository;

@Repository
public interface MesBoardMapper {
    String getBoardName(String idx);
    SYS_BOARD_CD getBoardData(SYS_BOARD_CD sysBoard);
}
