package com.h349wu.easyblog.dao;


import com.h349wu.easyblog.modal.ProjectInfo;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class ProjectInfoDAOImp implements ProjectDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<ProjectInfo> get() {
        String hql = "FROM ProjectInfo";
        Session currSession = entityManager.unwrap(Session.class);
        Query<ProjectInfo> query = currSession.createQuery(hql, ProjectInfo.class);
        return query.getResultList();
    }

    @Override
    public ProjectInfo get(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        return currSession.get(ProjectInfo.class, id);
    }

    @Override
    public void update(ProjectInfo project) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.update(project);
    }

    @Override
    public void add(ProjectInfo project) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(project);
    }

    @Override
    public void delete(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        ProjectInfo project = currSession.get(ProjectInfo.class, id);
        currSession.delete(project);
    }
}
