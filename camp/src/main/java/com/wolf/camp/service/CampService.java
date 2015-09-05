package com.wolf.camp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import scala.annotation.meta.setter;

import com.wolf.camp.model.Camp;
import com.wolf.camp.repository.CampRepository;

@Service
public class CampService {

	@Autowired
	private CampRepository campRepository;

	public List<Camp> getAllCamps() {
		return (List<Camp>) campRepository.findAll();
	}

	public Camp getCamp(Integer id) {
		return campRepository.findOne(id);
	}
	
public Camp createCamp(Camp camp) {
		
		return campRepository.save(camp);
	}


	public Camp saveCamp(Camp camp) {
		
		Camp currentCamp = campRepository.findOne(camp.getId());
		
		currentCamp.setEmail(camp.getEmail());
		currentCamp.setSeason(camp.getSeason());
		currentCamp.setLocationOrigin(camp.getLocationOrigin());
		currentCamp.setLocationDestination(camp.getLocationDestination());
		currentCamp.setCount(camp.getCount());
		currentCamp.setPersonList(camp.getPersonList());
		
		return campRepository.save(camp);
	}

	public void deleteCamp(Camp camp) {
		campRepository.delete(camp);
	}

}
