package com.wolf.camp.controller;

import java.util.ArrayList;
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
import com.wolf.camp.service.SeasonService;

/**
 * Handles requests for the application home page.
 */
@RestController
@RequestMapping("/rest/seasons")
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

}
