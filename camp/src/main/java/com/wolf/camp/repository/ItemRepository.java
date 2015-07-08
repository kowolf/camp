package com.wolf.camp.repository;

import org.springframework.data.repository.CrudRepository;

import com.wolf.camp.model.Item;

public interface ItemRepository extends CrudRepository<Item, Integer> {

}
