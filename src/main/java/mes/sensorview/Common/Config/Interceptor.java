package mes.sensorview.Common.Config;

import mes.sensorview.Common.Interceptor.Handler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * <javadoc>
 * 인터셉터 세팅
 * @author      김재일
 * @version     1.0
 * @since       2019-11-14
 **/
@Configuration
public class Interceptor implements WebMvcConfigurer {

    @Autowired
    private Handler handler;


    @Value("${resources.location}")
    private String resourcesLocation;
    @Value("${resources.uri_path:}")
    private String resourcesUriPath;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(resourcesUriPath + "/**")
                .addResourceLocations("file://" + resourcesLocation);


    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(handler)
                .addPathPatterns("/*")
                .excludePathPatterns("/bdr_*")
                .excludePathPatterns("/ImgUpload")
                .excludePathPatterns("/bcd")
                .excludePathPatterns("/getNM")
                .excludePathPatterns("/sendmsg")
                .excludePathPatterns("/uploads")
                .excludePathPatterns("/testFile")
                .excludePathPatterns("/loginAction")
                .excludePathPatterns("/logout")
                .excludePathPatterns("/excel_*")
                .excludePathPatterns("/login")
                .excludePathPatterns("/sysAuthProgramList")
                .excludePathPatterns("/FileUploads");

    }
}
