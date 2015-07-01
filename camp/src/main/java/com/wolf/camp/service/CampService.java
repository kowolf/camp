package com.wolf.camp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

	public Camp saveCamp(Camp camp) {
		return campRepository.save(camp);
	}

	public void deleteCamp(Camp camp) {
		campRepository.delete(camp);
	}

}
