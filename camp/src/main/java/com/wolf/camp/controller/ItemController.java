package com.wolf.camp.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wolf.camp.model.Item;
import com.wolf.camp.model.Season;
import com.wolf.camp.service.ItemService;

@RestController
@RequestMapping("/rest/item")
public class ItemController {
	private static final Logger logger = LoggerFactory
			.getLogger(SeasonController.class);
	
	@Autowired
	ItemService itemService;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Item> getItems() {

		List<Item> list = itemService.getItems();
	

		return list;

	}

}