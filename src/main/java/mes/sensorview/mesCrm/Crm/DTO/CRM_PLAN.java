package mes.sensorview.mesCrm.Crm.DTO;

import lombok.Data;

@Data
public class CRM_PLAN {
    private String site_code;
    private String plan_year;
    private int quarter;
    private String part_code;
    private String plan_name;
    private int month_plan1;
    private int month_plan2;
    private int month_plan3;
    private int month1_plan1;
    private int month1_plan2;
    private int month1_plan3;
    private int month2_plan1;
    private int month2_plan2;
    private int month2_plan3;
    private int month3_plan1;
    private int month3_plan2;
    private int month3_plan3;
    private int plan_qty;
    private int plan1_qty;
    private int plan2_qty;
    private int plan3_qty;
    private int total_qty;
    private int diff_qty;
    private int prod_qty;
    private int stock_qty;
    private String prod_desc;
    private String user_code;
    private String create_date;
    private String update_date;
    private String user_name;
    private String part_name;
    private int rownum;
    private int rownum_page;
    private int rec_count;
    private String keyword;

}



