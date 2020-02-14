package mes.sensorview.mesBoard.board;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Function.BoardFunction;
import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_LIST;
import mes.sensorview.mesBoard.board.DTO.SYS_BOARD_REPLY;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@Slf4j
public class MESBoardRestController extends BoardFunction {

    @Autowired
    private MESBoardService mesBoardService;

    @RequestMapping(value = "/getNM")
    public String getBoardName(String idx) {
        return mesBoardService.getBoardName(idx);
    }

    @RequestMapping(value = "/validCode")
    public void mesBoardValidCode(HttpServletRequest req, HttpServletResponse res) throws IOException {
        setAttrSessionBCode(req,res);
    }

    @RequestMapping(value = "/bdr_write", method = RequestMethod.POST)
    public int setBoardListData(SYS_BOARD_LIST boardList, MultipartHttpServletRequest req){
        int result = mesBoardService.setBoardListData(boardList,req);
        return result;
    }

    @RequestMapping("addReply")
    public String addReply(SYS_BOARD_REPLY sysBoardReply, HttpServletRequest req){
        String result = mesBoardService.addReply(sysBoardReply,req);
        return result;
    }
    @RequestMapping("delReply")
    public int del(@RequestParam("idx") String idx){
        return mesBoardService.delReply(idx);
    }

    @RequestMapping(value = "/boardFileUploader", method = RequestMethod.POST)
    public int testFile1(MultipartHttpServletRequest req){
        String result = mesBoardService.BoardFileUploader(req);
        return Integer.parseInt(result)-10;
    }

    @RequestMapping(value = "/addBoardList", method = RequestMethod.POST)
    public int addBoardList(SYS_BOARD_LIST boardList, HttpServletRequest req){
        String result = mesBoardService.addBoardList(boardList, req);
        log.info("!@#!@#!@#!@#!@#"+result);
        return Integer.parseInt(result);
    }

}
