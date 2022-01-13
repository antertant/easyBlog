package com.h349wu.easyblog.modal;

import javax.persistence.*;

@Entity
@Table(name = "project_info")
public class ProjectInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer project_id;

    @Column(nullable = false)
    private String project_title;

    @Column
    private String project_image;

    @Column(nullable = false)
    private String project_description;

    @Column
    private String post_url;

    @Column
    private String git_url;

    public Integer getProject_id() {
        return project_id;
    }

    public String getProject_title() {
        return project_title;
    }

    public String getProject_image() {
        return project_image;
    }

    public String getProject_description() {
        return project_description;
    }

    public String getPost_url() {
        return post_url;
    }

    public String getGit_url() {
        return git_url;
    }

    public void setProject_id(Integer project_id) {
        this.project_id = project_id;
    }

    public void setProject_title(String project_title) {
        this.project_title = project_title;
    }

    public void setProject_image(String project_image) {
        this.project_image = project_image;
    }

    public void setProject_description(String project_description) {
        this.project_description = project_description;
    }

    public void setPost_url(String post_url) {
        this.post_url = post_url;
    }

    public void setGit_url(String git_url) {
        this.git_url = git_url;
    }
}
