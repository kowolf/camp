package com.wolf.camp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wolf.camp.model.Camp;
import com.wolf.camp.model.Person;
import com.wolf.camp.repository.CampRepository;
import com.wolf.camp.repository.PersonRepository;

@Service
public class PersonService {

	@Autowired
	private PersonRepository personRepository;

	public List<Person> getAllPersons() {
		return (List<Person>) personRepository.findAll();
	}

	public Person getPerson(Integer id) {
		return personRepository.findOne(id);
	}

	public Person savePerson(Person person) {
		return personRepository.save(person);
	}

	public void deletePerson(Person person) {
		personRepository.delete(person);
	}

}
