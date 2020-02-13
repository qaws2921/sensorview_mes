package mes.sensorview.mesBoard.board;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.File.Function.FileUploadFunction;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Mapper.mesBoard.mesBoard.MesBoardMapper;
import mes.sensorview.mesBoard.board.DTO.Pagination;
import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_CD;
import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_LIST;
import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_REPLY;
import mes.sensorview.mesManager.Master.DTO.SYSCommon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

@Service
@Slf4j
public class MESBoardService extends ReturnFunction {
    @Autowired
    private MesBoardMapper mesBoardMapper;
    FileUploadFunction uploadFunction = new FileUploadFunction();
    public String getBoardName(String idx) {
        return mesBoardMapper.getBoardName(idx);
    }

    public ModelAndView getBoardData(SYS_BOARD_CD sysBoard, HttpServletRequest req){
        ModelAndView mav = new ModelAndView();
        sysBoard.setSite_code(getSessionData(req).getSite_code());
        sysBoard.setUser_code(getSessionData(req).getUser_code());
        List<SYSCommon> sysCommons = mesBoardMapper.sysCommonBoardGet(sysBoard);
        mav.addObject("common",sysCommons);
        mav.addObject("boardData",mesBoardMapper.getBoardData(sysBoard));
        mav.setViewName("mesBoard/mesBoard/mesBoard/mesBoardWrite");
        return mav;
    }

    public int setBoardListData(SYS_BOARD_LIST boardList,MultipartHttpServletRequest req) {
        int result;
        boardList.setSite_code(getSessionData(req).getSite_code());
        boardList.setUser_code(getSessionData(req).getUser_code());
        result = mesBoardMapper.setBoardListData(boardList);
        log.info("?? : "+result);
        return result;
    }

    public List<SYS_BOARD_LIST> getBoardList(Pagination pageMaker, HttpServletRequest req) {
        HttpSession session = req.getSession();
        pageMaker.setSite_code(getSessionData(req).getSite_code());
        pageMaker.setUser_code(getSessionData(req).getUser_code());
        pageMaker.setBoard_code((String) session.getAttribute("board_code"));
        List<SYS_BOARD_LIST> data = mesBoardMapper.getBoardList(pageMaker);
        return data;
    }

    public int getCount(Pagination pageMaker, HttpServletRequest req) {
        HttpSession session = req.getSession();
        pageMaker.setSite_code(getSessionData(req).getSite_code());
        pageMaker.setUser_code(getSessionData(req).getUser_code());
        pageMaker.setBoard_code((String) session.getAttribute("board_code"));
        return mesBoardMapper.getCount(pageMaker);
    }

    public void upHits(String idx, HttpServletRequest req, HttpServletResponse res) {
        String check = null;
        Cookie[] cookies = req.getCookies();
        if (cookies != null) {
            for (Cookie c : cookies) {
                if (c.getName().equals("board" + idx)) {
                    check = c.getValue();
                }
            }
        }
        if (check == null) {
            Cookie hits = new Cookie("board" + idx, idx);
            hits.setMaxAge(1 * 60 * 60);
            res.addCookie(hits);
            mesBoardMapper.upHits(idx);
        }
    }

    public SYS_BOARD_LIST getInfoData(String idx) {
        return mesBoardMapper.getInfoData(idx);
    }

    public SYS_BOARD_LIST getPrev(String idx, int seq, HttpServletRequest req) {
        SYS_BOARD_LIST sysBoardList = new SYS_BOARD_LIST();
        HttpSession session = req.getSession();
        sysBoardList.setSeq(seq);
        sysBoardList.setBoard_idx(idx);
        sysBoardList.setBoard_code((String) session.getAttribute("board_code"));
        return mesBoardMapper.getPrev(sysBoardList);
    }

    public SYS_BOARD_LIST getNext(String idx, int seq, HttpServletRequest req) {
        SYS_BOARD_LIST sysBoardList = new SYS_BOARD_LIST();
        HttpSession session = req.getSession();
        sysBoardList.setSeq(seq);
        sysBoardList.setBoard_idx(idx);
        sysBoardList.setBoard_code((String) session.getAttribute("board_code"));
        return mesBoardMapper.getNext(sysBoardList);
    }

    public String addReply(SYS_BOARD_REPLY sysBoardReply, HttpServletRequest req) {
        sysBoardReply.setSite_code(getSessionData(req).getSite_code());
        sysBoardReply.setUser_code(getSessionData(req).getUser_code());
        return mesBoardMapper.addReply(sysBoardReply);
    }

    public List<SYS_BOARD_REPLY> getReplyData(String idx) {
        return mesBoardMapper.getReplyData(idx);
    }

    public int delReply(String idx) {
        return mesBoardMapper.delReply(idx);
    }
}
