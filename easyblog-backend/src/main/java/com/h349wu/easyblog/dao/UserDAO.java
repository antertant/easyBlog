package com.h349wu.easyblog.dao;

import com.h349wu.easyblog.modal.User;

import java.util.List;

public interface UserDAO {

    List<User> get();

    User get(int id);

    void update(User user);

    void add(User user);

    void delete(int id);

}
