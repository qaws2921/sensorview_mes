package mes.sensorview.Common.Vaild;

import mes.sensorview.Common.DataTransferObject.Message;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;

public class ValidFunction {
    public Message ValidData(BindingResult errors){
        Message msg = new Message();
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
