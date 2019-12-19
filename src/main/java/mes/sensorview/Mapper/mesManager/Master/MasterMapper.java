package mes.sensorview.Mapper.mesManager.Master;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesManager.Master.DTO.*;

import java.util.List;

 public interface MasterMapper {

    //공통코드관리
    //공통코드관리 코드그룹 목록
    List<SYSCommon> getCommonGroup(Page p);
    //공통코드관리 그리드 리스트 조회
    List<SYSCommon> sysCommonGet(Page p);
    //공통코드관리 공통코드 추가
    Message sysCommonAdd(SYSCommon vo);
    //공통코드관리 공통코드 삭제
    Message sysCommonDelete(Page p);
    //공통코드관리 공통코드 수정 , 그리드에서 하나의 항목 값 조회
    SYSCommon sysCommonOneGet(Page p);



    List<SYSCommon> sysCommonDutyGet(Page p);
    List<SYSMsg> sysMsgGet(Page p);
    Message sysMsgAdd(SYSMsg smv);
    Message sysMsgDelete(Page p);
    List<SYSBoard> sysBoardGet(Page p);
    Message sysBoardAdd(SYSBoard sbv);
    Message sysBoardDelete(Page p);
    List<SYSProdLine> sysProdLineGet(Page p);
    Message sysProdLineAdd(SYSProdLine spv);
    Message sysProdLineDelete(Page p);
    List<SYSCargo> sysCargoGet(Page p);
    Message sysCargoAdd(SYSCargo scv);
    Message sysCargoDelete(Page p);

     List<SYSCargo> sysCargoBAllGet(Page p);





     List<SYSSupp> sysSuppListGet(Page p);

     Message sysSuppListDel(Page p);

     SYSSupp sysSuppOneGet(Page p);

     Message sysSuppAdd(SYSSupp vo);
 }
