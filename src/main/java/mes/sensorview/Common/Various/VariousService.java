package mes.sensorview.Common.Various;

import mes.sensorview.Common.DataTransferObject.Page;
import mes.sensorview.Common.DataTransferObject.RESTful;
import mes.sensorview.Common.Function.ReturnFunction;
import mes.sensorview.Common.Various.DTO.SYSPartType;
import mes.sensorview.Common.Various.DTO.SYSSupp;
import mes.sensorview.Common.Various.DTO.VT_PART_GROUP;
import mes.sensorview.Mapper.Various.VariousMapper;
import mes.sensorview.mesCrm.Crm.DTO.CRM_ORD_RECP;
import mes.sensorview.mesCrm.Crm.DTO.SYS_ASSY_CABLE;
import mes.sensorview.mesManager.Authority.DTO.SYSAuthProgram;
import mes.sensorview.mesManager.BOM.DTO.SYS_COMMON2_CD;
import mes.sensorview.mesManager.BOM.DTO.SYS_PART_GROUP2_CD;
import mes.sensorview.mesManager.BOM.DTO.SYS_PART_NM_CD;
import mes.sensorview.mesManager.Master.DTO.SYSCommon;
import mes.sensorview.mesManager.Master.DTO.SYSProdLine;
import mes.sensorview.mesPop.Standard.DTO.POP_LINE_USER_CD;
import mes.sensorview.mesPop.Standard.DTO.POP_ROUTE_CD;
import mes.sensorview.mesQms.Standard.DTO.SYS_QC_ITEM;
import mes.sensorview.mesScm.Standard.DTO.SYS_PART_GROUP;
import mes.sensorview.mesScm.Standard.DTO.sysBPart;
import mes.sensorview.mesScm.Standard.DTO.sysBPartGroup;
import mes.sensorview.mesScm.Standard.DTO.sysLoc;
import mes.sensorview.mesTpm.Machine.DTO.TPM_MACHINE_CD;
import mes.sensorview.mesTpm.RegItem.DTO.TPM_REG_ITEM_CD;
import mes.sensorview.mesWms.Stock.DTO.WMS_STOCK_TOTAL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

@Service
public class VariousService extends ReturnFunction {

    @Autowired
    private VariousMapper variousMapper;

    public RESTful sysSuppGet(Page p) {
        List<SYSSupp> rows = variousMapper.sysSuppGet(p);
        return getListData(rows , p);
    }

    public List<sysBPartGroup> sysBPartGroupSelectGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysBPartGroupSelectGet(p);
    }

    public List<sysLoc> sysLocAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysLocAllGet(p);
    }

    public List<SYSCommon> sysCommonUnitGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysCommonUnitGet(p);
    }

    public List<SYSCommon> sysCommonBoardGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysCommonBoardGet(p);
    }

    public RESTful sysBPartModalGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<sysBPart> rows = variousMapper.sysBPartModalGet(p);
        return getListData(rows , p);
    }


    public List<sysBPart> sysBPartAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysBPartAllGet(p);
    }

    public List<SYSCommon> sysCommonAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysCommonAllGet(p);
    }

    public List<SYSPartType> sysPartTypeGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        if (p.getKeyword() == null){
            p.setKeyword("");
        }
        return variousMapper.sysPartTypeGet(p);
    }

    public List<SYS_QC_ITEM> qmsQcItemAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.qmsQcItemAllGet(p);
    }

    public List<TPM_MACHINE_CD> tpmMachineAllGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.tpmMachineAllGet(p);
    }
    public List<SYSProdLine> getLine(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.getLine(p);
    }

    public List<TPM_REG_ITEM_CD> tpmMachineRegItemAllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.tpmMachineRegItemAllGet(p);
    }

    public SYSAuthProgram menuAuthGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        p.setUser_code(getSessionData(req).getUser_code());
        return variousMapper.menuAuthGet(p);
    }

    public RESTful crmOrderModalGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<CRM_ORD_RECP> rows = variousMapper.crmOrderModalGet(p);
        return getListData(rows , p);
    }

    public RESTful suppModalGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        List<SYSSupp> rows = variousMapper.suppModalGet(p);
        return getListData(rows, p);
    }

    public SYSPartType sysPartTypeOneGet(Page p, HttpServletRequest req) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysPartTypeOneGet(p);
    }

    public List<SYS_PART_GROUP> sysPartGroupAllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysPartGroupAllGet(p);
    }

    public List<VT_PART_GROUP> partGroup1(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.partGroup1(p);

    }

    public List<VT_PART_GROUP> partGroup2(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.partGroup2(p);
    }

    public List<VT_PART_GROUP> partGroup3(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.partGroup3(p);
    }

    public List<SYS_ASSY_CABLE> crmAssyCableAllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.crmAssyCableAllGet(p);
    }

    public List<SYS_PART_GROUP2_CD> sysPartGroup2AllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysPartGroup2AllGet(p);
    }

    public List<SYS_COMMON2_CD> sysPartNameGroupAllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysPartNameGroupAllGet(p);
    }

    public List<POP_ROUTE_CD> popRouteGroupAllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.popRouteGroupAllGet(p);
    }

    public List<SYS_PART_NM_CD> sysPartNameAllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysPartNameAllGet(p);
    }

    public List<SYSProdLine> sysProdLineAllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.sysProdLineAllGet(p);
    }

    public List<POP_LINE_USER_CD> popLineUserAllGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        return variousMapper.popLineUserAllGet(p);
    }

    public WMS_STOCK_TOTAL wmsStockTotalOneGet(HttpServletRequest req, Page p) {
        p.setSite_code(getSessionData(req).getSite_code());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        Calendar c1 = Calendar.getInstance();
        String strToday = sdf.format(c1.getTime());
        p.setKeyword(strToday);
        WMS_STOCK_TOTAL wst =  variousMapper.wmsStockTotalOneGet(p);
        if (wst == null){
            wst = new WMS_STOCK_TOTAL();
            wst.setQty(0);
        }
        return wst;
    }
}
