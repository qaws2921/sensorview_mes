package mes.sensorview.Common.Excel.Util;

import mes.sensorview.Common.Excel.DTO.Header;


public class MakeHeader {

    public String[] sysBPart_Header() {
        String[] data = {"품목구분", "품목코드", "품목명", "보관로케이션", "업체명", "규격", "단위", "L/T", "검사기준", "검사구분", "재고최대", "재고최소", "등록자", "수정일"};
        return data;
    }
}
