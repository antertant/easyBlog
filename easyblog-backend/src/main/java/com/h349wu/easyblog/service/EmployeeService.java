package com.h349wu.easyblog.service;

import com.h349wu.easyblog.modal.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> get();

    Employee get(int id);

    void save(Employee employee);

    void delete(int id);

}
