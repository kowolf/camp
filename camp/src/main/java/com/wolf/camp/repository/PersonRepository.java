package com.wolf.camp.repository;

import org.springframework.data.repository.CrudRepository;

import com.wolf.camp.model.Person;

public interface PersonRepository extends CrudRepository<Person, Integer> {

    //List<Camp> findByLastName(String lastName);
}