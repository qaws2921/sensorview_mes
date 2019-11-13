package mes.sensorview.Common.DataTransferObject;

import lombok.Data;
import java.util.List;

@Data
public class RESTful {
    private List<?> rows;
    private int page;
    private int total;
    private int records;
}
