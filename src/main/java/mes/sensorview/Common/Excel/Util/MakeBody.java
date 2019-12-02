package mes.sensorview.Common.Excel.Util;

import lombok.extern.slf4j.Slf4j;
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
import java.util.ArrayList;
import java.util.List;

/** *
 * <pre>
 *     MakeBody
 *     셀 데이터를 생성하는 클래스
 * </pre>
 * @author 김재일
 * @since 2019-11-27
 * @version 1.0
 * **/
@Slf4j
public class MakeBody {
    // 전역변수 선언
    List<Object> obj = null;

    // sysBPart 데이터 생성 함수
    public List<List<Object>> sysBPart_Body(List<sysBPart> list){
        List<List<Object>> content = new ArrayList<>();
        try{
            if(list.size()!=0){
                for(sysBPart data : list){
                    obj = new ArrayList<>();
                    obj.add(data.getPart_grp_name());
                    obj.add(data.getPart_code());
                    obj.add(data.getPart_name());
                    obj.add(data.getLoc_name());
                    obj.add(data.getSupp_name());
                    obj.add(data.getSpec());
                    obj.add(data.getUnit_name());
                    obj.add(data.getPart_grp_code());
                    obj.add(data.getI_standard_name());
                    obj.add(data.getI_category_name());
                    obj.add(data.getMax_qty());
                    obj.add(data.getMin_qty());
                    obj.add(data.getUser_name());
                    obj.add(data.getUpdate_date());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }

    public List<List<Object>> scmReqOrder_Body(List<SCM_REQ_ORD> list) {
        List<List<Object>> content = new ArrayList<>();
        try{
            if(list.size()!=0){
                for(SCM_REQ_ORD data : list){
                    obj = new ArrayList<>();
                    obj.add(data.getWork_date());
                    obj.add(data.getReq_no());
                    obj.add(data.getOrd_no());
                    obj.add(data.getSupp_name());
                    obj.add(data.getEnd_supp_name());
                    obj.add(data.getEnd_date());
                    obj.add(data.getPart_grp_name());
                    obj.add(data.getPart_code());
                    obj.add(data.getPart_name());
                    obj.add(data.getSpec());
                    obj.add(data.getUnit_name());
                    obj.add(data.getQty());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }

    public List<List<Object>> scmOrderList_Body(List<SCM_IN_ORD_SUB> list) {
        List<List<Object>> content = new ArrayList<>();
        try{
            if(list.size()!=0){
                for(SCM_IN_ORD_SUB data : list){
                    obj = new ArrayList<>();
                    obj.add(data.getWork_date());
                    obj.add(data.getOrd_no());
                    obj.add(data.getSupp_name());
                    obj.add(data.getPart_grp_name());
                    obj.add(data.getPart_code());
                    obj.add(data.getPart_name());
                    obj.add(data.getSpec());
                    obj.add(data.getUnit_name());
                    obj.add(data.getStatus_name());
                    obj.add(data.getOrd_qty());
                    obj.add(data.getQty());
                    obj.add(data.getQty()); // 미입고 임시로 입고수량 받을 예정
                    obj.add(data.getUser_name());
                    obj.add(data.getUpdate_date());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }

    public List<List<Object>> scmInList_Body(List<SCM_IN_SUB> list) {
        List<List<Object>> content = new ArrayList<>();
        try{
            if(list.size()!=0){
                for(SCM_IN_SUB data : list){
                    obj = new ArrayList<>();
                    obj.add(data.getWork_date());
                    obj.add(data.getIn_no());
                    obj.add(data.getSupp_name());
                    obj.add(data.getPart_grp_name());
                    obj.add(data.getPart_code());
                    obj.add(data.getPart_name());
                    obj.add(data.getSpec());
                    obj.add(data.getUnit_name());
                    obj.add(data.getQty());
                    obj.add(data.getQty()); // 검사결과 임시로 입고수량 받을 예정
                    obj.add(data.getQty()); // MBR 임시로 입고수량 받을 예정
                    obj.add(data.getStatus_name());
                    obj.add(data.getUser_name());
                    obj.add(data.getUpdate_date());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }

    public List<List<Object>> scmOutList_Body(List<SCM_OUT_SUB> list) {
        List<List<Object>> content = new ArrayList<>();
        try{
            if(list.size()!=0){
                for(SCM_OUT_SUB data : list){
                    obj = new ArrayList<>();
                    obj.add(data.getWork_date());
                    obj.add(data.getOut_no());
                    obj.add(data.getLine_name());
                    obj.add(data.getPart_grp_name());
                    obj.add(data.getPart_code());
                    obj.add(data.getPart_name());
                    obj.add(data.getSpec());
                    obj.add(data.getUnit_name());
                    obj.add(data.getQty());
                    obj.add(data.getUser_name());
                    obj.add(data.getUpdate_date());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }

    public List<List<Object>> scmStockRetList_Body(List<SCM_STOCK_RET_SUB> list) {
        List<List<Object>> content = new ArrayList<>();
        try{
            if(list.size()!=0){
                for(SCM_STOCK_RET_SUB data : list){
                    obj = new ArrayList<>();
                    obj.add(data.getWork_date());
                    obj.add(data.getRet_no());
                    obj.add(data.getSupp_name());
                    obj.add(data.getPart_grp_name());
                    obj.add(data.getPart_code());
                    obj.add(data.getPart_name());
                    obj.add(data.getSpec());
                    obj.add(data.getUnit_name());
                    obj.add(data.getQty());
                    obj.add(data.getUser_name());
                    obj.add(data.getUpdate_date());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }

    public List<List<Object>> scmInLineList_Body(List<SCM_REIN_SUB> list) {
        List<List<Object>> content = new ArrayList<>();
        try{
            if(list.size()!=0){
                for(SCM_REIN_SUB data : list){
                    obj = new ArrayList<>();
                    obj.add(data.getWork_date());
                    obj.add(data.getIn_no());
                    obj.add(data.getLine_name());
                    obj.add(data.getPart_grp_name());
                    obj.add(data.getPart_code());
                    obj.add(data.getPart_name());
                    obj.add(data.getSpec());
                    obj.add(data.getUnit_name());
                    obj.add(data.getQty());
                    obj.add(data.getUser_name());
                    obj.add(data.getUpdate_date());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }

    public List<List<Object>> scmStockList_Body(List<SCM_STOCK_LIST> list) {
        List<List<Object>> content = new ArrayList<>();
        try{
            if(list.size()!=0){
                for(SCM_STOCK_LIST data : list){
                    obj = new ArrayList<>();
                    obj.add(data.getPart_type_name());
                    obj.add(data.getPart_grp_name());
                    obj.add(data.getPart_name());
                    obj.add(data.getSpec());
                    obj.add(data.getUnit_name());
                    obj.add(data.getSupp_name());
                    obj.add(data.getMin_qty());
                    obj.add(data.getMax_qty());
                    obj.add(data.getQty());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }

    public List<List<Object>> scmStockSumDayList_Body(List<SCM_STOCK_SUM_DAY> list) {
        List<List<Object>> content = new ArrayList<>();
        try{
            if(list.size()!=0){
                for(SCM_STOCK_SUM_DAY data : list){
                    obj = new ArrayList<>();
                    obj.add(data.getPart_grp_name());
                    obj.add(data.getPart_code());
                    obj.add(data.getPart_name());
                    obj.add(data.getSpec());
                    obj.add(data.getUnit_name());
                    obj.add(data.getPrev_qty());
                    obj.add(data.getIn_qty());
                    obj.add(data.getOut_qty());
                    obj.add(data.getQty());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }

    public List<List<Object>> scmStockSumMonthList_Body(List<SCM_STOCK_SUM_MONTH> list) {
        List<List<Object>> content = new ArrayList<>();
        try{
            if(list.size()!=0){
                for(SCM_STOCK_SUM_MONTH data : list){
                    obj = new ArrayList<>();
                    obj.add(data.getPart_grp_name());
                    obj.add(data.getPart_code());
                    obj.add(data.getPart_name());
                    obj.add(data.getSpec());
                    obj.add(data.getUnit_name());
                    obj.add(data.getPrev_qty());
                    obj.add(data.getIn_qty());
                    obj.add(data.getOut_qty());
                    obj.add(data.getQty());
                    content.add(obj);
                }
            }
        }catch (Exception e){
            log.info("error code : "+ e);
        }
        return content;
    }
}
