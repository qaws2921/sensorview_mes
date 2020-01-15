package mes.sensorview.mesManager.Master.DTO;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class SYSERate {
    private String currency_code;
    private String code_type;
    private String start_date;
    private String stop_date;
    private double exch_rate;
    private String use_yn;
    private String user_code;
    private String create_date;
    private String update_date;

    private int rownum;
    private int rownum_page;
    private int rec_count;

    private int currency_unit;
    private String currency_name;

    private String keyword;

}
