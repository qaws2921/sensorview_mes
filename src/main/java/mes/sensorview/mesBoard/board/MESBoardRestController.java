package mes.sensorview.mesBoard.board;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Function.BoardFunction;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
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
}
