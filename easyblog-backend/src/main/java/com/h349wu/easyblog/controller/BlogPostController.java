package com.h349wu.easyblog.controller;


import com.alibaba.fastjson.JSON;
import com.h349wu.easyblog.modal.BlogPost;
import com.h349wu.easyblog.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogPost")
public class BlogPostController {

    @Autowired
    private BlogPostService blogPostService;

    @GetMapping("/getAll")
    public List<BlogPost> get() { return blogPostService.get(); }

    @GetMapping("/getById/{id}")
    public BlogPost get(@PathVariable int id) { return blogPostService.get(id); }

    @GetMapping("/getAllAbstracts")
    public List<BlogPost> getAbstracts() { return blogPostService.getAbstracts(); }

    @GetMapping("/getAbstractsByPage/{page}")
    public List<BlogPost> getAbstractByPage(@PathVariable int page) {
        return blogPostService.getAbstractByPage(page - 1); // 0-indexed data
    }

    @PostMapping("/updatePost")
    public BlogPost update(@RequestBody String post) {
        BlogPost blogPost = JSON.parseObject(post, BlogPost.class);
        blogPostService.update(blogPost);
        return blogPost;
    }

    @PostMapping("/add")
    public BlogPost add(@RequestBody String post) {
        BlogPost blogPost = JSON.parseObject(post, BlogPost.class);
        blogPostService.add(blogPost);
        return blogPost;
    }
//    @PostMapping("/add")
//    public BlogPost add(@RequestParam("article")Object post) {
//        BlogPost blogPost = JSON.parseObject(post, BlogPost.class);
//        blogPostService.add(blogPost);
//        return blogPost;
//    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        blogPostService.delete(id);
        return "Post {" + id + "} deleted";
    }

//    @DeleteMapping("/delete/{title}")
//    public String delete(@PathVariable String title) {
//        blogPostService.delete(title);
//        return "Post [" + title + "] deleted";
//    }

}
