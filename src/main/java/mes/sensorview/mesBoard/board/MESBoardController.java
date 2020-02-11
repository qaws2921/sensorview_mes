package mes.sensorview.mesBoard.board;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Function.BoardFunction;
import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@Slf4j
public class MESBoardController extends BoardFunction {

    @Autowired
    private MESBoardService mesBoardService;

    ModelAndView mav;

    @RequestMapping("/board")
    public String mesBoard(SYS_BOARD_CD sysBoard) {
        return "mesBoard/mesBoard/mesBoard/mesBoardList";
    }

    @RequestMapping(value = "/bd_writeForm", method = RequestMethod.POST)
    public void mesBoardWrite(SYS_BOARD_CD sysBoard) {
        mesBoardService.getBoardData(sysBoard);
    }

    public String uriSegment(String name){
        return "mesBoard/mesBoard/mesBoard/"+name;
    }
}
