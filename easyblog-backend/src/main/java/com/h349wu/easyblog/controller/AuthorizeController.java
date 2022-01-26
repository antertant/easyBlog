package com.h349wu.easyblog.controller;

import com.h349wu.easyblog.component.GitHubProvider;
import com.h349wu.easyblog.dto.AccessTokenDTO;
import com.h349wu.easyblog.modal.User;
import com.h349wu.easyblog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/api")
public class AuthorizeController {

    @Autowired
    private GitHubProvider gitHubProvider;

    @Autowired
    private UserService userService;

    @GetMapping("/callback")
    public String callback(@RequestParam(name = "code") String code) {
        AccessTokenDTO accessTokenDTO = new AccessTokenDTO();
        accessTokenDTO.setClient_id("client_id");
        accessTokenDTO.setClient_secret("client_secret");
        accessTokenDTO.setCode(code);
        accessTokenDTO.setRedirect_uri("http://localhost:8080/api/callback");
        String accessToken = gitHubProvider.getAccessToken(accessTokenDTO);
        User user = gitHubProvider.getUser(accessToken);
        if (user.getId().equals(25704124)) user.setAuthority(1);
        userService.add(user);
        return "redirect:http://localhost:3000/user?user_id=" + user.getId();
    }
}
