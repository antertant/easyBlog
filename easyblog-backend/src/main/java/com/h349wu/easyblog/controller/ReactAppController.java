package com.h349wu.easyblog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactAppController {

    @RequestMapping(value = { "/*" })
    public String Home() {
        return "index.html";
    }

}
