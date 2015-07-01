package com.wolf.camp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;


import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.wolf.camp.model.Camp;
import com.wolf.camp.model.Season;



public interface SeasonRepository extends CrudRepository<Season, Integer> {

	List<Season> findByName(@Param("name") String name);

}
