package mes.sensorview.Mapper.mesBoard.mesBoard;

import mes.sensorview.mesBoard.board.DTO.Pagination;
import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_CD;
import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_LIST;
import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_REPLY;
import mes.sensorview.mesManager.Master.DTO.SYSCommon;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MesBoardMapper {
    String getBoardName(String idx);
    SYS_BOARD_CD getBoardData(SYS_BOARD_CD sysBoard);
    int setBoardListData(SYS_BOARD_LIST boardList);

    List<SYS_BOARD_LIST> getBoardList(Pagination pageMaker);

    int getCount(Pagination pageMaker);

    SYS_BOARD_LIST getInfoData(String idx);

    SYS_BOARD_LIST getNext(SYS_BOARD_LIST sysBoardList);

    SYS_BOARD_LIST getPrev(SYS_BOARD_LIST sysBoardList);

    void upHits(String idx);

    String addReply(SYS_BOARD_REPLY sysBoardReply);

    List<SYS_BOARD_REPLY> getReplyData(String idx);

    int delReply(String idx);

    List<SYSCommon> sysCommonBoardGet(SYS_BOARD_CD sysBoard);
}
