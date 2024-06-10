package com.example.dao;

import javax.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.entity.Student;

@Repository
public class StudentDAOImpl implements StudentDAO {
    // Define field for entity manager
    private EntityManager entityManager;

    // Constructor injection of EntityManager
    public StudentDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    // Implement save method
    @Override
    @Transactional
    public void save(Student theStudent) {
        entityManager.persist(theStudent);
    }
}
