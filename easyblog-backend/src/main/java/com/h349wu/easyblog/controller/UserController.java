package com.h349wu.easyblog.controller;

import com.h349wu.easyblog.modal.User;
import com.h349wu.easyblog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getUser={id}")
    public User getUser(@PathVariable int id) {
        return userService.get(id);
    }

    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        userService.add(user);
        return user;
    }

    @GetMapping("/verifyAuth={id}")
    public String verifyAuth(@PathVariable int id) {
        User user = userService.get(id);
        if (user.getAuthority() == 1) {
            return "true";
        }
        return "false";
    }
}
