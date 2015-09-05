package com.wolf.camp.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wolf.camp.model.Item;
import com.wolf.camp.model.Person;
import com.wolf.camp.model.Season;
import com.wolf.camp.service.ItemService;

@RestController
@RequestMapping("/rest/item")
public class ItemController {
	private static final Logger logger = LoggerFactory
			.getLogger(ItemController.class);
	
	@Autowired
	ItemService itemService;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Item> getItems() {

		List<Item> list = itemService.getItems();
	

		return list;

	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Item get(@PathVariable("id") int id) {

		Item item = itemService.getItem(id);

		return item;
	}

	@RequestMapping(method = RequestMethod.POST)
	public Item create(@RequestBody Item item) {

		item = itemService.saveItem(item);

		return item;
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "{id}")
	public void delete(@PathVariable Integer id) {
		
		Item item = new Item();
		item.setId(id);
		
		itemService.deleteItem(item);

	}

	@RequestMapping(method = RequestMethod.PUT, value = "/{id}")
	public Item update(@PathVariable Integer id, @RequestBody Item item) {	
		
		item = itemService.saveItem(item);

		return item;
	}

}
