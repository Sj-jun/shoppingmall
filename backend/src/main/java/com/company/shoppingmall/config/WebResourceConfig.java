package com.company.shoppingmall.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

@Configuration
public class WebResourceConfig implements WebMvcConfigurer {
    private final String nexacroFrontLocation;

    public WebResourceConfig(@Value("${nexacro.front.path}") String nexacroFrontPath) {
        this.nexacroFrontLocation = toFileLocation(nexacroFrontPath);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
                .addResourceLocations(
                        nexacroFrontLocation,
                        "classpath:/static/shoppingmallFront/"
                )
                .setCacheControl(CacheControl.noStore().mustRevalidate().cachePrivate().sMaxAge(0, TimeUnit.SECONDS));
    }

    private String toFileLocation(String rawPath) {
        Path path = Paths.get(rawPath).toAbsolutePath().normalize();
        String location = path.toUri().toString();
        return location.endsWith("/") ? location : location + "/";
    }
}
