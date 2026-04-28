package com.company.shoppingmall.config;

import java.io.File;

import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.nexacro.xeni.services.GridExportImportServlet;

@Configuration
public class XeniConfig {

    @Bean
    public ServletContextInitializer xeniServletContextInitializer() {
        return servletContext -> {
            File baseDir = new File(System.getProperty("java.io.tmpdir"), "shoppingmall-xeni");
            File exportDir = new File(baseDir, "export");
            File importDir = new File(baseDir, "import");

            exportDir.mkdirs();
            importDir.mkdirs();

            servletContext.setInitParameter("export-path", "file://" + normalizePath(exportDir));
            servletContext.setInitParameter("import-path", "file://" + normalizePath(importDir));
            servletContext.setInitParameter("monitor-enabled", "true");
            servletContext.setInitParameter("monitor-cycle-time", "30/sec");
            servletContext.setInitParameter("file-storage-time", "10");
            servletContext.setInitParameter("numFmt-lang", "ko");
        };
    }

    @Bean
    public ServletRegistrationBean<GridExportImportServlet> xeniServletRegistration() {
        ServletRegistrationBean<GridExportImportServlet> registration =
                new ServletRegistrationBean<>(new GridExportImportServlet(), "/XExportImport.do", "/XExportImport");
        registration.setName("XExportImport");
        registration.setLoadOnStartup(1);
        return registration;
    }

    private String normalizePath(File dir) {
        return dir.getAbsolutePath().replace('\\', '/') + "/";
    }
}
