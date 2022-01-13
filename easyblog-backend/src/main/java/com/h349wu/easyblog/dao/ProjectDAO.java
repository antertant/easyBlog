package com.h349wu.easyblog.dao;

import com.h349wu.easyblog.modal.ProjectInfo;

import java.util.List;

public interface ProjectDAO {

    List<ProjectInfo> get();

    ProjectInfo get(int id);

    void update(ProjectInfo project);

    void add(ProjectInfo project);

    void delete(int id);
}
