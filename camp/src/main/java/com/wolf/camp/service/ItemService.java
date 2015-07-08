package com.wolf.camp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wolf.camp.model.Item;
import com.wolf.camp.repository.ItemRepository;

@Service
public class ItemService {
	@Autowired
	private ItemRepository items;
	
	public List<Item> getItems(){
		return (List<Item>)items.findAll();
	}
}
