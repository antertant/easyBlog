package com.h349wu.easyblog.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;

@RestController
@RequestMapping("/api/aboutMe")
public class AboutMeController {

    private class AboutMe {
        private String content;

        public void setContent(String content) {
            this.content = content;
        }

        public String getContent() {
            return this.content;
        }
    }

    String filePath = "D:\\Blog\\easyBlog\\easyblog-backend\\src\\main\\java\\com\\h349wu\\easyblog\\aboutMe.md";

    @GetMapping
    public AboutMe get() {
        try (FileInputStream fis = new FileInputStream(filePath)) {
            try (BufferedReader br = new BufferedReader(new InputStreamReader(fis))) {
                String line = br.readLine();
                StringBuilder ans = new StringBuilder();
                while(line!=null){
                    ans.append(line);
                    ans.append("\n\n");
                    line = br.readLine();
                }
                AboutMe about = new AboutMe();
                about.setContent(ans.toString());
                return about;
            }
        } catch (Exception e) {
                System.out.println(e.getMessage());
                return null;
        }
    }

}
