package mes.sensorview.Common.Excel;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

@RestController
@Slf4j
public class ExcelRestController {
    @Autowired
    private ExcelService excelService;

        @RequestMapping(value = "/excelUploadAjax", method = RequestMethod.GET)
        public void excelUploadAjax(MultipartHttpServletRequest request)  throws Exception{
            MultipartFile excelFile =request.getFile("excelFile");
            System.out.println("엑셀 파일 업로드 컨트롤러");
            if(excelFile==null || excelFile.isEmpty()){
                throw new RuntimeException("엑셀파일을 선택 해 주세요.");
            }

            File destFile = new File("D:\\"+excelFile.getOriginalFilename());
            try{
                excelFile.transferTo(destFile);
            }catch(IllegalStateException | IOException e){
                throw new RuntimeException(e.getMessage(),e);
            }

            excelService.excelUpload(destFile);
            //FileUtils.delete(destFile.getAbsolutePath());
        }
    public void poiCheck(MultipartFile request) {
        try {
            File convFile = new File(request.getOriginalFilename());
            request.transferTo(convFile);
            XSSFWorkbook wb = new XSSFWorkbook(new FileInputStream(convFile));
            Cell cell = null;
            for (Row row : wb.getSheetAt(0)) {
                if (row.getRowNum() < 2) {
                    continue;
                }
                if (row.getCell(1) == null) {
                    break;
                }
                System.out.println("[row] 이름 : " + row.getCell(1) + ", 나이: " + row.getCell(2) + ", 성별: "
                        + row.getCell(3) + ", 비고: " + row.getCell(4));
            }
        } catch (FileNotFoundException fe) {
            System.out.println("FileNotFoundException >> " + fe.toString());
        } catch (IOException ie) {
            System.out.println("IOException >> " + ie.toString());
        }
    }
    }
