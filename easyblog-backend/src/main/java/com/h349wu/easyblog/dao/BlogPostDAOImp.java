package com.h349wu.easyblog.dao;

import com.h349wu.easyblog.modal.BlogPost;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Repository
public class BlogPostDAOImp implements BlogPostDAO{

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<BlogPost> get() {
        String hql = "FROM BlogPost";
        Session currSession = entityManager.unwrap(Session.class);
        Query<BlogPost> query = currSession.createQuery(hql, BlogPost.class);
        return query.getResultList();
    }

    @Override
    public BlogPost get(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        return currSession.get(BlogPost.class, id);
    }

    @Override
    public List<BlogPost> getAbstracts() {
        Session currSession = entityManager.unwrap(Session.class);
        String hql = "SELECT article_title, article_abstract, article_post_time FROM BlogPost";
        Query query = currSession.createQuery(hql);
        List<Object[]> list = query.list();
        List<BlogPost> res = new ArrayList<>();
        for (Object[] object: list) {
            BlogPost post = new BlogPost();
            post.setArticleTitle((String)object[0]);
            post.setArticleAbstract((String)object[1]);
            post.setArticlePostTime((Date)object[2]);
            res.add(post);
        }
        return res;
    }

    @Override
    public void update(BlogPost post) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.update(post);
    }

    @Override
    public void add(BlogPost post) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(post);
    }

    @Override
    public void delete(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        BlogPost post = currSession.get(BlogPost.class, id);
        currSession.delete(post);
    }

    @Override
    public void delete(String articleTitle) {
        Session currSession = entityManager.unwrap(Session.class);
        String hql = "FROM BlogPost WHERE articleTitle=" + articleTitle;
        Query<BlogPost> post = currSession.createQuery(hql, BlogPost.class);
        currSession.delete(post.getResultList().get(0));
    }
}
