package mes.sensorview.Common.Excel.Util;

/** *
 * <pre>
 *     MakeHeader
 *     셀 헤더를 생성하는 클래스
 * </pre>
 * @author 김재일
 * @since 2019-11-27
 * @version 1.0
 * **/
public class MakeHeader {
    public String[] sysBPart_Header() {
        String[] data = {"품목구분", "품목코드", "품목명", "보관로케이션", "업체명", "규격", "단위", "L/T", "검사기준", "검사구분", "재고최대", "재고최소", "등록자", "수정일"};
        return data;
    }

    public String[] scmReqOrder_Header() {
        String[] data = {"일자","접수번호","수주번호","수주처","End User","납기일","품목그룹","품번","품명","규격","단위","수량"};
        return data;
    }

    public String[] scmOrderList_Header() {
        String[] data = {"발주일자","발주번호","업체명","품목그룹","품번","품명","규격","단위","상태","발주수량","입고수량","미입고","등록자","등록일시"};
        return data;
    }

    public String[] scmInList_Header() {
        String[] data = {"입고일자","입고번호","업체명","품목그룹","품번","품명","규격","단위","입고수량","검사결과","MBR","상태","등록자","입고일시"};
        return data;
    }

    public String[] scmOutList_Header() {
        String[] data= {"출고일자","출고번호","공정명","품목그룹","품번","품명","규격","단위","출고수량","등록자","출고일시"};
        return data;
    }

    public String[] scmStockRetList_Header() {
        String[] data= {"반출일자","반출번호","업체명","품목그룹","품번","품명","규격","단위","반출수량","등록자","반출일시"};
        return data;
    }

    public String[] scmInLineList_Header() {
        String[] data= {"입고일자","입고번호","공정명","품목그룹","품번","품명","규격","단위","입고수량","등록자","입고일시"};
        return data;
    }

    public String[] scmStockList_Header() {
        String[] data= {"품목구분","품목코드","품목명","규격","단위","공급업체","적정재고(최소)","적정재고(최대)","재고량"};
        return data;
    }

    public String[] scmStockSumDayList_Header() {
        String[] data= {"품목그룹","품목코드","품목명","규격","단위","전일재고","금일입고","금일출고","재고"};
        return data;
    }

    public String[] scmStockSumMonthList_Header() {
        String[] data= {"품목그룹","품목코드","품목명","규격","단위","전월재고","금월입고","금월출고","재고"};
        return data;
    }
}
