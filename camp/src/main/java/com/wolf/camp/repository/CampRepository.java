package com.wolf.camp.repository;

import org.springframework.data.repository.CrudRepository;

import com.wolf.camp.model.Camp;

public interface CampRepository extends CrudRepository<Camp, Integer> {

    //List<Camp> findByLastName(String lastName);
}