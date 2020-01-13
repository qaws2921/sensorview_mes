package mes.sensorview.mesQms.Shipment.DTO;

import lombok.Data;

@Data
public class QMS_PROD_NG_SUM {
    private String work_date;
    private int qc_qty;
    private int ng_qty;
    private String qc_ratio;
}
