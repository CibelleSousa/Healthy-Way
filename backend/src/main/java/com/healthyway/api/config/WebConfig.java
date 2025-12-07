package com.healthyway.api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Libera tudo
                .allowedOrigins("http://localhost:4200") // SÓ para o Angular
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
    }
}