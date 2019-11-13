package mes.sensorview.Common.Config;

import mes.sensorview.Common.Interceptor.Handler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @DESC : 인터셉터 Setting
 * @생성자 : 김재일
 * @생성일 : 2019-11-06
 * **/
@Configuration
public class Interceptor implements WebMvcConfigurer {

    @Autowired
    private Handler handler;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(handler)
                .addPathPatterns("/test")
                .addPathPatterns("/ManagerManagement/*/*")
                .excludePathPatterns("/loginAction")
                .excludePathPatterns("/logout")
                .excludePathPatterns("/login");
    }
}
