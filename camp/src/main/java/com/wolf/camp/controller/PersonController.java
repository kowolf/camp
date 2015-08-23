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
import com.wolf.camp.model.Person;
import com.wolf.camp.service.CampService;
import com.wolf.camp.service.PersonService;
import com.wolf.camp.service.SeasonService;
import com.wolf.camp.view.CampModel;

/**
 * Handles requests for the application home page.
 */
@RestController
@RequestMapping("/rest/person")
public class PersonController {

	@Autowired
	PersonService personService;
	
	private static final Logger logger = LoggerFactory
			.getLogger(PersonController.class);

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Person> getSessons() {

		List<Person> list = personService.getAllPersons();

		return list;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Person get(@PathVariable("id") int id) {

		Person person = personService.getPerson(id);

		return person;
	}

	@RequestMapping(method = RequestMethod.POST)
	public Person create(@RequestBody Person person) {

		person = personService.savePerson(person);

		return person;
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "{id}")
	public void delete(@PathVariable String id) {

	}

	@RequestMapping(method = RequestMethod.PUT, value = "/{id}")
	public Person update(@PathVariable String id, @RequestBody Person person) {	
		
		person = personService.savePerson(person);

		return person;
	}

}
