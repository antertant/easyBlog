package com.h349wu.easyblog.modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {
    @Id
    @Column
    private Integer id;

    @Column
    private String name;

    @Column
    private String avatar_url;

    @Column
    private Integer authority;

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAvatar_url() {
        return avatar_url;
    }

    public Integer getAuthority() {
        return authority;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAvatar_url(String avatar_url) {
        this.avatar_url = avatar_url;
    }

    public void setAuthority(Integer authority) {
        this.authority = authority;
    }
}
