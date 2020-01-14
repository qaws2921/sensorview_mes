package mes.sensorview.Mapper.mesSCM.InOut;

import mes.sensorview.Common.DataTransferObject.Message;
import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;
import mes.sensorview.mesScm.InOut.DTO.*;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface InOutMapper {
    Message scmInAdd(SCM_IN si);
    List<SCM_IN> scmInGet(Page p);
    List<SCM_OUT> scmOutGet(Page p);
    List<SCM_IN_LINE> scmInLineGet(Page p);
    List<SCM_RET_SUB> scmStockRetGet(Page p);

    List<SCM_IN> scmInListGet(Page p);



    List<SCM_IN_SUB> scmInSub1Get(Page p);

    Message scmInDel(Page p);

    List<SCM_OUT_ORD> scmOutOrderGet(Page p);

    Message scmOutOrderAdd(SCM_OUT_ORD soo);

    List<SCM_OUT_ORD_SUB> scmOutOrderSup1Get(Page p);


    Message scmOutOrderDel(SCM_OUT_ORD soo);

    List<SCM_OUT_SUB> scmOutListGet(Page p);

    List<SCM_RET_SUB> scmStockRetListGet(Page p);

    List<SCM_REIN_SUB> scmInLineListGet(Page p);

    List<SCM_REIN_BCR> scmInLineSubListGet(Page p);

    List<SCM_IN_SUB_ORD> scmInLot2Get(Page p);
}
