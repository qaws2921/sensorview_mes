package mes.sensorview.Common.Excel;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.Excel.Action.ExcelFunction;
import mes.sensorview.Common.Excel.DTO.Excel;
import mes.sensorview.Common.Excel.Util.MakeBody;
import mes.sensorview.Common.Excel.Util.MakeHeader;
import mes.sensorview.Common.Excel.Util.Upload;
import mes.sensorview.Mapper.Excel.ExcelMapper;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import mes.sensorview.mesQms.Import.DTO.QMS_RECV_SUB;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD;
import mes.sensorview.mesQms.Shipment.DTO.QMS_PROD_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_IN_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_OUT_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_REIN_SUB;
import mes.sensorview.mesScm.InOut.DTO.SCM_STOCK_RET_SUB;
import mes.sensorview.mesScm.Inventory.DTO.SCM_STOCK_LIST;
import mes.sensorview.mesScm.Inventory.DTO.SCM_STOCK_SUM_DAY;
import mes.sensorview.mesScm.Inventory.DTO.SCM_STOCK_SUM_MONTH;
import mes.sensorview.mesScm.Order.DTO.SCM_IN_ORD_SUB;
import mes.sensorview.mesScm.Order.DTO.SCM_REQ_ORD;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

/** *
 * <pre>
 *     ExcelService
 *     엑셀 업로드, 다운로드를 처리하는 서비스 클래스
 * </pre>
 * @author 김재일
 * @since 2019-11-27
 * @version 1.0
 * @see mes.sensorview.Common.Excel.Action.ExcelFunction
 * **/
@Service
@Slf4j
@Transactional
public class ExcelService extends ExcelFunction {
    @Autowired
    private ExcelMapper excelMapper;

    /** *
     * <pre>
     *     엑셀 시트 생성 함수
     *     전달받은 파라미터를 응용하여 데이터 시트를 생성한다.
     * </pre>
     * @param response      SXSSFWorkBook
     * @param excel         파라미터 DTO
     * @throws IOException
     * **/
    public void ExcelDownload(HttpServletRequest req, HttpServletResponse response, Excel excel) throws IOException {
        // 생성자 선언
        SXSSFWorkbook sxssfWorkbook = new SXSSFWorkbook(100);
        MakeHeader makeHeader = new MakeHeader();
        MakeBody makeBody = new MakeBody();

        // 전역변수 선언
        Row row = null;
        Cell cell = null;
        String excelName = null;
        int rowNo = 0;
        int i = 0;
        int v = 0;

        try {
            // 파라미터 데이터로 해당 로직 처리
            if(excel.getName().equals("sysBPart")) {
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("자재정보");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("자재정보", "UTF-8");

                // DataTransfer [s]
                List<sysBPart> list = excelMapper.testDbList();
                List<List<Object>> rows = makeBody.sysBPart_Body(list);
                int index = makeHeader.sysBPart_Header().length;
                String[] data = makeHeader.sysBPart_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short) 512);
                for (i = 0; index > i; i++) {
                    sheet.setColumnWidth((short) i, (short) 7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i = 0; list.size() > i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v = 0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmReqOrder")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("구매요청현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("구매요청현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_REQ_ORD> list = excelMapper.scmReqOrderDbList(excel);
                List<List<Object>> rows = makeBody.scmReqOrder_Body(list);
                int index = makeHeader.scmReqOrder_Header().length;
                String[] data = makeHeader.scmReqOrder_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmOrderList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("발주현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("발주현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_IN_ORD_SUB> list = excelMapper.scmOrderListDbList(excel);
                List<List<Object>> rows = makeBody.scmOrderList_Body(list);
                int index = makeHeader.scmOrderList_Header().length;
                String[] data = makeHeader.scmOrderList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmInList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("입고현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("입고현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_IN_SUB> list = excelMapper.scmInListDbList(excel);
                List<List<Object>> rows = makeBody.scmInList_Body(list);
                int index = makeHeader.scmInList_Header().length;
                String[] data = makeHeader.scmInList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmOutList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("출고현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("출고현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_OUT_SUB> list = excelMapper.scmOutListDbList(excel);
                List<List<Object>> rows = makeBody.scmOutList_Body(list);
                int index = makeHeader.scmOutList_Header().length;
                String[] data = makeHeader.scmOutList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmStockRetList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("자재반출현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("자재반출현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_STOCK_RET_SUB> list = excelMapper.scmStockRetListDbList(excel);
                List<List<Object>> rows = makeBody.scmStockRetList_Body(list);
                int index = makeHeader.scmStockRetList_Header().length;
                String[] data = makeHeader.scmStockRetList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmInLineList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("재입고현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("재입고현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_REIN_SUB> list = excelMapper.scmInLineListDbList(excel);
                List<List<Object>> rows = makeBody.scmInLineList_Body(list);
                int index = makeHeader.scmInLineList_Header().length;
                String[] data = makeHeader.scmInLineList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmStockList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("재고현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("재고현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_STOCK_LIST> list = excelMapper.scmStockListDbList(excel);
                List<List<Object>> rows = makeBody.scmStockList_Body(list);
                int index = makeHeader.scmStockList_Header().length;
                String[] data = makeHeader.scmStockList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmStockSumDay")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("자재일원장");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("자재일원장","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_STOCK_SUM_DAY> list = excelMapper.scmStockSumDayListDbList(excel);
                List<List<Object>> rows = makeBody.scmStockSumDayList_Body(list);
                int index = makeHeader.scmStockSumDayList_Header().length;
                String[] data = makeHeader.scmStockSumDayList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("scmStockSumMonth")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("자재월원장");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("자재월원장","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<SCM_STOCK_SUM_MONTH> list = excelMapper.scmStockSumMonthListDbList(excel);
                List<List<Object>> rows = makeBody.scmStockSumMonthList_Body(list);
                int index = makeHeader.scmStockSumMonthList_Header().length;
                String[] data = makeHeader.scmStockSumMonthList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("crmWorkList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("실적현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("실적현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<CRM_ORD_RECP> list = excelMapper.crmWorkListDbList(excel);
                List<List<Object>> rows = makeBody.crmWorkList_Body(list);
                int index = makeHeader.crmWorkList_Header().length;
                String[] data = makeHeader.crmWorkList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            } else if(excel.getName().equals("qmsRecvList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("수입검사현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("수입검사현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<QMS_RECV_SUB> list = excelMapper.qmsRecvDbList(excel);
                List<List<Object>> rows = makeBody.qmsRecvList_Body(list);
                int index = makeHeader.qmsRecvList_Header().length;
                String[] data = makeHeader.qmsRecvList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }else if(excel.getName().equals("qmsProdList")){
                // 시트 생성
                Sheet sheet = sxssfWorkbook.createSheet("출하검사현황");
                // 파일 이름 생성 <한글이 깨지기 때문에 인코딩 필수>
                excelName = URLEncoder.encode("출하검사현황","UTF-8");

                // DataTransfer [s]
                excel.setSite_code(getSessionData(req).getSite_code());
                List<QMS_PROD_SUB> list = excelMapper.qmsProdDbList(excel);
                List<List<Object>> rows = makeBody.qmsProdList_Body(list);
                int index = makeHeader.qmsProdList_Header().length;
                String[] data = makeHeader.qmsProdList_Header();
                // DataTransfer [e]

                // (MakeHeader) 헤더 생성
                row = sheet.createRow(rowNo++);
                row.setHeight((short)512);
                for(i=0; index > i; i++){
                    sheet.setColumnWidth((short)i, (short)7000);
                    cell = row.createCell(i);
                    cell.setCellStyle(setHeadStyle(sxssfWorkbook));
                    cell.setCellValue(data[i]);
                }

                // (MakeBody) 바디 생성
                for (i=0; list.size()>i; i++) {
                    row = sheet.createRow(rowNo++);
                    for (v=0; rows.get(i).size() > v; v++) {
                        cell = row.createCell(v);
                        cell.setCellStyle(setBodyStyle(sxssfWorkbook));
                        cell.setCellValue(String.valueOf(rows.get(i).get(v)));
                    }
                }
            }
            response(response,sxssfWorkbook,excelName,"ok",null);
        } catch (Exception e) {
            response(response,sxssfWorkbook,excelName,"fail",null);
        } finally {
            try {
                sxssfWorkbook.close();
            } catch (Exception ignore) {
            }
        }
    }

    public List<sysBPart> ExcelUploadReader(Excel excel) throws IOException, InvalidFormatException {
        OPCPackage opcPackage = OPCPackage.open(excel.getFiles().getInputStream());
        XSSFWorkbook xssfWorkbook = new XSSFWorkbook(opcPackage);
        Upload upload = new Upload();
        XSSFRow row = null;
        XSSFCell cell = null;
        XSSFSheet sheet = null;
        return upload.sysBPartListData(xssfWorkbook,sheet,row,cell);
    }

    public String excel_upload(Excel excel, HttpServletRequest req)  throws IOException, InvalidFormatException {
        OPCPackage opcPackage = OPCPackage.open(excel.getFiles().getInputStream());
        XSSFWorkbook xssfWorkbook = new XSSFWorkbook(opcPackage);
        Upload upload = new Upload();
        XSSFRow row = null;
        XSSFCell cell = null;
        XSSFSheet sheet = null;
        List<sysBPart> list = upload.sysBPartSetListData(xssfWorkbook,sheet,row,cell, req);
        try {
            for(sysBPart vo: list){
                excelMapper.sysBPartSetListData(vo);
            }
            return "업로드가 완료되었습니다.";
        }catch (Exception e){
            return " 중복된 키 값이 포함되어있습니다. \n 엑셀 데이터를 확인 후 재업로드 해주세요.";
        }
    }
}

