package com.h349wu.easyblog.service;

import com.h349wu.easyblog.dao.UserDAO;
import com.h349wu.easyblog.modal.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImp implements UserService{

    @Autowired
    private UserDAO userDAO;

    @Override
    public List<User> get() {
        return userDAO.get();
    }

    @Override
    public User get(int id) {
        return userDAO.get(id);
    }

    @Override
    public void update(User user) {
        userDAO.update(user);
    }

    @Override
    public void add(User user) {
        userDAO.add(user);
    }

    @Override
    public void delete(int id) {
        userDAO.delete(id);
    }
}
