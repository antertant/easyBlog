package com.h349wu.easyblog.dao;

import com.h349wu.easyblog.modal.Employee;

import java.util.List;

public interface EmployeeDAO {

    List<Employee> get();

    Employee get(int id);

    void save(Employee employee);

    void delete(int id);

}
