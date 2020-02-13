package mes.sensorview.mesBoard.board;

import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesBoard.mesBoard.MesBoardMapper;
import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Service
public class MESBoardService extends ReturnFunction {
    @Autowired
    private MesBoardMapper mesBoardMapper;

    public String getBoardName(String idx) {
        return mesBoardMapper.getBoardName(idx);
    }

    public ModelAndView getBoardData(SYS_BOARD_CD sysBoard, HttpServletRequest req){
        ModelAndView mav = new ModelAndView();
        sysBoard.setSite_code(getSessionData(req).getSite_code());
        sysBoard.setUser_code(getSessionData(req).getUser_code());
        mav.addObject("boardData",mesBoardMapper.getBoardData(sysBoard));
        mav.setViewName("mesBoard/mesBoard/mesBoard/mesBoardWrite");
        return mav;
    }
}
