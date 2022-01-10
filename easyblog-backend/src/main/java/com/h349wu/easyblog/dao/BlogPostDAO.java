package com.h349wu.easyblog.dao;

import com.h349wu.easyblog.modal.BlogPost;

import java.util.List;

public interface BlogPostDAO {

    List<BlogPost> get();

    BlogPost get(int id);

    List<BlogPost> getAbstracts();

    List<BlogPost> getAbstractByPage(int page);

    void update(BlogPost post);

    void add(BlogPost post);

    void delete(int id);

    void delete(String article_title);

}
