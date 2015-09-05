package com.wolf.camp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wolf.camp.model.Item;
import com.wolf.camp.model.Person;
import com.wolf.camp.repository.ItemRepository;

@Service
public class ItemService {
	@Autowired
	private ItemRepository itemRepository;
	
	public List<Item> getItems(){
		return (List<Item>)itemRepository.findAll();
	}
	
	public Item getItem(Integer id) {
		return itemRepository.findOne(id);
	}

	public Item saveItem(Item item) {
		return itemRepository.save(item);
	}

	public void deleteItem(Item item) {
		itemRepository.delete(item);
	}
}
