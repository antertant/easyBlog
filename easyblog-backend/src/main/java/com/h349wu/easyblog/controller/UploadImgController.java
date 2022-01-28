package com.h349wu.easyblog.controller;

import com.h349wu.easyblog.component.ImgUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class UploadImgController {

    @Autowired
    ImgUtil imgUtil;

    @PostMapping("/uploadImg")
    public String storeImg(@RequestParam("myImage")MultipartFile img) {
        if (img == null) {
//            return ResponseEntity.unprocessableEntity().build();
            return "";
        } else {
            try {
                String imgName = imgUtil.storeImg(img);
//                return ResponseEntity.ok("api/getImg/" + imgName);
                return "/api/getImg/"+imgName;
            } catch (Exception e) {
                return "error";
            }
        }
    }

    @GetMapping("getImg/{imgName}")
    public ResponseEntity<?> getImg(@PathVariable String imgName) {
        try {
            return ResponseEntity.ok(imgUtil.getImg(imgName));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
