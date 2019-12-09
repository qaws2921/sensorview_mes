package mes.sensorview.Common.Vaild;

import lombok.extern.slf4j.Slf4j;
import mes.sensorview.Common.DataTransferObject.Message;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;

@Slf4j
public class ValidFunction {
    public Message ValidData(BindingResult errors){
        Message msg = new Message();
        log.info("error = " + errors.hasErrors());
        if(errors.hasErrors()){
            for (ObjectError objectError : errors.getAllErrors()) {
                msg.setMessage(objectError.getDefaultMessage() + "를 입력하세요.");
                msg.setResult("NG");
            }
            return msg;
        }else{
            msg.setResult("OK");
            return msg;
        }
    }
}
