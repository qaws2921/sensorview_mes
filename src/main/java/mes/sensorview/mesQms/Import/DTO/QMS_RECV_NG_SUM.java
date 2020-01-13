package mes.sensorview.mesQms.Import.DTO;

import lombok.Data;

@Data
public class QMS_RECV_NG_SUM {
   private String work_date;
    private int qc_qty;
    private int ng_qty;
    private String qc_ratio;
}
