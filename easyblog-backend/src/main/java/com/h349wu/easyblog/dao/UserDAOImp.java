package com.h349wu.easyblog.dao;

import com.h349wu.easyblog.modal.User;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class UserDAOImp implements UserDAO{

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<User> get() {
        String hql = "FROM User ORDER BY name";
        Session currSession = entityManager.unwrap(Session.class);
        Query<User> query = currSession.createQuery(hql, User.class);
        return query.getResultList();
    }

    @Override
    public User get(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        return currSession.get(User.class, id);
    }

    @Override
    public void update(User user) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.update(user);
    }

    @Override
    public void add(User user) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(user);
    }

    @Override
    public void delete(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        User user = currSession.get(User.class, id);
        currSession.delete(user);
    }
}
