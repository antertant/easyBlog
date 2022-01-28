package com.h349wu.easyblog.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Paths;

@Component
public class ImgUtil {

    public static final String rootPath = "/home/ubuntu/work/Tomcat/localhost/ROOT";
//    public static final String rootPath = "D:/Blog/work/Tomcat/localhost/ROOT";
    public static final String recordPath = "/prefix";

    private final ResourceLoader resourceLoader;

    @Autowired
    public ImgUtil(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    public int getPrefix() {
        File file = new File(rootPath+recordPath);

        int index = -1;
        try (InputStreamReader fis = new InputStreamReader(new FileInputStream(file))) {
            try (BufferedReader buffer = new BufferedReader(fis)) {
                index = Integer.parseInt(buffer.readLine());
            }
        } catch (Exception e) {
            System.err.println("Read index file error.");
        }

        try (OutputStreamWriter writer = new OutputStreamWriter(new FileOutputStream(file))) {
            try (BufferedWriter buffer = new BufferedWriter(writer)) {
                buffer.write(String.valueOf(index + 1));
            }
        } catch (Exception e) {
            System.err.println("Write index file error.");
        }

        return index;
    }

    public String storeImg(MultipartFile img) throws Exception{
        String originalName = img.getOriginalFilename();
        String suffix = originalName.substring(originalName.indexOf("."));
        String imgName = getPrefix() + suffix;
        img.transferTo(new File(imgName));
        return imgName;
    }

    public Resource getImg(String imgName) {
        String imgPath = Paths.get(rootPath,imgName).toString();
        Resource resource = resourceLoader.getResource("file:" + imgPath);
        return resource;
    }

}
