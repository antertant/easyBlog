package com.h349wu.easyblog.service;

import com.h349wu.easyblog.modal.BlogPost;

import java.util.List;

public interface BlogPostService {

    List<BlogPost> get();

    BlogPost get(int id);

    List<BlogPost> getAbstracts();

    List<BlogPost> getAbstractByPage(int page);

    void update(BlogPost post);

    void add(BlogPost post);

    void delete(int id);

    void delete(String articleTitle);

}
