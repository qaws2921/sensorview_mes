package mes.sensorview.Mapper.mesManager.Master;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesManager.Master.DTO.*;

import java.util.List;

 public interface MasterMapper {


    List<SYSCommon> sysCommonGet(Page p);
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

     List<SYSCommon> getCommonGroup(Page p);
 }
