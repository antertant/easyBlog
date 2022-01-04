package com.h349wu.easyblog.modal;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "tb_emp")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column
    private String name;

    @Column
    private String department;

    @Column
    private Date dob;

    @Column
    private String gender;

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", department=" + department +
                ", dob=" + dob + ", gender=" + gender + "]";
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDepartment() {
        return department;
    }

    public Date getDob() {
        return dob;
    }

    public String getGender() {
        return gender;
    }
}
