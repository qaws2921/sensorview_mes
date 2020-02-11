package mes.sensorview.mesBoard.board;

import mes.sensorview.Mapper.mesBoard.mesBoard.MesBoardMapper;
import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

@Service
public class MESBoardService {
    @Autowired
    private MesBoardMapper mesBoardMapper;

    public String getBoardName(String idx) {
        return mesBoardMapper.getBoardName(idx);
    }

    public ModelAndView getBoardData(SYS_BOARD_CD sysBoard){
        ModelAndView mav = new ModelAndView();
        mav.addObject("boardData",mesBoardMapper.getBoardData(sysBoard));
        mav.setViewName("mesBoard/mesBoard/mesBoard/mesBoardWrite");
        return mav;
    }
}
