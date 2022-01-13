package com.h349wu.easyblog.modal;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "blog_post")
public class BlogPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer article_id;

    @Column(nullable = false)
    private String article_title;

    @Column(nullable = false)
    private String article_abstract;

    @Column(nullable = false)
    private String article_content;

    @Column(nullable = false)
    private Date article_post_time;

    public Integer getId() {
        return article_id;
    }

    public String getArticleTitle() {
        return article_title;
    }

    public String getArticleAbstract() {
        return article_abstract;
    }

    public String getArticleContent() {
        return article_content;
    }

    public Date getArticlePostTime() {
        return article_post_time;
    }

    public void setId(Integer id) {
        this.article_id = id;
    }

    public void setArticleTitle(String articleTitle) {
        this.article_title = articleTitle;
    }

    public void setArticleAbstract(String articleAbstract) {
        this.article_abstract = articleAbstract;
    }

    public void setArticleContent(String articleContent) {
        this.article_content = articleContent;
    }

    public void setArticlePostTime(Date articlePostTime) {
        this.article_post_time = articlePostTime;
    }
}
