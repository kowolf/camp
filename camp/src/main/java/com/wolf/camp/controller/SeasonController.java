package com.wolf.camp.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

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
import com.wolf.camp.model.Item;
import com.wolf.camp.model.Season;
import com.wolf.camp.service.SeasonService;

/**
 * Handles requests for the application home page.
 */
@RestController
@RequestMapping("/rest/season")
public class SeasonController {

	private static final Logger logger = LoggerFactory
			.getLogger(SeasonController.class);

	@Autowired
	SeasonService seasonService;

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Season> getSessons() {

		List<Season> list = seasonService.getSesaons();

		return list;

	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Season get(@PathVariable("id") int id) {

		Season season = seasonService.getSeason(id);

		return season;

	}

	@RequestMapping(method = RequestMethod.PUT, value = "/{id}")
	public Season updateItems(@PathVariable String id,
			@RequestBody Season seasonModel) {
		seasonModel = seasonService.saveSeason(seasonModel);

		return seasonModel;

	}

}
