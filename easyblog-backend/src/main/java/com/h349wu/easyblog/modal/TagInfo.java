package com.h349wu.easyblog.modal;

import javax.persistence.*;

@Entity
@Table(name = "tag_info")
public class TagInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer tag_id;

    @Column(nullable = false)
    private String tag_name;

    @OneToOne
    @JoinColumn(name = "article_id", referencedColumnName = "article_id")
    private BlogPost post;

    @OneToOne
    @JoinColumn(name = "project_id", referencedColumnName = "project_id")
    private ProjectInfo project;

    public Integer getTag_id() {
        return tag_id;
    }

    public String getTag_name() {
        return tag_name;
    }

    public BlogPost getPost() {
        return post;
    }

    public ProjectInfo getProject() {
        return project;
    }

    public void setTag_id(Integer tag_id) {
        this.tag_id = tag_id;
    }

    public void setTag_name(String tag_name) {
        this.tag_name = tag_name;
    }

    public void setPost(BlogPost post) {
        this.post = post;
    }

    public void setProject(ProjectInfo project) {
        this.project = project;
    }
}
