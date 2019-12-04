package mes.sensorview.mesQms.Standard.DTO;

import lombok.Data;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.NotNull;

@Data
public class SYS_QC_ITEM
{
    @NotNull(message = "사이트코드")
    private String site_code;
    @NotNull(message = "검사그룹")
    private String qc_group;
    private String qc_group_name;
    @NotNull(message = "검사유형")
    private String qc_type;
    private String qc_type_name;
    @NotNull(message = "검사코드")
    private String qc_code;
    @NotNull(message = "검사이름")
    private String qc_name;
    @NotNull(message = "유저코드")
    private String user_code;
    private String user_name;
    private String create_date;
    private String update_date;
    private String keyword;
    private int rownum;
    private int rec_count;
}
