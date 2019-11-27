package mes.sensorview.Common.Excel;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.Excel.DTO.Excel;
import mes.sensorview.Common.Excel.Util.MakeBody;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/** *
 * <pre>
 *     ExcelService
 *     엑셀 업로드, 다운로드를 처리하는 컨트롤러 클래스
 * </pre>
 * @author 김재일
 * @since 2019-11-27
 * @version 1.0
 * **/
@Controller
@Slf4j
public class ExcelController {
    @Autowired
    private ExcelService excelService;

    @RequestMapping(value = "/excel_download")
    public void excel_download(HttpServletRequest req, HttpServletResponse response, Excel excel) throws IOException {
        excelService.ExcelDownload(req, response, excel);
    }

//    @RequestMapping(value = "/excelUp.do", method = RequestMethod.POST)
//    public void ExcelUp(HttpServletRequest req, HttpServletResponse rep){
//        log.info("@@@@@@@@@@@@@@@ExcelUp START@@@@@@@@@@@@@@@");
//
//        Map returnObject = new HashMap();
//
//        try { // MultipartHttpServletRequest 생성
//            MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) req;
//            Iterator iter = mhsr.getFileNames();
//            MultipartFile mfile = null;
//            String fieldName = "";
//
//            // 값이 나올때까지
//            while (iter.hasNext()) {
//                fieldName = iter.next().toString(); // 내용을 가져와서
//                mfile = mhsr.getFile(fieldName);
//                String origName;
//                origName = new String(mfile.getOriginalFilename().getBytes("8859_1"), "UTF-8"); //한글꺠짐 방지 // 파일명이 없다면
//
//                returnObject.put("params", mhsr.getParameterMap());
//
//
//                //위치 및 파일
//                homeService.getExcelUpload("D:\\"+origName);
//            }
//
//        } catch (UnsupportedEncodingException e) { // TODO Auto-generated catch block
//            e.printStackTrace();
//        }catch (IllegalStateException e) { // TODO Auto-generated catch block
//            e.printStackTrace();
//        } catch (IOException e) { // TODO Auto-generated catch block
//            e.printStackTrace();
//        }
//
//
//        log.info("@@@@@@@@@@@@@@@ExcelUp END@@@@@@@@@@@@@@@");
//
//    }


}
