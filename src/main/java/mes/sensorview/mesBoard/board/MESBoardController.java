package mes.sensorview.mesBoard.board;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MESBoardController {
    @RequestMapping(value = "/board")
    public String sysPartGroup() {

        return "mesBoard/mesBoard/mesBoard/mesBoard";
    }

}
