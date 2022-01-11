package com.h349wu.easyblog.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;

@RestController
@RequestMapping("/api/aboutMe")
public class AboutMeController {

    String filePath = "D:\\Blog\\easyBlog\\easyblog-backend\\src\\main\\java\\com\\h349wu\\easyblog\\aboutMe.md";

    @GetMapping
    public String get() {
        try (FileInputStream fis = new FileInputStream(filePath)) {
            try (BufferedReader br = new BufferedReader(new InputStreamReader(fis))) {
                String line = br.readLine();
                StringBuilder ans = new StringBuilder(line);
                while(line!=null){
                    line = br.readLine();
                    ans.append(line);
                }
                return ans.toString();
            }
        } catch (Exception e) {
                System.out.println(e.getMessage());
                return "error";
        }
    }

}
