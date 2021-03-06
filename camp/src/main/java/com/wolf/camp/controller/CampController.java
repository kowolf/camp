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

import com.wolf.camp.model.Camp;
import com.wolf.camp.service.CampService;
import com.wolf.camp.service.SeasonService;
import com.wolf.camp.view.CampModel;

/**
 * Handles requests for the application home page.
 */
@RestController
@RequestMapping("/rest/camps")
public class CampController {

	@Autowired
	CampService campService;
	
	@Autowired
	SeasonService seasonService;

	private static final Logger logger = LoggerFactory
			.getLogger(CampController.class);

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Camp> getSessons() {

		List<Camp> list = campService.getAllCamps();

		return list;

	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Camp get(@PathVariable("id") int id) {

		Camp camp = campService.getCamp(id);

		return camp;
	}

	@RequestMapping(method = RequestMethod.POST)
	public Camp create(@RequestBody Camp camp) {

		camp = campService.createCamp(camp);

		return camp;
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "{id}")
	public void delete(@PathVariable String id) {

	}

	@RequestMapping(method = RequestMethod.PUT, value = "/{id}")
	public Camp update(@PathVariable String id, @RequestBody Camp camp) {	
		
		camp = campService.saveCamp(camp);

		return camp;
	}

}
