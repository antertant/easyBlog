package com.h349wu.easyblog.service;

import com.h349wu.easyblog.dao.BlogPostDAO;
import com.h349wu.easyblog.modal.BlogPost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BlogPostServiceImp implements BlogPostService{

    @Autowired
    private BlogPostDAO blogPostDAO;

    @Transactional
    @Override
    public List<BlogPost> get() {return blogPostDAO.get();}

    @Transactional
    @Override
    public BlogPost get(int id) {return blogPostDAO.get(id);}

    @Transactional
    @Override
    public List<BlogPost> getAbstracts() {
        return blogPostDAO.getAbstracts();
    }

    @Transactional
    @Override
    public List<BlogPost> getAbstractByPage(int page) {
        return blogPostDAO.getAbstractByPage(page);
    }

    @Transactional
    @Override
    public void update(BlogPost post) {
        blogPostDAO.update(post);
    }

    @Transactional
    @Override
    public void add(BlogPost post) {
        blogPostDAO.add(post);
    }

    @Transactional
    @Override
    public void delete(int id) {
        blogPostDAO.delete(id);
    }

    @Transactional
    @Override
    public void delete(String articleTitle) {
        blogPostDAO.delete(articleTitle);
    }
}
